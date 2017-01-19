'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { Editor as DraftEditor, EditorState, RichUtils, Modifier, convertToRaw, convertFromRaw, CompositeDecorator } from 'draft-js';
import { COLOR_CONFIG_EDITOR, LIST_COLORS } from './styleConfig';
import Heading from './heading.jsx';

const decorator = new CompositeDecorator([
  {
    strategy: getEntityStrategy('IMMUTABLE'),
    component: TokenSpan,
  },
  {
    strategy: getEntityStrategy('MUTABLE'),
    component: TokenSpan,
  },
  {
    strategy: getEntityStrategy('SEGMENTED'),
    component: TokenSpan,
  },
]);

class Editor extends React.Component {
  constructor(props) {
    super(props);

    let value = props.value,
        editorStateInit;

    if (value) {
      let parseValue = JSON.parse(value),
        blocks = convertFromRaw(parseValue);
      editorStateInit = EditorState.createWithContent(blocks, decorator);
    } else {
      editorStateInit = EditorState.createEmpty();
    }


    this.state = { editorState: editorStateInit };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState: editorState });

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    this.toggleColor = (color) => this._toggleColor(color);
  }

  static propTypes = {
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    readOnly: React.PropTypes.bool
  }

  static defaultProps = {
    value: undefined,
    placeholder: 'Tell me ...',
    readOnly: false
  }

  getValue() {
    let editorState = this.state.editorState.getCurrentContent(),
        rawData = convertToRaw(editorState),
        data = '';

    if (rawData) {
      data = JSON.stringify(rawData);
    }

    return data;
  }

  _handleKeyCommand(command) {
    let { editorState } = this.state,
        newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    let maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  _toggleColor(toggledColor) {
    let { editorState } = this.state,
        selection = editorState.getSelection(),
        nextContentState,
        currentStyle,
        nextEditorState;

      // Let's just allow one color at a time. Turn off all active colors.
    nextContentState = LIST_COLORS.reduce(
      (contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color)
      },
      editorState.getCurrentContent()
    );

    nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    );

    currentStyle = editorState.getCurrentInlineStyle();

    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce(
        (state, color) => {
          return RichUtils.toggleInlineStyle(state, color);
        },
        nextEditorState
      );
    }

    // If the color is being toggled on, apply it.
    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      );
    }

    this.onChange(nextEditorState);
  }

  render() {
    let { editorState } = this.state,
        { readOnly, placeholder } = this.props,
        heading = null,
        classWrapperComponent='text-editor readonly';

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let classWrapperText = 'text-editor-wrapper';
    let contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        classWrapperText += ' hide-placeholder';
      }
    }

    if (!readOnly) {
      heading = (
        <Heading
          toggleInlineStyle={this.toggleInlineStyle}
          toggleBlockType={this.toggleBlockType}
          toggleColor={this.toggleColor}
          editorState={this.state.editorState}/>
      );
      classWrapperComponent = 'text-editor';
    }

    return (
      <div className={classWrapperComponent}>

        {heading}

        <div className={classWrapperText} onClick={this.focus}>
          <DraftEditor
            blockStyleFn={getBlockStyle}
            customStyleMap={COLOR_CONFIG_EDITOR}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder={placeholder}
            readOnly={readOnly}
            ref="editor"
            spellCheck={true}/>
        </div>
      </div>
    );
  }
}

export default Editor;

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'text-editor-blockquote';
    default: return null;
  }
}

function getEntityStrategy(mutability) {
  return function(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity();
        if (entityKey === null) {
          return false;
        }
        return contentState.getEntity(entityKey).getMutability() === mutability;
      },
      callback
    );
  };
}

function getDecoratedStyle(mutability) {
  switch (mutability) {
    case 'IMMUTABLE': return styles.immutable;
    case 'MUTABLE': return styles.mutable;
    case 'SEGMENTED': return styles.segmented;
    default: return null;
  }
}

const TokenSpan = (props) => {
  const style = getDecoratedStyle(
    props.contentState.getEntity(props.entityKey).getMutability()
  );
  return (
    <span data-offset-key={props.offsetkey} style={style}>
      {props.children}
    </span>
  );
};

const styles = {
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  immutable: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: '2px 0',
  },
  mutable: {
    backgroundColor: 'rgba(204, 204, 255, 1.0)',
    padding: '2px 0',
  },
  segmented: {
    backgroundColor: 'rgba(248, 222, 126, 1.0)',
    padding: '2px 0',
  },
};