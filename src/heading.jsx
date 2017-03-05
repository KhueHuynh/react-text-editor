'use strict';

import React from 'react';
import { TEXT_HEADING_STYLES, FONT_STYLES, INLINE_STYLES, COLORS_PICKER, LIST_COLORS } from './styleConfig';
import ColorPicker from './colorPicker.jsx';


class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusHeadingSelect: false,
      focusColorPicker: false,
      headingSelected: 'normal',
      colorSelected: '#000000' //black
    }
  }

  static propTypes = {
    toggleInlineStyle: React.PropTypes.func.isRequired,
    toggleBlockType: React.PropTypes.func.isRequired,
    toggleColor: React.PropTypes.func.isRequired,
    editorState: React.PropTypes.object.isRequired,
    showImportImage: React.PropTypes.bool,
    importImageCallback: React.PropTypes.func
  }

  static defaultProps = {
    toggleInlineStyle: () => {},
    toggleBlockType: () => {},
    toggleColor: () => {},
    editorState: {},
    showImportImage: false,
    importImageCallback: () => {}
  }

  _toggleBlockType(style) {
    return (e) => {
      e.preventDefault();
      this.props.toggleBlockType(style);
    }

  }

  _toggleInlineStyle(style) {
    return (e) => {
      e.preventDefault();
      this.props.toggleInlineStyle(style);
    }

  }

  _selectHeading(type) {
    //editor isnot support normal. Need to toggle last heading selected.
    let style = type.style === 'normal' ? this.state.headingSelected : type.style;
    this.setState({ focusHeadingSelect: false, headingSelected: type.style });
    if (style !== 'normal') {
      this.props.toggleBlockType(style);
    }
  }

  _changeHeading(e) {
    e.preventDefault();
    this.setState({ focusHeadingSelect: !this.state.focusHeadingSelect });
  }

  _selectColor(e) {
    e.preventDefault();
    this.setState({ focusColorPicker: !this.state.focusColorPicker });
  }

  _changeColor(color) {
    let colorHex = '#' + color;

    this.setState({
      colorSelected: colorHex,
      focusColorPicker: !this.state.focusColorPicker
    });
    this.props.toggleColor(color);
  }

  _renderTextHeading(blockStyle) {
    let options = null,
        headingSelected,
        selectHeadingText = 'Normal',
        wrapperClass = 'group-control text-heading',
        overlay = null;

    if (this.state.focusHeadingSelect) {
      wrapperClass = 'group-control text-heading focus';
      overlay = (<div className="editor-heading-overlay" onClick={this._changeHeading.bind(this)}> </div>);
    }

    options = TEXT_HEADING_STYLES.map((type, index) => {

      if (type.style === blockStyle) {
        headingSelected = type;
      }
      return (
        <div key={index} onMouseDown={this._selectHeading.bind(this, type)} className={'heading-item ' + type.style}>
          <span className={type.style}>{type.label}</span>
        </div>
      );
    });

    if (headingSelected) {
      selectHeadingText  = headingSelected.label;
    }

    return (
      <div className={wrapperClass}>
        <div key="selected" onMouseDown={this._changeHeading.bind(this)} className="text-heading-selected">
          <span className="text-heading-selected__name">{selectHeadingText}</span>
        </div>

        {overlay}

        <div className="text-heading__options">
        {options}
        </div>
      </div>
    );
  }

  _renderInlineStyle() {
    let currentStyle = this.props.editorState.getCurrentInlineStyle(),
        inlineStyles = INLINE_STYLES.map((type) => {
          type.className = currentStyle.has(type.style) ? 'inline-style__options selected' : 'inline-style__options';
          return type;
        }),
        bold = inlineStyles[0],
        italic = inlineStyles[1],
        underline = inlineStyles[2],
        colorSelected = this.state.colorSelected,
        colorPicker = null;

    for (let i = LIST_COLORS.length - 1; i >=0; i--) {
      let colorCode = LIST_COLORS[i];
      if (currentStyle.has(colorCode)) {
        colorSelected = '#' + colorCode;
        break;
      }
    }

    if (this.state.focusColorPicker) {
      colorPicker = (
        <div className="inline-style__color-picker-wrapper">
          <div className="editor-heading-overlay" onMouseDown={this._selectColor.bind(this)}></div>
          <ColorPicker onToggle={this._changeColor.bind(this)}/>
        </div>
      );
    }

    return (
      <div className="inline-style group-control">
        <div className={bold.className} onMouseDown={this._toggleInlineStyle.call(this, bold.style)}>
          <i className="fa fa-bold" aria-hidden="true"></i>
        </div>
        <div className={italic.className} onMouseDown={this._toggleInlineStyle.call(this, italic.style)}>
          <i className="fa fa-italic" aria-hidden="true"></i>
        </div>
        <div className={underline.className} onMouseDown={this._toggleInlineStyle.call(this, underline.style)}>
          <i className="fa fa-underline" aria-hidden="true"></i>
        </div>
        <div className="inline-style__color">
          <div className="inline-style__color__wrapper" onMouseDown={this._selectColor.bind(this)}>
            <div className="inline-style__color__wrapper__symbol"
              style={{'backgroundColor': colorSelected, 'color': colorSelected}}>
              <span className="symbol">A</span>
            </div>
          </div>

          {colorPicker}

        </div>
      </div>
    );
  }

  _renderFontStyle(blockStyle) {
    let fontStyles = FONT_STYLES.map((type) => {
          type.className = type.style === blockStyle ? 'font-style__options selected' : 'font-style__options';
          return type;
        }),
        blockquote = fontStyles[0],
        unorderList = fontStyles[1],
        orderList = fontStyles[2];

    return (
      <div className="font-style group-control">
        <div className={blockquote.className} onMouseDown={this._toggleBlockType.call(this, blockquote.style)}>
          <i className="fa fa-quote-left" aria-hidden="true"></i>
        </div>
        <div className={unorderList.className} onMouseDown={this._toggleBlockType.call(this, unorderList.style)}>
          <i className="fa fa-list-ul" aria-hidden="true"></i>
        </div>
        <div className={orderList.className} onMouseDown={this._toggleBlockType.call(this, orderList.style)}>
          <i className="fa fa-list-ol" aria-hidden="true"></i>
        </div>
      </div>
    );
  }

  _importImageClick(e) {
    e.preventDefault();
    this.prop.importImageCallback();
  }

  render() {
    let { editorState } = this.props,
        selection = editorState.getSelection(),
        blockType = editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType(),
        heading = this._renderTextHeading(blockType),
        fontStyle = this._renderFontStyle(blockType),
        inlineStyle = this._renderInlineStyle(),
        importImageIcon = null;

    if (this.props.showImportImage) {
      importImageIcon = (
        <button className="editor-heading-import-image"
          onClick={this._importImageClick}>
          <i class="fa fa-picture-o" aria-hidden="true"></i>
        </button>
      );
    }

    return (
      <div className="editor-heading">

        {heading}

        {inlineStyle}

        {importImageIcon}

        {fontStyle}

      </div>
    )
  }
}

export default Heading;