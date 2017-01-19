(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Editor"] = factory(require("react"), require("react-dom"));
	else
		root["Editor"] = factory(root["react"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _draftJs = __webpack_require__(3);

	var _styleConfig = __webpack_require__(144);

	var _heading = __webpack_require__(145);

	var _heading2 = _interopRequireDefault(_heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var decorator = new _draftJs.CompositeDecorator([{
	  strategy: getEntityStrategy('IMMUTABLE'),
	  component: TokenSpan
	}, {
	  strategy: getEntityStrategy('MUTABLE'),
	  component: TokenSpan
	}, {
	  strategy: getEntityStrategy('SEGMENTED'),
	  component: TokenSpan
	}]);

	var Editor = (_temp = _class = function (_React$Component) {
	  _inherits(Editor, _React$Component);

	  function Editor(props) {
	    _classCallCheck(this, Editor);

	    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

	    var value = props.value,
	        editorStateInit = void 0;

	    if (value) {
	      var parseValue = JSON.parse(value),
	          blocks = (0, _draftJs.convertFromRaw)(parseValue);
	      editorStateInit = _draftJs.EditorState.createWithContent(blocks, decorator);
	    } else {
	      editorStateInit = _draftJs.EditorState.createEmpty();
	    }

	    _this.state = { editorState: editorStateInit };

	    _this.focus = function () {
	      return _this.refs.editor.focus();
	    };
	    _this.onChange = function (editorState) {
	      return _this.setState({ editorState: editorState });
	    };

	    _this.handleKeyCommand = function (command) {
	      return _this._handleKeyCommand(command);
	    };
	    _this.onTab = function (e) {
	      return _this._onTab(e);
	    };
	    _this.toggleBlockType = function (type) {
	      return _this._toggleBlockType(type);
	    };
	    _this.toggleInlineStyle = function (style) {
	      return _this._toggleInlineStyle(style);
	    };
	    _this.toggleColor = function (color) {
	      return _this._toggleColor(color);
	    };
	    return _this;
	  }

	  _createClass(Editor, [{
	    key: 'getValue',
	    value: function getValue() {
	      var editorState = this.state.editorState.getCurrentContent(),
	          rawData = (0, _draftJs.convertToRaw)(editorState),
	          data = '';

	      if (rawData) {
	        data = JSON.stringify(rawData);
	      }

	      return data;
	    }
	  }, {
	    key: '_handleKeyCommand',
	    value: function _handleKeyCommand(command) {
	      var editorState = this.state.editorState,
	          newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);


	      if (newState) {
	        this.onChange(newState);
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: '_onTab',
	    value: function _onTab(e) {
	      var maxDepth = 4;
	      this.onChange(_draftJs.RichUtils.onTab(e, this.state.editorState, maxDepth));
	    }
	  }, {
	    key: '_toggleBlockType',
	    value: function _toggleBlockType(blockType) {
	      this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
	    }
	  }, {
	    key: '_toggleInlineStyle',
	    value: function _toggleInlineStyle(inlineStyle) {
	      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
	    }
	  }, {
	    key: '_toggleColor',
	    value: function _toggleColor(toggledColor) {
	      var editorState = this.state.editorState,
	          selection = editorState.getSelection(),
	          nextContentState = void 0,
	          currentStyle = void 0,
	          nextEditorState = void 0;

	      // Let's just allow one color at a time. Turn off all active colors.
	      nextContentState = _styleConfig.LIST_COLORS.reduce(function (contentState, color) {
	        return _draftJs.Modifier.removeInlineStyle(contentState, selection, color);
	      }, editorState.getCurrentContent());

	      nextEditorState = _draftJs.EditorState.push(editorState, nextContentState, 'change-inline-style');

	      currentStyle = editorState.getCurrentInlineStyle();

	      // Unset style override for current color.
	      if (selection.isCollapsed()) {
	        nextEditorState = currentStyle.reduce(function (state, color) {
	          return _draftJs.RichUtils.toggleInlineStyle(state, color);
	        }, nextEditorState);
	      }

	      // If the color is being toggled on, apply it.
	      if (!currentStyle.has(toggledColor)) {
	        nextEditorState = _draftJs.RichUtils.toggleInlineStyle(nextEditorState, toggledColor);
	      }

	      this.onChange(nextEditorState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var editorState = this.state.editorState,
	          _props = this.props,
	          readOnly = _props.readOnly,
	          placeholder = _props.placeholder,
	          heading = null,
	          classWrapperComponent = 'text-editor readonly';

	      // If the user changes block type before entering any text, we can
	      // either style the placeholder or hide it. Let's just hide it now.
	      var classWrapperText = 'text-editor-wrapper';
	      var contentState = editorState.getCurrentContent();
	      if (!contentState.hasText()) {
	        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
	          classWrapperText += ' hide-placeholder';
	        }
	      }

	      if (!readOnly) {
	        heading = _react2.default.createElement(_heading2.default, {
	          toggleInlineStyle: this.toggleInlineStyle,
	          toggleBlockType: this.toggleBlockType,
	          toggleColor: this.toggleColor,
	          editorState: this.state.editorState });
	        classWrapperComponent = 'text-editor';
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: classWrapperComponent },
	        heading,
	        _react2.default.createElement(
	          'div',
	          { className: classWrapperText, onClick: this.focus },
	          _react2.default.createElement(_draftJs.Editor, {
	            blockStyleFn: getBlockStyle,
	            customStyleMap: _styleConfig.COLOR_CONFIG_EDITOR,
	            editorState: editorState,
	            handleKeyCommand: this.handleKeyCommand,
	            onChange: this.onChange,
	            onTab: this.onTab,
	            placeholder: placeholder,
	            readOnly: readOnly,
	            ref: 'editor',
	            spellCheck: true })
	        )
	      );
	    }
	  }]);

	  return Editor;
	}(_react2.default.Component), _class.propTypes = {
	  value: _react2.default.PropTypes.string,
	  placeholder: _react2.default.PropTypes.string,
	  readOnly: _react2.default.PropTypes.bool
	}, _class.defaultProps = {
	  value: undefined,
	  placeholder: 'Tell me ...',
	  readOnly: false
	}, _temp);
	exports.default = Editor;


	function getBlockStyle(block) {
	  switch (block.getType()) {
	    case 'blockquote':
	      return 'text-editor-blockquote';
	    default:
	      return null;
	  }
	}

	function getEntityStrategy(mutability) {
	  return function (contentBlock, callback, contentState) {
	    contentBlock.findEntityRanges(function (character) {
	      var entityKey = character.getEntity();
	      if (entityKey === null) {
	        return false;
	      }
	      return contentState.getEntity(entityKey).getMutability() === mutability;
	    }, callback);
	  };
	}

	function getDecoratedStyle(mutability) {
	  switch (mutability) {
	    case 'IMMUTABLE':
	      return styles.immutable;
	    case 'MUTABLE':
	      return styles.mutable;
	    case 'SEGMENTED':
	      return styles.segmented;
	    default:
	      return null;
	  }
	}

	var TokenSpan = function TokenSpan(props) {
	  var style = getDecoratedStyle(props.contentState.getEntity(props.entityKey).getMutability());
	  return _react2.default.createElement(
	    'span',
	    { 'data-offset-key': props.offsetkey, style: style },
	    props.children
	  );
	};

	var styles = {
	  editor: {
	    border: '1px solid #ccc',
	    cursor: 'text',
	    minHeight: 80,
	    padding: 10
	  },
	  button: {
	    marginTop: 10,
	    textAlign: 'center'
	  },
	  immutable: {
	    backgroundColor: 'rgba(0, 0, 0, 0.2)',
	    padding: '2px 0'
	  },
	  mutable: {
	    backgroundColor: 'rgba(204, 204, 255, 1.0)',
	    padding: '2px 0'
	  },
	  segmented: {
	    backgroundColor: 'rgba(248, 222, 126, 1.0)',
	    padding: '2px 0'
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Draft
	 */

	'use strict';

	var AtomicBlockUtils = __webpack_require__(4);
	var BlockMapBuilder = __webpack_require__(5);
	var CharacterMetadata = __webpack_require__(7);
	var CompositeDraftDecorator = __webpack_require__(42);
	var ContentBlock = __webpack_require__(8);
	var ContentState = __webpack_require__(34);
	var DefaultDraftBlockRenderMap = __webpack_require__(43);
	var DefaultDraftInlineStyle = __webpack_require__(45);
	var DraftEditor = __webpack_require__(46);
	var DraftEditorBlock = __webpack_require__(52);
	var DraftModifier = __webpack_require__(10);
	var DraftEntity = __webpack_require__(16);
	var DraftEntityInstance = __webpack_require__(18);
	var EditorState = __webpack_require__(31);
	var KeyBindingUtil = __webpack_require__(101);
	var RichTextEditorUtil = __webpack_require__(132);
	var SelectionState = __webpack_require__(35);

	var convertFromDraftStateToRaw = __webpack_require__(134);
	var convertFromHTMLToContentBlocks = __webpack_require__(124);
	var convertFromRawToDraftState = __webpack_require__(138);
	var generateRandomKey = __webpack_require__(23);
	var getDefaultKeyBinding = __webpack_require__(131);
	var getVisibleSelectionRect = __webpack_require__(142);

	var DraftPublic = {
	  Editor: DraftEditor,
	  EditorBlock: DraftEditorBlock,
	  EditorState: EditorState,

	  CompositeDecorator: CompositeDraftDecorator,
	  Entity: DraftEntity,
	  EntityInstance: DraftEntityInstance,

	  BlockMapBuilder: BlockMapBuilder,
	  CharacterMetadata: CharacterMetadata,
	  ContentBlock: ContentBlock,
	  ContentState: ContentState,
	  SelectionState: SelectionState,

	  AtomicBlockUtils: AtomicBlockUtils,
	  KeyBindingUtil: KeyBindingUtil,
	  Modifier: DraftModifier,
	  RichUtils: RichTextEditorUtil,

	  DefaultDraftBlockRenderMap: DefaultDraftBlockRenderMap,
	  DefaultDraftInlineStyle: DefaultDraftInlineStyle,

	  convertFromHTML: convertFromHTMLToContentBlocks,
	  convertFromRaw: convertFromRawToDraftState,
	  convertToRaw: convertFromDraftStateToRaw,
	  genKey: generateRandomKey,
	  getDefaultKeyBinding: getDefaultKeyBinding,
	  getVisibleSelectionRect: getVisibleSelectionRect
	};

	module.exports = DraftPublic;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule AtomicBlockUtils
	 * @typechecks
	 * 
	 */

	'use strict';

	var BlockMapBuilder = __webpack_require__(5);
	var CharacterMetadata = __webpack_require__(7);
	var ContentBlock = __webpack_require__(8);
	var DraftModifier = __webpack_require__(10);
	var EditorState = __webpack_require__(31);
	var Immutable = __webpack_require__(6);

	var generateRandomKey = __webpack_require__(23);

	var List = Immutable.List;
	var Repeat = Immutable.Repeat;


	var AtomicBlockUtils = {
	  insertAtomicBlock: function insertAtomicBlock(editorState, entityKey, character) {
	    var contentState = editorState.getCurrentContent();
	    var selectionState = editorState.getSelection();

	    var afterRemoval = DraftModifier.removeRange(contentState, selectionState, 'backward');

	    var targetSelection = afterRemoval.getSelectionAfter();
	    var afterSplit = DraftModifier.splitBlock(afterRemoval, targetSelection);
	    var insertionTarget = afterSplit.getSelectionAfter();

	    var asAtomicBlock = DraftModifier.setBlockType(afterSplit, insertionTarget, 'atomic');

	    var charData = CharacterMetadata.create({ entity: entityKey });

	    var fragmentArray = [new ContentBlock({
	      key: generateRandomKey(),
	      type: 'atomic',
	      text: character,
	      characterList: List(Repeat(charData, character.length))
	    }), new ContentBlock({
	      key: generateRandomKey(),
	      type: 'unstyled',
	      text: '',
	      characterList: List()
	    })];

	    var fragment = BlockMapBuilder.createFromArray(fragmentArray);

	    var withAtomicBlock = DraftModifier.replaceWithFragment(asAtomicBlock, insertionTarget, fragment);

	    var newContent = withAtomicBlock.merge({
	      selectionBefore: selectionState,
	      selectionAfter: withAtomicBlock.getSelectionAfter().set('hasFocus', true)
	    });

	    return EditorState.push(editorState, newContent, 'insert-fragment');
	  }
	};

	module.exports = AtomicBlockUtils;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BlockMapBuilder
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(6);

	var OrderedMap = Immutable.OrderedMap;


	var BlockMapBuilder = {
	  createFromArray: function createFromArray(blocks) {
	    return OrderedMap(blocks.map(function (block) {
	      return [block.getKey(), block];
	    }));
	  }
	};

	module.exports = BlockMapBuilder;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.Immutable = factory();
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step > 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    findEntry: function(predicate, context) {
	      var found;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findLastEntry: function(predicate, context) {
	      return this.toSeq().reverse().findEntry(predicate, context);
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  // Temporary warning about using length
	  (function () {
	    try {
	      Object.defineProperty(IterablePrototype, 'length', {
	        get: function () {
	          if (!Iterable.noLengthWarning) {
	            var stack;
	            try {
	              throw new Error();
	            } catch (error) {
	              stack = error.stack;
	            }
	            if (stack.indexOf('_wrapObject') === -1) {
	              console && console.warn && console.warn(
	                'iterable.length has been deprecated, '+
	                'use iterable.size or iterable.count(). '+
	                'This warning will become a silent error in a future version. ' +
	                stack
	              );
	              return this.size;
	            }
	          }
	        }
	      });
	    } catch (e) {}
	  })();



	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLastKey: function(predicate, context) {
	      return this.toSeq().reverse().findKey(predicate, context);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    lastKeyOf: function(searchValue) {
	      return this.findLastKey(function(value ) {return is(value, searchValue)});
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.toKeyedSeq().keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.toKeyedSeq().reverse().keyOf(searchValue);
	      return key === undefined ? -1 : key;

	      // var index =
	      // return this.toSeq().reverse().indexOf(searchValue);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var key = this.toKeyedSeq().findLastKey(predicate, context);
	      return key === undefined ? -1 : key;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : value;
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CharacterMetadata
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(6);

	var Map = _require.Map;
	var OrderedSet = _require.OrderedSet;
	var Record = _require.Record;


	var EMPTY_SET = OrderedSet();

	var defaultRecord = {
	  style: EMPTY_SET,
	  entity: null
	};

	var CharacterMetadataRecord = Record(defaultRecord);

	var CharacterMetadata = function (_CharacterMetadataRec) {
	  _inherits(CharacterMetadata, _CharacterMetadataRec);

	  function CharacterMetadata() {
	    _classCallCheck(this, CharacterMetadata);

	    return _possibleConstructorReturn(this, _CharacterMetadataRec.apply(this, arguments));
	  }

	  CharacterMetadata.prototype.getStyle = function getStyle() {
	    return this.get('style');
	  };

	  CharacterMetadata.prototype.getEntity = function getEntity() {
	    return this.get('entity');
	  };

	  CharacterMetadata.prototype.hasStyle = function hasStyle(style) {
	    return this.getStyle().has(style);
	  };

	  CharacterMetadata.applyStyle = function applyStyle(record, style) {
	    var withStyle = record.set('style', record.getStyle().add(style));
	    return CharacterMetadata.create(withStyle);
	  };

	  CharacterMetadata.removeStyle = function removeStyle(record, style) {
	    var withoutStyle = record.set('style', record.getStyle().remove(style));
	    return CharacterMetadata.create(withoutStyle);
	  };

	  CharacterMetadata.applyEntity = function applyEntity(record, entityKey) {
	    var withEntity = record.getEntity() === entityKey ? record : record.set('entity', entityKey);
	    return CharacterMetadata.create(withEntity);
	  };

	  /**
	   * Use this function instead of the `CharacterMetadata` constructor.
	   * Since most content generally uses only a very small number of
	   * style/entity permutations, we can reuse these objects as often as
	   * possible.
	   */


	  CharacterMetadata.create = function create(config) {
	    if (!config) {
	      return EMPTY;
	    }

	    // Fill in unspecified properties, if necessary.
	    var configMap = Map({ style: EMPTY_SET, entity: null }).merge(config);

	    var existing = pool.get(configMap);
	    if (existing) {
	      return existing;
	    }

	    var newCharacter = new CharacterMetadata(configMap);
	    pool = pool.set(configMap, newCharacter);
	    return newCharacter;
	  };

	  return CharacterMetadata;
	}(CharacterMetadataRecord);

	var EMPTY = new CharacterMetadata();
	var pool = Map([[Map(defaultRecord), EMPTY]]);

	CharacterMetadata.EMPTY = EMPTY;

	module.exports = CharacterMetadata;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ContentBlock
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Immutable = __webpack_require__(6);

	var findRangesImmutable = __webpack_require__(9);

	var List = Immutable.List;
	var Map = Immutable.Map;
	var OrderedSet = Immutable.OrderedSet;
	var Record = Immutable.Record;


	var EMPTY_SET = OrderedSet();

	var defaultRecord = {
	  key: '',
	  type: 'unstyled',
	  text: '',
	  characterList: List(),
	  depth: 0,
	  data: Map()
	};

	var ContentBlockRecord = Record(defaultRecord);

	var ContentBlock = function (_ContentBlockRecord) {
	  _inherits(ContentBlock, _ContentBlockRecord);

	  function ContentBlock() {
	    _classCallCheck(this, ContentBlock);

	    return _possibleConstructorReturn(this, _ContentBlockRecord.apply(this, arguments));
	  }

	  ContentBlock.prototype.getKey = function getKey() {
	    return this.get('key');
	  };

	  ContentBlock.prototype.getType = function getType() {
	    return this.get('type');
	  };

	  ContentBlock.prototype.getText = function getText() {
	    return this.get('text');
	  };

	  ContentBlock.prototype.getCharacterList = function getCharacterList() {
	    return this.get('characterList');
	  };

	  ContentBlock.prototype.getLength = function getLength() {
	    return this.getText().length;
	  };

	  ContentBlock.prototype.getDepth = function getDepth() {
	    return this.get('depth');
	  };

	  ContentBlock.prototype.getData = function getData() {
	    return this.get('data');
	  };

	  ContentBlock.prototype.getInlineStyleAt = function getInlineStyleAt(offset) {
	    var character = this.getCharacterList().get(offset);
	    return character ? character.getStyle() : EMPTY_SET;
	  };

	  ContentBlock.prototype.getEntityAt = function getEntityAt(offset) {
	    var character = this.getCharacterList().get(offset);
	    return character ? character.getEntity() : null;
	  };

	  /**
	   * Execute a callback for every contiguous range of styles within the block.
	   */


	  ContentBlock.prototype.findStyleRanges = function findStyleRanges(filterFn, callback) {
	    findRangesImmutable(this.getCharacterList(), haveEqualStyle, filterFn, callback);
	  };

	  /**
	   * Execute a callback for every contiguous range of entities within the block.
	   */


	  ContentBlock.prototype.findEntityRanges = function findEntityRanges(filterFn, callback) {
	    findRangesImmutable(this.getCharacterList(), haveEqualEntity, filterFn, callback);
	  };

	  return ContentBlock;
	}(ContentBlockRecord);

	function haveEqualStyle(charA, charB) {
	  return charA.getStyle() === charB.getStyle();
	}

	function haveEqualEntity(charA, charB) {
	  return charA.getEntity() === charB.getEntity();
	}

	module.exports = ContentBlock;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findRangesImmutable
	 * 
	 */

	'use strict';

	/**
	 * Search through an array to find contiguous stretches of elements that
	 * match a specified filter function.
	 *
	 * When ranges are found, execute a specified `found` function to supply
	 * the values to the caller.
	 */
	function findRangesImmutable(haystack, areEqualFn, filterFn, foundFn) {
	  if (!haystack.size) {
	    return;
	  }

	  var cursor = 0;

	  haystack.reduce(function (value, nextValue, nextIndex) {
	    /* $FlowFixMe(>=0.28.0): `value` could be undefined! */
	    if (!areEqualFn(value, nextValue)) {
	      /* $FlowFixMe(>=0.28.0): `value` could be undefined! */
	      if (filterFn(value)) {
	        foundFn(cursor, nextIndex);
	      }
	      cursor = nextIndex;
	    }
	    return nextValue;
	  });

	  filterFn(haystack.last()) && foundFn(cursor, haystack.count());
	}

	module.exports = findRangesImmutable;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftModifier
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(7);
	var ContentStateInlineStyle = __webpack_require__(12);
	var Immutable = __webpack_require__(6);

	var applyEntityToContentState = __webpack_require__(13);
	var getCharacterRemovalRange = __webpack_require__(15);
	var getContentStateFragment = __webpack_require__(22);
	var insertFragmentIntoContentState = __webpack_require__(25);
	var insertTextIntoContentState = __webpack_require__(27);
	var invariant = __webpack_require__(19);
	var modifyBlockForContentState = __webpack_require__(28);
	var removeEntitiesAtEdges = __webpack_require__(24);
	var removeRangeFromContentState = __webpack_require__(29);
	var splitBlockInContentState = __webpack_require__(30);

	var OrderedSet = Immutable.OrderedSet;

	/**
	 * `DraftModifier` provides a set of convenience methods that apply
	 * modifications to a `ContentState` object based on a target `SelectionState`.
	 *
	 * Any change to a `ContentState` should be decomposable into a series of
	 * transaction functions that apply the required changes and return output
	 * `ContentState` objects.
	 *
	 * These functions encapsulate some of the most common transaction sequences.
	 */

	var DraftModifier = {
	  replaceText: function replaceText(contentState, rangeToReplace, text, inlineStyle, entityKey) {
	    var withoutEntities = removeEntitiesAtEdges(contentState, rangeToReplace);
	    var withoutText = removeRangeFromContentState(withoutEntities, rangeToReplace);

	    var character = CharacterMetadata.create({
	      style: inlineStyle || OrderedSet(),
	      entity: entityKey || null
	    });

	    return insertTextIntoContentState(withoutText, withoutText.getSelectionAfter(), text, character);
	  },

	  insertText: function insertText(contentState, targetRange, text, inlineStyle, entityKey) {
	    !targetRange.isCollapsed() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Target range must be collapsed for `insertText`.') : invariant(false) : void 0;
	    return DraftModifier.replaceText(contentState, targetRange, text, inlineStyle, entityKey);
	  },

	  moveText: function moveText(contentState, removalRange, targetRange) {
	    var movedFragment = getContentStateFragment(contentState, removalRange);

	    var afterRemoval = DraftModifier.removeRange(contentState, removalRange, 'backward');

	    return DraftModifier.replaceWithFragment(afterRemoval, targetRange, movedFragment);
	  },

	  replaceWithFragment: function replaceWithFragment(contentState, targetRange, fragment) {
	    var withoutEntities = removeEntitiesAtEdges(contentState, targetRange);
	    var withoutText = removeRangeFromContentState(withoutEntities, targetRange);

	    return insertFragmentIntoContentState(withoutText, withoutText.getSelectionAfter(), fragment);
	  },

	  removeRange: function removeRange(contentState, rangeToRemove, removalDirection) {
	    // Check whether the selection state overlaps with a single entity.
	    // If so, try to remove the appropriate substring of the entity text.
	    if (rangeToRemove.getAnchorKey() === rangeToRemove.getFocusKey()) {
	      var key = rangeToRemove.getAnchorKey();
	      var startOffset = rangeToRemove.getStartOffset();
	      var endOffset = rangeToRemove.getEndOffset();
	      var block = contentState.getBlockForKey(key);

	      var startEntity = block.getEntityAt(startOffset);
	      var endEntity = block.getEntityAt(endOffset - 1);
	      if (startEntity && startEntity === endEntity) {
	        var adjustedRemovalRange = getCharacterRemovalRange(block, rangeToRemove, removalDirection);
	        return removeRangeFromContentState(contentState, adjustedRemovalRange);
	      }
	    }

	    var withoutEntities = removeEntitiesAtEdges(contentState, rangeToRemove);
	    return removeRangeFromContentState(withoutEntities, rangeToRemove);
	  },

	  splitBlock: function splitBlock(contentState, selectionState) {
	    var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
	    var withoutText = removeRangeFromContentState(withoutEntities, selectionState);

	    return splitBlockInContentState(withoutText, withoutText.getSelectionAfter());
	  },

	  applyInlineStyle: function applyInlineStyle(contentState, selectionState, inlineStyle) {
	    return ContentStateInlineStyle.add(contentState, selectionState, inlineStyle);
	  },

	  removeInlineStyle: function removeInlineStyle(contentState, selectionState, inlineStyle) {
	    return ContentStateInlineStyle.remove(contentState, selectionState, inlineStyle);
	  },

	  setBlockType: function setBlockType(contentState, selectionState, blockType) {
	    return modifyBlockForContentState(contentState, selectionState, function (block) {
	      return block.merge({ type: blockType, depth: 0 });
	    });
	  },

	  setBlockData: function setBlockData(contentState, selectionState, blockData) {
	    return modifyBlockForContentState(contentState, selectionState, function (block) {
	      return block.merge({ data: blockData });
	    });
	  },

	  mergeBlockData: function mergeBlockData(contentState, selectionState, blockData) {
	    return modifyBlockForContentState(contentState, selectionState, function (block) {
	      return block.merge({ data: block.getData().merge(blockData) });
	    });
	  },

	  applyEntity: function applyEntity(contentState, selectionState, entityKey) {
	    var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
	    return applyEntityToContentState(withoutEntities, selectionState, entityKey);
	  }
	};

	module.exports = DraftModifier;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ContentStateInlineStyle
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(7);

	var _require = __webpack_require__(6);

	var Map = _require.Map;


	var ContentStateInlineStyle = {
	  add: function add(contentState, selectionState, inlineStyle) {
	    return modifyInlineStyle(contentState, selectionState, inlineStyle, true);
	  },

	  remove: function remove(contentState, selectionState, inlineStyle) {
	    return modifyInlineStyle(contentState, selectionState, inlineStyle, false);
	  }
	};

	function modifyInlineStyle(contentState, selectionState, inlineStyle, addOrRemove) {
	  var blockMap = contentState.getBlockMap();
	  var startKey = selectionState.getStartKey();
	  var startOffset = selectionState.getStartOffset();
	  var endKey = selectionState.getEndKey();
	  var endOffset = selectionState.getEndOffset();

	  var newBlocks = blockMap.skipUntil(function (_, k) {
	    return k === startKey;
	  }).takeUntil(function (_, k) {
	    return k === endKey;
	  }).concat(Map([[endKey, blockMap.get(endKey)]])).map(function (block, blockKey) {
	    var sliceStart;
	    var sliceEnd;

	    if (startKey === endKey) {
	      sliceStart = startOffset;
	      sliceEnd = endOffset;
	    } else {
	      sliceStart = blockKey === startKey ? startOffset : 0;
	      sliceEnd = blockKey === endKey ? endOffset : block.getLength();
	    }

	    var chars = block.getCharacterList();
	    var current;
	    while (sliceStart < sliceEnd) {
	      current = chars.get(sliceStart);
	      chars = chars.set(sliceStart, addOrRemove ? CharacterMetadata.applyStyle(current, inlineStyle) : CharacterMetadata.removeStyle(current, inlineStyle));
	      sliceStart++;
	    }

	    return block.set('characterList', chars);
	  });

	  return contentState.merge({
	    blockMap: blockMap.merge(newBlocks),
	    selectionBefore: selectionState,
	    selectionAfter: selectionState
	  });
	}

	module.exports = ContentStateInlineStyle;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule applyEntityToContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(6);

	var applyEntityToContentBlock = __webpack_require__(14);

	function applyEntityToContentState(contentState, selectionState, entityKey) {
	  var blockMap = contentState.getBlockMap();
	  var startKey = selectionState.getStartKey();
	  var startOffset = selectionState.getStartOffset();
	  var endKey = selectionState.getEndKey();
	  var endOffset = selectionState.getEndOffset();

	  var newBlocks = blockMap.skipUntil(function (_, k) {
	    return k === startKey;
	  }).takeUntil(function (_, k) {
	    return k === endKey;
	  }).toOrderedMap().merge(Immutable.OrderedMap([[endKey, blockMap.get(endKey)]])).map(function (block, blockKey) {
	    var sliceStart = blockKey === startKey ? startOffset : 0;
	    var sliceEnd = blockKey === endKey ? endOffset : block.getLength();
	    return applyEntityToContentBlock(block, sliceStart, sliceEnd, entityKey);
	  });

	  return contentState.merge({
	    blockMap: blockMap.merge(newBlocks),
	    selectionBefore: selectionState,
	    selectionAfter: selectionState
	  });
	}

	module.exports = applyEntityToContentState;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule applyEntityToContentBlock
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(7);

	function applyEntityToContentBlock(contentBlock, start, end, entityKey) {
	  var characterList = contentBlock.getCharacterList();
	  while (start < end) {
	    characterList = characterList.set(start, CharacterMetadata.applyEntity(characterList.get(start), entityKey));
	    start++;
	  }
	  return contentBlock.set('characterList', characterList);
	}

	module.exports = applyEntityToContentBlock;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getCharacterRemovalRange
	 * @typechecks
	 * 
	 */

	'use strict';

	var DraftEntity = __webpack_require__(16);
	var DraftEntitySegments = __webpack_require__(20);

	var getRangesForDraftEntity = __webpack_require__(21);
	var invariant = __webpack_require__(19);

	/**
	 * Given a SelectionState and a removal direction, determine the entire range
	 * that should be removed from a ContentState. This is based on any entities
	 * within the target, with their `mutability` values taken into account.
	 *
	 * For instance, if we are attempting to remove part of an "immutable" entity
	 * range, the entire entity must be removed. The returned `SelectionState`
	 * will be adjusted accordingly.
	 */
	function getCharacterRemovalRange(block, selectionState, direction) {
	  var start = selectionState.getStartOffset();
	  var end = selectionState.getEndOffset();
	  var entityKey = block.getEntityAt(start);
	  if (!entityKey) {
	    return selectionState;
	  }

	  var entity = DraftEntity.get(entityKey);
	  var mutability = entity.getMutability();

	  // `MUTABLE` entities can just have the specified range of text removed
	  // directly. No adjustments are needed.
	  if (mutability === 'MUTABLE') {
	    return selectionState;
	  }

	  // Find the entity range that overlaps with our removal range.
	  var entityRanges = getRangesForDraftEntity(block, entityKey).filter(function (range) {
	    return start < range.end && end > range.start;
	  });

	  !(entityRanges.length == 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There should only be one entity range within this removal range.') : invariant(false) : void 0;

	  var entityRange = entityRanges[0];

	  // For `IMMUTABLE` entity types, we will remove the entire entity range.
	  if (mutability === 'IMMUTABLE') {
	    return selectionState.merge({
	      anchorOffset: entityRange.start,
	      focusOffset: entityRange.end,
	      isBackward: false
	    });
	  }

	  // For `SEGMENTED` entity types, determine the appropriate segment to
	  // remove.
	  var removalRange = DraftEntitySegments.getRemovalRange(start, end, block.getText().slice(entityRange.start, entityRange.end), entityRange.start, direction);

	  return selectionState.merge({
	    anchorOffset: removalRange.start,
	    focusOffset: removalRange.end,
	    isBackward: false
	  });
	}

	module.exports = getCharacterRemovalRange;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _assign = __webpack_require__(17);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEntity
	 * @typechecks
	 * 
	 */

	var DraftEntityInstance = __webpack_require__(18);
	var Immutable = __webpack_require__(6);

	var invariant = __webpack_require__(19);

	var Map = Immutable.Map;


	var instances = Map();
	var instanceKey = 0;

	/**
	 * A "document entity" is an object containing metadata associated with a
	 * piece of text in a ContentBlock.
	 *
	 * For example, a `link` entity might include a `uri` property. When a
	 * ContentBlock is rendered in the browser, text that refers to that link
	 * entity may be rendered as an anchor, with the `uri` as the href value.
	 *
	 * In a ContentBlock, every position in the text may correspond to zero
	 * or one entities. This correspondence is tracked using a key string,
	 * generated via DraftEntity.create() and used to obtain entity metadata
	 * via DraftEntity.get().
	 */
	var DraftEntity = {
	  /**
	   * Create a DraftEntityInstance and store it for later retrieval.
	   *
	   * A random key string will be generated and returned. This key may
	   * be used to track the entity's usage in a ContentBlock, and for
	   * retrieving data about the entity at render time.
	   */
	  create: function create(type, mutability, data) {
	    return DraftEntity.add(new DraftEntityInstance({ type: type, mutability: mutability, data: data || {} }));
	  },

	  /**
	   * Add an existing DraftEntityInstance to the DraftEntity map. This is
	   * useful when restoring instances from the server.
	   */
	  add: function add(instance) {
	    var key = '' + ++instanceKey;
	    instances = instances.set(key, instance);
	    return key;
	  },

	  /**
	   * Retrieve the entity corresponding to the supplied key string.
	   */
	  get: function get(key) {
	    var instance = instances.get(key);
	    !!!instance ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Unknown DraftEntity key.') : invariant(false) : void 0;
	    return instance;
	  },

	  /**
	   * Entity instances are immutable. If you need to update the data for an
	   * instance, this method will merge your data updates and return a new
	   * instance.
	   */
	  mergeData: function mergeData(key, toMerge) {
	    var instance = DraftEntity.get(key);
	    var newData = _extends({}, instance.getData(), toMerge);
	    var newInstance = instance.set('data', newData);
	    instances = instances.set(key, newInstance);
	    return newInstance;
	  },

	  /**
	   * Completely replace the data for a given instance.
	   */
	  replaceData: function replaceData(key, newData) {
	    var instance = DraftEntity.get(key);
	    var newInstance = instance.set('data', newData);
	    instances = instances.set(key, newInstance);
	    return newInstance;
	  }
	};

	module.exports = DraftEntity;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEntityInstance
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Immutable = __webpack_require__(6);

	var Record = Immutable.Record;


	var DraftEntityInstanceRecord = Record({
	  type: 'TOKEN',
	  mutability: 'IMMUTABLE',
	  data: Object
	});

	/**
	 * An instance of a document entity, consisting of a `type` and relevant
	 * `data`, metadata about the entity.
	 *
	 * For instance, a "link" entity might provide a URI, and a "mention"
	 * entity might provide the mentioned user's ID. These pieces of data
	 * may be used when rendering the entity as part of a ContentBlock DOM
	 * representation. For a link, the data would be used as an href for
	 * the rendered anchor. For a mention, the ID could be used to retrieve
	 * a hovercard.
	 */

	var DraftEntityInstance = function (_DraftEntityInstanceR) {
	  _inherits(DraftEntityInstance, _DraftEntityInstanceR);

	  function DraftEntityInstance() {
	    _classCallCheck(this, DraftEntityInstance);

	    return _possibleConstructorReturn(this, _DraftEntityInstanceR.apply(this, arguments));
	  }

	  DraftEntityInstance.prototype.getType = function getType() {
	    return this.get('type');
	  };

	  DraftEntityInstance.prototype.getMutability = function getMutability() {
	    return this.get('mutability');
	  };

	  DraftEntityInstance.prototype.getData = function getData() {
	    return this.get('data');
	  };

	  return DraftEntityInstance;
	}(DraftEntityInstanceRecord);

	module.exports = DraftEntityInstance;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEntitySegments
	 * @typechecks
	 * 
	 */

	'use strict';

	/**
	 * Identify the range to delete from a segmented entity.
	 *
	 * Rules:
	 *
	 *  Example: 'John F. Kennedy'
	 *
	 *   - Deletion from within any non-whitespace (i.e. ['John', 'F.', 'Kennedy'])
	 *     will return the range of that text.
	 *
	 *       'John F. Kennedy' -> 'John F.'
	 *                  ^
	 *
	 *   - Forward deletion of whitespace will remove the following section:
	 *
	 *       'John F. Kennedy' -> 'John Kennedy'
	 *            ^
	 *
	 *   - Backward deletion of whitespace will remove the previous section:
	 *
	 *       'John F. Kennedy' -> 'F. Kennedy'
	 *            ^
	 */
	var DraftEntitySegments = {
	  getRemovalRange: function getRemovalRange(selectionStart, selectionEnd, text, entityStart, direction) {
	    var segments = text.split(' ');
	    segments = segments.map(function ( /*string*/segment, /*number*/ii) {
	      if (direction === 'forward') {
	        if (ii > 0) {
	          return ' ' + segment;
	        }
	      } else if (ii < segments.length - 1) {
	        return segment + ' ';
	      }
	      return segment;
	    });

	    var segmentStart = entityStart;
	    var segmentEnd;
	    var segment;
	    var removalStart = null;
	    var removalEnd = null;

	    for (var jj = 0; jj < segments.length; jj++) {
	      segment = segments[jj];
	      segmentEnd = segmentStart + segment.length;

	      // Our selection overlaps this segment.
	      if (selectionStart < segmentEnd && segmentStart < selectionEnd) {
	        if (removalStart !== null) {
	          removalEnd = segmentEnd;
	        } else {
	          removalStart = segmentStart;
	          removalEnd = segmentEnd;
	        }
	      } else if (removalStart !== null) {
	        break;
	      }

	      segmentStart = segmentEnd;
	    }

	    var entityEnd = entityStart + text.length;
	    var atStart = removalStart === entityStart;
	    var atEnd = removalEnd === entityEnd;

	    if (!atStart && atEnd || atStart && !atEnd) {
	      if (direction === 'forward') {
	        if (removalEnd !== entityEnd) {
	          removalEnd++;
	        }
	      } else if (removalStart !== entityStart) {
	        removalStart--;
	      }
	    }

	    return {
	      start: removalStart,
	      end: removalEnd
	    };
	  }
	};

	module.exports = DraftEntitySegments;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getRangesForDraftEntity
	 * @typechecks
	 * 
	 */

	'use strict';

	var invariant = __webpack_require__(19);

	/**
	 * Obtain the start and end positions of the range that has the
	 * specified entity applied to it.
	 *
	 * Entity keys are applied only to contiguous stretches of text, so this
	 * method searches for the first instance of the entity key and returns
	 * the subsequent range.
	 */
	function getRangesForDraftEntity(block, key) {
	  var ranges = [];
	  block.findEntityRanges(function (c) {
	    return c.getEntity() === key;
	  }, function (start, end) {
	    ranges.push({ start: start, end: end });
	  });

	  !!!ranges.length ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Entity key not found in this range.') : invariant(false) : void 0;

	  return ranges;
	}

	module.exports = getRangesForDraftEntity;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getContentStateFragment
	 * @typechecks
	 * 
	 */

	'use strict';

	var generateRandomKey = __webpack_require__(23);
	var removeEntitiesAtEdges = __webpack_require__(24);

	function getContentStateFragment(contentState, selectionState) {
	  var startKey = selectionState.getStartKey();
	  var startOffset = selectionState.getStartOffset();
	  var endKey = selectionState.getEndKey();
	  var endOffset = selectionState.getEndOffset();

	  // Edge entities should be stripped to ensure that we don't preserve
	  // invalid partial entities when the fragment is reused. We do, however,
	  // preserve entities that are entirely within the selection range.
	  var contentWithoutEdgeEntities = removeEntitiesAtEdges(contentState, selectionState);

	  var blockMap = contentWithoutEdgeEntities.getBlockMap();
	  var blockKeys = blockMap.keySeq();
	  var startIndex = blockKeys.indexOf(startKey);
	  var endIndex = blockKeys.indexOf(endKey) + 1;

	  var slice = blockMap.slice(startIndex, endIndex).map(function (block, blockKey) {
	    var newKey = generateRandomKey();

	    var text = block.getText();
	    var chars = block.getCharacterList();

	    if (startKey === endKey) {
	      return block.merge({
	        key: newKey,
	        text: text.slice(startOffset, endOffset),
	        characterList: chars.slice(startOffset, endOffset)
	      });
	    }

	    if (blockKey === startKey) {
	      return block.merge({
	        key: newKey,
	        text: text.slice(startOffset),
	        characterList: chars.slice(startOffset)
	      });
	    }

	    if (blockKey === endKey) {
	      return block.merge({
	        key: newKey,
	        text: text.slice(0, endOffset),
	        characterList: chars.slice(0, endOffset)
	      });
	    }

	    return block.set('key', newKey);
	  });

	  return slice.toOrderedMap();
	}

	module.exports = getContentStateFragment;

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule generateRandomKey
	 * @typechecks
	 * 
	 */

	'use strict';

	var seenKeys = {};
	var MULTIPLIER = Math.pow(2, 24);

	function generateRandomKey() {
	  var key = void 0;
	  while (key === undefined || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
	    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
	  }
	  seenKeys[key] = true;
	  return key;
	}

	module.exports = generateRandomKey;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule removeEntitiesAtEdges
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(7);
	var DraftEntity = __webpack_require__(16);

	var findRangesImmutable = __webpack_require__(9);
	var invariant = __webpack_require__(19);

	function removeEntitiesAtEdges(contentState, selectionState) {
	  var blockMap = contentState.getBlockMap();

	  var updatedBlocks = {};

	  var startKey = selectionState.getStartKey();
	  var startOffset = selectionState.getStartOffset();
	  var startBlock = blockMap.get(startKey);
	  var updatedStart = removeForBlock(startBlock, startOffset);

	  if (updatedStart !== startBlock) {
	    updatedBlocks[startKey] = updatedStart;
	  }

	  var endKey = selectionState.getEndKey();
	  var endOffset = selectionState.getEndOffset();
	  var endBlock = blockMap.get(endKey);
	  if (startKey === endKey) {
	    endBlock = updatedStart;
	  }

	  var updatedEnd = removeForBlock(endBlock, endOffset);

	  if (updatedEnd !== endBlock) {
	    updatedBlocks[endKey] = updatedEnd;
	  }

	  if (!Object.keys(updatedBlocks).length) {
	    return contentState.set('selectionAfter', selectionState);
	  }

	  return contentState.merge({
	    blockMap: blockMap.merge(updatedBlocks),
	    selectionAfter: selectionState
	  });
	}

	function getRemovalRange(characters, key, offset) {
	  var removalRange;
	  findRangesImmutable(characters, function (a, b) {
	    return a.getEntity() === b.getEntity();
	  }, function (element) {
	    return element.getEntity() === key;
	  }, function (start, end) {
	    if (start <= offset && end >= offset) {
	      removalRange = { start: start, end: end };
	    }
	  });
	  !(typeof removalRange === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Removal range must exist within character list.') : invariant(false) : void 0;
	  return removalRange;
	}

	function removeForBlock(block, offset) {
	  var chars = block.getCharacterList();
	  var charBefore = offset > 0 ? chars.get(offset - 1) : undefined;
	  var charAfter = offset < chars.count() ? chars.get(offset) : undefined;
	  var entityBeforeCursor = charBefore ? charBefore.getEntity() : undefined;
	  var entityAfterCursor = charAfter ? charAfter.getEntity() : undefined;

	  if (entityAfterCursor && entityAfterCursor === entityBeforeCursor) {
	    var entity = DraftEntity.get(entityAfterCursor);
	    if (entity.getMutability() !== 'MUTABLE') {
	      var _getRemovalRange = getRemovalRange(chars, entityAfterCursor, offset);

	      var start = _getRemovalRange.start;
	      var end = _getRemovalRange.end;

	      var current;
	      while (start < end) {
	        current = chars.get(start);
	        chars = chars.set(start, CharacterMetadata.applyEntity(current, null));
	        start++;
	      }
	      return block.set('characterList', chars);
	    }
	  }

	  return block;
	}

	module.exports = removeEntitiesAtEdges;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule insertFragmentIntoContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	var BlockMapBuilder = __webpack_require__(5);

	var generateRandomKey = __webpack_require__(23);
	var insertIntoList = __webpack_require__(26);
	var invariant = __webpack_require__(19);

	function insertFragmentIntoContentState(contentState, selectionState, fragment) {
	  !selectionState.isCollapsed() ? process.env.NODE_ENV !== 'production' ? invariant(false, '`insertFragment` should only be called with a collapsed selection state.') : invariant(false) : void 0;

	  var targetKey = selectionState.getStartKey();
	  var targetOffset = selectionState.getStartOffset();

	  var blockMap = contentState.getBlockMap();

	  var fragmentSize = fragment.size;
	  var finalKey;
	  var finalOffset;

	  if (fragmentSize === 1) {
	    var targetBlock = blockMap.get(targetKey);
	    var pastedBlock = fragment.first();
	    var text = targetBlock.getText();
	    var chars = targetBlock.getCharacterList();

	    var newBlock = targetBlock.merge({
	      text: text.slice(0, targetOffset) + pastedBlock.getText() + text.slice(targetOffset),
	      characterList: insertIntoList(chars, pastedBlock.getCharacterList(), targetOffset),
	      data: pastedBlock.getData()
	    });

	    blockMap = blockMap.set(targetKey, newBlock);

	    finalKey = targetKey;
	    finalOffset = targetOffset + pastedBlock.getText().length;

	    return contentState.merge({
	      blockMap: blockMap.set(targetKey, newBlock),
	      selectionBefore: selectionState,
	      selectionAfter: selectionState.merge({
	        anchorKey: finalKey,
	        anchorOffset: finalOffset,
	        focusKey: finalKey,
	        focusOffset: finalOffset,
	        isBackward: false
	      })
	    });
	  }

	  var newBlockArr = [];

	  contentState.getBlockMap().forEach(function (block, blockKey) {
	    if (blockKey !== targetKey) {
	      newBlockArr.push(block);
	      return;
	    }

	    var text = block.getText();
	    var chars = block.getCharacterList();

	    // Modify head portion of block.
	    var blockSize = text.length;
	    var headText = text.slice(0, targetOffset);
	    var headCharacters = chars.slice(0, targetOffset);
	    var appendToHead = fragment.first();

	    var modifiedHead = block.merge({
	      text: headText + appendToHead.getText(),
	      characterList: headCharacters.concat(appendToHead.getCharacterList()),
	      type: headText ? block.getType() : appendToHead.getType(),
	      data: appendToHead.getData()
	    });

	    newBlockArr.push(modifiedHead);

	    // Insert fragment blocks after the head and before the tail.
	    fragment.slice(1, fragmentSize - 1).forEach(function (fragmentBlock) {
	      newBlockArr.push(fragmentBlock.set('key', generateRandomKey()));
	    });

	    // Modify tail portion of block.
	    var tailText = text.slice(targetOffset, blockSize);
	    var tailCharacters = chars.slice(targetOffset, blockSize);
	    var prependToTail = fragment.last();
	    finalKey = generateRandomKey();

	    var modifiedTail = prependToTail.merge({
	      key: finalKey,
	      text: prependToTail.getText() + tailText,
	      characterList: prependToTail.getCharacterList().concat(tailCharacters),
	      data: prependToTail.getData()
	    });

	    newBlockArr.push(modifiedTail);
	  });

	  finalOffset = fragment.last().getLength();

	  return contentState.merge({
	    blockMap: BlockMapBuilder.createFromArray(newBlockArr),
	    selectionBefore: selectionState,
	    selectionAfter: selectionState.merge({
	      anchorKey: finalKey,
	      anchorOffset: finalOffset,
	      focusKey: finalKey,
	      focusOffset: finalOffset,
	      isBackward: false
	    })
	  });
	}

	module.exports = insertFragmentIntoContentState;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule insertIntoList
	 * 
	 */

	'use strict';

	/**
	 * Maintain persistence for target list when appending and prepending.
	 */
	function insertIntoList(targetList, toInsert, offset) {
	  if (offset === targetList.count()) {
	    toInsert.forEach(function (c) {
	      targetList = targetList.push(c);
	    });
	  } else if (offset === 0) {
	    toInsert.reverse().forEach(function (c) {
	      targetList = targetList.unshift(c);
	    });
	  } else {
	    var head = targetList.slice(0, offset);
	    var tail = targetList.slice(offset);
	    targetList = head.concat(toInsert, tail).toList();
	  }
	  return targetList;
	}

	module.exports = insertIntoList;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule insertTextIntoContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(6);

	var insertIntoList = __webpack_require__(26);
	var invariant = __webpack_require__(19);

	var Repeat = Immutable.Repeat;


	function insertTextIntoContentState(contentState, selectionState, text, characterMetadata) {
	  !selectionState.isCollapsed() ? process.env.NODE_ENV !== 'production' ? invariant(false, '`insertText` should only be called with a collapsed range.') : invariant(false) : void 0;

	  var len = text.length;
	  if (!len) {
	    return contentState;
	  }

	  var blockMap = contentState.getBlockMap();
	  var key = selectionState.getStartKey();
	  var offset = selectionState.getStartOffset();
	  var block = blockMap.get(key);
	  var blockText = block.getText();

	  var newBlock = block.merge({
	    text: blockText.slice(0, offset) + text + blockText.slice(offset, block.getLength()),
	    characterList: insertIntoList(block.getCharacterList(), Repeat(characterMetadata, len).toList(), offset)
	  });

	  var newOffset = offset + len;

	  return contentState.merge({
	    blockMap: blockMap.set(key, newBlock),
	    selectionAfter: selectionState.merge({
	      anchorOffset: newOffset,
	      focusOffset: newOffset
	    })
	  });
	}

	module.exports = insertTextIntoContentState;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule modifyBlockForContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(6);

	var Map = Immutable.Map;


	function modifyBlockForContentState(contentState, selectionState, operation) {
	  var startKey = selectionState.getStartKey();
	  var endKey = selectionState.getEndKey();
	  var blockMap = contentState.getBlockMap();
	  var newBlocks = blockMap.toSeq().skipUntil(function (_, k) {
	    return k === startKey;
	  }).takeUntil(function (_, k) {
	    return k === endKey;
	  }).concat(Map([[endKey, blockMap.get(endKey)]])).map(operation);

	  return contentState.merge({
	    blockMap: blockMap.merge(newBlocks),
	    selectionBefore: selectionState,
	    selectionAfter: selectionState
	  });
	}

	module.exports = modifyBlockForContentState;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule removeRangeFromContentState
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(6);

	function removeRangeFromContentState(contentState, selectionState) {
	  if (selectionState.isCollapsed()) {
	    return contentState;
	  }

	  var blockMap = contentState.getBlockMap();
	  var startKey = selectionState.getStartKey();
	  var startOffset = selectionState.getStartOffset();
	  var endKey = selectionState.getEndKey();
	  var endOffset = selectionState.getEndOffset();

	  var startBlock = blockMap.get(startKey);
	  var endBlock = blockMap.get(endKey);
	  var characterList;

	  if (startBlock === endBlock) {
	    characterList = removeFromList(startBlock.getCharacterList(), startOffset, endOffset);
	  } else {
	    characterList = startBlock.getCharacterList().slice(0, startOffset).concat(endBlock.getCharacterList().slice(endOffset));
	  }

	  var modifiedStart = startBlock.merge({
	    text: startBlock.getText().slice(0, startOffset) + endBlock.getText().slice(endOffset),
	    characterList: characterList
	  });

	  var newBlocks = blockMap.toSeq().skipUntil(function (_, k) {
	    return k === startKey;
	  }).takeUntil(function (_, k) {
	    return k === endKey;
	  }).concat(Immutable.Map([[endKey, null]])).map(function (_, k) {
	    return k === startKey ? modifiedStart : null;
	  });

	  blockMap = blockMap.merge(newBlocks).filter(function (block) {
	    return !!block;
	  });

	  return contentState.merge({
	    blockMap: blockMap,
	    selectionBefore: selectionState,
	    selectionAfter: selectionState.merge({
	      anchorKey: startKey,
	      anchorOffset: startOffset,
	      focusKey: startKey,
	      focusOffset: startOffset,
	      isBackward: false
	    })
	  });
	}

	/**
	 * Maintain persistence for target list when removing characters on the
	 * head and tail of the character list.
	 */
	function removeFromList(targetList, startOffset, endOffset) {
	  if (startOffset === 0) {
	    while (startOffset < endOffset) {
	      targetList = targetList.shift();
	      startOffset++;
	    }
	  } else if (endOffset === targetList.count()) {
	    while (endOffset > startOffset) {
	      targetList = targetList.pop();
	      endOffset--;
	    }
	  } else {
	    var head = targetList.slice(0, startOffset);
	    var tail = targetList.slice(endOffset);
	    targetList = head.concat(tail).toList();
	  }
	  return targetList;
	}

	module.exports = removeRangeFromContentState;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule splitBlockInContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(6);

	var generateRandomKey = __webpack_require__(23);
	var invariant = __webpack_require__(19);

	var Map = Immutable.Map;


	function splitBlockInContentState(contentState, selectionState) {
	  !selectionState.isCollapsed() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Selection range must be collapsed.') : invariant(false) : void 0;

	  var key = selectionState.getAnchorKey();
	  var offset = selectionState.getAnchorOffset();
	  var blockMap = contentState.getBlockMap();
	  var blockToSplit = blockMap.get(key);

	  var text = blockToSplit.getText();
	  var chars = blockToSplit.getCharacterList();

	  var blockAbove = blockToSplit.merge({
	    text: text.slice(0, offset),
	    characterList: chars.slice(0, offset)
	  });

	  var keyBelow = generateRandomKey();
	  var blockBelow = blockAbove.merge({
	    key: keyBelow,
	    text: text.slice(offset),
	    characterList: chars.slice(offset),
	    data: Map()
	  });

	  var blocksBefore = blockMap.toSeq().takeUntil(function (v) {
	    return v === blockToSplit;
	  });
	  var blocksAfter = blockMap.toSeq().skipUntil(function (v) {
	    return v === blockToSplit;
	  }).rest();
	  var newBlocks = blocksBefore.concat([[blockAbove.getKey(), blockAbove], [blockBelow.getKey(), blockBelow]], blocksAfter).toOrderedMap();

	  return contentState.merge({
	    blockMap: newBlocks,
	    selectionBefore: selectionState,
	    selectionAfter: selectionState.merge({
	      anchorKey: keyBelow,
	      anchorOffset: 0,
	      focusKey: keyBelow,
	      focusOffset: 0,
	      isBackward: false
	    })
	  });
	}

	module.exports = splitBlockInContentState;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EditorState
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(17);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BlockTree = __webpack_require__(32);
	var ContentState = __webpack_require__(34);
	var EditorBidiService = __webpack_require__(37);
	var Immutable = __webpack_require__(6);
	var SelectionState = __webpack_require__(35);

	var OrderedSet = Immutable.OrderedSet;
	var Record = Immutable.Record;
	var Stack = Immutable.Stack;


	var defaultRecord = {
	  allowUndo: true,
	  currentContent: null,
	  decorator: null,
	  directionMap: null,
	  forceSelection: false,
	  inCompositionMode: false,
	  inlineStyleOverride: null,
	  lastChangeType: null,
	  nativelyRenderedContent: null,
	  redoStack: Stack(),
	  selection: null,
	  treeMap: null,
	  undoStack: Stack()
	};

	var EditorStateRecord = Record(defaultRecord);

	var EditorState = function () {
	  EditorState.createEmpty = function createEmpty(decorator) {
	    return EditorState.createWithContent(ContentState.createFromText(''), decorator);
	  };

	  EditorState.createWithContent = function createWithContent(contentState, decorator) {
	    var firstKey = contentState.getBlockMap().first().getKey();
	    return EditorState.create({
	      currentContent: contentState,
	      undoStack: Stack(),
	      redoStack: Stack(),
	      decorator: decorator || null,
	      selection: SelectionState.createEmpty(firstKey)
	    });
	  };

	  EditorState.create = function create(config) {
	    var currentContent = config.currentContent;
	    var decorator = config.decorator;

	    var recordConfig = _extends({}, config, {
	      treeMap: generateNewTreeMap(currentContent, decorator),
	      directionMap: EditorBidiService.getDirectionMap(currentContent)
	    });
	    return new EditorState(new EditorStateRecord(recordConfig));
	  };

	  EditorState.set = function set(editorState, put) {
	    var map = editorState.getImmutable().withMutations(function (state) {
	      var existingDecorator = state.get('decorator');
	      var decorator = existingDecorator;
	      if (put.decorator === null) {
	        decorator = null;
	      } else if (put.decorator) {
	        decorator = put.decorator;
	      }

	      var newContent = put.currentContent || editorState.getCurrentContent();

	      if (decorator !== existingDecorator) {
	        var treeMap = state.get('treeMap');
	        var newTreeMap;
	        if (decorator && existingDecorator) {
	          newTreeMap = regenerateTreeForNewDecorator(newContent.getBlockMap(), treeMap, decorator, existingDecorator);
	        } else {
	          newTreeMap = generateNewTreeMap(newContent, decorator);
	        }

	        state.merge({
	          decorator: decorator,
	          treeMap: newTreeMap,
	          nativelyRenderedContent: null
	        });
	        return;
	      }

	      var existingContent = editorState.getCurrentContent();
	      if (newContent !== existingContent) {
	        state.set('treeMap', regenerateTreeForNewBlocks(editorState, newContent.getBlockMap(), decorator));
	      }

	      state.merge(put);
	    });

	    return new EditorState(map);
	  };

	  EditorState.prototype.toJS = function toJS() {
	    return this.getImmutable().toJS();
	  };

	  EditorState.prototype.getAllowUndo = function getAllowUndo() {
	    return this.getImmutable().get('allowUndo');
	  };

	  EditorState.prototype.getCurrentContent = function getCurrentContent() {
	    return this.getImmutable().get('currentContent');
	  };

	  EditorState.prototype.getUndoStack = function getUndoStack() {
	    return this.getImmutable().get('undoStack');
	  };

	  EditorState.prototype.getRedoStack = function getRedoStack() {
	    return this.getImmutable().get('redoStack');
	  };

	  EditorState.prototype.getSelection = function getSelection() {
	    return this.getImmutable().get('selection');
	  };

	  EditorState.prototype.getDecorator = function getDecorator() {
	    return this.getImmutable().get('decorator');
	  };

	  EditorState.prototype.isInCompositionMode = function isInCompositionMode() {
	    return this.getImmutable().get('inCompositionMode');
	  };

	  EditorState.prototype.mustForceSelection = function mustForceSelection() {
	    return this.getImmutable().get('forceSelection');
	  };

	  EditorState.prototype.getNativelyRenderedContent = function getNativelyRenderedContent() {
	    return this.getImmutable().get('nativelyRenderedContent');
	  };

	  EditorState.prototype.getLastChangeType = function getLastChangeType() {
	    return this.getImmutable().get('lastChangeType');
	  };

	  /**
	   * While editing, the user may apply inline style commands with a collapsed
	   * cursor, intending to type text that adopts the specified style. In this
	   * case, we track the specified style as an "override" that takes precedence
	   * over the inline style of the text adjacent to the cursor.
	   *
	   * If null, there is no override in place.
	   */


	  EditorState.prototype.getInlineStyleOverride = function getInlineStyleOverride() {
	    return this.getImmutable().get('inlineStyleOverride');
	  };

	  EditorState.setInlineStyleOverride = function setInlineStyleOverride(editorState, inlineStyleOverride) {
	    return EditorState.set(editorState, { inlineStyleOverride: inlineStyleOverride });
	  };

	  /**
	   * Get the appropriate inline style for the editor state. If an
	   * override is in place, use it. Otherwise, the current style is
	   * based on the location of the selection state.
	   */


	  EditorState.prototype.getCurrentInlineStyle = function getCurrentInlineStyle() {
	    var override = this.getInlineStyleOverride();
	    if (override != null) {
	      return override;
	    }

	    var content = this.getCurrentContent();
	    var selection = this.getSelection();

	    if (selection.isCollapsed()) {
	      return getInlineStyleForCollapsedSelection(content, selection);
	    }

	    return getInlineStyleForNonCollapsedSelection(content, selection);
	  };

	  EditorState.prototype.getBlockTree = function getBlockTree(blockKey) {
	    return this.getImmutable().getIn(['treeMap', blockKey]);
	  };

	  EditorState.prototype.isSelectionAtStartOfContent = function isSelectionAtStartOfContent() {
	    var firstKey = this.getCurrentContent().getBlockMap().first().getKey();
	    return this.getSelection().hasEdgeWithin(firstKey, 0, 0);
	  };

	  EditorState.prototype.isSelectionAtEndOfContent = function isSelectionAtEndOfContent() {
	    var content = this.getCurrentContent();
	    var blockMap = content.getBlockMap();
	    var last = blockMap.last();
	    var end = last.getLength();
	    return this.getSelection().hasEdgeWithin(last.getKey(), end, end);
	  };

	  EditorState.prototype.getDirectionMap = function getDirectionMap() {
	    return this.getImmutable().get('directionMap');
	  };

	  /**
	   * Incorporate native DOM selection changes into the EditorState. This
	   * method can be used when we simply want to accept whatever the DOM
	   * has given us to represent selection, and we do not need to re-render
	   * the editor.
	   *
	   * To forcibly move the DOM selection, see `EditorState.forceSelection`.
	   */


	  EditorState.acceptSelection = function acceptSelection(editorState, selection) {
	    return updateSelection(editorState, selection, false);
	  };

	  /**
	   * At times, we need to force the DOM selection to be where we
	   * need it to be. This can occur when the anchor or focus nodes
	   * are non-text nodes, for instance. In this case, we want to trigger
	   * a re-render of the editor, which in turn forces selection into
	   * the correct place in the DOM. The `forceSelection` method
	   * accomplishes this.
	   *
	   * This method should be used in cases where you need to explicitly
	   * move the DOM selection from one place to another without a change
	   * in ContentState.
	   */


	  EditorState.forceSelection = function forceSelection(editorState, selection) {
	    if (!selection.getHasFocus()) {
	      selection = selection.set('hasFocus', true);
	    }
	    return updateSelection(editorState, selection, true);
	  };

	  /**
	   * Move selection to the end of the editor without forcing focus.
	   */


	  EditorState.moveSelectionToEnd = function moveSelectionToEnd(editorState) {
	    var content = editorState.getCurrentContent();
	    var lastBlock = content.getLastBlock();
	    var lastKey = lastBlock.getKey();
	    var length = lastBlock.getLength();

	    return EditorState.acceptSelection(editorState, new SelectionState({
	      anchorKey: lastKey,
	      anchorOffset: length,
	      focusKey: lastKey,
	      focusOffset: length,
	      isBackward: false
	    }));
	  };

	  /**
	   * Force focus to the end of the editor. This is useful in scenarios
	   * where we want to programmatically focus the input and it makes sense
	   * to allow the user to continue working seamlessly.
	   */


	  EditorState.moveFocusToEnd = function moveFocusToEnd(editorState) {
	    var afterSelectionMove = EditorState.moveSelectionToEnd(editorState);
	    return EditorState.forceSelection(afterSelectionMove, afterSelectionMove.getSelection());
	  };

	  /**
	   * Push the current ContentState onto the undo stack if it should be
	   * considered a boundary state, and set the provided ContentState as the
	   * new current content.
	   */


	  EditorState.push = function push(editorState, contentState, changeType) {
	    if (editorState.getCurrentContent() === contentState) {
	      return editorState;
	    }

	    var forceSelection = changeType !== 'insert-characters';
	    var directionMap = EditorBidiService.getDirectionMap(contentState, editorState.getDirectionMap());

	    if (!editorState.getAllowUndo()) {
	      return EditorState.set(editorState, {
	        currentContent: contentState,
	        directionMap: directionMap,
	        lastChangeType: changeType,
	        selection: contentState.getSelectionAfter(),
	        forceSelection: forceSelection,
	        inlineStyleOverride: null
	      });
	    }

	    var selection = editorState.getSelection();
	    var currentContent = editorState.getCurrentContent();
	    var undoStack = editorState.getUndoStack();
	    var newContent = contentState;

	    if (selection !== currentContent.getSelectionAfter() || mustBecomeBoundary(editorState, changeType)) {
	      undoStack = undoStack.push(currentContent);
	      newContent = newContent.set('selectionBefore', selection);
	    } else if (changeType === 'insert-characters' || changeType === 'backspace-character' || changeType === 'delete-character') {
	      // Preserve the previous selection.
	      newContent = newContent.set('selectionBefore', currentContent.getSelectionBefore());
	    }

	    var inlineStyleOverride = editorState.getInlineStyleOverride();

	    // Don't discard inline style overrides on block type or depth changes.
	    if (changeType !== 'adjust-depth' && changeType !== 'change-block-type') {
	      inlineStyleOverride = null;
	    }

	    var editorStateChanges = {
	      currentContent: newContent,
	      directionMap: directionMap,
	      undoStack: undoStack,
	      redoStack: Stack(),
	      lastChangeType: changeType,
	      selection: contentState.getSelectionAfter(),
	      forceSelection: forceSelection,
	      inlineStyleOverride: inlineStyleOverride
	    };

	    return EditorState.set(editorState, editorStateChanges);
	  };

	  /**
	   * Make the top ContentState in the undo stack the new current content and
	   * push the current content onto the redo stack.
	   */


	  EditorState.undo = function undo(editorState) {
	    if (!editorState.getAllowUndo()) {
	      return editorState;
	    }

	    var undoStack = editorState.getUndoStack();
	    var newCurrentContent = undoStack.peek();
	    if (!newCurrentContent) {
	      return editorState;
	    }

	    var currentContent = editorState.getCurrentContent();
	    var directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());

	    return EditorState.set(editorState, {
	      currentContent: newCurrentContent,
	      directionMap: directionMap,
	      undoStack: undoStack.shift(),
	      redoStack: editorState.getRedoStack().push(currentContent),
	      forceSelection: true,
	      inlineStyleOverride: null,
	      lastChangeType: 'undo',
	      nativelyRenderedContent: null,
	      selection: currentContent.getSelectionBefore()
	    });
	  };

	  /**
	   * Make the top ContentState in the redo stack the new current content and
	   * push the current content onto the undo stack.
	   */


	  EditorState.redo = function redo(editorState) {
	    if (!editorState.getAllowUndo()) {
	      return editorState;
	    }

	    var redoStack = editorState.getRedoStack();
	    var newCurrentContent = redoStack.peek();
	    if (!newCurrentContent) {
	      return editorState;
	    }

	    var currentContent = editorState.getCurrentContent();
	    var directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());

	    return EditorState.set(editorState, {
	      currentContent: newCurrentContent,
	      directionMap: directionMap,
	      undoStack: editorState.getUndoStack().push(currentContent),
	      redoStack: redoStack.shift(),
	      forceSelection: true,
	      inlineStyleOverride: null,
	      lastChangeType: 'redo',
	      nativelyRenderedContent: null,
	      selection: newCurrentContent.getSelectionAfter()
	    });
	  };

	  /**
	   * Not for public consumption.
	   */


	  function EditorState(immutable) {
	    _classCallCheck(this, EditorState);

	    this._immutable = immutable;
	  }

	  /**
	   * Not for public consumption.
	   */


	  EditorState.prototype.getImmutable = function getImmutable() {
	    return this._immutable;
	  };

	  return EditorState;
	}();

	/**
	 * Set the supplied SelectionState as the new current selection, and set
	 * the `force` flag to trigger manual selection placement by the view.
	 */


	function updateSelection(editorState, selection, forceSelection) {
	  return EditorState.set(editorState, {
	    selection: selection,
	    forceSelection: forceSelection,
	    nativelyRenderedContent: null,
	    inlineStyleOverride: null
	  });
	}

	/**
	 * Regenerate the entire tree map for a given ContentState and decorator.
	 * Returns an OrderedMap that maps all available ContentBlock objects.
	 */
	function generateNewTreeMap(contentState, decorator) {
	  return contentState.getBlockMap().map(function (block) {
	    return BlockTree.generate(block, decorator);
	  }).toOrderedMap();
	}

	/**
	 * Regenerate tree map objects for all ContentBlocks that have changed
	 * between the current editorState and newContent. Returns an OrderedMap
	 * with only changed regenerated tree map objects.
	 */
	function regenerateTreeForNewBlocks(editorState, newBlockMap, decorator) {
	  var prevBlockMap = editorState.getCurrentContent().getBlockMap();
	  var prevTreeMap = editorState.getImmutable().get('treeMap');
	  return prevTreeMap.merge(newBlockMap.toSeq().filter(function (block, key) {
	    return block !== prevBlockMap.get(key);
	  }).map(function (block) {
	    return BlockTree.generate(block, decorator);
	  }));
	}

	/**
	 * Generate tree map objects for a new decorator object, preserving any
	 * decorations that are unchanged from the previous decorator.
	 *
	 * Note that in order for this to perform optimally, decoration Lists for
	 * decorators should be preserved when possible to allow for direct immutable
	 * List comparison.
	 */
	function regenerateTreeForNewDecorator(blockMap, previousTreeMap, decorator, existingDecorator) {
	  return previousTreeMap.merge(blockMap.toSeq().filter(function (block) {
	    return decorator.getDecorations(block) !== existingDecorator.getDecorations(block);
	  }).map(function (block) {
	    return BlockTree.generate(block, decorator);
	  }));
	}

	/**
	 * Return whether a change should be considered a boundary state, given
	 * the previous change type. Allows us to discard potential boundary states
	 * during standard typing or deletion behavior.
	 */
	function mustBecomeBoundary(editorState, changeType) {
	  var lastChangeType = editorState.getLastChangeType();
	  return changeType !== lastChangeType || changeType !== 'insert-characters' && changeType !== 'backspace-character' && changeType !== 'delete-character';
	}

	function getInlineStyleForCollapsedSelection(content, selection) {
	  var startKey = selection.getStartKey();
	  var startOffset = selection.getStartOffset();
	  var startBlock = content.getBlockForKey(startKey);

	  // If the cursor is not at the start of the block, look backward to
	  // preserve the style of the preceding character.
	  if (startOffset > 0) {
	    return startBlock.getInlineStyleAt(startOffset - 1);
	  }

	  // The caret is at position zero in this block. If the block has any
	  // text at all, use the style of the first character.
	  if (startBlock.getLength()) {
	    return startBlock.getInlineStyleAt(0);
	  }

	  // Otherwise, look upward in the document to find the closest character.
	  return lookUpwardForInlineStyle(content, startKey);
	}

	function getInlineStyleForNonCollapsedSelection(content, selection) {
	  var startKey = selection.getStartKey();
	  var startOffset = selection.getStartOffset();
	  var startBlock = content.getBlockForKey(startKey);

	  // If there is a character just inside the selection, use its style.
	  if (startOffset < startBlock.getLength()) {
	    return startBlock.getInlineStyleAt(startOffset);
	  }

	  // Check if the selection at the end of a non-empty block. Use the last
	  // style in the block.
	  if (startOffset > 0) {
	    return startBlock.getInlineStyleAt(startOffset - 1);
	  }

	  // Otherwise, look upward in the document to find the closest character.
	  return lookUpwardForInlineStyle(content, startKey);
	}

	function lookUpwardForInlineStyle(content, fromKey) {
	  var previousBlock = content.getBlockBefore(fromKey);
	  var previousLength;

	  while (previousBlock) {
	    previousLength = previousBlock.getLength();
	    if (previousLength) {
	      return previousBlock.getInlineStyleAt(previousLength - 1);
	    }
	    previousBlock = content.getBlockBefore(previousBlock.getKey());
	  }

	  return OrderedSet();
	}

	module.exports = EditorState;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BlockTree
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(6);

	var emptyFunction = __webpack_require__(33);
	var findRangesImmutable = __webpack_require__(9);

	var List = Immutable.List;
	var Repeat = Immutable.Repeat;
	var Record = Immutable.Record;


	var returnTrue = emptyFunction.thatReturnsTrue;

	var FINGERPRINT_DELIMITER = '-';

	var defaultLeafRange = {
	  start: null,
	  end: null
	};

	var LeafRange = Record(defaultLeafRange);

	var defaultDecoratorRange = {
	  start: null,
	  end: null,
	  decoratorKey: null,
	  leaves: null
	};

	var DecoratorRange = Record(defaultDecoratorRange);

	var BlockTree = {
	  /**
	   * Generate a block tree for a given ContentBlock/decorator pair.
	   */
	  generate: function generate(block, decorator) {
	    var textLength = block.getLength();
	    if (!textLength) {
	      return List.of(new DecoratorRange({
	        start: 0,
	        end: 0,
	        decoratorKey: null,
	        leaves: List.of(new LeafRange({ start: 0, end: 0 }))
	      }));
	    }

	    var leafSets = [];
	    var decorations = decorator ? decorator.getDecorations(block) : List(Repeat(null, textLength));

	    var chars = block.getCharacterList();

	    findRangesImmutable(decorations, areEqual, returnTrue, function (start, end) {
	      leafSets.push(new DecoratorRange({
	        start: start,
	        end: end,
	        decoratorKey: decorations.get(start),
	        leaves: generateLeaves(chars.slice(start, end).toList(), start)
	      }));
	    });

	    return List(leafSets);
	  },

	  /**
	   * Create a string representation of the given tree map. This allows us
	   * to rapidly determine whether a tree has undergone a significant
	   * structural change.
	   */
	  getFingerprint: function getFingerprint(tree) {
	    return tree.map(function (leafSet) {
	      var decoratorKey = leafSet.get('decoratorKey');
	      var fingerprintString = decoratorKey !== null ? decoratorKey + '.' + (leafSet.get('end') - leafSet.get('start')) : '';
	      return '' + fingerprintString + '.' + leafSet.get('leaves').size;
	    }).join(FINGERPRINT_DELIMITER);
	  }
	};

	/**
	 * Generate LeafRange records for a given character list.
	 */
	function generateLeaves(characters, offset) {
	  var leaves = [];
	  var inlineStyles = characters.map(function (c) {
	    return c.getStyle();
	  }).toList();
	  findRangesImmutable(inlineStyles, areEqual, returnTrue, function (start, end) {
	    leaves.push(new LeafRange({
	      start: start + offset,
	      end: end + offset
	    }));
	  });
	  return List(leaves);
	}

	function areEqual(a, b) {
	  return a === b;
	}

	module.exports = BlockTree;

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BlockMapBuilder = __webpack_require__(5);
	var CharacterMetadata = __webpack_require__(7);
	var ContentBlock = __webpack_require__(8);
	var Immutable = __webpack_require__(6);
	var SelectionState = __webpack_require__(35);

	var generateRandomKey = __webpack_require__(23);
	var sanitizeDraftText = __webpack_require__(36);

	var List = Immutable.List;
	var Record = Immutable.Record;
	var Repeat = Immutable.Repeat;


	var defaultRecord = {
	  blockMap: null,
	  selectionBefore: null,
	  selectionAfter: null
	};

	var ContentStateRecord = Record(defaultRecord);

	var ContentState = function (_ContentStateRecord) {
	  _inherits(ContentState, _ContentStateRecord);

	  function ContentState() {
	    _classCallCheck(this, ContentState);

	    return _possibleConstructorReturn(this, _ContentStateRecord.apply(this, arguments));
	  }

	  ContentState.prototype.getBlockMap = function getBlockMap() {
	    return this.get('blockMap');
	  };

	  ContentState.prototype.getSelectionBefore = function getSelectionBefore() {
	    return this.get('selectionBefore');
	  };

	  ContentState.prototype.getSelectionAfter = function getSelectionAfter() {
	    return this.get('selectionAfter');
	  };

	  ContentState.prototype.getBlockForKey = function getBlockForKey(key) {
	    var block = this.getBlockMap().get(key);
	    return block;
	  };

	  ContentState.prototype.getKeyBefore = function getKeyBefore(key) {
	    return this.getBlockMap().reverse().keySeq().skipUntil(function (v) {
	      return v === key;
	    }).skip(1).first();
	  };

	  ContentState.prototype.getKeyAfter = function getKeyAfter(key) {
	    return this.getBlockMap().keySeq().skipUntil(function (v) {
	      return v === key;
	    }).skip(1).first();
	  };

	  ContentState.prototype.getBlockAfter = function getBlockAfter(key) {
	    return this.getBlockMap().skipUntil(function (_, k) {
	      return k === key;
	    }).skip(1).first();
	  };

	  ContentState.prototype.getBlockBefore = function getBlockBefore(key) {
	    return this.getBlockMap().reverse().skipUntil(function (_, k) {
	      return k === key;
	    }).skip(1).first();
	  };

	  ContentState.prototype.getBlocksAsArray = function getBlocksAsArray() {
	    return this.getBlockMap().toArray();
	  };

	  ContentState.prototype.getFirstBlock = function getFirstBlock() {
	    return this.getBlockMap().first();
	  };

	  ContentState.prototype.getLastBlock = function getLastBlock() {
	    return this.getBlockMap().last();
	  };

	  ContentState.prototype.getPlainText = function getPlainText(delimiter) {
	    return this.getBlockMap().map(function (block) {
	      return block ? block.getText() : '';
	    }).join(delimiter || '\n');
	  };

	  ContentState.prototype.hasText = function hasText() {
	    var blockMap = this.getBlockMap();
	    return blockMap.size > 1 || blockMap.first().getLength() > 0;
	  };

	  ContentState.createFromBlockArray = function createFromBlockArray(blocks) {
	    var blockMap = BlockMapBuilder.createFromArray(blocks);
	    var selectionState = SelectionState.createEmpty(blockMap.first().getKey());
	    return new ContentState({
	      blockMap: blockMap,
	      selectionBefore: selectionState,
	      selectionAfter: selectionState
	    });
	  };

	  ContentState.createFromText = function createFromText(text) {
	    var delimiter = arguments.length <= 1 || arguments[1] === undefined ? /\r\n?|\n/g : arguments[1];

	    var strings = text.split(delimiter);
	    var blocks = strings.map(function (block) {
	      block = sanitizeDraftText(block);
	      return new ContentBlock({
	        key: generateRandomKey(),
	        text: block,
	        type: 'unstyled',
	        characterList: List(Repeat(CharacterMetadata.EMPTY, block.length))
	      });
	    });
	    return ContentState.createFromBlockArray(blocks);
	  };

	  return ContentState;
	}(ContentStateRecord);

	module.exports = ContentState;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectionState
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Immutable = __webpack_require__(6);

	var Record = Immutable.Record;


	var defaultRecord = {
	  anchorKey: '',
	  anchorOffset: 0,
	  focusKey: '',
	  focusOffset: 0,
	  isBackward: false,
	  hasFocus: false
	};

	var SelectionStateRecord = Record(defaultRecord);

	var SelectionState = function (_SelectionStateRecord) {
	  _inherits(SelectionState, _SelectionStateRecord);

	  function SelectionState() {
	    _classCallCheck(this, SelectionState);

	    return _possibleConstructorReturn(this, _SelectionStateRecord.apply(this, arguments));
	  }

	  SelectionState.prototype.serialize = function serialize() {
	    return 'Anchor: ' + this.getAnchorKey() + ':' + this.getAnchorOffset() + ', ' + 'Focus: ' + this.getFocusKey() + ':' + this.getFocusOffset() + ', ' + 'Is Backward: ' + String(this.getIsBackward()) + ', ' + 'Has Focus: ' + String(this.getHasFocus());
	  };

	  SelectionState.prototype.getAnchorKey = function getAnchorKey() {
	    return this.get('anchorKey');
	  };

	  SelectionState.prototype.getAnchorOffset = function getAnchorOffset() {
	    return this.get('anchorOffset');
	  };

	  SelectionState.prototype.getFocusKey = function getFocusKey() {
	    return this.get('focusKey');
	  };

	  SelectionState.prototype.getFocusOffset = function getFocusOffset() {
	    return this.get('focusOffset');
	  };

	  SelectionState.prototype.getIsBackward = function getIsBackward() {
	    return this.get('isBackward');
	  };

	  SelectionState.prototype.getHasFocus = function getHasFocus() {
	    return this.get('hasFocus');
	  };

	  /**
	   * Return whether the specified range overlaps with an edge of the
	   * SelectionState.
	   */


	  SelectionState.prototype.hasEdgeWithin = function hasEdgeWithin(blockKey, start, end) {
	    var anchorKey = this.getAnchorKey();
	    var focusKey = this.getFocusKey();

	    if (anchorKey === focusKey && anchorKey === blockKey) {
	      var selectionStart = this.getStartOffset();
	      var selectionEnd = this.getEndOffset();
	      return start <= selectionEnd && selectionStart <= end;
	    }

	    if (blockKey !== anchorKey && blockKey !== focusKey) {
	      return false;
	    }

	    var offsetToCheck = blockKey === anchorKey ? this.getAnchorOffset() : this.getFocusOffset();

	    return start <= offsetToCheck && end >= offsetToCheck;
	  };

	  SelectionState.prototype.isCollapsed = function isCollapsed() {
	    return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset();
	  };

	  SelectionState.prototype.getStartKey = function getStartKey() {
	    return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
	  };

	  SelectionState.prototype.getStartOffset = function getStartOffset() {
	    return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
	  };

	  SelectionState.prototype.getEndKey = function getEndKey() {
	    return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
	  };

	  SelectionState.prototype.getEndOffset = function getEndOffset() {
	    return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
	  };

	  SelectionState.createEmpty = function createEmpty(key) {
	    return new SelectionState({
	      anchorKey: key,
	      anchorOffset: 0,
	      focusKey: key,
	      focusOffset: 0,
	      isBackward: false,
	      hasFocus: false
	    });
	  };

	  return SelectionState;
	}(SelectionStateRecord);

	module.exports = SelectionState;

/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule sanitizeDraftText
	 * 
	 */

	'use strict';

	var REGEX_BLOCK_DELIMITER = new RegExp('\r', 'g');

	function sanitizeDraftText(input) {
	  return input.replace(REGEX_BLOCK_DELIMITER, '');
	}

	module.exports = sanitizeDraftText;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EditorBidiService
	 * @typechecks
	 * 
	 */

	'use strict';

	var Immutable = __webpack_require__(6);
	var UnicodeBidiService = __webpack_require__(38);

	var nullthrows = __webpack_require__(41);

	var OrderedMap = Immutable.OrderedMap;


	var bidiService;

	var EditorBidiService = {
	  getDirectionMap: function getDirectionMap(content, prevBidiMap) {
	    if (!bidiService) {
	      bidiService = new UnicodeBidiService();
	    } else {
	      bidiService.reset();
	    }

	    var blockMap = content.getBlockMap();
	    var nextBidi = blockMap.valueSeq().map(function (block) {
	      return nullthrows(bidiService).getDirection(block.getText());
	    });
	    var bidiMap = OrderedMap(blockMap.keySeq().zip(nextBidi));

	    if (prevBidiMap != null && Immutable.is(prevBidiMap, bidiMap)) {
	      return prevBidiMap;
	    }

	    return bidiMap;
	  }
	};

	module.exports = EditorBidiService;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/**
	 * Stateful API for text direction detection
	 *
	 * This class can be used in applications where you need to detect the
	 * direction of a sequence of text blocks, where each direction shall be used
	 * as the fallback direction for the next one.
	 *
	 * NOTE: A default direction, if not provided, is set based on the global
	 *       direction, as defined by `UnicodeBidiDirection`.
	 *
	 * == Example ==
	 * ```
	 * var UnicodeBidiService = require('UnicodeBidiService');
	 *
	 * var bidiService = new UnicodeBidiService();
	 *
	 * ...
	 *
	 * bidiService.reset();
	 * for (var para in paragraphs) {
	 *   var dir = bidiService.getDirection(para);
	 *   ...
	 * }
	 * ```
	 *
	 * Part of our implementation of Unicode Bidirectional Algorithm (UBA)
	 * Unicode Standard Annex #9 (UAX9)
	 * http://www.unicode.org/reports/tr9/
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UnicodeBidi = __webpack_require__(39);
	var UnicodeBidiDirection = __webpack_require__(40);

	var invariant = __webpack_require__(19);

	var UnicodeBidiService = function () {

	  /**
	   * Stateful class for paragraph direction detection
	   *
	   * @param defaultDir  Default direction of the service
	   */
	  function UnicodeBidiService(defaultDir) {
	    _classCallCheck(this, UnicodeBidiService);

	    if (!defaultDir) {
	      defaultDir = UnicodeBidiDirection.getGlobalDir();
	    } else {
	      !UnicodeBidiDirection.isStrong(defaultDir) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Default direction must be a strong direction (LTR or RTL)') : invariant(false) : void 0;
	    }
	    this._defaultDir = defaultDir;
	    this.reset();
	  }

	  /**
	   * Reset the internal state
	   *
	   * Instead of creating a new instance, you can just reset() your instance
	   * everytime you start a new loop.
	   */


	  UnicodeBidiService.prototype.reset = function reset() {
	    this._lastDir = this._defaultDir;
	  };

	  /**
	   * Returns the direction of a block of text, and remembers it as the
	   * fall-back direction for the next paragraph.
	   *
	   * @param str  A text block, e.g. paragraph, table cell, tag
	   * @return     The resolved direction
	   */


	  UnicodeBidiService.prototype.getDirection = function getDirection(str) {
	    this._lastDir = UnicodeBidi.getDirection(str, this._lastDir);
	    return this._lastDir;
	  };

	  return UnicodeBidiService;
	}();

	module.exports = UnicodeBidiService;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/**
	 * Basic (stateless) API for text direction detection
	 *
	 * Part of our implementation of Unicode Bidirectional Algorithm (UBA)
	 * Unicode Standard Annex #9 (UAX9)
	 * http://www.unicode.org/reports/tr9/
	 */

	'use strict';

	var UnicodeBidiDirection = __webpack_require__(40);

	var invariant = __webpack_require__(19);

	/**
	 * RegExp ranges of characters with a *Strong* Bidi_Class value.
	 *
	 * Data is based on DerivedBidiClass.txt in UCD version 7.0.0.
	 *
	 * NOTE: For performance reasons, we only support Unicode's
	 *       Basic Multilingual Plane (BMP) for now.
	 */
	var RANGE_BY_BIDI_TYPE = {

	  L: 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u01BA\u01BB' + '\u01BC-\u01BF\u01C0-\u01C3\u01C4-\u0293\u0294\u0295-\u02AF\u02B0-\u02B8' + '\u02BB-\u02C1\u02D0-\u02D1\u02E0-\u02E4\u02EE\u0370-\u0373\u0376-\u0377' + '\u037A\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1' + '\u03A3-\u03F5\u03F7-\u0481\u0482\u048A-\u052F\u0531-\u0556\u0559' + '\u055A-\u055F\u0561-\u0587\u0589\u0903\u0904-\u0939\u093B\u093D' + '\u093E-\u0940\u0949-\u094C\u094E-\u094F\u0950\u0958-\u0961\u0964-\u0965' + '\u0966-\u096F\u0970\u0971\u0972-\u0980\u0982-\u0983\u0985-\u098C' + '\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD' + '\u09BE-\u09C0\u09C7-\u09C8\u09CB-\u09CC\u09CE\u09D7\u09DC-\u09DD' + '\u09DF-\u09E1\u09E6-\u09EF\u09F0-\u09F1\u09F4-\u09F9\u09FA\u0A03' + '\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33' + '\u0A35-\u0A36\u0A38-\u0A39\u0A3E-\u0A40\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F' + '\u0A72-\u0A74\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0' + '\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0ABE-\u0AC0\u0AC9\u0ACB-\u0ACC\u0AD0' + '\u0AE0-\u0AE1\u0AE6-\u0AEF\u0AF0\u0B02-\u0B03\u0B05-\u0B0C\u0B0F-\u0B10' + '\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B3E\u0B40' + '\u0B47-\u0B48\u0B4B-\u0B4C\u0B57\u0B5C-\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F' + '\u0B70\u0B71\u0B72-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95' + '\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9' + '\u0BBE-\u0BBF\u0BC1-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7' + '\u0BE6-\u0BEF\u0BF0-\u0BF2\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10' + '\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C41-\u0C44\u0C58-\u0C59\u0C60-\u0C61' + '\u0C66-\u0C6F\u0C7F\u0C82-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8' + '\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CBE\u0CBF\u0CC0-\u0CC4\u0CC6' + '\u0CC7-\u0CC8\u0CCA-\u0CCB\u0CD5-\u0CD6\u0CDE\u0CE0-\u0CE1\u0CE6-\u0CEF' + '\u0CF1-\u0CF2\u0D02-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D' + '\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D57\u0D60-\u0D61' + '\u0D66-\u0D6F\u0D70-\u0D75\u0D79\u0D7A-\u0D7F\u0D82-\u0D83\u0D85-\u0D96' + '\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD1\u0DD8-\u0DDF' + '\u0DE6-\u0DEF\u0DF2-\u0DF3\u0DF4\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E45' + '\u0E46\u0E4F\u0E50-\u0E59\u0E5A-\u0E5B\u0E81-\u0E82\u0E84\u0E87-\u0E88' + '\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7' + '\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6' + '\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F01-\u0F03\u0F04-\u0F12\u0F13\u0F14' + '\u0F15-\u0F17\u0F1A-\u0F1F\u0F20-\u0F29\u0F2A-\u0F33\u0F34\u0F36\u0F38' + '\u0F3E-\u0F3F\u0F40-\u0F47\u0F49-\u0F6C\u0F7F\u0F85\u0F88-\u0F8C' + '\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FCF\u0FD0-\u0FD4\u0FD5-\u0FD8' + '\u0FD9-\u0FDA\u1000-\u102A\u102B-\u102C\u1031\u1038\u103B-\u103C\u103F' + '\u1040-\u1049\u104A-\u104F\u1050-\u1055\u1056-\u1057\u105A-\u105D\u1061' + '\u1062-\u1064\u1065-\u1066\u1067-\u106D\u106E-\u1070\u1075-\u1081' + '\u1083-\u1084\u1087-\u108C\u108E\u108F\u1090-\u1099\u109A-\u109C' + '\u109E-\u109F\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FB\u10FC' + '\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288' + '\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5' + '\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1360-\u1368' + '\u1369-\u137C\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166D-\u166E' + '\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EB-\u16ED\u16EE-\u16F0' + '\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1735-\u1736' + '\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17B6\u17BE-\u17C5' + '\u17C7-\u17C8\u17D4-\u17D6\u17D7\u17D8-\u17DA\u17DC\u17E0-\u17E9' + '\u1810-\u1819\u1820-\u1842\u1843\u1844-\u1877\u1880-\u18A8\u18AA' + '\u18B0-\u18F5\u1900-\u191E\u1923-\u1926\u1929-\u192B\u1930-\u1931' + '\u1933-\u1938\u1946-\u194F\u1950-\u196D\u1970-\u1974\u1980-\u19AB' + '\u19B0-\u19C0\u19C1-\u19C7\u19C8-\u19C9\u19D0-\u19D9\u19DA\u1A00-\u1A16' + '\u1A19-\u1A1A\u1A1E-\u1A1F\u1A20-\u1A54\u1A55\u1A57\u1A61\u1A63-\u1A64' + '\u1A6D-\u1A72\u1A80-\u1A89\u1A90-\u1A99\u1AA0-\u1AA6\u1AA7\u1AA8-\u1AAD' + '\u1B04\u1B05-\u1B33\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B44\u1B45-\u1B4B' + '\u1B50-\u1B59\u1B5A-\u1B60\u1B61-\u1B6A\u1B74-\u1B7C\u1B82\u1B83-\u1BA0' + '\u1BA1\u1BA6-\u1BA7\u1BAA\u1BAE-\u1BAF\u1BB0-\u1BB9\u1BBA-\u1BE5\u1BE7' + '\u1BEA-\u1BEC\u1BEE\u1BF2-\u1BF3\u1BFC-\u1BFF\u1C00-\u1C23\u1C24-\u1C2B' + '\u1C34-\u1C35\u1C3B-\u1C3F\u1C40-\u1C49\u1C4D-\u1C4F\u1C50-\u1C59' + '\u1C5A-\u1C77\u1C78-\u1C7D\u1C7E-\u1C7F\u1CC0-\u1CC7\u1CD3\u1CE1' + '\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF2-\u1CF3\u1CF5-\u1CF6\u1D00-\u1D2B' + '\u1D2C-\u1D6A\u1D6B-\u1D77\u1D78\u1D79-\u1D9A\u1D9B-\u1DBF\u1E00-\u1F15' + '\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D' + '\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC' + '\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200E' + '\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D' + '\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2135-\u2138\u2139' + '\u213C-\u213F\u2145-\u2149\u214E\u214F\u2160-\u2182\u2183-\u2184' + '\u2185-\u2188\u2336-\u237A\u2395\u249C-\u24E9\u26AC\u2800-\u28FF' + '\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C7B\u2C7C-\u2C7D\u2C7E-\u2CE4' + '\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F' + '\u2D70\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE' + '\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005\u3006\u3007' + '\u3021-\u3029\u302E-\u302F\u3031-\u3035\u3038-\u303A\u303B\u303C' + '\u3041-\u3096\u309D-\u309E\u309F\u30A1-\u30FA\u30FC-\u30FE\u30FF' + '\u3105-\u312D\u3131-\u318E\u3190-\u3191\u3192-\u3195\u3196-\u319F' + '\u31A0-\u31BA\u31F0-\u31FF\u3200-\u321C\u3220-\u3229\u322A-\u3247' + '\u3248-\u324F\u3260-\u327B\u327F\u3280-\u3289\u328A-\u32B0\u32C0-\u32CB' + '\u32D0-\u32FE\u3300-\u3376\u337B-\u33DD\u33E0-\u33FE\u3400-\u4DB5' + '\u4E00-\u9FCC\uA000-\uA014\uA015\uA016-\uA48C\uA4D0-\uA4F7\uA4F8-\uA4FD' + '\uA4FE-\uA4FF\uA500-\uA60B\uA60C\uA610-\uA61F\uA620-\uA629\uA62A-\uA62B' + '\uA640-\uA66D\uA66E\uA680-\uA69B\uA69C-\uA69D\uA6A0-\uA6E5\uA6E6-\uA6EF' + '\uA6F2-\uA6F7\uA722-\uA76F\uA770\uA771-\uA787\uA789-\uA78A\uA78B-\uA78E' + '\uA790-\uA7AD\uA7B0-\uA7B1\uA7F7\uA7F8-\uA7F9\uA7FA\uA7FB-\uA801' + '\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA823-\uA824\uA827\uA830-\uA835' + '\uA836-\uA837\uA840-\uA873\uA880-\uA881\uA882-\uA8B3\uA8B4-\uA8C3' + '\uA8CE-\uA8CF\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8F8-\uA8FA\uA8FB\uA900-\uA909' + '\uA90A-\uA925\uA92E-\uA92F\uA930-\uA946\uA952-\uA953\uA95F\uA960-\uA97C' + '\uA983\uA984-\uA9B2\uA9B4-\uA9B5\uA9BA-\uA9BB\uA9BD-\uA9C0\uA9C1-\uA9CD' + '\uA9CF\uA9D0-\uA9D9\uA9DE-\uA9DF\uA9E0-\uA9E4\uA9E6\uA9E7-\uA9EF' + '\uA9F0-\uA9F9\uA9FA-\uA9FE\uAA00-\uAA28\uAA2F-\uAA30\uAA33-\uAA34' + '\uAA40-\uAA42\uAA44-\uAA4B\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F\uAA60-\uAA6F' + '\uAA70\uAA71-\uAA76\uAA77-\uAA79\uAA7A\uAA7B\uAA7D\uAA7E-\uAAAF\uAAB1' + '\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADC\uAADD\uAADE-\uAADF' + '\uAAE0-\uAAEA\uAAEB\uAAEE-\uAAEF\uAAF0-\uAAF1\uAAF2\uAAF3-\uAAF4\uAAF5' + '\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E' + '\uAB30-\uAB5A\uAB5B\uAB5C-\uAB5F\uAB64-\uAB65\uABC0-\uABE2\uABE3-\uABE4' + '\uABE6-\uABE7\uABE9-\uABEA\uABEB\uABEC\uABF0-\uABF9\uAC00-\uD7A3' + '\uD7B0-\uD7C6\uD7CB-\uD7FB\uE000-\uF8FF\uF900-\uFA6D\uFA70-\uFAD9' + '\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFF6F\uFF70' + '\uFF71-\uFF9D\uFF9E-\uFF9F\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF' + '\uFFD2-\uFFD7\uFFDA-\uFFDC',

	  R: '\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05D0-\u05EA\u05EB-\u05EF' + '\u05F0-\u05F2\u05F3-\u05F4\u05F5-\u05FF\u07C0-\u07C9\u07CA-\u07EA' + '\u07F4-\u07F5\u07FA\u07FB-\u07FF\u0800-\u0815\u081A\u0824\u0828' + '\u082E-\u082F\u0830-\u083E\u083F\u0840-\u0858\u085C-\u085D\u085E' + '\u085F-\u089F\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB37\uFB38-\uFB3C' + '\uFB3D\uFB3E\uFB3F\uFB40-\uFB41\uFB42\uFB43-\uFB44\uFB45\uFB46-\uFB4F',

	  AL: '\u0608\u060B\u060D\u061B\u061C\u061D\u061E-\u061F\u0620-\u063F\u0640' + '\u0641-\u064A\u066D\u066E-\u066F\u0671-\u06D3\u06D4\u06D5\u06E5-\u06E6' + '\u06EE-\u06EF\u06FA-\u06FC\u06FD-\u06FE\u06FF\u0700-\u070D\u070E\u070F' + '\u0710\u0712-\u072F\u074B-\u074C\u074D-\u07A5\u07B1\u07B2-\u07BF' + '\u08A0-\u08B2\u08B3-\u08E3\uFB50-\uFBB1\uFBB2-\uFBC1\uFBC2-\uFBD2' + '\uFBD3-\uFD3D\uFD40-\uFD4F\uFD50-\uFD8F\uFD90-\uFD91\uFD92-\uFDC7' + '\uFDC8-\uFDCF\uFDF0-\uFDFB\uFDFC\uFDFE-\uFDFF\uFE70-\uFE74\uFE75' + '\uFE76-\uFEFC\uFEFD-\uFEFE'

	};

	var REGEX_STRONG = new RegExp('[' + RANGE_BY_BIDI_TYPE.L + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + ']');

	var REGEX_RTL = new RegExp('[' + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + ']');

	/**
	 * Returns the first strong character (has Bidi_Class value of L, R, or AL).
	 *
	 * @param str  A text block; e.g. paragraph, table cell, tag
	 * @return     A character with strong bidi direction, or null if not found
	 */
	function firstStrongChar(str) {
	  var match = REGEX_STRONG.exec(str);
	  return match == null ? null : match[0];
	}

	/**
	 * Returns the direction of a block of text, based on the direction of its
	 * first strong character (has Bidi_Class value of L, R, or AL).
	 *
	 * @param str  A text block; e.g. paragraph, table cell, tag
	 * @return     The resolved direction
	 */
	function firstStrongCharDir(str) {
	  var strongChar = firstStrongChar(str);
	  if (strongChar == null) {
	    return UnicodeBidiDirection.NEUTRAL;
	  }
	  return REGEX_RTL.exec(strongChar) ? UnicodeBidiDirection.RTL : UnicodeBidiDirection.LTR;
	}

	/**
	 * Returns the direction of a block of text, based on the direction of its
	 * first strong character (has Bidi_Class value of L, R, or AL), or a fallback
	 * direction, if no strong character is found.
	 *
	 * This function is supposed to be used in respect to Higher-Level Protocol
	 * rule HL1. (http://www.unicode.org/reports/tr9/#HL1)
	 *
	 * @param str       A text block; e.g. paragraph, table cell, tag
	 * @param fallback  Fallback direction, used if no strong direction detected
	 *                  for the block (default = NEUTRAL)
	 * @return          The resolved direction
	 */
	function resolveBlockDir(str, fallback) {
	  fallback = fallback || UnicodeBidiDirection.NEUTRAL;
	  if (!str.length) {
	    return fallback;
	  }
	  var blockDir = firstStrongCharDir(str);
	  return blockDir === UnicodeBidiDirection.NEUTRAL ? fallback : blockDir;
	}

	/**
	 * Returns the direction of a block of text, based on the direction of its
	 * first strong character (has Bidi_Class value of L, R, or AL), or a fallback
	 * direction, if no strong character is found.
	 *
	 * NOTE: This function is similar to resolveBlockDir(), but uses the global
	 * direction as the fallback, so it *always* returns a Strong direction,
	 * making it useful for integration in places that you need to make the final
	 * decision, like setting some CSS class.
	 *
	 * This function is supposed to be used in respect to Higher-Level Protocol
	 * rule HL1. (http://www.unicode.org/reports/tr9/#HL1)
	 *
	 * @param str             A text block; e.g. paragraph, table cell
	 * @param strongFallback  Fallback direction, used if no strong direction
	 *                        detected for the block (default = global direction)
	 * @return                The resolved Strong direction
	 */
	function getDirection(str, strongFallback) {
	  if (!strongFallback) {
	    strongFallback = UnicodeBidiDirection.getGlobalDir();
	  }
	  !UnicodeBidiDirection.isStrong(strongFallback) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Fallback direction must be a strong direction') : invariant(false) : void 0;
	  return resolveBlockDir(str, strongFallback);
	}

	/**
	 * Returns true if getDirection(arguments...) returns LTR.
	 *
	 * @param str             A text block; e.g. paragraph, table cell
	 * @param strongFallback  Fallback direction, used if no strong direction
	 *                        detected for the block (default = global direction)
	 * @return                True if the resolved direction is LTR
	 */
	function isDirectionLTR(str, strongFallback) {
	  return getDirection(str, strongFallback) === UnicodeBidiDirection.LTR;
	}

	/**
	 * Returns true if getDirection(arguments...) returns RTL.
	 *
	 * @param str             A text block; e.g. paragraph, table cell
	 * @param strongFallback  Fallback direction, used if no strong direction
	 *                        detected for the block (default = global direction)
	 * @return                True if the resolved direction is RTL
	 */
	function isDirectionRTL(str, strongFallback) {
	  return getDirection(str, strongFallback) === UnicodeBidiDirection.RTL;
	}

	var UnicodeBidi = {
	  firstStrongChar: firstStrongChar,
	  firstStrongCharDir: firstStrongCharDir,
	  resolveBlockDir: resolveBlockDir,
	  getDirection: getDirection,
	  isDirectionLTR: isDirectionLTR,
	  isDirectionRTL: isDirectionRTL
	};

	module.exports = UnicodeBidi;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/**
	 * Constants to represent text directionality
	 *
	 * Also defines a *global* direciton, to be used in bidi algorithms as a
	 * default fallback direciton, when no better direction is found or provided.
	 *
	 * NOTE: Use `setGlobalDir()`, or update `initGlobalDir()`, to set the initial
	 *       global direction value based on the application.
	 *
	 * Part of the implementation of Unicode Bidirectional Algorithm (UBA)
	 * Unicode Standard Annex #9 (UAX9)
	 * http://www.unicode.org/reports/tr9/
	 */

	'use strict';

	var invariant = __webpack_require__(19);

	var NEUTRAL = 'NEUTRAL'; // No strong direction
	var LTR = 'LTR'; // Left-to-Right direction
	var RTL = 'RTL'; // Right-to-Left direction

	var globalDir = null;

	// == Helpers ==

	/**
	 * Check if a directionality value is a Strong one
	 */
	function isStrong(dir) {
	  return dir === LTR || dir === RTL;
	}

	/**
	 * Get string value to be used for `dir` HTML attribute or `direction` CSS
	 * property.
	 */
	function getHTMLDir(dir) {
	  !isStrong(dir) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
	  return dir === LTR ? 'ltr' : 'rtl';
	}

	/**
	 * Get string value to be used for `dir` HTML attribute or `direction` CSS
	 * property, but returns null if `dir` has same value as `otherDir`.
	 * `null`.
	 */
	function getHTMLDirIfDifferent(dir, otherDir) {
	  !isStrong(dir) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
	  !isStrong(otherDir) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`otherDir` must be a strong direction to be converted to HTML Direction') : invariant(false) : void 0;
	  return dir === otherDir ? null : getHTMLDir(dir);
	}

	// == Global Direction ==

	/**
	 * Set the global direction.
	 */
	function setGlobalDir(dir) {
	  globalDir = dir;
	}

	/**
	 * Initialize the global direction
	 */
	function initGlobalDir() {
	  setGlobalDir(LTR);
	}

	/**
	 * Get the global direction
	 */
	function getGlobalDir() {
	  if (!globalDir) {
	    this.initGlobalDir();
	  }
	  !globalDir ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Global direction not set.') : invariant(false) : void 0;
	  return globalDir;
	}

	var UnicodeBidiDirection = {
	  // Values
	  NEUTRAL: NEUTRAL,
	  LTR: LTR,
	  RTL: RTL,
	  // Helpers
	  isStrong: isStrong,
	  getHTMLDir: getHTMLDir,
	  getHTMLDirIfDifferent: getHTMLDirIfDifferent,
	  // Global Direction
	  setGlobalDir: setGlobalDir,
	  initGlobalDir: initGlobalDir,
	  getGlobalDir: getGlobalDir
	};

	module.exports = UnicodeBidiDirection;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	var nullthrows = function nullthrows(x) {
	  if (x != null) {
	    return x;
	  }
	  throw new Error("Got unexpected null or undefined");
	};

	module.exports = nullthrows;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CompositeDraftDecorator
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Immutable = __webpack_require__(6);

	var List = Immutable.List;


	var DELIMITER = '.';

	/**
	 * A CompositeDraftDecorator traverses through a list of DraftDecorator
	 * instances to identify sections of a ContentBlock that should be rendered
	 * in a "decorated" manner. For example, hashtags, mentions, and links may
	 * be intended to stand out visually, be rendered as anchors, etc.
	 *
	 * The list of decorators supplied to the constructor will be used in the
	 * order they are provided. This allows the caller to specify a priority for
	 * string matching, in case of match collisions among decorators.
	 *
	 * For instance, I may have a link with a `#` in its text. Though this section
	 * of text may match our hashtag decorator, it should not be treated as a
	 * hashtag. I should therefore list my link DraftDecorator
	 * before my hashtag DraftDecorator when constructing this composite
	 * decorator instance.
	 *
	 * Thus, when a collision like this is encountered, the earlier match is
	 * preserved and the new match is discarded.
	 */

	var CompositeDraftDecorator = function () {
	  function CompositeDraftDecorator(decorators) {
	    _classCallCheck(this, CompositeDraftDecorator);

	    // Copy the decorator array, since we use this array order to determine
	    // precedence of decoration matching. If the array is mutated externally,
	    // we don't want to be affected here.
	    this._decorators = decorators.slice();
	  }

	  CompositeDraftDecorator.prototype.getDecorations = function getDecorations(block) {
	    var decorations = Array(block.getText().length).fill(null);

	    this._decorators.forEach(function ( /*object*/decorator, /*number*/ii) {
	      var counter = 0;
	      var strategy = decorator.strategy;
	      strategy(block, function ( /*number*/start, /*number*/end) {
	        // Find out if any of our matching range is already occupied
	        // by another decorator. If so, discard the match. Otherwise, store
	        // the component key for rendering.
	        if (canOccupySlice(decorations, start, end)) {
	          occupySlice(decorations, start, end, ii + DELIMITER + counter);
	          counter++;
	        }
	      });
	    });

	    return List(decorations);
	  };

	  CompositeDraftDecorator.prototype.getComponentForKey = function getComponentForKey(key) {
	    var componentKey = parseInt(key.split(DELIMITER)[0], 10);
	    return this._decorators[componentKey].component;
	  };

	  CompositeDraftDecorator.prototype.getPropsForKey = function getPropsForKey(key) {
	    var componentKey = parseInt(key.split(DELIMITER)[0], 10);
	    return this._decorators[componentKey].props;
	  };

	  return CompositeDraftDecorator;
	}();

	/**
	 * Determine whether we can occupy the specified slice of the decorations
	 * array.
	 */


	function canOccupySlice(decorations, start, end) {
	  for (var ii = start; ii < end; ii++) {
	    if (decorations[ii] != null) {
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Splice the specified component into our decoration array at the desired
	 * range.
	 */
	function occupySlice(targetArr, start, end, componentKey) {
	  for (var ii = start; ii < end; ii++) {
	    targetArr[ii] = componentKey;
	  }
	}

	module.exports = CompositeDraftDecorator;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultDraftBlockRenderMap
	 * 
	 */

	'use strict';

	var _require = __webpack_require__(6);

	var Map = _require.Map;

	var React = __webpack_require__(1);

	var cx = __webpack_require__(44);

	var UL_WRAP = React.createElement('ul', { className: cx('public/DraftStyleDefault/ul') });
	var OL_WRAP = React.createElement('ol', { className: cx('public/DraftStyleDefault/ol') });
	var PRE_WRAP = React.createElement('pre', { className: cx('public/DraftStyleDefault/pre') });

	module.exports = Map({
	  'header-one': {
	    element: 'h1'
	  },
	  'header-two': {
	    element: 'h2'
	  },
	  'header-three': {
	    element: 'h3'
	  },
	  'header-four': {
	    element: 'h4'
	  },
	  'header-five': {
	    element: 'h5'
	  },
	  'header-six': {
	    element: 'h6'
	  },
	  'unordered-list-item': {
	    element: 'li',
	    wrapper: UL_WRAP
	  },
	  'ordered-list-item': {
	    element: 'li',
	    wrapper: OL_WRAP
	  },
	  'blockquote': {
	    element: 'blockquote'
	  },
	  'atomic': {
	    element: 'figure'
	  },
	  'code-block': {
	    element: 'pre',
	    wrapper: PRE_WRAP
	  },
	  'unstyled': {
	    element: 'div'
	  }
	});

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).filter(function (className) {
	      return classNames[className];
	    }).map(replace).join(' ');
	  }
	  return Array.prototype.map.call(arguments, replace).join(' ');
	}

	function replace(str) {
	  return str.replace(/\//g, '-');
	}

	module.exports = cx;

/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultDraftInlineStyle
	 * 
	 */

	'use strict';

	module.exports = {
	  BOLD: {
	    fontWeight: 'bold'
	  },

	  CODE: {
	    fontFamily: 'monospace',
	    wordWrap: 'break-word'
	  },

	  ITALIC: {
	    fontStyle: 'italic'
	  },

	  STRIKETHROUGH: {
	    textDecoration: 'line-through'
	  },

	  UNDERLINE: {
	    textDecoration: 'underline'
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditor.react
	 * @typechecks
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(17);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DefaultDraftBlockRenderMap = __webpack_require__(43);
	var DefaultDraftInlineStyle = __webpack_require__(45);
	var DraftEditorCompositionHandler = __webpack_require__(47);
	var DraftEditorContents = __webpack_require__(51);
	var DraftEditorDragHandler = __webpack_require__(80);
	var DraftEditorEditHandler = __webpack_require__(89);
	var DraftEditorPlaceholder = __webpack_require__(130);
	var EditorState = __webpack_require__(31);
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Scroll = __webpack_require__(68);
	var Style = __webpack_require__(69);
	var UserAgent = __webpack_require__(55);

	var cx = __webpack_require__(44);
	var emptyFunction = __webpack_require__(33);
	var generateRandomKey = __webpack_require__(23);
	var getDefaultKeyBinding = __webpack_require__(131);
	var nullthrows = __webpack_require__(41);
	var getScrollPosition = __webpack_require__(75);

	var isIE = UserAgent.isBrowser('IE');

	// IE does not support the `input` event on contentEditable, so we can't
	// observe spellcheck behavior.
	var allowSpellCheck = !isIE;

	// Define a set of handler objects to correspond to each possible `mode`
	// of editor behavior.
	var handlerMap = {
	  'edit': DraftEditorEditHandler,
	  'composite': DraftEditorCompositionHandler,
	  'drag': DraftEditorDragHandler,
	  'cut': null,
	  'render': null
	};

	/**
	 * `DraftEditor` is the root editor component. It composes a `contentEditable`
	 * div, and provides a wide variety of useful function props for managing the
	 * state of the editor. See `DraftEditorProps` for details.
	 */
	var DraftEditor = function (_React$Component) {
	  _inherits(DraftEditor, _React$Component);

	  function DraftEditor(props) {
	    _classCallCheck(this, DraftEditor);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this._blockSelectEvents = false;
	    _this._clipboard = null;
	    _this._guardAgainstRender = false;
	    _this._handler = null;
	    _this._dragCount = 0;
	    _this._editorKey = generateRandomKey();
	    _this._placeholderAccessibilityID = 'placeholder-' + _this._editorKey;

	    _this._onBeforeInput = _this._buildHandler('onBeforeInput');
	    _this._onBlur = _this._buildHandler('onBlur');
	    _this._onCharacterData = _this._buildHandler('onCharacterData');
	    _this._onCompositionEnd = _this._buildHandler('onCompositionEnd');
	    _this._onCompositionStart = _this._buildHandler('onCompositionStart');
	    _this._onCopy = _this._buildHandler('onCopy');
	    _this._onCut = _this._buildHandler('onCut');
	    _this._onDragEnd = _this._buildHandler('onDragEnd');
	    _this._onDragOver = _this._buildHandler('onDragOver');
	    _this._onDragStart = _this._buildHandler('onDragStart');
	    _this._onDrop = _this._buildHandler('onDrop');
	    _this._onInput = _this._buildHandler('onInput');
	    _this._onFocus = _this._buildHandler('onFocus');
	    _this._onKeyDown = _this._buildHandler('onKeyDown');
	    _this._onKeyPress = _this._buildHandler('onKeyPress');
	    _this._onKeyUp = _this._buildHandler('onKeyUp');
	    _this._onMouseDown = _this._buildHandler('onMouseDown');
	    _this._onMouseUp = _this._buildHandler('onMouseUp');
	    _this._onPaste = _this._buildHandler('onPaste');
	    _this._onSelect = _this._buildHandler('onSelect');

	    // Manual binding for public and internal methods.
	    _this.focus = _this._focus.bind(_this);
	    _this.blur = _this._blur.bind(_this);
	    _this.setMode = _this._setMode.bind(_this);
	    _this.exitCurrentMode = _this._exitCurrentMode.bind(_this);
	    _this.restoreEditorDOM = _this._restoreEditorDOM.bind(_this);
	    _this.setRenderGuard = _this._setRenderGuard.bind(_this);
	    _this.removeRenderGuard = _this._removeRenderGuard.bind(_this);
	    _this.setClipboard = _this._setClipboard.bind(_this);
	    _this.getClipboard = _this._getClipboard.bind(_this);
	    _this.getEditorKey = function () {
	      return _this._editorKey;
	    };
	    _this.update = _this._update.bind(_this);
	    _this.onDragEnter = _this._onDragEnter.bind(_this);
	    _this.onDragLeave = _this._onDragLeave.bind(_this);

	    // See `_restoreEditorDOM()`.
	    _this.state = { containerKey: 0 };
	    return _this;
	  }

	  /**
	   * Build a method that will pass the event to the specified handler method.
	   * This allows us to look up the correct handler function for the current
	   * editor mode, if any has been specified.
	   */


	  /**
	   * Define proxies that can route events to the current handler.
	   */


	  DraftEditor.prototype._buildHandler = function _buildHandler(eventName) {
	    var _this2 = this;

	    return function (e) {
	      if (!_this2.props.readOnly) {
	        var method = _this2._handler && _this2._handler[eventName];
	        method && method.call(_this2, e);
	      }
	    };
	  };

	  DraftEditor.prototype._showPlaceholder = function _showPlaceholder() {
	    return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText();
	  };

	  DraftEditor.prototype._renderPlaceholder = function _renderPlaceholder() {
	    if (this._showPlaceholder()) {
	      return React.createElement(DraftEditorPlaceholder, {
	        text: nullthrows(this.props.placeholder),
	        editorState: this.props.editorState,
	        textAlignment: this.props.textAlignment,
	        accessibilityID: this._placeholderAccessibilityID
	      });
	    }
	    return null;
	  };

	  DraftEditor.prototype.render = function render() {
	    var _props = this.props;
	    var readOnly = _props.readOnly;
	    var textAlignment = _props.textAlignment;

	    var rootClass = cx({
	      'DraftEditor/root': true,
	      'DraftEditor/alignLeft': textAlignment === 'left',
	      'DraftEditor/alignRight': textAlignment === 'right',
	      'DraftEditor/alignCenter': textAlignment === 'center'
	    });

	    var contentStyle = {
	      outline: 'none',
	      whiteSpace: 'pre-wrap',
	      wordWrap: 'break-word'
	    };

	    return React.createElement(
	      'div',
	      { className: rootClass },
	      this._renderPlaceholder(),
	      React.createElement(
	        'div',
	        {
	          className: cx('DraftEditor/editorContainer'),
	          key: 'editor' + this.state.containerKey,
	          ref: 'editorContainer' },
	        React.createElement(
	          'div',
	          {
	            'aria-activedescendant': readOnly ? null : this.props.ariaActiveDescendantID,
	            'aria-autocomplete': readOnly ? null : this.props.ariaAutoComplete,
	            'aria-describedby': this._showPlaceholder() ? this._placeholderAccessibilityID : null,
	            'aria-expanded': readOnly ? null : this.props.ariaExpanded,
	            'aria-haspopup': readOnly ? null : this.props.ariaHasPopup,
	            'aria-label': this.props.ariaLabel,
	            'aria-owns': readOnly ? null : this.props.ariaOwneeID,
	            className: cx('public/DraftEditor/content'),
	            contentEditable: !readOnly,
	            'data-testid': this.props.webDriverTestID,
	            onBeforeInput: this._onBeforeInput,
	            onBlur: this._onBlur,
	            onCompositionEnd: this._onCompositionEnd,
	            onCompositionStart: this._onCompositionStart,
	            onCopy: this._onCopy,
	            onCut: this._onCut,
	            onDragEnd: this._onDragEnd,
	            onDragEnter: this.onDragEnter,
	            onDragLeave: this.onDragLeave,
	            onDragOver: this._onDragOver,
	            onDragStart: this._onDragStart,
	            onDrop: this._onDrop,
	            onFocus: this._onFocus,
	            onInput: this._onInput,
	            onKeyDown: this._onKeyDown,
	            onKeyPress: this._onKeyPress,
	            onKeyUp: this._onKeyUp,
	            onMouseUp: this._onMouseUp,
	            onPaste: this._onPaste,
	            onSelect: this._onSelect,
	            ref: 'editor',
	            role: readOnly ? null : this.props.role || 'textbox',
	            spellCheck: allowSpellCheck && this.props.spellCheck,
	            style: contentStyle,
	            suppressContentEditableWarning: true,
	            tabIndex: this.props.tabIndex },
	          React.createElement(DraftEditorContents, {
	            blockRenderMap: this.props.blockRenderMap,
	            blockRendererFn: this.props.blockRendererFn,
	            blockStyleFn: this.props.blockStyleFn,
	            customStyleMap: _extends({}, DefaultDraftInlineStyle, this.props.customStyleMap),
	            customStyleFn: this.props.customStyleFn,
	            editorKey: this._editorKey,
	            editorState: this.props.editorState
	          })
	        )
	      )
	    );
	  };

	  DraftEditor.prototype.componentDidMount = function componentDidMount() {
	    this.setMode('edit');

	    /**
	     * IE has a hardcoded "feature" that attempts to convert link text into
	     * anchors in contentEditable DOM. This breaks the editor's expectations of
	     * the DOM, and control is lost. Disable it to make IE behave.
	     * See: http://blogs.msdn.com/b/ieinternals/archive/2010/09/15/
	     * ie9-beta-minor-change-list.aspx
	     */
	    if (isIE) {
	      document.execCommand('AutoUrlDetect', false, false);
	    }
	  };

	  /**
	   * Prevent selection events from affecting the current editor state. This
	   * is mostly intended to defend against IE, which fires off `selectionchange`
	   * events regardless of whether the selection is set via the browser or
	   * programmatically. We only care about selection events that occur because
	   * of browser interaction, not re-renders and forced selections.
	   */


	  DraftEditor.prototype.componentWillUpdate = function componentWillUpdate() {
	    this._blockSelectEvents = true;
	  };

	  DraftEditor.prototype.componentDidUpdate = function componentDidUpdate() {
	    this._blockSelectEvents = false;
	  };

	  /**
	   * Used via `this.focus()`.
	   *
	   * Force focus back onto the editor node.
	   *
	   * Forcing focus causes the browser to scroll to the top of the editor, which
	   * may be undesirable when the editor is taller than the viewport. To solve
	   * this, either use a specified scroll position (in cases like `cut` behavior
	   * where it should be restored to a known position) or store the current
	   * scroll state and put it back in place after focus has been forced.
	   */


	  DraftEditor.prototype._focus = function _focus(scrollPosition) {
	    var editorState = this.props.editorState;

	    var alreadyHasFocus = editorState.getSelection().getHasFocus();
	    var editorNode = ReactDOM.findDOMNode(this.refs.editor);

	    var scrollParent = Style.getScrollParent(editorNode);

	    var _ref = scrollPosition || getScrollPosition(scrollParent);

	    var x = _ref.x;
	    var y = _ref.y;


	    editorNode.focus();
	    if (scrollParent === window) {
	      window.scrollTo(x, y);
	    } else {
	      Scroll.setTop(scrollParent, y);
	    }

	    // On Chrome and Safari, calling focus on contenteditable focuses the
	    // cursor at the first character. This is something you don't expect when
	    // you're clicking on an input element but not directly on a character.
	    // Put the cursor back where it was before the blur.
	    if (!alreadyHasFocus) {
	      this.update(EditorState.forceSelection(editorState, editorState.getSelection()));
	    }
	  };

	  DraftEditor.prototype._blur = function _blur() {
	    ReactDOM.findDOMNode(this.refs.editor).blur();
	  };

	  /**
	   * Used via `this.setMode(...)`.
	   *
	   * Set the behavior mode for the editor component. This switches the current
	   * handler module to ensure that DOM events are managed appropriately for
	   * the active mode.
	   */


	  DraftEditor.prototype._setMode = function _setMode(mode) {
	    this._handler = handlerMap[mode];
	  };

	  DraftEditor.prototype._exitCurrentMode = function _exitCurrentMode() {
	    this.setMode('edit');
	  };

	  /**
	   * Used via `this.restoreEditorDOM()`.
	   *
	   * Force a complete re-render of the editor based on the current EditorState.
	   * This is useful when we know we are going to lose control of the DOM
	   * state (cut command, IME) and we want to make sure that reconciliation
	   * occurs on a version of the DOM that is synchronized with our EditorState.
	   */


	  DraftEditor.prototype._restoreEditorDOM = function _restoreEditorDOM(scrollPosition) {
	    var _this3 = this;

	    this.setState({ containerKey: this.state.containerKey + 1 }, function () {
	      _this3._focus(scrollPosition);
	    });
	  };

	  /**
	   * Guard against rendering. Intended for use when we need to manually
	   * reset editor contents, to ensure that no outside influences lead to
	   * React reconciliation when we are in an uncertain state.
	   */


	  DraftEditor.prototype._setRenderGuard = function _setRenderGuard() {
	    this._guardAgainstRender = true;
	  };

	  DraftEditor.prototype._removeRenderGuard = function _removeRenderGuard() {
	    this._guardAgainstRender = false;
	  };

	  /**
	   * Used via `this.setClipboard(...)`.
	   *
	   * Set the clipboard state for a cut/copy event.
	   */


	  DraftEditor.prototype._setClipboard = function _setClipboard(clipboard) {
	    this._clipboard = clipboard;
	  };

	  /**
	   * Used via `this.getClipboard()`.
	   *
	   * Retrieve the clipboard state for a cut/copy event.
	   */


	  DraftEditor.prototype._getClipboard = function _getClipboard() {
	    return this._clipboard;
	  };

	  /**
	   * Used via `this.update(...)`.
	   *
	   * Propagate a new `EditorState` object to higher-level components. This is
	   * the method by which event handlers inform the `DraftEditor` component of
	   * state changes. A component that composes a `DraftEditor` **must** provide
	   * an `onChange` prop to receive state updates passed along from this
	   * function.
	   */


	  DraftEditor.prototype._update = function _update(editorState) {
	    this.props.onChange(editorState);
	  };

	  /**
	   * Used in conjunction with `_onDragLeave()`, by counting the number of times
	   * a dragged element enters and leaves the editor (or any of its children),
	   * to determine when the dragged element absolutely leaves the editor.
	   */


	  DraftEditor.prototype._onDragEnter = function _onDragEnter() {
	    this._dragCount++;
	  };

	  /**
	   * See `_onDragEnter()`.
	   */


	  DraftEditor.prototype._onDragLeave = function _onDragLeave() {
	    this._dragCount--;
	    if (this._dragCount === 0) {
	      this.exitCurrentMode();
	    }
	  };

	  return DraftEditor;
	}(React.Component);

	DraftEditor.defaultProps = {
	  blockRenderMap: DefaultDraftBlockRenderMap,
	  blockRendererFn: emptyFunction.thatReturnsNull,
	  blockStyleFn: emptyFunction.thatReturns(''),
	  keyBindingFn: getDefaultKeyBinding,
	  readOnly: false,
	  spellCheck: false,
	  stripPastedStyles: false
	};


	module.exports = DraftEditor;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorCompositionHandler
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(10);
	var EditorState = __webpack_require__(31);
	var Keys = __webpack_require__(48);

	var getEntityKeyForSelection = __webpack_require__(49);
	var isSelectionAtLeafStart = __webpack_require__(50);

	/**
	 * Millisecond delay to allow `compositionstart` to fire again upon
	 * `compositionend`.
	 *
	 * This is used for Korean input to ensure that typing can continue without
	 * the editor trying to render too quickly. More specifically, Safari 7.1+
	 * triggers `compositionstart` a little slower than Chrome/FF, which
	 * leads to composed characters being resolved and re-render occurring
	 * sooner than we want.
	 */
	var RESOLVE_DELAY = 20;

	/**
	 * A handful of variables used to track the current composition and its
	 * resolution status. These exist at the module level because it is not
	 * possible to have compositions occurring in multiple editors simultaneously,
	 * and it simplifies state management with respect to the DraftEditor component.
	 */
	var resolved = false;
	var stillComposing = false;
	var textInputData = '';

	var DraftEditorCompositionHandler = {
	  onBeforeInput: function onBeforeInput(e) {
	    textInputData = (textInputData || '') + e.data;
	  },

	  /**
	   * A `compositionstart` event has fired while we're still in composition
	   * mode. Continue the current composition session to prevent a re-render.
	   */
	  onCompositionStart: function onCompositionStart() {
	    stillComposing = true;
	  },

	  /**
	   * Attempt to end the current composition session.
	   *
	   * Defer handling because browser will still insert the chars into active
	   * element after `compositionend`. If a `compositionstart` event fires
	   * before `resolveComposition` executes, our composition session will
	   * continue.
	   *
	   * The `resolved` flag is useful because certain IME interfaces fire the
	   * `compositionend` event multiple times, thus queueing up multiple attempts
	   * at handling the composition. Since handling the same composition event
	   * twice could break the DOM, we only use the first event. Example: Arabic
	   * Google Input Tools on Windows 8.1 fires `compositionend` three times.
	   */
	  onCompositionEnd: function onCompositionEnd() {
	    var _this = this;

	    resolved = false;
	    stillComposing = false;
	    setTimeout(function () {
	      if (!resolved) {
	        DraftEditorCompositionHandler.resolveComposition.call(_this);
	      }
	    }, RESOLVE_DELAY);
	  },

	  /**
	   * In Safari, keydown events may fire when committing compositions. If
	   * the arrow keys are used to commit, prevent default so that the cursor
	   * doesn't move, otherwise it will jump back noticeably on re-render.
	   */
	  onKeyDown: function onKeyDown(e) {
	    if (e.which === Keys.RIGHT || e.which === Keys.LEFT) {
	      e.preventDefault();
	    }
	  },

	  /**
	   * Keypress events may fire when committing compositions. In Firefox,
	   * pressing RETURN commits the composition and inserts extra newline
	   * characters that we do not want. `preventDefault` allows the composition
	   * to be committed while preventing the extra characters.
	   */
	  onKeyPress: function onKeyPress(e) {
	    if (e.which === Keys.RETURN) {
	      e.preventDefault();
	    }
	  },

	  /**
	   * Attempt to insert composed characters into the document.
	   *
	   * If we are still in a composition session, do nothing. Otherwise, insert
	   * the characters into the document and terminate the composition session.
	   *
	   * If no characters were composed -- for instance, the user
	   * deleted all composed characters and committed nothing new --
	   * force a re-render. We also re-render when the composition occurs
	   * at the beginning of a leaf, to ensure that if the browser has
	   * created a new text node for the composition, we will discard it.
	   *
	   * Resetting innerHTML will move focus to the beginning of the editor,
	   * so we update to force it back to the correct place.
	   */
	  resolveComposition: function resolveComposition() {
	    if (stillComposing) {
	      return;
	    }

	    resolved = true;
	    var composedChars = textInputData;
	    textInputData = '';

	    var editorState = EditorState.set(this.props.editorState, {
	      inCompositionMode: false
	    });

	    var currentStyle = editorState.getCurrentInlineStyle();
	    var entityKey = getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection());

	    var mustReset = !composedChars || isSelectionAtLeafStart(editorState) || currentStyle.size > 0 || entityKey !== null;

	    if (mustReset) {
	      this.restoreEditorDOM();
	    }

	    this.exitCurrentMode();
	    this.removeRenderGuard();

	    if (composedChars) {
	      // If characters have been composed, re-rendering with the update
	      // is sufficient to reset the editor.
	      var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), composedChars, currentStyle, entityKey);
	      this.update(EditorState.push(editorState, contentState, 'insert-characters'));
	      return;
	    }

	    if (mustReset) {
	      this.update(EditorState.set(editorState, {
	        nativelyRenderedContent: null,
	        forceSelection: true
	      }));
	    }
	  }
	};

	module.exports = DraftEditorCompositionHandler;

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	module.exports = {
	  BACKSPACE: 8,
	  TAB: 9,
	  RETURN: 13,
	  ALT: 18,
	  ESC: 27,
	  SPACE: 32,
	  PAGE_UP: 33,
	  PAGE_DOWN: 34,
	  END: 35,
	  HOME: 36,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  DELETE: 46,
	  COMMA: 188,
	  PERIOD: 190,
	  A: 65,
	  Z: 90,
	  ZERO: 48,
	  NUMPAD_0: 96,
	  NUMPAD_9: 105
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEntityKeyForSelection
	 * @typechecks
	 * 
	 */

	'use strict';

	var DraftEntity = __webpack_require__(16);

	/**
	 * Return the entity key that should be used when inserting text for the
	 * specified target selection, only if the entity is `MUTABLE`. `IMMUTABLE`
	 * and `SEGMENTED` entities should not be used for insertion behavior.
	 */
	function getEntityKeyForSelection(contentState, targetSelection) {
	  var entityKey;

	  if (targetSelection.isCollapsed()) {
	    var key = targetSelection.getAnchorKey();
	    var offset = targetSelection.getAnchorOffset();
	    if (offset > 0) {
	      entityKey = contentState.getBlockForKey(key).getEntityAt(offset - 1);
	      return filterKey(entityKey);
	    }
	    return null;
	  }

	  var startKey = targetSelection.getStartKey();
	  var startOffset = targetSelection.getStartOffset();
	  var startBlock = contentState.getBlockForKey(startKey);

	  entityKey = startOffset === startBlock.getLength() ? null : startBlock.getEntityAt(startOffset);

	  return filterKey(entityKey);
	}

	/**
	 * Determine whether an entity key corresponds to a `MUTABLE` entity. If so,
	 * return it. If not, return null.
	 */
	function filterKey(entityKey) {
	  if (entityKey) {
	    var entity = DraftEntity.get(entityKey);
	    return entity.getMutability() === 'MUTABLE' ? entityKey : null;
	  }
	  return null;
	}

	module.exports = getEntityKeyForSelection;

/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isSelectionAtLeafStart
	 * @typechecks
	 * 
	 */

	'use strict';

	function isSelectionAtLeafStart(editorState) {
	  var selection = editorState.getSelection();
	  var anchorKey = selection.getAnchorKey();
	  var blockTree = editorState.getBlockTree(anchorKey);
	  var offset = selection.getStartOffset();

	  var isAtStart = false;

	  blockTree.some(function (leafSet) {
	    if (offset === leafSet.get('start')) {
	      isAtStart = true;
	      return true;
	    }

	    if (offset < leafSet.get('end')) {
	      return leafSet.get('leaves').some(function (leaf) {
	        var leafStart = leaf.get('start');
	        if (offset === leafStart) {
	          isAtStart = true;
	          return true;
	        }

	        return false;
	      });
	    }

	    return false;
	  });

	  return isAtStart;
	}

	module.exports = isSelectionAtLeafStart;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorContents.react
	 * @typechecks
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(17);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DraftEditorBlock = __webpack_require__(52);
	var DraftOffsetKey = __webpack_require__(67);
	var EditorState = __webpack_require__(31);
	var React = __webpack_require__(1);

	var cx = __webpack_require__(44);
	var joinClasses = __webpack_require__(79);
	var nullthrows = __webpack_require__(41);

	/**
	 * `DraftEditorContents` is the container component for all block components
	 * rendered for a `DraftEditor`. It is optimized to aggressively avoid
	 * re-rendering blocks whenever possible.
	 *
	 * This component is separate from `DraftEditor` because certain props
	 * (for instance, ARIA props) must be allowed to update without affecting
	 * the contents of the editor.
	 */
	var DraftEditorContents = function (_React$Component) {
	  _inherits(DraftEditorContents, _React$Component);

	  function DraftEditorContents() {
	    _classCallCheck(this, DraftEditorContents);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  DraftEditorContents.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    var prevEditorState = this.props.editorState;
	    var nextEditorState = nextProps.editorState;

	    var prevDirectionMap = prevEditorState.getDirectionMap();
	    var nextDirectionMap = nextEditorState.getDirectionMap();

	    // Text direction has changed for one or more blocks. We must re-render.
	    if (prevDirectionMap !== nextDirectionMap) {
	      return true;
	    }

	    var didHaveFocus = prevEditorState.getSelection().getHasFocus();
	    var nowHasFocus = nextEditorState.getSelection().getHasFocus();

	    if (didHaveFocus !== nowHasFocus) {
	      return true;
	    }

	    var nextNativeContent = nextEditorState.getNativelyRenderedContent();

	    var wasComposing = prevEditorState.isInCompositionMode();
	    var nowComposing = nextEditorState.isInCompositionMode();

	    // If the state is unchanged or we're currently rendering a natively
	    // rendered state, there's nothing new to be done.
	    if (prevEditorState === nextEditorState || nextNativeContent !== null && nextEditorState.getCurrentContent() === nextNativeContent || wasComposing && nowComposing) {
	      return false;
	    }

	    var prevContent = prevEditorState.getCurrentContent();
	    var nextContent = nextEditorState.getCurrentContent();
	    var prevDecorator = prevEditorState.getDecorator();
	    var nextDecorator = nextEditorState.getDecorator();
	    return wasComposing !== nowComposing || prevContent !== nextContent || prevDecorator !== nextDecorator || nextEditorState.mustForceSelection();
	  };

	  DraftEditorContents.prototype.render = function render() {
	    var _props = this.props;
	    var blockRenderMap = _props.blockRenderMap;
	    var blockRendererFn = _props.blockRendererFn;
	    var customStyleMap = _props.customStyleMap;
	    var customStyleFn = _props.customStyleFn;
	    var editorState = _props.editorState;


	    var content = editorState.getCurrentContent();
	    var selection = editorState.getSelection();
	    var forceSelection = editorState.mustForceSelection();
	    var decorator = editorState.getDecorator();
	    var directionMap = nullthrows(editorState.getDirectionMap());

	    var blocksAsArray = content.getBlocksAsArray();
	    var processedBlocks = [];
	    var currentDepth = null;
	    var lastWrapperTemplate = null;

	    for (var ii = 0; ii < blocksAsArray.length; ii++) {
	      var _block = blocksAsArray[ii];
	      var key = _block.getKey();
	      var blockType = _block.getType();

	      var customRenderer = blockRendererFn(_block);
	      var CustomComponent = void 0,
	          customProps = void 0,
	          customEditable = void 0;
	      if (customRenderer) {
	        CustomComponent = customRenderer.component;
	        customProps = customRenderer.props;
	        customEditable = customRenderer.editable;
	      }

	      var direction = directionMap.get(key);
	      var offsetKey = DraftOffsetKey.encode(key, 0, 0);
	      var componentProps = {
	        block: _block,
	        blockProps: customProps,
	        customStyleMap: customStyleMap,
	        customStyleFn: customStyleFn,
	        decorator: decorator,
	        direction: direction,
	        forceSelection: forceSelection,
	        key: key,
	        offsetKey: offsetKey,
	        selection: selection,
	        tree: editorState.getBlockTree(key)
	      };

	      var configForType = blockRenderMap.get(blockType);
	      var wrapperTemplate = configForType.wrapper;

	      var _Element = configForType.element || blockRenderMap.get('unstyled').element;

	      var depth = _block.getDepth();
	      var className = this.props.blockStyleFn(_block);

	      // List items are special snowflakes, since we handle nesting and
	      // counters manually.
	      if (_Element === 'li') {
	        var shouldResetCount = lastWrapperTemplate !== wrapperTemplate || currentDepth === null || depth > currentDepth;
	        className = joinClasses(className, getListItemClasses(blockType, depth, shouldResetCount, direction));
	      }

	      var Component = CustomComponent || DraftEditorBlock;
	      var childProps = {
	        className: className,
	        'data-block': true,
	        'data-editor': this.props.editorKey,
	        'data-offset-key': offsetKey,
	        key: key
	      };
	      if (customEditable !== undefined) {
	        childProps = _extends({}, childProps, {
	          contentEditable: customEditable,
	          suppressContentEditableWarning: true
	        });
	      }

	      var child = React.createElement(_Element, childProps, React.createElement(Component, componentProps));

	      processedBlocks.push({
	        block: child,
	        wrapperTemplate: wrapperTemplate,
	        key: key,
	        offsetKey: offsetKey
	      });

	      if (wrapperTemplate) {
	        currentDepth = _block.getDepth();
	      } else {
	        currentDepth = null;
	      }
	      lastWrapperTemplate = wrapperTemplate;
	    }

	    // Group contiguous runs of blocks that have the same wrapperTemplate
	    var outputBlocks = [];
	    for (var _ii = 0; _ii < processedBlocks.length;) {
	      var info = processedBlocks[_ii];
	      if (info.wrapperTemplate) {
	        var blocks = [];
	        do {
	          blocks.push(processedBlocks[_ii].block);
	          _ii++;
	        } while (_ii < processedBlocks.length && processedBlocks[_ii].wrapperTemplate === info.wrapperTemplate);
	        var wrapperElement = React.cloneElement(info.wrapperTemplate, {
	          key: info.key + '-wrap',
	          'data-offset-key': info.offsetKey
	        }, blocks);
	        outputBlocks.push(wrapperElement);
	      } else {
	        outputBlocks.push(info.block);
	        _ii++;
	      }
	    }

	    return React.createElement(
	      'div',
	      { 'data-contents': 'true' },
	      outputBlocks
	    );
	  };

	  return DraftEditorContents;
	}(React.Component);

	/**
	 * Provide default styling for list items. This way, lists will be styled with
	 * proper counters and indentation even if the caller does not specify
	 * their own styling at all. If more than five levels of nesting are needed,
	 * the necessary CSS classes can be provided via `blockStyleFn` configuration.
	 */


	function getListItemClasses(type, depth, shouldResetCount, direction) {
	  return cx({
	    'public/DraftStyleDefault/unorderedListItem': type === 'unordered-list-item',
	    'public/DraftStyleDefault/orderedListItem': type === 'ordered-list-item',
	    'public/DraftStyleDefault/reset': shouldResetCount,
	    'public/DraftStyleDefault/depth0': depth === 0,
	    'public/DraftStyleDefault/depth1': depth === 1,
	    'public/DraftStyleDefault/depth2': depth === 2,
	    'public/DraftStyleDefault/depth3': depth === 3,
	    'public/DraftStyleDefault/depth4': depth === 4,
	    'public/DraftStyleDefault/listLTR': direction === 'LTR',
	    'public/DraftStyleDefault/listRTL': direction === 'RTL'
	  });
	}

	module.exports = DraftEditorContents;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorBlock.react
	 * @typechecks
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(17);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ContentBlock = __webpack_require__(8);
	var DraftEditorLeaf = __webpack_require__(53);
	var DraftOffsetKey = __webpack_require__(67);
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Scroll = __webpack_require__(68);
	var SelectionState = __webpack_require__(35);
	var Style = __webpack_require__(69);
	var UnicodeBidi = __webpack_require__(39);
	var UnicodeBidiDirection = __webpack_require__(40);

	var cx = __webpack_require__(44);
	var getElementPosition = __webpack_require__(73);
	var getScrollPosition = __webpack_require__(75);
	var getViewportDimensions = __webpack_require__(78);
	var nullthrows = __webpack_require__(41);

	var SCROLL_BUFFER = 10;

	/**
	 * The default block renderer for a `DraftEditor` component.
	 *
	 * A `DraftEditorBlock` is able to render a given `ContentBlock` to its
	 * appropriate decorator and inline style components.
	 */
	var DraftEditorBlock = function (_React$Component) {
	  _inherits(DraftEditorBlock, _React$Component);

	  function DraftEditorBlock() {
	    _classCallCheck(this, DraftEditorBlock);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  DraftEditorBlock.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return this.props.block !== nextProps.block || this.props.tree !== nextProps.tree || this.props.direction !== nextProps.direction || isBlockOnSelectionEdge(nextProps.selection, nextProps.block.getKey()) && nextProps.forceSelection;
	  };

	  /**
	   * When a block is mounted and overlaps the selection state, we need to make
	   * sure that the cursor is visible to match native behavior. This may not
	   * be the case if the user has pressed `RETURN` or pasted some content, since
	   * programatically creating these new blocks and setting the DOM selection
	   * will miss out on the browser natively scrolling to that position.
	   *
	   * To replicate native behavior, if the block overlaps the selection state
	   * on mount, force the scroll position. Check the scroll state of the scroll
	   * parent, and adjust it to align the entire block to the bottom of the
	   * scroll parent.
	   */


	  DraftEditorBlock.prototype.componentDidMount = function componentDidMount() {
	    var selection = this.props.selection;
	    var endKey = selection.getEndKey();
	    if (!selection.getHasFocus() || endKey !== this.props.block.getKey()) {
	      return;
	    }

	    var blockNode = ReactDOM.findDOMNode(this);
	    var scrollParent = Style.getScrollParent(blockNode);
	    var scrollPosition = getScrollPosition(scrollParent);
	    var scrollDelta;

	    if (scrollParent === window) {
	      var nodePosition = getElementPosition(blockNode);
	      var nodeBottom = nodePosition.y + nodePosition.height;
	      var viewportHeight = getViewportDimensions().height;
	      scrollDelta = nodeBottom - viewportHeight;
	      if (scrollDelta > 0) {
	        window.scrollTo(scrollPosition.x, scrollPosition.y + scrollDelta + SCROLL_BUFFER);
	      }
	    } else {
	      var blockBottom = blockNode.offsetHeight + blockNode.offsetTop;
	      var scrollBottom = scrollParent.offsetHeight + scrollPosition.y;
	      scrollDelta = blockBottom - scrollBottom;
	      if (scrollDelta > 0) {
	        Scroll.setTop(scrollParent, Scroll.getTop(scrollParent) + scrollDelta + SCROLL_BUFFER);
	      }
	    }
	  };

	  DraftEditorBlock.prototype._renderChildren = function _renderChildren() {
	    var _this2 = this;

	    var block = this.props.block;
	    var blockKey = block.getKey();
	    var text = block.getText();
	    var lastLeafSet = this.props.tree.size - 1;
	    var hasSelection = isBlockOnSelectionEdge(this.props.selection, blockKey);

	    return this.props.tree.map(function (leafSet, ii) {
	      var leavesForLeafSet = leafSet.get('leaves');
	      var lastLeaf = leavesForLeafSet.size - 1;
	      var leaves = leavesForLeafSet.map(function (leaf, jj) {
	        var offsetKey = DraftOffsetKey.encode(blockKey, ii, jj);
	        var start = leaf.get('start');
	        var end = leaf.get('end');
	        return React.createElement(DraftEditorLeaf, {
	          key: offsetKey,
	          offsetKey: offsetKey,
	          blockKey: blockKey,
	          start: start,
	          selection: hasSelection ? _this2.props.selection : undefined,
	          forceSelection: _this2.props.forceSelection,
	          text: text.slice(start, end),
	          styleSet: block.getInlineStyleAt(start),
	          customStyleMap: _this2.props.customStyleMap,
	          customStyleFn: _this2.props.customStyleFn,
	          isLast: ii === lastLeafSet && jj === lastLeaf
	        });
	      }).toArray();

	      var decoratorKey = leafSet.get('decoratorKey');
	      if (decoratorKey == null) {
	        return leaves;
	      }

	      if (!_this2.props.decorator) {
	        return leaves;
	      }

	      var decorator = nullthrows(_this2.props.decorator);

	      var DecoratorComponent = decorator.getComponentForKey(decoratorKey);
	      if (!DecoratorComponent) {
	        return leaves;
	      }

	      var decoratorProps = decorator.getPropsForKey(decoratorKey);
	      var decoratorOffsetKey = DraftOffsetKey.encode(blockKey, ii, 0);
	      var decoratedText = text.slice(leavesForLeafSet.first().get('start'), leavesForLeafSet.last().get('end'));

	      // Resetting dir to the same value on a child node makes Chrome/Firefox
	      // confused on cursor movement. See http://jsfiddle.net/d157kLck/3/
	      var dir = UnicodeBidiDirection.getHTMLDirIfDifferent(UnicodeBidi.getDirection(decoratedText), _this2.props.direction);

	      return React.createElement(
	        DecoratorComponent,
	        _extends({}, decoratorProps, {
	          decoratedText: decoratedText,
	          dir: dir,
	          key: decoratorOffsetKey,
	          entityKey: block.getEntityAt(leafSet.get('start')),
	          offsetKey: decoratorOffsetKey }),
	        leaves
	      );
	    }).toArray();
	  };

	  DraftEditorBlock.prototype.render = function render() {
	    var _props = this.props;
	    var direction = _props.direction;
	    var offsetKey = _props.offsetKey;

	    var className = cx({
	      'public/DraftStyleDefault/block': true,
	      'public/DraftStyleDefault/ltr': direction === 'LTR',
	      'public/DraftStyleDefault/rtl': direction === 'RTL'
	    });

	    return React.createElement(
	      'div',
	      { 'data-offset-key': offsetKey, className: className },
	      this._renderChildren()
	    );
	  };

	  return DraftEditorBlock;
	}(React.Component);

	/**
	 * Return whether a block overlaps with either edge of the `SelectionState`.
	 */


	function isBlockOnSelectionEdge(selection, key) {
	  return selection.getAnchorKey() === key || selection.getFocusKey() === key;
	}

	module.exports = DraftEditorBlock;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorLeaf.react
	 * @typechecks
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(17);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DraftEditorTextNode = __webpack_require__(54);
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var SelectionState = __webpack_require__(35);

	var setDraftEditorSelection = __webpack_require__(62);

	/**
	 * All leaf nodes in the editor are spans with single text nodes. Leaf
	 * elements are styled based on the merging of an optional custom style map
	 * and a default style map.
	 *
	 * `DraftEditorLeaf` also provides a wrapper for calling into the imperative
	 * DOM Selection API. In this way, top-level components can declaratively
	 * maintain the selection state.
	 */
	var DraftEditorLeaf = function (_React$Component) {
	  _inherits(DraftEditorLeaf, _React$Component);

	  function DraftEditorLeaf() {
	    _classCallCheck(this, DraftEditorLeaf);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  /**
	   * By making individual leaf instances aware of their context within
	   * the text of the editor, we can set our selection range more
	   * easily than we could in the non-React world.
	   *
	   * Note that this depends on our maintaining tight control over the
	   * DOM structure of the TextEditor component. If leaves had multiple
	   * text nodes, this would be harder.
	   */
	  DraftEditorLeaf.prototype._setSelection = function _setSelection() {
	    var selection = this.props.selection;

	    // If selection state is irrelevant to the parent block, no-op.

	    if (selection == null || !selection.getHasFocus()) {
	      return;
	    }

	    var _props = this.props;
	    var blockKey = _props.blockKey;
	    var start = _props.start;
	    var text = _props.text;

	    var end = start + text.length;
	    if (!selection.hasEdgeWithin(blockKey, start, end)) {
	      return;
	    }

	    // Determine the appropriate target node for selection. If the child
	    // is not a text node, it is a <br /> spacer. In this case, use the
	    // <span> itself as the selection target.
	    var node = ReactDOM.findDOMNode(this);
	    var child = node.firstChild;
	    var targetNode = void 0;

	    if (child.nodeType === Node.TEXT_NODE) {
	      targetNode = child;
	    } else if (child.tagName === 'BR') {
	      targetNode = node;
	    } else {
	      targetNode = child.firstChild;
	    }

	    setDraftEditorSelection(selection, targetNode, blockKey, start, end);
	  };

	  DraftEditorLeaf.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return ReactDOM.findDOMNode(this.refs.leaf).textContent !== nextProps.text || nextProps.styleSet !== this.props.styleSet || nextProps.forceSelection;
	  };

	  DraftEditorLeaf.prototype.componentDidUpdate = function componentDidUpdate() {
	    this._setSelection();
	  };

	  DraftEditorLeaf.prototype.componentDidMount = function componentDidMount() {
	    this._setSelection();
	  };

	  DraftEditorLeaf.prototype.render = function render() {
	    var text = this.props.text;

	    // If the leaf is at the end of its block and ends in a soft newline, append
	    // an extra line feed character. Browsers collapse trailing newline
	    // characters, which leaves the cursor in the wrong place after a
	    // shift+enter. The extra character repairs this.

	    if (text.endsWith('\n') && this.props.isLast) {
	      text += '\n';
	    }

	    var _props2 = this.props;
	    var customStyleMap = _props2.customStyleMap;
	    var customStyleFn = _props2.customStyleFn;
	    var offsetKey = _props2.offsetKey;
	    var styleSet = _props2.styleSet;

	    var styleObj = styleSet.reduce(function (map, styleName) {
	      var mergedStyles = {};
	      var style = customStyleMap[styleName];

	      if (style !== undefined && map.textDecoration !== style.textDecoration) {
	        // .trim() is necessary for IE9/10/11 and Edge
	        mergedStyles.textDecoration = [map.textDecoration, style.textDecoration].join(' ').trim();
	      }

	      return _assign(map, style, mergedStyles);
	    }, {});

	    if (customStyleFn) {
	      var newStyles = customStyleFn(styleSet);
	      styleObj = _assign(styleObj, newStyles);
	    }

	    return React.createElement(
	      'span',
	      {
	        'data-offset-key': offsetKey,
	        ref: 'leaf',
	        style: styleObj },
	      React.createElement(
	        DraftEditorTextNode,
	        null,
	        text
	      )
	    );
	  };

	  return DraftEditorLeaf;
	}(React.Component);

	module.exports = DraftEditorLeaf;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorTextNode.react
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var UserAgent = __webpack_require__(55);

	// In IE, spans with <br> tags render as two newlines. By rendering a span
	// with only a newline character, we can be sure to render a single line.
	var useNewlineChar = UserAgent.isBrowser('IE <= 11');

	/**
	 * Check whether the node should be considered a newline.
	 */
	function isNewline(node) {
	  return useNewlineChar ? node.textContent === '\n' : node.tagName === 'BR';
	}

	/**
	 * Placeholder elements for empty text content.
	 *
	 * What is this `data-text` attribute, anyway? It turns out that we need to
	 * put an attribute on the lowest-level text node in order to preserve correct
	 * spellcheck handling. If the <span> is naked, Chrome and Safari may do
	 * bizarre things to do the DOM -- split text nodes, create extra spans, etc.
	 * If the <span> has an attribute, this appears not to happen.
	 * See http://jsfiddle.net/9khdavod/ for the failure case, and
	 * http://jsfiddle.net/7pg143f7/ for the fixed case.
	 */
	var NEWLINE_A = useNewlineChar ? React.createElement(
	  'span',
	  { key: 'A', 'data-text': 'true' },
	  '\n'
	) : React.createElement('br', { key: 'A', 'data-text': 'true' });

	var NEWLINE_B = useNewlineChar ? React.createElement(
	  'span',
	  { key: 'B', 'data-text': 'true' },
	  '\n'
	) : React.createElement('br', { key: 'B', 'data-text': 'true' });

	/**
	 * The lowest-level component in a `DraftEditor`, the text node component
	 * replaces the default React text node implementation. This allows us to
	 * perform custom handling of newline behavior and avoid re-rendering text
	 * nodes with DOM state that already matches the expectations of our immutable
	 * editor state.
	 */
	var DraftEditorTextNode = function (_React$Component) {
	  _inherits(DraftEditorTextNode, _React$Component);

	  function DraftEditorTextNode(props) {
	    _classCallCheck(this, DraftEditorTextNode);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this._forceFlag = false;
	    return _this;
	  }

	  DraftEditorTextNode.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    var node = ReactDOM.findDOMNode(this);
	    var shouldBeNewline = nextProps.children === '';
	    if (shouldBeNewline) {
	      return !isNewline(node);
	    }
	    return node.textContent !== nextProps.children;
	  };

	  DraftEditorTextNode.prototype.componentWillUpdate = function componentWillUpdate() {
	    // By flipping this flag, we also keep flipping keys which forces
	    // React to remount this node every time it rerenders.
	    this._forceFlag = !this._forceFlag;
	  };

	  DraftEditorTextNode.prototype.render = function render() {
	    if (this.props.children === '') {
	      return this._forceFlag ? NEWLINE_A : NEWLINE_B;
	    }
	    return React.createElement(
	      'span',
	      { key: this._forceFlag ? 'A' : 'B', 'data-text': 'true' },
	      this.props.children
	    );
	  };

	  return DraftEditorTextNode;
	}(React.Component);

	module.exports = DraftEditorTextNode;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var UserAgentData = __webpack_require__(56);
	var VersionRange = __webpack_require__(59);

	var mapObject = __webpack_require__(60);
	var memoizeStringOnly = __webpack_require__(61);

	/**
	 * Checks to see whether `name` and `version` satisfy `query`.
	 *
	 * @param {string} name Name of the browser, device, engine or platform
	 * @param {?string} version Version of the browser, engine or platform
	 * @param {string} query Query of form "Name [range expression]"
	 * @param {?function} normalizer Optional pre-processor for range expression
	 * @return {boolean}
	 */
	function compare(name, version, query, normalizer) {
	  // check for exact match with no version
	  if (name === query) {
	    return true;
	  }

	  // check for non-matching names
	  if (!query.startsWith(name)) {
	    return false;
	  }

	  // full comparison with version
	  var range = query.slice(name.length);
	  if (version) {
	    range = normalizer ? normalizer(range) : range;
	    return VersionRange.contains(range, version);
	  }

	  return false;
	}

	/**
	 * Normalizes `version` by stripping any "NT" prefix, but only on the Windows
	 * platform.
	 *
	 * Mimics the stripping performed by the `UserAgentWindowsPlatform` PHP class.
	 *
	 * @param {string} version
	 * @return {string}
	 */
	function normalizePlatformVersion(version) {
	  if (UserAgentData.platformName === 'Windows') {
	    return version.replace(/^\s*NT/, '');
	  }

	  return version;
	}

	/**
	 * Provides client-side access to the authoritative PHP-generated User Agent
	 * information supplied by the server.
	 */
	var UserAgent = {
	  /**
	   * Check if the User Agent browser matches `query`.
	   *
	   * `query` should be a string like "Chrome" or "Chrome > 33".
	   *
	   * Valid browser names include:
	   *
	   * - ACCESS NetFront
	   * - AOL
	   * - Amazon Silk
	   * - Android
	   * - BlackBerry
	   * - BlackBerry PlayBook
	   * - Chrome
	   * - Chrome for iOS
	   * - Chrome frame
	   * - Facebook PHP SDK
	   * - Facebook for iOS
	   * - Firefox
	   * - IE
	   * - IE Mobile
	   * - Mobile Safari
	   * - Motorola Internet Browser
	   * - Nokia
	   * - Openwave Mobile Browser
	   * - Opera
	   * - Opera Mini
	   * - Opera Mobile
	   * - Safari
	   * - UIWebView
	   * - Unknown
	   * - webOS
	   * - etc...
	   *
	   * An authoritative list can be found in the PHP `BrowserDetector` class and
	   * related classes in the same file (see calls to `new UserAgentBrowser` here:
	   * https://fburl.com/50728104).
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "Name [range expression]"
	   * @return {boolean}
	   */
	  isBrowser: function isBrowser(query) {
	    return compare(UserAgentData.browserName, UserAgentData.browserFullVersion, query);
	  },


	  /**
	   * Check if the User Agent browser uses a 32 or 64 bit architecture.
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "32" or "64".
	   * @return {boolean}
	   */
	  isBrowserArchitecture: function isBrowserArchitecture(query) {
	    return compare(UserAgentData.browserArchitecture, null, query);
	  },


	  /**
	   * Check if the User Agent device matches `query`.
	   *
	   * `query` should be a string like "iPhone" or "iPad".
	   *
	   * Valid device names include:
	   *
	   * - Kindle
	   * - Kindle Fire
	   * - Unknown
	   * - iPad
	   * - iPhone
	   * - iPod
	   * - etc...
	   *
	   * An authoritative list can be found in the PHP `DeviceDetector` class and
	   * related classes in the same file (see calls to `new UserAgentDevice` here:
	   * https://fburl.com/50728332).
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "Name"
	   * @return {boolean}
	   */
	  isDevice: function isDevice(query) {
	    return compare(UserAgentData.deviceName, null, query);
	  },


	  /**
	   * Check if the User Agent rendering engine matches `query`.
	   *
	   * `query` should be a string like "WebKit" or "WebKit >= 537".
	   *
	   * Valid engine names include:
	   *
	   * - Gecko
	   * - Presto
	   * - Trident
	   * - WebKit
	   * - etc...
	   *
	   * An authoritative list can be found in the PHP `RenderingEngineDetector`
	   * class related classes in the same file (see calls to `new
	   * UserAgentRenderingEngine` here: https://fburl.com/50728617).
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "Name [range expression]"
	   * @return {boolean}
	   */
	  isEngine: function isEngine(query) {
	    return compare(UserAgentData.engineName, UserAgentData.engineVersion, query);
	  },


	  /**
	   * Check if the User Agent platform matches `query`.
	   *
	   * `query` should be a string like "Windows" or "iOS 5 - 6".
	   *
	   * Valid platform names include:
	   *
	   * - Android
	   * - BlackBerry OS
	   * - Java ME
	   * - Linux
	   * - Mac OS X
	   * - Mac OS X Calendar
	   * - Mac OS X Internet Account
	   * - Symbian
	   * - SymbianOS
	   * - Windows
	   * - Windows Mobile
	   * - Windows Phone
	   * - iOS
	   * - iOS Facebook Integration Account
	   * - iOS Facebook Social Sharing UI
	   * - webOS
	   * - Chrome OS
	   * - etc...
	   *
	   * An authoritative list can be found in the PHP `PlatformDetector` class and
	   * related classes in the same file (see calls to `new UserAgentPlatform`
	   * here: https://fburl.com/50729226).
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "Name [range expression]"
	   * @return {boolean}
	   */
	  isPlatform: function isPlatform(query) {
	    return compare(UserAgentData.platformName, UserAgentData.platformFullVersion, query, normalizePlatformVersion);
	  },


	  /**
	   * Check if the User Agent platform is a 32 or 64 bit architecture.
	   *
	   * @note Function results are memoized
	   *
	   * @param {string} query Query of the form "32" or "64".
	   * @return {boolean}
	   */
	  isPlatformArchitecture: function isPlatformArchitecture(query) {
	    return compare(UserAgentData.platformArchitecture, null, query);
	  }
	};

	module.exports = mapObject(UserAgent, memoizeStringOnly);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Usage note:
	 * This module makes a best effort to export the same data we would internally.
	 * At Facebook we use a server-generated module that does the parsing and
	 * exports the data for the client to use. We can't rely on a server-side
	 * implementation in open source so instead we make use of an open source
	 * library to do the heavy lifting and then make some adjustments as necessary.
	 * It's likely there will be some differences. Some we can smooth over.
	 * Others are going to be harder.
	 */

	'use strict';

	var UAParser = __webpack_require__(57);

	var UNKNOWN = 'Unknown';

	var PLATFORM_MAP = {
	  'Mac OS': 'Mac OS X'
	};

	/**
	 * Convert from UAParser platform name to what we expect.
	 */
	function convertPlatformName(name) {
	  return PLATFORM_MAP[name] || name;
	}

	/**
	 * Get the version number in parts. This is very naive. We actually get major
	 * version as a part of UAParser already, which is generally good enough, but
	 * let's get the minor just in case.
	 */
	function getBrowserVersion(version) {
	  if (!version) {
	    return {
	      major: '',
	      minor: ''
	    };
	  }
	  var parts = version.split('.');
	  return {
	    major: parts[0],
	    minor: parts[1]
	  };
	}

	/**
	 * Get the UA data fom UAParser and then convert it to the format we're
	 * expecting for our APIS.
	 */
	var parser = new UAParser();
	var results = parser.getResult();

	// Do some conversion first.
	var browserVersionData = getBrowserVersion(results.browser.version);
	var uaData = {
	  browserArchitecture: results.cpu.architecture || UNKNOWN,
	  browserFullVersion: results.browser.version || UNKNOWN,
	  browserMinorVersion: browserVersionData.minor || UNKNOWN,
	  browserName: results.browser.name || UNKNOWN,
	  browserVersion: results.browser.major || UNKNOWN,
	  deviceName: results.device.model || UNKNOWN,
	  engineName: results.engine.name || UNKNOWN,
	  engineVersion: results.engine.version || UNKNOWN,
	  platformArchitecture: results.cpu.architecture || UNKNOWN,
	  platformName: convertPlatformName(results.os.name) || UNKNOWN,
	  platformVersion: results.os.version || UNKNOWN,
	  platformFullVersion: results.os.version || UNKNOWN
	};

	module.exports = uaData;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * UAParser.js v0.7.12
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */

	(function (window, undefined) {

	    'use strict';

	    //////////////
	    // Constants
	    /////////////


	    var LIBVERSION  = '0.7.12',
	        EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        STR_TYPE    = 'string',
	        MAJOR       = 'major', // deprecated
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet',
	        SMARTTV     = 'smarttv',
	        WEARABLE    = 'wearable',
	        EMBEDDED    = 'embedded';


	    ///////////
	    // Helper
	    //////////


	    var util = {
	        extend : function (regexes, extensions) {
	            var margedRegexes = {};
	            for (var i in regexes) {
	                if (extensions[i] && extensions[i].length % 2 === 0) {
	                    margedRegexes[i] = extensions[i].concat(regexes[i]);
	                } else {
	                    margedRegexes[i] = regexes[i];
	                }
	            }
	            return margedRegexes;
	        },
	        has : function (str1, str2) {
	          if (typeof str1 === "string") {
	            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
	          } else {
	            return false;
	          }
	        },
	        lowerize : function (str) {
	            return str.toLowerCase();
	        },
	        major : function (version) {
	            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
	        },
	        trim : function (str) {
	          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	        }
	    };


	    ///////////////
	    // Map helper
	    //////////////


	    var mapper = {

	        rgx : function () {

	            var result, i = 0, j, k, p, q, matches, match, args = arguments;

	            // loop through all regexes maps
	            while (i < args.length && !matches) {

	                var regex = args[i],       // even sequence (0,2,4,..)
	                    props = args[i + 1];   // odd sequence (1,3,5,..)

	                // construct object barebones
	                if (typeof result === UNDEF_TYPE) {
	                    result = {};
	                    for (p in props) {
	                        if (props.hasOwnProperty(p)){
	                            q = props[p];
	                            if (typeof q === OBJ_TYPE) {
	                                result[q[0]] = undefined;
	                            } else {
	                                result[q] = undefined;
	                            }
	                        }
	                    }
	                }

	                // try matching uastring with regexes
	                j = k = 0;
	                while (j < regex.length && !matches) {
	                    matches = regex[j++].exec(this.getUA());
	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof q === OBJ_TYPE && q.length > 0) {
	                                if (q.length == 2) {
	                                    if (typeof q[1] == FUNC_TYPE) {
	                                        // assign modified match
	                                        result[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        result[q[0]] = q[1];
	                                    }
	                                } else if (q.length == 3) {
	                                    // check whether function or regex
	                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
	                                    } else {
	                                        // sanitize match using given regex
	                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
	                                    }
	                                } else if (q.length == 4) {
	                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
	                                }
	                            } else {
	                                result[q] = match ? match : undefined;
	                            }
	                        }
	                    }
	                }
	                i += 2;
	            }
	            return result;
	        },

	        str : function (str, map) {

	            for (var i in map) {
	                // check if array
	                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (util.has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined : i;
	                        }
	                    }
	                } else if (util.has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined : i;
	                }
	            }
	            return str;
	        }
	    };


	    ///////////////
	    // String map
	    //////////////


	    var maps = {

	        browser : {
	            oldsafari : {
	                version : {
	                    '1.0'   : '/8',
	                    '1.2'   : '/1',
	                    '1.3'   : '/3',
	                    '2.0'   : '/412',
	                    '2.0.2' : '/416',
	                    '2.0.3' : '/417',
	                    '2.0.4' : '/419',
	                    '?'     : '/'
	                }
	            }
	        },

	        device : {
	            amazon : {
	                model : {
	                    'Fire Phone' : ['SD', 'KF']
	                }
	            },
	            sprint : {
	                model : {
	                    'Evo Shift 4G' : '7373KT'
	                },
	                vendor : {
	                    'HTC'       : 'APA',
	                    'Sprint'    : 'Sprint'
	                }
	            }
	        },

	        os : {
	            windows : {
	                version : {
	                    'ME'        : '4.90',
	                    'NT 3.11'   : 'NT3.51',
	                    'NT 4.0'    : 'NT4.0',
	                    '2000'      : 'NT 5.0',
	                    'XP'        : ['NT 5.1', 'NT 5.2'],
	                    'Vista'     : 'NT 6.0',
	                    '7'         : 'NT 6.1',
	                    '8'         : 'NT 6.2',
	                    '8.1'       : 'NT 6.3',
	                    '10'        : ['NT 6.4', 'NT 10.0'],
	                    'RT'        : 'ARM'
	                }
	            }
	        }
	    };


	    //////////////
	    // Regex map
	    /////////////


	    var regexes = {

	        browser : [[

	            // Presto based
	            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
	            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
	            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
	            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
	            ], [NAME, VERSION], [

	            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
	            ], [[NAME, 'Opera Mini'], VERSION], [

	            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
	            ], [[NAME, 'Opera'], VERSION], [

	            // Mixed
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
	                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

	            // Trident based
	            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
	                                                                                // Avant/IEMobile/SlimBrowser/Baidu
	            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

	            // Webkit/KHTML based
	            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
	            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
	                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
	            ], [NAME, VERSION], [

	            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
	            ], [[NAME, 'IE'], VERSION], [

	            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
	            ], [NAME, VERSION], [

	            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
	            ], [[NAME, 'Yandex'], VERSION], [

	            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION], [

	            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
	            ], [[NAME, 'WeChat'], VERSION], [

	            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
	            ], [VERSION, [NAME, 'MIUI Browser']], [

	            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
	            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

	            /android.+samsungbrowser\/([\w\.]+)/i,
	            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
	            ], [VERSION, [NAME, 'Android Browser']], [

	            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
	                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
	            /(qqbrowser)[\/\s]?([\w\.]+)/i
	                                                                                // QQBrowser
	            ], [NAME, VERSION], [

	            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
	            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
	            /juc.+(ucweb)[\/\s]?([\w\.]+)/i
	                                                                                // UCBrowser
	            ], [[NAME, 'UCBrowser'], VERSION], [

	            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
	            ], [[NAME, 'Dolphin'], VERSION], [

	            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
	            ], [[NAME, 'Chrome'], VERSION], [

	            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS
	            ], [VERSION, [NAME, 'Facebook']], [

	            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
	            ], [VERSION, [NAME, 'Firefox']], [

	            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
	            ], [VERSION, [NAME, 'Mobile Safari']], [

	            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
	            ], [VERSION, NAME], [

	            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
	            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

	            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
	            /(webkit|khtml)\/([\w\.]+)/i
	            ], [NAME, VERSION], [

	            // Gecko based
	            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
	            ], [[NAME, 'Netscape'], VERSION], [
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

	            // Other
	            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
	                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
	            /(links)\s\(([\w\.]+)/i,                                            // Links
	            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
	            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
	            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
	            ], [NAME, VERSION]

	            /* /////////////////////
	            // Media players BEGIN
	            ////////////////////////

	            , [

	            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
	            /(coremedia) v((\d+)[\w\._]+)/i
	            ], [NAME, VERSION], [

	            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
	            ], [NAME, VERSION], [

	            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
	            ], [NAME, VERSION], [

	            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
	                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
	                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
	            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
	            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
	            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
	            ], [NAME, VERSION], [
	            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
	            ], [NAME, VERSION], [

	            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
	            ], [[NAME, 'Flip Player'], VERSION], [

	            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
	                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
	            ], [NAME], [

	            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
	                                                                                // Gstreamer
	            ], [NAME, VERSION], [

	            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
	            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
	                                                                                // Java/urllib/requests/wget/cURL
	            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
	            ], [NAME, VERSION], [

	            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
	            ], [[NAME, /_/g, ' '], VERSION], [

	            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
	                                                                                // MPlayer SVN
	            ], [NAME, VERSION], [

	            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
	            ], [NAME, VERSION], [

	            /(mplayer)/i,                                                       // MPlayer (no other info)
	            /(yourmuze)/i,                                                      // YourMuze
	            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
	            ], [NAME], [

	            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
	            ], [NAME, VERSION], [

	            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
	            ], [NAME, VERSION], [

	            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
	            ], [NAME, VERSION], [

	            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
	            /(winamp)\s((\d+)[\w\.-]+)/i,
	            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
	            ], [NAME, VERSION], [

	            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
	                                                                                // inlight radio
	            ], [NAME], [

	            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
	                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
	                                                                                // SoundTap/Totem/Stagefright/Streamium
	            ], [NAME, VERSION], [

	            /(smp)((\d+)[\d\.]+)/i                                              // SMP
	            ], [NAME, VERSION], [

	            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
	            /(vlc)\/((\d+)[\w\.-]+)/i,
	            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
	            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
	            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
	            ], [NAME, VERSION], [

	            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
	            /(windows-media-player)\/((\d+)[\w\.-]+)/i
	            ], [[NAME, /-/g, ' '], VERSION], [

	            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
	                                                                                // Windows Media Server
	            ], [VERSION, [NAME, 'Windows']], [

	            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
	            ], [NAME, VERSION], [

	            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
	            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
	            ], [[NAME, 'rad.io'], VERSION]

	            //////////////////////
	            // Media players END
	            ////////////////////*/

	        ],

	        cpu : [[

	            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
	            ], [[ARCHITECTURE, 'amd64']], [

	            /(ia32(?=;))/i                                                      // IA32 (quicktime)
	            ], [[ARCHITECTURE, util.lowerize]], [

	            /((?:i[346]|x)86)[;\)]/i                                            // IA32
	            ], [[ARCHITECTURE, 'ia32']], [

	            // PocketPC mistakenly identified as PowerPC
	            /windows\s(ce|mobile);\sppc;/i
	            ], [[ARCHITECTURE, 'arm']], [

	            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
	            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

	            /(sun4\w)[;\)]/i                                                    // SPARC
	            ], [[ARCHITECTURE, 'sparc']], [

	            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
	                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	            ], [[ARCHITECTURE, util.lowerize]]
	        ],

	        device : [[

	            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
	            ], [MODEL, VENDOR, [TYPE, TABLET]], [

	            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

	            /(apple\s{0,1}tv)/i                                                 // Apple TV
	            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

	            /(archos)\s(gamepad2?)/i,                                           // Archos
	            /(hp).+(touchpad)/i,                                                // HP TouchPad
	            /(hp).+(tablet)/i,                                                  // HP Tablet
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
	            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
	            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
	            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

	            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
	            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
	            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

	            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
	            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
	                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
	            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
	            /(asus)-?(\w+)/i                                                    // Asus
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
	            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
	                                                                                // Asus Tablets
	            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
	            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

	            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
	            /(sony)?(?:sgp.+)\sbuild\//i
	            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
	            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
	            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [

	            /\s(ouya)\s/i,                                                      // Ouya
	            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
	            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

	            /android.+;\s(shield)\sbuild/i                                      // Nvidia
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

	            /(playstation\s[34portablevi]+)/i                                   // Playstation
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

	            /(sprint\s(\w+))/i                                                  // Sprint Phones
	            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

	            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
	            /(zte)-(\w+)*/i,                                                    // ZTE
	            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
	                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
	            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

	            /(nexus\s9)/i                                                       // HTC Nexus 9
	            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

	            /(nexus\s6p)/i                                                      // Huawei Nexus 6P
	            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

	            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

	            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
	            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
	            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
	            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

	                                                                                // Motorola
	            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
	            /mot[\s-]?(\w+)*/i,
	            /(XT\d{3,4}) build\//i,
	            /(nexus\s6)/i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
	            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

	            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
	            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

	            /hbbtv.+maple;(\d+)/i
	            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

	            /\(dtv[\);].+(aquos)/i                                              // Sharp
	            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

	            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
	            /((SM-T\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
	            /smart-tv.+(samsung)/i
	            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
	            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
	            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
	            /sec-((sgh\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

	            /sie-(\w+)*/i                                                       // Siemens
	            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

	            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
	            /(nokia)[\s_-]?([\w-]+)*/i
	            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

	            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
	            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

	            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
	            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
	            /(lg) netcast\.tv/i                                                 // LG SmartTV
	            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
	            /(nexus\s[45])/i,                                                   // LG
	            /lg[e;\s\/-]+(\w+)*/i
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

	            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
	            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

	            /linux;.+((jolla));/i                                               // Jolla
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

	            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
	            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

	            /android.+;\s(glass)\s\d/i                                          // Google Glass
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

	            /android.+(\w+)\s+build\/hm\1/i,                                    // Xiaomi Hongmi 'numeric' models
	            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
	            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

	            /android.+a000(1)\s+build/i                                         // OnePlus
	            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

	            /\s(tablet)[;\/]/i,                                                 // Unidentifiable Tablet
	            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
	            ], [[TYPE, util.lowerize], VENDOR, MODEL]

	            /*//////////////////////////
	            // TODO: move to string map
	            ////////////////////////////

	            /(C6603)/i                                                          // Sony Xperia Z C6603
	            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	            /(C6903)/i                                                          // Sony Xperia Z 1
	            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [

	            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
	            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
	            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
	            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
	            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
	            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
	            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
	            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [

	            /(R1001)/i                                                          // Oppo R1001
	            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
	            /(X9006)/i                                                          // Oppo Find 7a
	            ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	            /(R2001)/i                                                          // Oppo YOYO R2001
	            ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	            /(R815)/i                                                           // Oppo Clover R815
	            ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	             /(U707)/i                                                          // Oppo Find Way S
	            ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [

	            /(T3C)/i                                                            // Advan Vandroid T3C
	            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
	            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
	            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [

	            /(V972M)/i                                                          // ZTE V972M
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [

	            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
	            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
	            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [

	            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
	            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [

	            /////////////
	            // END TODO
	            ///////////*/

	        ],

	        engine : [[

	            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
	            ], [VERSION, [NAME, 'EdgeHTML']], [

	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
	            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
	            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
	            ], [NAME, VERSION], [

	            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
	            ], [VERSION, NAME]
	        ],

	        os : [[

	            // Windows based
	            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
	            ], [NAME, VERSION], [
	            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
	            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,                  // Windows Phone
	            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
	            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
	            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

	            // Mobile/Embedded OS
	            /\((bb)(10);/i                                                      // BlackBerry 10
	            ], [[NAME, 'BlackBerry'], VERSION], [
	            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
	            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
	            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
	                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
	            /linux;.+(sailfish);/i                                              // Sailfish OS
	            ], [NAME, VERSION], [
	            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
	            ], [[NAME, 'Symbian'], VERSION], [
	            /\((series40);/i                                                    // Series 40
	            ], [NAME], [
	            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
	            ], [[NAME, 'Firefox OS'], VERSION], [

	            // Console
	            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

	            // GNU/Linux based
	            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
	            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
	            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
	                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
	            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
	            /(gnu)\s?([\w\.]+)*/i                                               // GNU
	            ], [NAME, VERSION], [

	            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[

	            // Solaris
	            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [

	            // BSD based
	            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	            ], [NAME, VERSION],[

	            /(haiku)\s(\w+)/i                                                  // Haiku
	            ], [NAME, VERSION],[

	            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
	            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

	            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
	            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
	            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

	            // Other
	            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
	            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
	            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
	                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
	            /(unix)\s?([\w\.]+)*/i                                              // UNIX
	            ], [NAME, VERSION]
	        ]
	    };


	    /////////////////
	    // Constructor
	    ////////////////


	    var UAParser = function (uastring, extensions) {

	        if (!(this instanceof UAParser)) {
	            return new UAParser(uastring, extensions).getResult();
	        }

	        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
	        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

	        this.getBrowser = function () {
	            var browser = mapper.rgx.apply(this, rgxmap.browser);
	            browser.major = util.major(browser.version);
	            return browser;
	        };
	        this.getCPU = function () {
	            return mapper.rgx.apply(this, rgxmap.cpu);
	        };
	        this.getDevice = function () {
	            return mapper.rgx.apply(this, rgxmap.device);
	        };
	        this.getEngine = function () {
	            return mapper.rgx.apply(this, rgxmap.engine);
	        };
	        this.getOS = function () {
	            return mapper.rgx.apply(this, rgxmap.os);
	        };
	        this.getResult = function() {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS(),
	                device  : this.getDevice(),
	                cpu     : this.getCPU()
	            };
	        };
	        this.getUA = function () {
	            return ua;
	        };
	        this.setUA = function (uastring) {
	            ua = uastring;
	            return this;
	        };
	        return this;
	    };

	    UAParser.VERSION = LIBVERSION;
	    UAParser.BROWSER = {
	        NAME    : NAME,
	        MAJOR   : MAJOR, // deprecated
	        VERSION : VERSION
	    };
	    UAParser.CPU = {
	        ARCHITECTURE : ARCHITECTURE
	    };
	    UAParser.DEVICE = {
	        MODEL   : MODEL,
	        VENDOR  : VENDOR,
	        TYPE    : TYPE,
	        CONSOLE : CONSOLE,
	        MOBILE  : MOBILE,
	        SMARTTV : SMARTTV,
	        TABLET  : TABLET,
	        WEARABLE: WEARABLE,
	        EMBEDDED: EMBEDDED
	    };
	    UAParser.ENGINE = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };
	    UAParser.OS = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };


	    ///////////
	    // Export
	    //////////


	    // check js environment
	    if (typeof(exports) !== UNDEF_TYPE) {
	        // nodejs env
	        if (typeof module !== UNDEF_TYPE && module.exports) {
	            exports = module.exports = UAParser;
	        }
	        exports.UAParser = UAParser;
	    } else {
	        // requirejs env (optional)
	        if ("function" === FUNC_TYPE && __webpack_require__(58)) {
	            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	                return UAParser;
	            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        } else {
	            // browser env
	            window.UAParser = UAParser;
	        }
	    }

	    // jQuery/Zepto specific (optional)
	    // Note:
	    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
	    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
	    //   and we should catch that.
	    var $ = window.jQuery || window.Zepto;
	    if (typeof $ !== UNDEF_TYPE) {
	        var parser = new UAParser();
	        $.ua = parser.getResult();
	        $.ua.get = function() {
	            return parser.getUA();
	        };
	        $.ua.set = function (uastring) {
	            parser.setUA(uastring);
	            var result = parser.getResult();
	            for (var prop in result) {
	                $.ua[prop] = result[prop];
	            }
	        };
	    }

	})(typeof window === 'object' ? window : this);


/***/ },
/* 58 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var invariant = __webpack_require__(19);

	var componentRegex = /\./;
	var orRegex = /\|\|/;
	var rangeRegex = /\s+\-\s+/;
	var modifierRegex = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/;
	var numericRegex = /^(\d*)(.*)/;

	/**
	 * Splits input `range` on "||" and returns true if any subrange matches
	 * `version`.
	 *
	 * @param {string} range
	 * @param {string} version
	 * @returns {boolean}
	 */
	function checkOrExpression(range, version) {
	  var expressions = range.split(orRegex);

	  if (expressions.length > 1) {
	    return expressions.some(function (range) {
	      return VersionRange.contains(range, version);
	    });
	  } else {
	    range = expressions[0].trim();
	    return checkRangeExpression(range, version);
	  }
	}

	/**
	 * Splits input `range` on " - " (the surrounding whitespace is required) and
	 * returns true if version falls between the two operands.
	 *
	 * @param {string} range
	 * @param {string} version
	 * @returns {boolean}
	 */
	function checkRangeExpression(range, version) {
	  var expressions = range.split(rangeRegex);

	  !(expressions.length > 0 && expressions.length <= 2) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'the "-" operator expects exactly 2 operands') : invariant(false) : void 0;

	  if (expressions.length === 1) {
	    return checkSimpleExpression(expressions[0], version);
	  } else {
	    var startVersion = expressions[0],
	        endVersion = expressions[1];

	    !(isSimpleVersion(startVersion) && isSimpleVersion(endVersion)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'operands to the "-" operator must be simple (no modifiers)') : invariant(false) : void 0;

	    return checkSimpleExpression('>=' + startVersion, version) && checkSimpleExpression('<=' + endVersion, version);
	  }
	}

	/**
	 * Checks if `range` matches `version`. `range` should be a "simple" range (ie.
	 * not a compound range using the " - " or "||" operators).
	 *
	 * @param {string} range
	 * @param {string} version
	 * @returns {boolean}
	 */
	function checkSimpleExpression(range, version) {
	  range = range.trim();
	  if (range === '') {
	    return true;
	  }

	  var versionComponents = version.split(componentRegex);

	  var _getModifierAndCompon = getModifierAndComponents(range),
	      modifier = _getModifierAndCompon.modifier,
	      rangeComponents = _getModifierAndCompon.rangeComponents;

	  switch (modifier) {
	    case '<':
	      return checkLessThan(versionComponents, rangeComponents);
	    case '<=':
	      return checkLessThanOrEqual(versionComponents, rangeComponents);
	    case '>=':
	      return checkGreaterThanOrEqual(versionComponents, rangeComponents);
	    case '>':
	      return checkGreaterThan(versionComponents, rangeComponents);
	    case '~':
	    case '~>':
	      return checkApproximateVersion(versionComponents, rangeComponents);
	    default:
	      return checkEqual(versionComponents, rangeComponents);
	  }
	}

	/**
	 * Checks whether `a` is less than `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkLessThan(a, b) {
	  return compareComponents(a, b) === -1;
	}

	/**
	 * Checks whether `a` is less than or equal to `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkLessThanOrEqual(a, b) {
	  var result = compareComponents(a, b);
	  return result === -1 || result === 0;
	}

	/**
	 * Checks whether `a` is equal to `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkEqual(a, b) {
	  return compareComponents(a, b) === 0;
	}

	/**
	 * Checks whether `a` is greater than or equal to `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkGreaterThanOrEqual(a, b) {
	  var result = compareComponents(a, b);
	  return result === 1 || result === 0;
	}

	/**
	 * Checks whether `a` is greater than `b`.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkGreaterThan(a, b) {
	  return compareComponents(a, b) === 1;
	}

	/**
	 * Checks whether `a` is "reasonably close" to `b` (as described in
	 * https://www.npmjs.org/doc/misc/semver.html). For example, if `b` is "1.3.1"
	 * then "reasonably close" is defined as ">= 1.3.1 and < 1.4".
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {boolean}
	 */
	function checkApproximateVersion(a, b) {
	  var lowerBound = b.slice();
	  var upperBound = b.slice();

	  if (upperBound.length > 1) {
	    upperBound.pop();
	  }
	  var lastIndex = upperBound.length - 1;
	  var numeric = parseInt(upperBound[lastIndex], 10);
	  if (isNumber(numeric)) {
	    upperBound[lastIndex] = numeric + 1 + '';
	  }

	  return checkGreaterThanOrEqual(a, lowerBound) && checkLessThan(a, upperBound);
	}

	/**
	 * Extracts the optional modifier (<, <=, =, >=, >, ~, ~>) and version
	 * components from `range`.
	 *
	 * For example, given `range` ">= 1.2.3" returns an object with a `modifier` of
	 * `">="` and `components` of `[1, 2, 3]`.
	 *
	 * @param {string} range
	 * @returns {object}
	 */
	function getModifierAndComponents(range) {
	  var rangeComponents = range.split(componentRegex);
	  var matches = rangeComponents[0].match(modifierRegex);
	  !matches ? process.env.NODE_ENV !== 'production' ? invariant(false, 'expected regex to match but it did not') : invariant(false) : void 0;

	  return {
	    modifier: matches[1],
	    rangeComponents: [matches[2]].concat(rangeComponents.slice(1))
	  };
	}

	/**
	 * Determines if `number` is a number.
	 *
	 * @param {mixed} number
	 * @returns {boolean}
	 */
	function isNumber(number) {
	  return !isNaN(number) && isFinite(number);
	}

	/**
	 * Tests whether `range` is a "simple" version number without any modifiers
	 * (">", "~" etc).
	 *
	 * @param {string} range
	 * @returns {boolean}
	 */
	function isSimpleVersion(range) {
	  return !getModifierAndComponents(range).modifier;
	}

	/**
	 * Zero-pads array `array` until it is at least `length` long.
	 *
	 * @param {array} array
	 * @param {number} length
	 */
	function zeroPad(array, length) {
	  for (var i = array.length; i < length; i++) {
	    array[i] = '0';
	  }
	}

	/**
	 * Normalizes `a` and `b` in preparation for comparison by doing the following:
	 *
	 * - zero-pads `a` and `b`
	 * - marks any "x", "X" or "*" component in `b` as equivalent by zero-ing it out
	 *   in both `a` and `b`
	 * - marks any final "*" component in `b` as a greedy wildcard by zero-ing it
	 *   and all of its successors in `a`
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {array<array<string>>}
	 */
	function normalizeVersions(a, b) {
	  a = a.slice();
	  b = b.slice();

	  zeroPad(a, b.length);

	  // mark "x" and "*" components as equal
	  for (var i = 0; i < b.length; i++) {
	    var matches = b[i].match(/^[x*]$/i);
	    if (matches) {
	      b[i] = a[i] = '0';

	      // final "*" greedily zeros all remaining components
	      if (matches[0] === '*' && i === b.length - 1) {
	        for (var j = i; j < a.length; j++) {
	          a[j] = '0';
	        }
	      }
	    }
	  }

	  zeroPad(b, a.length);

	  return [a, b];
	}

	/**
	 * Returns the numerical -- not the lexicographical -- ordering of `a` and `b`.
	 *
	 * For example, `10-alpha` is greater than `2-beta`.
	 *
	 * @param {string} a
	 * @param {string} b
	 * @returns {number} -1, 0 or 1 to indicate whether `a` is less than, equal to,
	 * or greater than `b`, respectively
	 */
	function compareNumeric(a, b) {
	  var aPrefix = a.match(numericRegex)[1];
	  var bPrefix = b.match(numericRegex)[1];
	  var aNumeric = parseInt(aPrefix, 10);
	  var bNumeric = parseInt(bPrefix, 10);

	  if (isNumber(aNumeric) && isNumber(bNumeric) && aNumeric !== bNumeric) {
	    return compare(aNumeric, bNumeric);
	  } else {
	    return compare(a, b);
	  }
	}

	/**
	 * Returns the ordering of `a` and `b`.
	 *
	 * @param {string|number} a
	 * @param {string|number} b
	 * @returns {number} -1, 0 or 1 to indicate whether `a` is less than, equal to,
	 * or greater than `b`, respectively
	 */
	function compare(a, b) {
	  !(typeof a === typeof b) ? process.env.NODE_ENV !== 'production' ? invariant(false, '"a" and "b" must be of the same type') : invariant(false) : void 0;

	  if (a > b) {
	    return 1;
	  } else if (a < b) {
	    return -1;
	  } else {
	    return 0;
	  }
	}

	/**
	 * Compares arrays of version components.
	 *
	 * @param {array<string>} a
	 * @param {array<string>} b
	 * @returns {number} -1, 0 or 1 to indicate whether `a` is less than, equal to,
	 * or greater than `b`, respectively
	 */
	function compareComponents(a, b) {
	  var _normalizeVersions = normalizeVersions(a, b),
	      aNormalized = _normalizeVersions[0],
	      bNormalized = _normalizeVersions[1];

	  for (var i = 0; i < bNormalized.length; i++) {
	    var result = compareNumeric(aNormalized[i], bNormalized[i]);
	    if (result) {
	      return result;
	    }
	  }

	  return 0;
	}

	var VersionRange = {
	  /**
	   * Checks whether `version` satisfies the `range` specification.
	   *
	   * We support a subset of the expressions defined in
	   * https://www.npmjs.org/doc/misc/semver.html:
	   *
	   *    version   Must match version exactly
	   *    =version  Same as just version
	   *    >version  Must be greater than version
	   *    >=version Must be greater than or equal to version
	   *    <version  Must be less than version
	   *    <=version Must be less than or equal to version
	   *    ~version  Must be at least version, but less than the next significant
	   *              revision above version:
	   *              "~1.2.3" is equivalent to ">= 1.2.3 and < 1.3"
	   *    ~>version Equivalent to ~version
	   *    1.2.x     Must match "1.2.x", where "x" is a wildcard that matches
	   *              anything
	   *    1.2.*     Similar to "1.2.x", but "*" in the trailing position is a
	   *              "greedy" wildcard, so will match any number of additional
	   *              components:
	   *              "1.2.*" will match "1.2.1", "1.2.1.1", "1.2.1.1.1" etc
	   *    *         Any version
	   *    ""        (Empty string) Same as *
	   *    v1 - v2   Equivalent to ">= v1 and <= v2"
	   *    r1 || r2  Passes if either r1 or r2 are satisfied
	   *
	   * @param {string} range
	   * @param {string} version
	   * @returns {boolean}
	   */
	  contains: function contains(range, version) {
	    return checkOrExpression(range.trim(), version.trim());
	  }
	};

	module.exports = VersionRange;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;

/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */

	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setDraftEditorSelection
	 * @typechecks
	 * 
	 */

	'use strict';

	var containsNode = __webpack_require__(63);
	var getActiveElement = __webpack_require__(66);

	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 */
	function setDraftEditorSelection(selectionState, node, blockKey, nodeStart, nodeEnd) {
	  // It's possible that the editor has been removed from the DOM but
	  // our selection code doesn't know it yet. Forcing selection in
	  // this case may lead to errors, so just bail now.
	  if (!containsNode(document.documentElement, node)) {
	    return;
	  }

	  var selection = global.getSelection();
	  var anchorKey = selectionState.getAnchorKey();
	  var anchorOffset = selectionState.getAnchorOffset();
	  var focusKey = selectionState.getFocusKey();
	  var focusOffset = selectionState.getFocusOffset();
	  var isBackward = selectionState.getIsBackward();

	  // IE doesn't support backward selection. Swap key/offset pairs.
	  if (!selection.extend && isBackward) {
	    var tempKey = anchorKey;
	    var tempOffset = anchorOffset;
	    anchorKey = focusKey;
	    anchorOffset = focusOffset;
	    focusKey = tempKey;
	    focusOffset = tempOffset;
	    isBackward = false;
	  }

	  var hasAnchor = anchorKey === blockKey && nodeStart <= anchorOffset && nodeEnd >= anchorOffset;

	  var hasFocus = focusKey === blockKey && nodeStart <= focusOffset && nodeEnd >= focusOffset;

	  // If the selection is entirely bound within this node, set the selection
	  // and be done.
	  if (hasAnchor && hasFocus) {
	    selection.removeAllRanges();
	    addPointToSelection(selection, node, anchorOffset - nodeStart);
	    addFocusToSelection(selection, node, focusOffset - nodeStart);
	    return;
	  }

	  if (!isBackward) {
	    // If the anchor is within this node, set the range start.
	    if (hasAnchor) {
	      selection.removeAllRanges();
	      addPointToSelection(selection, node, anchorOffset - nodeStart);
	    }

	    // If the focus is within this node, we can assume that we have
	    // already set the appropriate start range on the selection, and
	    // can simply extend the selection.
	    if (hasFocus) {
	      addFocusToSelection(selection, node, focusOffset - nodeStart);
	    }
	  } else {
	    // If this node has the focus, set the selection range to be a
	    // collapsed range beginning here. Later, when we encounter the anchor,
	    // we'll use this information to extend the selection.
	    if (hasFocus) {
	      selection.removeAllRanges();
	      addPointToSelection(selection, node, focusOffset - nodeStart);
	    }

	    // If this node has the anchor, we may assume that the correct
	    // focus information is already stored on the selection object.
	    // We keep track of it, reset the selection range, and extend it
	    // back to the focus point.
	    if (hasAnchor) {
	      var storedFocusNode = selection.focusNode;
	      var storedFocusOffset = selection.focusOffset;

	      selection.removeAllRanges();
	      addPointToSelection(selection, node, anchorOffset - nodeStart);
	      addFocusToSelection(selection, storedFocusNode, storedFocusOffset);
	    }
	  }
	}

	/**
	 * Extend selection towards focus point.
	 */
	function addFocusToSelection(selection, node, offset) {
	  if (selection.extend && containsNode(getActiveElement(), node)) {
	    // If `extend` is called while another element has focus, an error is
	    // thrown. We therefore disable `extend` if the active element is somewhere
	    // other than the node we are selecting. This should only occur in Firefox,
	    // since it is the only browser to support multiple selections.
	    // See https://bugzilla.mozilla.org/show_bug.cgi?id=921444.
	    selection.extend(node, offset);
	  } else {
	    // IE doesn't support extend. This will mean no backward selection.
	    // Extract the existing selection range and add focus to it.
	    // Additionally, clone the selection range. IE11 throws an
	    // InvalidStateError when attempting to access selection properties
	    // after the range is detached.
	    var range = selection.getRangeAt(0);
	    range.setEnd(node, offset);
	    selection.addRange(range.cloneRange());
	  }
	}

	function addPointToSelection(selection, node, offset) {
	  var range = document.createRange();
	  range.setStart(node, offset);
	  selection.addRange(range);
	}

	module.exports = setDraftEditorSelection;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	var isTextNode = __webpack_require__(64);

	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	module.exports = containsNode;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var isNode = __webpack_require__(65);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 */
	function getActiveElement() /*?DOMElement*/{
	  if (typeof document === 'undefined') {
	    return null;
	  }
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}

	module.exports = getActiveElement;

/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftOffsetKey
	 * 
	 */

	'use strict';

	var KEY_DELIMITER = '-';

	var DraftOffsetKey = {
	  encode: function encode(blockKey, decoratorKey, leafKey) {
	    return blockKey + KEY_DELIMITER + decoratorKey + KEY_DELIMITER + leafKey;
	  },

	  decode: function decode(offsetKey) {
	    var _offsetKey$split = offsetKey.split(KEY_DELIMITER);

	    var blockKey = _offsetKey$split[0];
	    var decoratorKey = _offsetKey$split[1];
	    var leafKey = _offsetKey$split[2];

	    return {
	      blockKey: blockKey,
	      decoratorKey: parseInt(decoratorKey, 10),
	      leafKey: parseInt(leafKey, 10)
	    };
	  }
	};

	module.exports = DraftOffsetKey;

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * @param {DOMElement} element
	 * @param {DOMDocument} doc
	 * @return {boolean}
	 */
	function _isViewportScrollElement(element, doc) {
	  return !!doc && (element === doc.documentElement || element === doc.body);
	}

	/**
	 * Scroll Module. This class contains 4 simple static functions
	 * to be used to access Element.scrollTop/scrollLeft properties.
	 * To solve the inconsistencies between browsers when either
	 * document.body or document.documentElement is supplied,
	 * below logic will be used to alleviate the issue:
	 *
	 * 1. If 'element' is either 'document.body' or 'document.documentElement,
	 *    get whichever element's 'scroll{Top,Left}' is larger.
	 * 2. If 'element' is either 'document.body' or 'document.documentElement',
	 *    set the 'scroll{Top,Left}' on both elements.
	 */

	var Scroll = {
	  /**
	   * @param {DOMElement} element
	   * @return {number}
	   */
	  getTop: function getTop(element) {
	    var doc = element.ownerDocument;
	    return _isViewportScrollElement(element, doc) ?
	    // In practice, they will either both have the same value,
	    // or one will be zero and the other will be the scroll position
	    // of the viewport. So we can use `X || Y` instead of `Math.max(X, Y)`
	    doc.body.scrollTop || doc.documentElement.scrollTop : element.scrollTop;
	  },

	  /**
	   * @param {DOMElement} element
	   * @param {number} newTop
	   */
	  setTop: function setTop(element, newTop) {
	    var doc = element.ownerDocument;
	    if (_isViewportScrollElement(element, doc)) {
	      doc.body.scrollTop = doc.documentElement.scrollTop = newTop;
	    } else {
	      element.scrollTop = newTop;
	    }
	  },

	  /**
	   * @param {DOMElement} element
	   * @return {number}
	   */
	  getLeft: function getLeft(element) {
	    var doc = element.ownerDocument;
	    return _isViewportScrollElement(element, doc) ? doc.body.scrollLeft || doc.documentElement.scrollLeft : element.scrollLeft;
	  },

	  /**
	   * @param {DOMElement} element
	   * @param {number} newLeft
	   */
	  setLeft: function setLeft(element, newLeft) {
	    var doc = element.ownerDocument;
	    if (_isViewportScrollElement(element, doc)) {
	      doc.body.scrollLeft = doc.documentElement.scrollLeft = newLeft;
	    } else {
	      element.scrollLeft = newLeft;
	    }
	  }
	};

	module.exports = Scroll;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var getStyleProperty = __webpack_require__(70);

	/**
	 * @param {DOMNode} element [description]
	 * @param {string} name Overflow style property name.
	 * @return {boolean} True if the supplied ndoe is scrollable.
	 */
	function _isNodeScrollable(element, name) {
	  var overflow = Style.get(element, name);
	  return overflow === 'auto' || overflow === 'scroll';
	}

	/**
	 * Utilities for querying and mutating style properties.
	 */
	var Style = {
	  /**
	   * Gets the style property for the supplied node. This will return either the
	   * computed style, if available, or the declared style.
	   *
	   * @param {DOMNode} node
	   * @param {string} name Style property name.
	   * @return {?string} Style property value.
	   */
	  get: getStyleProperty,

	  /**
	   * Determines the nearest ancestor of a node that is scrollable.
	   *
	   * NOTE: This can be expensive if used repeatedly or on a node nested deeply.
	   *
	   * @param {?DOMNode} node Node from which to start searching.
	   * @return {?DOMWindow|DOMElement} Scroll parent of the supplied node.
	   */
	  getScrollParent: function getScrollParent(node) {
	    if (!node) {
	      return null;
	    }
	    while (node && node !== document.body) {
	      if (_isNodeScrollable(node, 'overflow') || _isNodeScrollable(node, 'overflowY') || _isNodeScrollable(node, 'overflowX')) {
	        return node;
	      }
	      node = node.parentNode;
	    }
	    return window;
	  }

	};

	module.exports = Style;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var camelize = __webpack_require__(71);
	var hyphenate = __webpack_require__(72);

	function asString(value) /*?string*/{
	  return value == null ? value : String(value);
	}

	function getStyleProperty( /*DOMNode*/node, /*string*/name) /*?string*/{
	  var computedStyle = void 0;

	  // W3C Standard
	  if (window.getComputedStyle) {
	    // In certain cases such as within an iframe in FF3, this returns null.
	    computedStyle = window.getComputedStyle(node, null);
	    if (computedStyle) {
	      return asString(computedStyle.getPropertyValue(hyphenate(name)));
	    }
	  }
	  // Safari
	  if (document.defaultView && document.defaultView.getComputedStyle) {
	    computedStyle = document.defaultView.getComputedStyle(node, null);
	    // A Safari bug causes this to return null for `display: none` elements.
	    if (computedStyle) {
	      return asString(computedStyle.getPropertyValue(hyphenate(name)));
	    }
	    if (name === 'display') {
	      return 'none';
	    }
	  }
	  // Internet Explorer
	  if (node.currentStyle) {
	    if (name === 'float') {
	      return asString(node.currentStyle.cssFloat || node.currentStyle.styleFloat);
	    }
	    return asString(node.currentStyle[camelize(name)]);
	  }
	  return asString(node.style && node.style[camelize(name)]);
	}

	module.exports = getStyleProperty;

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var getElementRect = __webpack_require__(74);

	/**
	 * Gets an element's position in pixels relative to the viewport. The returned
	 * object represents the position of the element's top left corner.
	 *
	 * @param {DOMElement} element
	 * @return {object}
	 */
	function getElementPosition(element) {
	  var rect = getElementRect(element);
	  return {
	    x: rect.left,
	    y: rect.top,
	    width: rect.right - rect.left,
	    height: rect.bottom - rect.top
	  };
	}

	module.exports = getElementPosition;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var containsNode = __webpack_require__(63);

	/**
	 * Gets an element's bounding rect in pixels relative to the viewport.
	 *
	 * @param {DOMElement} elem
	 * @return {object}
	 */
	function getElementRect(elem) {
	  var docElem = document.documentElement;

	  // FF 2, Safari 3 and Opera 9.5- do not support getBoundingClientRect().
	  // IE9- will throw if the element is not in the document.
	  if (!('getBoundingClientRect' in elem) || !containsNode(docElem, elem)) {
	    return {
	      left: 0,
	      right: 0,
	      top: 0,
	      bottom: 0
	    };
	  }

	  // Subtracts clientTop/Left because IE8- added a 2px border to the
	  // <html> element (see http://fburl.com/1493213). IE 7 in
	  // Quicksmode does not report clientLeft/clientTop so there
	  // will be an unaccounted offset of 2px when in quirksmode
	  var rect = elem.getBoundingClientRect();

	  return {
	    left: Math.round(rect.left) - docElem.clientLeft,
	    right: Math.round(rect.right) - docElem.clientLeft,
	    top: Math.round(rect.top) - docElem.clientTop,
	    bottom: Math.round(rect.bottom) - docElem.clientTop
	  };
	}

	module.exports = getElementRect;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var getDocumentScrollElement = __webpack_require__(76);
	var getUnboundedScrollPosition = __webpack_require__(77);

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are bounded. This means that if the scroll position is
	 * negative or exceeds the element boundaries (which is possible using inertial
	 * scrolling), you will get zero or the maximum scroll position, respectively.
	 *
	 * If you need the unbound scroll position, use `getUnboundedScrollPosition`.
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */
	function getScrollPosition(scrollable) {
	  var documentScrollElement = getDocumentScrollElement();
	  if (scrollable === window) {
	    scrollable = documentScrollElement;
	  }
	  var scrollPosition = getUnboundedScrollPosition(scrollable);

	  var viewport = scrollable === documentScrollElement ? document.documentElement : scrollable;

	  var xMax = scrollable.scrollWidth - viewport.clientWidth;
	  var yMax = scrollable.scrollHeight - viewport.clientHeight;

	  scrollPosition.x = Math.max(0, Math.min(scrollPosition.x, xMax));
	  scrollPosition.y = Math.max(0, Math.min(scrollPosition.y, yMax));

	  return scrollPosition;
	}

	module.exports = getScrollPosition;

/***/ },
/* 76 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var isWebkit = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('AppleWebKit') > -1;

	/**
	 * Gets the element with the document scroll properties such as `scrollLeft` and
	 * `scrollHeight`. This may differ across different browsers.
	 *
	 * NOTE: The return value can be null if the DOM is not yet ready.
	 *
	 * @param {?DOMDocument} doc Defaults to current document.
	 * @return {?DOMElement}
	 */
	function getDocumentScrollElement(doc) {
	  doc = doc || document;
	  return !isWebkit && doc.compatMode === 'CSS1Compat' ? doc.documentElement : doc.body;
	}

	module.exports = getDocumentScrollElement;

/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */

	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}

	module.exports = getUnboundedScrollPosition;

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	function getViewportWidth() {
	  var width = void 0;
	  if (document.documentElement) {
	    width = document.documentElement.clientWidth;
	  }

	  if (!width && document.body) {
	    width = document.body.clientWidth;
	  }

	  return width || 0;
	} /**
	   * Copyright (c) 2013-present, Facebook, Inc.
	   * All rights reserved.
	   *
	   * This source code is licensed under the BSD-style license found in the
	   * LICENSE file in the root directory of this source tree. An additional grant
	   * of patent rights can be found in the PATENTS file in the same directory.
	   *
	   * 
	   * @typechecks
	   */

	function getViewportHeight() {
	  var height = void 0;
	  if (document.documentElement) {
	    height = document.documentElement.clientHeight;
	  }

	  if (!height && document.body) {
	    height = document.body.clientHeight;
	  }

	  return height || 0;
	}

	/**
	 * Gets the viewport dimensions including any scrollbars.
	 */
	function getViewportDimensions() {
	  return {
	    width: window.innerWidth || getViewportWidth(),
	    height: window.innerHeight || getViewportHeight()
	  };
	}

	/**
	 * Gets the viewport dimensions excluding any scrollbars.
	 */
	getViewportDimensions.withoutScrollbars = function () {
	  return {
	    width: getViewportWidth(),
	    height: getViewportHeight()
	  };
	};

	module.exports = getViewportDimensions;

/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} className
	 * @return {string}
	 */

	function joinClasses(className /*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass = void 0;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}

	module.exports = joinClasses;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorDragHandler
	 * @typechecks
	 * 
	 */

	'use strict';

	var DataTransfer = __webpack_require__(81);
	var DraftModifier = __webpack_require__(10);
	var EditorState = __webpack_require__(31);

	var findAncestorOffsetKey = __webpack_require__(84);
	var getTextContentFromFiles = __webpack_require__(86);
	var getUpdatedSelectionState = __webpack_require__(87);
	var nullthrows = __webpack_require__(41);

	var isEventHandled = __webpack_require__(88);

	/**
	 * Get a SelectionState for the supplied mouse event.
	 */
	function getSelectionForEvent(event, editorState) {
	  var node = null;
	  var offset = null;

	  if (typeof document.caretRangeFromPoint === 'function') {
	    var dropRange = document.caretRangeFromPoint(event.x, event.y);
	    node = dropRange.startContainer;
	    offset = dropRange.startOffset;
	  } else if (event.rangeParent) {
	    node = event.rangeParent;
	    offset = event.rangeOffset;
	  } else {
	    return null;
	  }

	  node = nullthrows(node);
	  offset = nullthrows(offset);
	  var offsetKey = nullthrows(findAncestorOffsetKey(node));

	  return getUpdatedSelectionState(editorState, offsetKey, offset, offsetKey, offset);
	}

	var DraftEditorDragHandler = {
	  /**
	   * Drag originating from input terminated.
	   */
	  onDragEnd: function onDragEnd() {
	    this.exitCurrentMode();
	  },

	  /**
	   * Handle data being dropped.
	   */
	  onDrop: function onDrop(e) {
	    var _this = this;

	    var data = new DataTransfer(e.nativeEvent.dataTransfer);

	    var editorState = this.props.editorState;
	    var dropSelection = getSelectionForEvent(e.nativeEvent, editorState);

	    e.preventDefault();
	    this.exitCurrentMode();

	    if (dropSelection == null) {
	      return;
	    }

	    var files = data.getFiles();
	    if (files.length > 0) {
	      if (this.props.handleDroppedFiles && isEventHandled(this.props.handleDroppedFiles(dropSelection, files))) {
	        return;
	      }

	      getTextContentFromFiles(files, function (fileText) {
	        fileText && _this.update(insertTextAtSelection(editorState, nullthrows(dropSelection), // flow wtf
	        fileText));
	      });
	      return;
	    }

	    var dragType = this._internalDrag ? 'internal' : 'external';
	    if (this.props.handleDrop && isEventHandled(this.props.handleDrop(dropSelection, data, dragType))) {
	      return;
	    }

	    if (this._internalDrag) {
	      this.update(moveText(editorState, dropSelection));
	      return;
	    }

	    this.update(insertTextAtSelection(editorState, dropSelection, data.getText()));
	  }

	};

	function moveText(editorState, targetSelection) {
	  var newContentState = DraftModifier.moveText(editorState.getCurrentContent(), editorState.getSelection(), targetSelection);
	  return EditorState.push(editorState, newContentState, 'insert-fragment');
	}

	/**
	 * Insert text at a specified selection.
	 */
	function insertTextAtSelection(editorState, selection, text) {
	  var newContentState = DraftModifier.insertText(editorState.getCurrentContent(), selection, text, editorState.getCurrentInlineStyle());
	  return EditorState.push(editorState, newContentState, 'insert-fragment');
	}

	module.exports = DraftEditorDragHandler;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var PhotosMimeType = __webpack_require__(82);

	var createArrayFromMixed = __webpack_require__(83);
	var emptyFunction = __webpack_require__(33);

	var CR_LF_REGEX = new RegExp('\r\n', 'g');
	var LF_ONLY = '\n';

	var RICH_TEXT_TYPES = {
	  'text/rtf': 1,
	  'text/html': 1
	};

	/**
	 * If DataTransferItem is a file then return the Blob of data.
	 *
	 * @param {object} item
	 * @return {?blob}
	 */
	function getFileFromDataTransfer(item) {
	  if (item.kind == 'file') {
	    return item.getAsFile();
	  }
	}

	var DataTransfer = function () {
	  /**
	   * @param {object} data
	   */
	  function DataTransfer(data) {
	    _classCallCheck(this, DataTransfer);

	    this.data = data;

	    // Types could be DOMStringList or array
	    this.types = data.types ? createArrayFromMixed(data.types) : [];
	  }

	  /**
	   * Is this likely to be a rich text data transfer?
	   *
	   * @return {boolean}
	   */


	  DataTransfer.prototype.isRichText = function isRichText() {
	    // If HTML is available, treat this data as rich text. This way, we avoid
	    // using a pasted image if it is packaged with HTML -- this may occur with
	    // pastes from MS Word, for example.  However this is only rich text if
	    // there's accompanying text.
	    if (this.getHTML() && this.getText()) {
	      return true;
	    }

	    // When an image is copied from a preview window, you end up with two
	    // DataTransferItems one of which is a file's metadata as text.  Skip those.
	    if (this.isImage()) {
	      return false;
	    }

	    return this.types.some(function (type) {
	      return RICH_TEXT_TYPES[type];
	    });
	  };

	  /**
	   * Get raw text.
	   *
	   * @return {?string}
	   */


	  DataTransfer.prototype.getText = function getText() {
	    var text;
	    if (this.data.getData) {
	      if (!this.types.length) {
	        text = this.data.getData('Text');
	      } else if (this.types.indexOf('text/plain') != -1) {
	        text = this.data.getData('text/plain');
	      }
	    }
	    return text ? text.replace(CR_LF_REGEX, LF_ONLY) : null;
	  };

	  /**
	   * Get HTML paste data
	   *
	   * @return {?string}
	   */


	  DataTransfer.prototype.getHTML = function getHTML() {
	    if (this.data.getData) {
	      if (!this.types.length) {
	        return this.data.getData('Text');
	      } else if (this.types.indexOf('text/html') != -1) {
	        return this.data.getData('text/html');
	      }
	    }
	  };

	  /**
	   * Is this a link data transfer?
	   *
	   * @return {boolean}
	   */


	  DataTransfer.prototype.isLink = function isLink() {
	    return this.types.some(function (type) {
	      return type.indexOf('Url') != -1 || type.indexOf('text/uri-list') != -1 || type.indexOf('text/x-moz-url');
	    });
	  };

	  /**
	   * Get a link url.
	   *
	   * @return {?string}
	   */


	  DataTransfer.prototype.getLink = function getLink() {
	    if (this.data.getData) {
	      if (this.types.indexOf('text/x-moz-url') != -1) {
	        var url = this.data.getData('text/x-moz-url').split('\n');
	        return url[0];
	      }
	      return this.types.indexOf('text/uri-list') != -1 ? this.data.getData('text/uri-list') : this.data.getData('url');
	    }

	    return null;
	  };

	  /**
	   * Is this an image data transfer?
	   *
	   * @return {boolean}
	   */


	  DataTransfer.prototype.isImage = function isImage() {
	    var isImage = this.types.some(function (type) {
	      // Firefox will have a type of application/x-moz-file for images during
	      // dragging
	      return type.indexOf('application/x-moz-file') != -1;
	    });

	    if (isImage) {
	      return true;
	    }

	    var items = this.getFiles();
	    for (var i = 0; i < items.length; i++) {
	      var type = items[i].type;
	      if (!PhotosMimeType.isImage(type)) {
	        return false;
	      }
	    }

	    return true;
	  };

	  DataTransfer.prototype.getCount = function getCount() {
	    if (this.data.hasOwnProperty('items')) {
	      return this.data.items.length;
	    } else if (this.data.hasOwnProperty('mozItemCount')) {
	      return this.data.mozItemCount;
	    } else if (this.data.files) {
	      return this.data.files.length;
	    }
	    return null;
	  };

	  /**
	   * Get files.
	   *
	   * @return {array}
	   */


	  DataTransfer.prototype.getFiles = function getFiles() {
	    if (this.data.items) {
	      // createArrayFromMixed doesn't properly handle DataTransferItemLists.
	      return Array.prototype.slice.call(this.data.items).map(getFileFromDataTransfer).filter(emptyFunction.thatReturnsArgument);
	    } else if (this.data.files) {
	      return Array.prototype.slice.call(this.data.files);
	    } else {
	      return [];
	    }
	  };

	  /**
	   * Are there any files to fetch?
	   *
	   * @return {boolean}
	   */


	  DataTransfer.prototype.hasFiles = function hasFiles() {
	    return this.getFiles().length > 0;
	  };

	  return DataTransfer;
	}();

	module.exports = DataTransfer;

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	var PhotosMimeType = {
	  isImage: function isImage(mimeString) {
	    return getParts(mimeString)[0] === 'image';
	  },
	  isJpeg: function isJpeg(mimeString) {
	    var parts = getParts(mimeString);
	    return PhotosMimeType.isImage(mimeString) && (
	    // see http://fburl.com/10972194
	    parts[1] === 'jpeg' || parts[1] === 'pjpeg');
	  }
	};

	function getParts(mimeString) {
	  return mimeString.split('/');
	}

	module.exports = PhotosMimeType;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var invariant = __webpack_require__(19);

	/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFromMixed.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
	function toArray(obj) {
	  var length = obj.length;

	  // Some browsers builtin objects can report typeof 'function' (e.g. NodeList
	  // in old versions of Safari).
	  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : void 0;

	  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : void 0;

	  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : void 0;

	  !(typeof obj.callee !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : invariant(false) : void 0;

	  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
	  // without method will throw during the slice call and skip straight to the
	  // fallback.
	  if (obj.hasOwnProperty) {
	    try {
	      return Array.prototype.slice.call(obj);
	    } catch (e) {
	      // IE < 9 does not support Array#slice on collections objects
	    }
	  }

	  // Fall back to copying key by key. This assumes all keys have a value,
	  // so will not preserve sparsely populated inputs.
	  var ret = Array(length);
	  for (var ii = 0; ii < length; ii++) {
	    ret[ii] = obj[ii];
	  }
	  return ret;
	}

	/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
	function hasArrayNature(obj) {
	  return (
	    // not null/false
	    !!obj && (
	    // arrays are objects, NodeLists are functions in Safari
	    typeof obj == 'object' || typeof obj == 'function') &&
	    // quacks like an array
	    'length' in obj &&
	    // not window
	    !('setInterval' in obj) &&
	    // no DOM node should be considered an array-like
	    // a 'select' element has 'length' and 'item' properties on IE8
	    typeof obj.nodeType != 'number' && (
	    // a real array
	    Array.isArray(obj) ||
	    // arguments
	    'callee' in obj ||
	    // HTMLCollection/NodeList
	    'item' in obj)
	  );
	}

	/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFromMixed = require('createArrayFromMixed');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFromMixed(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
	function createArrayFromMixed(obj) {
	  if (!hasArrayNature(obj)) {
	    return [obj];
	  } else if (Array.isArray(obj)) {
	    return obj.slice();
	  } else {
	    return toArray(obj);
	  }
	}

	module.exports = createArrayFromMixed;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findAncestorOffsetKey
	 * @typechecks
	 * 
	 */

	'use strict';

	var getSelectionOffsetKeyForNode = __webpack_require__(85);

	/**
	 * Get the key from the node's nearest offset-aware ancestor.
	 */
	function findAncestorOffsetKey(node) {
	  var searchNode = node;
	  while (searchNode && searchNode !== document.documentElement) {
	    var key = getSelectionOffsetKeyForNode(searchNode);
	    if (key != null) {
	      return key;
	    }
	    searchNode = searchNode.parentNode;
	  }
	  return null;
	}

	module.exports = findAncestorOffsetKey;

/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getSelectionOffsetKeyForNode
	 * @typechecks
	 * 
	 */

	'use strict';

	/**
	 * Get offset key from a node or it's child nodes. Return the first offset key
	 * found on the DOM tree of given node.
	 */

	function getSelectionOffsetKeyForNode(node) {
	  if (node instanceof Element) {
	    var offsetKey = node.getAttribute('data-offset-key');
	    if (offsetKey) {
	      return offsetKey;
	    }
	    for (var ii = 0; ii < node.childNodes.length; ii++) {
	      var childOffsetKey = getSelectionOffsetKeyForNode(node.childNodes[ii]);
	      if (childOffsetKey) {
	        return childOffsetKey;
	      }
	    }
	  }
	  return null;
	}

	module.exports = getSelectionOffsetKeyForNode;

/***/ },
/* 86 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getTextContentFromFiles
	 * 
	 */

	'use strict';

	var TEXT_CLIPPING_REGEX = /\.textClipping$/;

	var TEXT_TYPES = {
	  'text/plain': true,
	  'text/html': true,
	  'text/rtf': true
	};

	// Somewhat arbitrary upper bound on text size. Let's not lock up the browser.
	var TEXT_SIZE_UPPER_BOUND = 5000;

	/**
	 * Extract the text content from a file list.
	 */
	function getTextContentFromFiles(files, callback) {
	  var readCount = 0;
	  var results = [];
	  files.forEach(function ( /*blob*/file) {
	    readFile(file, function ( /*string*/text) {
	      readCount++;
	      text && results.push(text.slice(0, TEXT_SIZE_UPPER_BOUND));
	      if (readCount == files.length) {
	        callback(results.join('\r'));
	      }
	    });
	  });
	}

	/**
	 * todo isaac: Do work to turn html/rtf into a content fragment.
	 */
	function readFile(file, callback) {
	  if (!global.FileReader || file.type && !(file.type in TEXT_TYPES)) {
	    callback('');
	    return;
	  }

	  if (file.type === '') {
	    var contents = '';
	    // Special-case text clippings, which have an empty type but include
	    // `.textClipping` in the file name. `readAsText` results in an empty
	    // string for text clippings, so we force the file name to serve
	    // as the text value for the file.
	    if (TEXT_CLIPPING_REGEX.test(file.name)) {
	      contents = file.name.replace(TEXT_CLIPPING_REGEX, '');
	    }
	    callback(contents);
	    return;
	  }

	  var reader = new FileReader();
	  reader.onload = function () {
	    callback(reader.result);
	  };
	  reader.onerror = function () {
	    callback('');
	  };
	  reader.readAsText(file);
	}

	module.exports = getTextContentFromFiles;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getUpdatedSelectionState
	 * 
	 */

	'use strict';

	var DraftOffsetKey = __webpack_require__(67);

	var nullthrows = __webpack_require__(41);

	function getUpdatedSelectionState(editorState, anchorKey, anchorOffset, focusKey, focusOffset) {
	  var selection = nullthrows(editorState.getSelection());
	  if (process.env.NODE_ENV !== 'production') {
	    if (!anchorKey || !focusKey) {
	      /*eslint-disable no-console */
	      console.warn('Invalid selection state.', arguments, editorState.toJS());
	      /*eslint-enable no-console */
	      return selection;
	    }
	  }

	  var anchorPath = DraftOffsetKey.decode(anchorKey);
	  var anchorBlockKey = anchorPath.blockKey;
	  var anchorLeaf = editorState.getBlockTree(anchorBlockKey).getIn([anchorPath.decoratorKey, 'leaves', anchorPath.leafKey]);

	  var focusPath = DraftOffsetKey.decode(focusKey);
	  var focusBlockKey = focusPath.blockKey;
	  var focusLeaf = editorState.getBlockTree(focusBlockKey).getIn([focusPath.decoratorKey, 'leaves', focusPath.leafKey]);

	  var anchorLeafStart = anchorLeaf.get('start');
	  var focusLeafStart = focusLeaf.get('start');

	  var anchorBlockOffset = anchorLeaf ? anchorLeafStart + anchorOffset : null;
	  var focusBlockOffset = focusLeaf ? focusLeafStart + focusOffset : null;

	  var areEqual = selection.getAnchorKey() === anchorBlockKey && selection.getAnchorOffset() === anchorBlockOffset && selection.getFocusKey() === focusBlockKey && selection.getFocusOffset() === focusBlockOffset;

	  if (areEqual) {
	    return selection;
	  }

	  var isBackward = false;
	  if (anchorBlockKey === focusBlockKey) {
	    var anchorLeafEnd = anchorLeaf.get('end');
	    var focusLeafEnd = focusLeaf.get('end');
	    if (focusLeafStart === anchorLeafStart && focusLeafEnd === anchorLeafEnd) {
	      isBackward = focusOffset < anchorOffset;
	    } else {
	      isBackward = focusLeafStart < anchorLeafStart;
	    }
	  } else {
	    var startKey = editorState.getCurrentContent().getBlockMap().keySeq().skipUntil(function (v) {
	      return v === anchorBlockKey || v === focusBlockKey;
	    }).first();
	    isBackward = startKey === focusBlockKey;
	  }

	  return selection.merge({
	    anchorKey: anchorBlockKey,
	    anchorOffset: anchorBlockOffset,
	    focusKey: focusBlockKey,
	    focusOffset: focusBlockOffset,
	    isBackward: isBackward
	  });
	}

	module.exports = getUpdatedSelectionState;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventHandled
	 * @typechecks
	 * 
	 */

	'use strict';

	/**
	 * Utility method for determining whether or not the value returned
	 * from a handler indicates that it was handled.
	 */
	function isEventHandled(value) {
	  return value === 'handled' || value === true;
	}

	module.exports = isEventHandled;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorEditHandler
	 * 
	 */

	'use strict';

	var onBeforeInput = __webpack_require__(90);
	var onBlur = __webpack_require__(91);
	var onCompositionStart = __webpack_require__(92);
	var onCopy = __webpack_require__(93);
	var onCut = __webpack_require__(95);
	var onDragOver = __webpack_require__(96);
	var onDragStart = __webpack_require__(97);
	var onFocus = __webpack_require__(98);
	var onInput = __webpack_require__(99);
	var onKeyDown = __webpack_require__(100);
	var onPaste = __webpack_require__(122);
	var onSelect = __webpack_require__(128);

	var DraftEditorEditHandler = {
	  onBeforeInput: onBeforeInput,
	  onBlur: onBlur,
	  onCompositionStart: onCompositionStart,
	  onCopy: onCopy,
	  onCut: onCut,
	  onDragOver: onDragOver,
	  onDragStart: onDragStart,
	  onFocus: onFocus,
	  onInput: onInput,
	  onKeyDown: onKeyDown,
	  onPaste: onPaste,
	  onSelect: onSelect
	};

	module.exports = DraftEditorEditHandler;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnBeforeInput
	 * 
	 */

	'use strict';

	var BlockTree = __webpack_require__(32);
	var DraftModifier = __webpack_require__(10);
	var EditorState = __webpack_require__(31);
	var UserAgent = __webpack_require__(55);

	var getEntityKeyForSelection = __webpack_require__(49);
	var isSelectionAtLeafStart = __webpack_require__(50);
	var nullthrows = __webpack_require__(41);

	var isEventHandled = __webpack_require__(88);

	// When nothing is focused, Firefox regards two characters, `'` and `/`, as
	// commands that should open and focus the "quickfind" search bar. This should
	// *never* happen while a contenteditable is focused, but as of v28, it
	// sometimes does, even when the keypress event target is the contenteditable.
	// This breaks the input. Special case these characters to ensure that when
	// they are typed, we prevent default on the event to make sure not to
	// trigger quickfind.
	var FF_QUICKFIND_CHAR = '\'';
	var FF_QUICKFIND_LINK_CHAR = '\/';
	var isFirefox = UserAgent.isBrowser('Firefox');

	function mustPreventDefaultForCharacter(character) {
	  return isFirefox && (character == FF_QUICKFIND_CHAR || character == FF_QUICKFIND_LINK_CHAR);
	}

	/**
	 * Replace the current selection with the specified text string, with the
	 * inline style and entity key applied to the newly inserted text.
	 */
	function replaceText(editorState, text, inlineStyle, entityKey) {
	  var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), text, inlineStyle, entityKey);
	  return EditorState.push(editorState, contentState, 'insert-characters');
	}

	/**
	 * When `onBeforeInput` executes, the browser is attempting to insert a
	 * character into the editor. Apply this character data to the document,
	 * allowing native insertion if possible.
	 *
	 * Native insertion is encouraged in order to limit re-rendering and to
	 * preserve spellcheck highlighting, which disappears or flashes if re-render
	 * occurs on the relevant text nodes.
	 */
	function editOnBeforeInput(e) {
	  var chars = e.data;

	  // In some cases (ex: IE ideographic space insertion) no character data
	  // is provided. There's nothing to do when this happens.
	  if (!chars) {
	    return;
	  }

	  // Allow the top-level component to handle the insertion manually. This is
	  // useful when triggering interesting behaviors for a character insertion,
	  // Simple examples: replacing a raw text ':)' with a smile emoji or image
	  // decorator, or setting a block to be a list item after typing '- ' at the
	  // start of the block.
	  if (this.props.handleBeforeInput && isEventHandled(this.props.handleBeforeInput(chars))) {
	    e.preventDefault();
	    return;
	  }

	  // If selection is collapsed, conditionally allow native behavior. This
	  // reduces re-renders and preserves spellcheck highlighting. If the selection
	  // is not collapsed, we will re-render.
	  var editorState = this.props.editorState;
	  var selection = editorState.getSelection();

	  if (!selection.isCollapsed()) {
	    e.preventDefault();
	    this.update(replaceText(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())));
	    return;
	  }

	  var mayAllowNative = !isSelectionAtLeafStart(editorState);
	  var newEditorState = replaceText(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection()));

	  if (!mayAllowNative) {
	    e.preventDefault();
	    this.update(newEditorState);
	    return;
	  }

	  var anchorKey = selection.getAnchorKey();
	  var anchorTree = editorState.getBlockTree(anchorKey);

	  // Check the old and new "fingerprints" of the current block to determine
	  // whether this insertion requires any addition or removal of text nodes,
	  // in which case we would prevent the native character insertion.
	  var originalFingerprint = BlockTree.getFingerprint(anchorTree);
	  var newFingerprint = BlockTree.getFingerprint(newEditorState.getBlockTree(anchorKey));

	  if (mustPreventDefaultForCharacter(chars) || originalFingerprint !== newFingerprint || nullthrows(newEditorState.getDirectionMap()).get(anchorKey) !== nullthrows(editorState.getDirectionMap()).get(anchorKey)) {
	    e.preventDefault();
	  } else {
	    // The native event is allowed to occur.
	    newEditorState = EditorState.set(newEditorState, {
	      nativelyRenderedContent: newEditorState.getCurrentContent()
	    });
	  }

	  this.update(newEditorState);
	}

	module.exports = editOnBeforeInput;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnBlur
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(31);
	var UserAgent = __webpack_require__(55);

	var getActiveElement = __webpack_require__(66);

	var isWebKit = UserAgent.isEngine('WebKit');

	function editOnBlur(e) {
	  // Webkit has a bug in which blurring a contenteditable by clicking on
	  // other active elements will trigger the `blur` event but will not remove
	  // the DOM selection from the contenteditable. We therefore force the
	  // issue to be certain, checking whether the active element is `body`
	  // to force it when blurring occurs within the window (as opposed to
	  // clicking to another tab or window).
	  if (isWebKit && getActiveElement() === document.body) {
	    global.getSelection().removeAllRanges();
	  }

	  var editorState = this.props.editorState;
	  var currentSelection = editorState.getSelection();
	  if (!currentSelection.getHasFocus()) {
	    return;
	  }

	  var selection = currentSelection.set('hasFocus', false);
	  this.props.onBlur && this.props.onBlur(e);
	  this.update(EditorState.acceptSelection(editorState, selection));
	}

	module.exports = editOnBlur;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnCompositionStart
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(31);

	/**
	 * The user has begun using an IME input system. Switching to `composite` mode
	 * allows handling composition input and disables other edit behavior.
	 */
	function editOnCompositionStart() {
	  this.setRenderGuard();
	  this.setMode('composite');
	  this.update(EditorState.set(this.props.editorState, { inCompositionMode: true }));
	}

	module.exports = editOnCompositionStart;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnCopy
	 * 
	 */

	'use strict';

	var getFragmentFromSelection = __webpack_require__(94);

	/**
	 * If we have a selection, create a ContentState fragment and store
	 * it in our internal clipboard. Subsequent paste events will use this
	 * fragment if no external clipboard data is supplied.
	 */
	function editOnCopy(e) {
	  var editorState = this.props.editorState;
	  var selection = editorState.getSelection();

	  // No selection, so there's nothing to copy.
	  if (selection.isCollapsed()) {
	    e.preventDefault();
	    return;
	  }

	  this.setClipboard(getFragmentFromSelection(this.props.editorState));
	}

	module.exports = editOnCopy;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getFragmentFromSelection
	 * 
	 */

	'use strict';

	var getContentStateFragment = __webpack_require__(22);

	function getFragmentFromSelection(editorState) {
	  var selectionState = editorState.getSelection();

	  if (selectionState.isCollapsed()) {
	    return null;
	  }

	  return getContentStateFragment(editorState.getCurrentContent(), selectionState);
	}

	module.exports = getFragmentFromSelection;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnCut
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(10);
	var EditorState = __webpack_require__(31);
	var Style = __webpack_require__(69);

	var getFragmentFromSelection = __webpack_require__(94);
	var getScrollPosition = __webpack_require__(75);

	/**
	 * On `cut` events, native behavior is allowed to occur so that the system
	 * clipboard is set properly. This means that we need to take steps to recover
	 * the editor DOM state after the `cut` has occurred in order to maintain
	 * control of the component.
	 *
	 * In addition, we can keep a copy of the removed fragment, including all
	 * styles and entities, for use as an internal paste.
	 */
	function editOnCut(e) {
	  var _this = this;

	  var editorState = this.props.editorState;
	  var selection = editorState.getSelection();

	  // No selection, so there's nothing to cut.
	  if (selection.isCollapsed()) {
	    e.preventDefault();
	    return;
	  }

	  // Track the current scroll position so that it can be forced back in place
	  // after the editor regains control of the DOM.
	  var scrollParent = Style.getScrollParent(e.target);

	  var _getScrollPosition = getScrollPosition(scrollParent);

	  var x = _getScrollPosition.x;
	  var y = _getScrollPosition.y;


	  var fragment = getFragmentFromSelection(editorState);
	  this.setClipboard(fragment);

	  // Set `cut` mode to disable all event handling temporarily.
	  this.setRenderGuard();
	  this.setMode('cut');

	  // Let native `cut` behavior occur, then recover control.
	  setTimeout(function () {
	    _this.restoreEditorDOM({ x: x, y: y });
	    _this.removeRenderGuard();
	    _this.exitCurrentMode();
	    _this.update(removeFragment(editorState));
	  }, 0);
	}

	function removeFragment(editorState) {
	  var newContent = DraftModifier.removeRange(editorState.getCurrentContent(), editorState.getSelection(), 'forward');
	  return EditorState.push(editorState, newContent, 'remove-range');
	}

	module.exports = editOnCut;

/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnDragOver
	 * 
	 */

	'use strict';

	/**
	 * Drag behavior has begun from outside the editor element.
	 */

	function editOnDragOver(e) {
	  this._internalDrag = false;
	  this.setMode('drag');
	  e.preventDefault();
	}

	module.exports = editOnDragOver;

/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnDragStart
	 * 
	 */

	'use strict';

	/**
	 * A `dragstart` event has begun within the text editor component.
	 */

	function editOnDragStart() {
	  this._internalDrag = true;
	  this.setMode('drag');
	}

	module.exports = editOnDragStart;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnFocus
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(31);

	function editOnFocus(e) {
	  var editorState = this.props.editorState;
	  var currentSelection = editorState.getSelection();
	  if (currentSelection.getHasFocus()) {
	    return;
	  }

	  var selection = currentSelection.set('hasFocus', true);
	  this.props.onFocus && this.props.onFocus(e);

	  // When the tab containing this text editor is hidden and the user does a
	  // find-in-page in a _different_ tab, Chrome on Mac likes to forget what the
	  // selection was right after sending this focus event and (if you let it)
	  // moves the cursor back to the beginning of the editor, so we force the
	  // selection here instead of simply accepting it in order to preserve the
	  // old cursor position. See https://crbug.com/540004.
	  this.update(EditorState.forceSelection(editorState, selection));
	}

	module.exports = editOnFocus;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnInput
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(10);
	var DraftOffsetKey = __webpack_require__(67);
	var EditorState = __webpack_require__(31);
	var Entity = __webpack_require__(16);
	var UserAgent = __webpack_require__(55);

	var findAncestorOffsetKey = __webpack_require__(84);
	var nullthrows = __webpack_require__(41);

	var isGecko = UserAgent.isEngine('Gecko');

	var DOUBLE_NEWLINE = '\n\n';

	/**
	 * This function is intended to handle spellcheck and autocorrect changes,
	 * which occur in the DOM natively without any opportunity to observe or
	 * interpret the changes before they occur.
	 *
	 * The `input` event fires in contentEditable elements reliably for non-IE
	 * browsers, immediately after changes occur to the editor DOM. Since our other
	 * handlers override or otherwise handle cover other varieties of text input,
	 * the DOM state should match the model in all controlled input cases. Thus,
	 * when an `input` change leads to a DOM/model mismatch, the change should be
	 * due to a spellcheck change, and we can incorporate it into our model.
	 */
	function editOnInput() {
	  var domSelection = global.getSelection();

	  var anchorNode = domSelection.anchorNode;
	  var isCollapsed = domSelection.isCollapsed;

	  if (anchorNode.nodeType !== Node.TEXT_NODE) {
	    return;
	  }

	  var domText = anchorNode.textContent;
	  var editorState = this.props.editorState;

	  var offsetKey = nullthrows(findAncestorOffsetKey(anchorNode));

	  var _DraftOffsetKey$decod = DraftOffsetKey.decode(offsetKey);

	  var blockKey = _DraftOffsetKey$decod.blockKey;
	  var decoratorKey = _DraftOffsetKey$decod.decoratorKey;
	  var leafKey = _DraftOffsetKey$decod.leafKey;

	  var _editorState$getBlock = editorState.getBlockTree(blockKey).getIn([decoratorKey, 'leaves', leafKey]);

	  var start = _editorState$getBlock.start;
	  var end = _editorState$getBlock.end;


	  var content = editorState.getCurrentContent();
	  var block = content.getBlockForKey(blockKey);
	  var modelText = block.getText().slice(start, end);

	  // Special-case soft newlines here. If the DOM text ends in a soft newline,
	  // we will have manually inserted an extra soft newline in DraftEditorLeaf.
	  // We want to remove this extra newline for the purpose of our comparison
	  // of DOM and model text.
	  if (domText.endsWith(DOUBLE_NEWLINE)) {
	    domText = domText.slice(0, -1);
	  }

	  // No change -- the DOM is up to date. Nothing to do here.
	  if (domText === modelText) {
	    return;
	  }

	  var selection = editorState.getSelection();

	  // We'll replace the entire leaf with the text content of the target.
	  var targetRange = selection.merge({
	    anchorOffset: start,
	    focusOffset: end,
	    isBackward: false
	  });

	  var entityKey = block.getEntityAt(start);
	  var entity = entityKey && Entity.get(entityKey);
	  var entityType = entity && entity.getMutability();
	  var preserveEntity = entityType === 'MUTABLE';

	  // Immutable or segmented entities cannot properly be handled by the
	  // default browser undo, so we have to use a different change type to
	  // force using our internal undo method instead of falling through to the
	  // native browser undo.
	  var changeType = preserveEntity ? 'spellcheck-change' : 'apply-entity';

	  var newContent = DraftModifier.replaceText(content, targetRange, domText, block.getInlineStyleAt(start), preserveEntity ? block.getEntityAt(start) : null);

	  var anchorOffset, focusOffset, startOffset, endOffset;

	  if (isGecko) {
	    // Firefox selection does not change while the context menu is open, so
	    // we preserve the anchor and focus values of the DOM selection.
	    anchorOffset = domSelection.anchorOffset;
	    focusOffset = domSelection.focusOffset;
	    startOffset = start + Math.min(anchorOffset, focusOffset);
	    endOffset = startOffset + Math.abs(anchorOffset - focusOffset);
	    anchorOffset = startOffset;
	    focusOffset = endOffset;
	  } else {
	    // Browsers other than Firefox may adjust DOM selection while the context
	    // menu is open, and Safari autocorrect is prone to providing an inaccurate
	    // DOM selection. Don't trust it. Instead, use our existing SelectionState
	    // and adjust it based on the number of characters changed during the
	    // mutation.
	    var charDelta = domText.length - modelText.length;
	    startOffset = selection.getStartOffset();
	    endOffset = selection.getEndOffset();

	    anchorOffset = isCollapsed ? endOffset + charDelta : startOffset;
	    focusOffset = endOffset + charDelta;
	  }

	  // Segmented entities are completely or partially removed when their
	  // text content changes. For this case we do not want any text to be selected
	  // after the change, so we are not merging the selection.
	  var contentWithAdjustedDOMSelection = newContent.merge({
	    selectionBefore: content.getSelectionAfter(),
	    selectionAfter: selection.merge({ anchorOffset: anchorOffset, focusOffset: focusOffset })
	  });

	  this.update(EditorState.push(editorState, contentWithAdjustedDOMSelection, changeType));
	}

	module.exports = editOnInput;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnKeyDown
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(10);
	var EditorState = __webpack_require__(31);
	var KeyBindingUtil = __webpack_require__(101);
	var Keys = __webpack_require__(48);
	var SecondaryClipboard = __webpack_require__(102);
	var UserAgent = __webpack_require__(55);

	var keyCommandBackspaceToStartOfLine = __webpack_require__(103);
	var keyCommandBackspaceWord = __webpack_require__(110);
	var keyCommandDeleteWord = __webpack_require__(113);
	var keyCommandInsertNewline = __webpack_require__(115);
	var keyCommandPlainBackspace = __webpack_require__(116);
	var keyCommandPlainDelete = __webpack_require__(117);
	var keyCommandMoveSelectionToEndOfBlock = __webpack_require__(118);
	var keyCommandMoveSelectionToStartOfBlock = __webpack_require__(119);
	var keyCommandTransposeCharacters = __webpack_require__(120);
	var keyCommandUndo = __webpack_require__(121);

	var isEventHandled = __webpack_require__(88);

	var isOptionKeyCommand = KeyBindingUtil.isOptionKeyCommand;

	var isChrome = UserAgent.isBrowser('Chrome');

	/**
	 * Map a `DraftEditorCommand` command value to a corresponding function.
	 */
	function onKeyCommand(command, editorState) {
	  switch (command) {
	    case 'redo':
	      return EditorState.redo(editorState);
	    case 'delete':
	      return keyCommandPlainDelete(editorState);
	    case 'delete-word':
	      return keyCommandDeleteWord(editorState);
	    case 'backspace':
	      return keyCommandPlainBackspace(editorState);
	    case 'backspace-word':
	      return keyCommandBackspaceWord(editorState);
	    case 'backspace-to-start-of-line':
	      return keyCommandBackspaceToStartOfLine(editorState);
	    case 'split-block':
	      return keyCommandInsertNewline(editorState);
	    case 'transpose-characters':
	      return keyCommandTransposeCharacters(editorState);
	    case 'move-selection-to-start-of-block':
	      return keyCommandMoveSelectionToStartOfBlock(editorState);
	    case 'move-selection-to-end-of-block':
	      return keyCommandMoveSelectionToEndOfBlock(editorState);
	    case 'secondary-cut':
	      return SecondaryClipboard.cut(editorState);
	    case 'secondary-paste':
	      return SecondaryClipboard.paste(editorState);
	    default:
	      return editorState;
	  }
	}

	/**
	 * Intercept keydown behavior to handle keys and commands manually, if desired.
	 *
	 * Keydown combinations may be mapped to `DraftCommand` values, which may
	 * correspond to command functions that modify the editor or its contents.
	 *
	 * See `getDefaultKeyBinding` for defaults. Alternatively, the top-level
	 * component may provide a custom mapping via the `keyBindingFn` prop.
	 */
	function editOnKeyDown(e) {
	  var keyCode = e.which;
	  var editorState = this.props.editorState;

	  switch (keyCode) {
	    case Keys.RETURN:
	      e.preventDefault();
	      // The top-level component may manually handle newline insertion. If
	      // no special handling is performed, fall through to command handling.
	      if (this.props.handleReturn && isEventHandled(this.props.handleReturn(e))) {
	        return;
	      }
	      break;
	    case Keys.ESC:
	      e.preventDefault();
	      this.props.onEscape && this.props.onEscape(e);
	      return;
	    case Keys.TAB:
	      this.props.onTab && this.props.onTab(e);
	      return;
	    case Keys.UP:
	      this.props.onUpArrow && this.props.onUpArrow(e);
	      return;
	    case Keys.DOWN:
	      this.props.onDownArrow && this.props.onDownArrow(e);
	      return;
	    case Keys.SPACE:
	      // Handling for OSX where option + space scrolls.
	      if (isChrome && isOptionKeyCommand(e)) {
	        e.preventDefault();
	        // Insert a nbsp into the editor.
	        var contentState = DraftModifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), ' ');
	        this.update(EditorState.push(editorState, contentState, 'insert-characters'));
	        return;
	      }
	  }

	  var command = this.props.keyBindingFn(e);

	  // If no command is specified, allow keydown event to continue.
	  if (!command) {
	    return;
	  }

	  if (command === 'undo') {
	    // Since undo requires some special updating behavior to keep the editor
	    // in sync, handle it separately.
	    keyCommandUndo(e, editorState, this.update);
	    return;
	  }

	  // At this point, we know that we're handling a command of some kind, so
	  // we don't want to insert a character following the keydown.
	  e.preventDefault();

	  // Allow components higher up the tree to handle the command first.
	  if (this.props.handleKeyCommand && isEventHandled(this.props.handleKeyCommand(command))) {
	    return;
	  }

	  var newState = onKeyCommand(command, editorState);
	  if (newState !== editorState) {
	    this.update(newState);
	  }
	}

	module.exports = editOnKeyDown;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyBindingUtil
	 * @typechecks
	 * 
	 */

	'use strict';

	var UserAgent = __webpack_require__(55);

	var isOSX = UserAgent.isPlatform('Mac OS X');

	var KeyBindingUtil = {
	  /**
	   * Check whether the ctrlKey modifier is *not* being used in conjunction with
	   * the altKey modifier. If they are combined, the result is an `altGraph`
	   * key modifier, which should not be handled by this set of key bindings.
	   */
	  isCtrlKeyCommand: function isCtrlKeyCommand(e) {
	    return !!e.ctrlKey && !e.altKey;
	  },

	  isOptionKeyCommand: function isOptionKeyCommand(e) {
	    return isOSX && e.altKey;
	  },

	  hasCommandModifier: function hasCommandModifier(e) {
	    return isOSX ? !!e.metaKey && !e.altKey : KeyBindingUtil.isCtrlKeyCommand(e);
	  }
	};

	module.exports = KeyBindingUtil;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SecondaryClipboard
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(10);
	var EditorState = __webpack_require__(31);

	var getContentStateFragment = __webpack_require__(22);
	var nullthrows = __webpack_require__(41);

	var clipboard = null;

	/**
	 * Some systems offer a "secondary" clipboard to allow quick internal cut
	 * and paste behavior. For instance, Ctrl+K (cut) and Ctrl+Y (paste).
	 */
	var SecondaryClipboard = {
	  cut: function cut(editorState) {
	    var content = editorState.getCurrentContent();
	    var selection = editorState.getSelection();
	    var targetRange = null;

	    if (selection.isCollapsed()) {
	      var anchorKey = selection.getAnchorKey();
	      var blockEnd = content.getBlockForKey(anchorKey).getLength();

	      if (blockEnd === selection.getAnchorOffset()) {
	        return editorState;
	      }

	      targetRange = selection.set('focusOffset', blockEnd);
	    } else {
	      targetRange = selection;
	    }

	    targetRange = nullthrows(targetRange);
	    clipboard = getContentStateFragment(content, targetRange);

	    var afterRemoval = DraftModifier.removeRange(content, targetRange, 'forward');

	    if (afterRemoval === content) {
	      return editorState;
	    }

	    return EditorState.push(editorState, afterRemoval, 'remove-range');
	  },

	  paste: function paste(editorState) {
	    if (!clipboard) {
	      return editorState;
	    }

	    var newContent = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), clipboard);

	    return EditorState.push(editorState, newContent, 'insert-fragment');
	  }
	};

	module.exports = SecondaryClipboard;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandBackspaceToStartOfLine
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(31);

	var expandRangeToStartOfLine = __webpack_require__(104);
	var getDraftEditorSelectionWithNodes = __webpack_require__(107);
	var moveSelectionBackward = __webpack_require__(108);
	var removeTextWithStrategy = __webpack_require__(109);

	function keyCommandBackspaceToStartOfLine(editorState) {
	  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
	    var selection = strategyState.getSelection();
	    if (selection.isCollapsed() && selection.getAnchorOffset() === 0) {
	      return moveSelectionBackward(strategyState, 1);
	    }

	    var domSelection = global.getSelection();
	    var range = domSelection.getRangeAt(0);
	    range = expandRangeToStartOfLine(range);

	    return getDraftEditorSelectionWithNodes(strategyState, null, range.endContainer, range.endOffset, range.startContainer, range.startOffset).selectionState;
	  }, 'backward');

	  if (afterRemoval === editorState.getCurrentContent()) {
	    return editorState;
	  }

	  return EditorState.push(editorState, afterRemoval, 'remove-range');
	}

	module.exports = keyCommandBackspaceToStartOfLine;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule expandRangeToStartOfLine
	 * @typechecks
	 * 
	 */

	var UnicodeUtils = __webpack_require__(105);

	var getRangeClientRects = __webpack_require__(106);
	var invariant = __webpack_require__(19);

	/**
	 * Return the computed line height, in pixels, for the provided element.
	 */
	function getLineHeightPx(element) {
	  var computed = getComputedStyle(element);
	  var div = document.createElement('div');
	  div.style.fontFamily = computed.fontFamily;
	  div.style.fontSize = computed.fontSize;
	  div.style.fontStyle = computed.fontStyle;
	  div.style.fontWeight = computed.fontWeight;
	  div.style.lineHeight = computed.lineHeight;
	  div.style.position = 'absolute';
	  div.textContent = 'M';

	  // forced layout here
	  document.body.appendChild(div);
	  var rect = div.getBoundingClientRect();
	  document.body.removeChild(div);

	  return rect.height;
	}

	/**
	 * Return whether every ClientRect in the provided list lies on the same line.
	 *
	 * We assume that the rects on the same line all contain the baseline, so the
	 * lowest top line needs to be above the highest bottom line (i.e., if you were
	 * to project the rects onto the y-axis, their intersection would be nonempty).
	 *
	 * In addition, we require that no two boxes are lineHeight (or more) apart at
	 * either top or bottom, which helps protect against false positives for fonts
	 * with extremely large glyph heights (e.g., with a font size of 17px, Zapfino
	 * produces rects of height 58px!).
	 */
	function areRectsOnOneLine(rects, lineHeight) {
	  var minTop = Infinity;
	  var minBottom = Infinity;
	  var maxTop = -Infinity;
	  var maxBottom = -Infinity;

	  for (var ii = 0; ii < rects.length; ii++) {
	    var rect = rects[ii];
	    if (rect.width === 0 || rect.width === 1) {
	      // When a range starts or ends a soft wrap, many browsers (Chrome, IE,
	      // Safari) include an empty rect on the previous or next line. When the
	      // text lies in a container whose position is not integral (e.g., from
	      // margin: auto), Safari makes these empty rects have width 1 (instead of
	      // 0). Having one-pixel-wide characters seems unlikely (and most browsers
	      // report widths in subpixel precision anyway) so it's relatively safe to
	      // skip over them.
	      continue;
	    }
	    minTop = Math.min(minTop, rect.top);
	    minBottom = Math.min(minBottom, rect.bottom);
	    maxTop = Math.max(maxTop, rect.top);
	    maxBottom = Math.max(maxBottom, rect.bottom);
	  }

	  return maxTop <= minBottom && maxTop - minTop < lineHeight && maxBottom - minBottom < lineHeight;
	}

	/**
	 * Return the length of a node, as used by Range offsets.
	 */
	function getNodeLength(node) {
	  // http://www.w3.org/TR/dom/#concept-node-length
	  switch (node.nodeType) {
	    case Node.DOCUMENT_TYPE_NODE:
	      return 0;
	    case Node.TEXT_NODE:
	    case Node.PROCESSING_INSTRUCTION_NODE:
	    case Node.COMMENT_NODE:
	      return node.length;
	    default:
	      return node.childNodes.length;
	  }
	}

	/**
	 * Given a collapsed range, move the start position backwards as far as
	 * possible while the range still spans only a single line.
	 */
	function expandRangeToStartOfLine(range) {
	  !range.collapsed ? process.env.NODE_ENV !== 'production' ? invariant(false, 'expandRangeToStartOfLine: Provided range is not collapsed.') : invariant(false) : void 0;
	  range = range.cloneRange();

	  var containingElement = range.startContainer;
	  if (containingElement.nodeType !== 1) {
	    containingElement = containingElement.parentNode;
	  }
	  var lineHeight = getLineHeightPx(containingElement);

	  // Imagine our text looks like:
	  //   <div><span>once upon a time, there was a <em>boy
	  //   who lived</em> </span><q><strong>under^ the
	  //   stairs</strong> in a small closet.</q></div>
	  // where the caret represents the cursor. First, we crawl up the tree until
	  // the range spans multiple lines (setting the start point to before
	  // "<strong>", then before "<div>"), then at each level we do a search to
	  // find the latest point which is still on a previous line. We'll find that
	  // the break point is inside the span, then inside the <em>, then in its text
	  // node child, the actual break point before "who".

	  var bestContainer = range.endContainer;
	  var bestOffset = range.endOffset;
	  range.setStart(range.startContainer, 0);

	  while (areRectsOnOneLine(getRangeClientRects(range), lineHeight)) {
	    bestContainer = range.startContainer;
	    bestOffset = range.startOffset;
	    !bestContainer.parentNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Found unexpected detached subtree when traversing.') : invariant(false) : void 0;
	    range.setStartBefore(bestContainer);
	    if (bestContainer.nodeType === 1 && getComputedStyle(bestContainer).display !== 'inline') {
	      // The start of the line is never in a different block-level container.
	      break;
	    }
	  }

	  // In the above example, range now spans from "<div>" to "under",
	  // bestContainer is <div>, and bestOffset is 1 (index of <q> inside <div>)].
	  // Picking out which child to recurse into here is a special case since we
	  // don't want to check past <q> -- once we find that the final range starts
	  // in <span>, we can look at all of its children (and all of their children)
	  // to find the break point.

	  // At all times, (bestContainer, bestOffset) is the latest single-line start
	  // point that we know of.
	  var currentContainer = bestContainer;
	  var maxIndexToConsider = bestOffset - 1;

	  do {
	    var nodeValue = currentContainer.nodeValue;

	    for (var ii = maxIndexToConsider; ii >= 0; ii--) {
	      if (nodeValue != null && ii > 0 && UnicodeUtils.isSurrogatePair(nodeValue, ii - 1)) {
	        // We're in the middle of a surrogate pair -- skip over so we never
	        // return a range with an endpoint in the middle of a code point.
	        continue;
	      }

	      range.setStart(currentContainer, ii);
	      if (areRectsOnOneLine(getRangeClientRects(range), lineHeight)) {
	        bestContainer = currentContainer;
	        bestOffset = ii;
	      } else {
	        break;
	      }
	    }

	    if (ii === -1 || currentContainer.childNodes.length === 0) {
	      // If ii === -1, then (bestContainer, bestOffset), which is equal to
	      // (currentContainer, 0), was a single-line start point but a start
	      // point before currentContainer wasn't, so the line break seems to
	      // have occurred immediately after currentContainer's start tag
	      //
	      // If currentContainer.childNodes.length === 0, we're already at a
	      // terminal node (e.g., text node) and should return our current best.
	      break;
	    }

	    currentContainer = currentContainer.childNodes[ii];
	    maxIndexToConsider = getNodeLength(currentContainer);
	  } while (true);

	  range.setStart(bestContainer, bestOffset);
	  return range;
	}

	module.exports = expandRangeToStartOfLine;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	/**
	 * Unicode-enabled replacesments for basic String functions.
	 *
	 * All the functions in this module assume that the input string is a valid
	 * UTF-16 encoding of a Unicode sequence. If it's not the case, the behavior
	 * will be undefined.
	 *
	 * WARNING: Since this module is typechecks-enforced, you may find new bugs
	 * when replacing normal String functions with ones provided here.
	 */

	'use strict';

	var invariant = __webpack_require__(19);

	// These two ranges are consecutive so anything in [HIGH_START, LOW_END] is a
	// surrogate code unit.
	var SURROGATE_HIGH_START = 0xD800;
	var SURROGATE_HIGH_END = 0xDBFF;
	var SURROGATE_LOW_START = 0xDC00;
	var SURROGATE_LOW_END = 0xDFFF;
	var SURROGATE_UNITS_REGEX = /[\uD800-\uDFFF]/;

	/**
	 * @param {number} codeUnit   A Unicode code-unit, in range [0, 0x10FFFF]
	 * @return {boolean}          Whether code-unit is in a surrogate (hi/low) range
	 */
	function isCodeUnitInSurrogateRange(codeUnit) {
	  return SURROGATE_HIGH_START <= codeUnit && codeUnit <= SURROGATE_LOW_END;
	}

	/**
	 * Returns whether the two characters starting at `index` form a surrogate pair.
	 * For example, given the string s = "\uD83D\uDE0A", (s, 0) returns true and
	 * (s, 1) returns false.
	 *
	 * @param {string} str
	 * @param {number} index
	 * @return {boolean}
	 */
	function isSurrogatePair(str, index) {
	  !(0 <= index && index < str.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'isSurrogatePair: Invalid index %s for string length %s.', index, str.length) : invariant(false) : void 0;
	  if (index + 1 === str.length) {
	    return false;
	  }
	  var first = str.charCodeAt(index);
	  var second = str.charCodeAt(index + 1);
	  return SURROGATE_HIGH_START <= first && first <= SURROGATE_HIGH_END && SURROGATE_LOW_START <= second && second <= SURROGATE_LOW_END;
	}

	/**
	 * @param {string} str  Non-empty string
	 * @return {boolean}    True if the input includes any surrogate code units
	 */
	function hasSurrogateUnit(str) {
	  return SURROGATE_UNITS_REGEX.test(str);
	}

	/**
	 * Return the length of the original Unicode character at given position in the
	 * String by looking into the UTF-16 code unit; that is equal to 1 for any
	 * non-surrogate characters in BMP ([U+0000..U+D7FF] and [U+E000, U+FFFF]); and
	 * returns 2 for the hi/low surrogates ([U+D800..U+DFFF]), which are in fact
	 * representing non-BMP characters ([U+10000..U+10FFFF]).
	 *
	 * Examples:
	 * - '\u0020' => 1
	 * - '\u3020' => 1
	 * - '\uD835' => 2
	 * - '\uD835\uDDEF' => 2
	 * - '\uDDEF' => 2
	 *
	 * @param {string} str  Non-empty string
	 * @param {number} pos  Position in the string to look for one code unit
	 * @return {number}      Number 1 or 2
	 */
	function getUTF16Length(str, pos) {
	  return 1 + isCodeUnitInSurrogateRange(str.charCodeAt(pos));
	}

	/**
	 * Fully Unicode-enabled replacement for String#length
	 *
	 * @param {string} str  Valid Unicode string
	 * @return {number}     The number of Unicode characters in the string
	 */
	function strlen(str) {
	  // Call the native functions if there's no surrogate char
	  if (!hasSurrogateUnit(str)) {
	    return str.length;
	  }

	  var len = 0;
	  for (var pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) {
	    len++;
	  }
	  return len;
	}

	/**
	 * Fully Unicode-enabled replacement for String#substr()
	 *
	 * @param {string} str      Valid Unicode string
	 * @param {number} start    Location in Unicode sequence to begin extracting
	 * @param {?number} length  The number of Unicode characters to extract
	 *                          (default: to the end of the string)
	 * @return {string}         Extracted sub-string
	 */
	function substr(str, start, length) {
	  start = start || 0;
	  length = length === undefined ? Infinity : length || 0;

	  // Call the native functions if there's no surrogate char
	  if (!hasSurrogateUnit(str)) {
	    return str.substr(start, length);
	  }

	  // Obvious cases
	  var size = str.length;
	  if (size <= 0 || start > size || length <= 0) {
	    return '';
	  }

	  // Find the actual starting position
	  var posA = 0;
	  if (start > 0) {
	    for (; start > 0 && posA < size; start--) {
	      posA += getUTF16Length(str, posA);
	    }
	    if (posA >= size) {
	      return '';
	    }
	  } else if (start < 0) {
	    for (posA = size; start < 0 && 0 < posA; start++) {
	      posA -= getUTF16Length(str, posA - 1);
	    }
	    if (posA < 0) {
	      posA = 0;
	    }
	  }

	  // Find the actual ending position
	  var posB = size;
	  if (length < size) {
	    for (posB = posA; length > 0 && posB < size; length--) {
	      posB += getUTF16Length(str, posB);
	    }
	  }

	  return str.substring(posA, posB);
	}

	/**
	 * Fully Unicode-enabled replacement for String#substring()
	 *
	 * @param {string} str    Valid Unicode string
	 * @param {number} start  Location in Unicode sequence to begin extracting
	 * @param {?number} end   Location in Unicode sequence to end extracting
	 *                        (default: end of the string)
	 * @return {string}       Extracted sub-string
	 */
	function substring(str, start, end) {
	  start = start || 0;
	  end = end === undefined ? Infinity : end || 0;

	  if (start < 0) {
	    start = 0;
	  }
	  if (end < 0) {
	    end = 0;
	  }

	  var length = Math.abs(end - start);
	  start = start < end ? start : end;
	  return substr(str, start, length);
	}

	/**
	 * Get a list of Unicode code-points from a String
	 *
	 * @param {string} str        Valid Unicode string
	 * @return {array<number>}    A list of code-points in [0..0x10FFFF]
	 */
	function getCodePoints(str) {
	  var codePoints = [];
	  for (var pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) {
	    codePoints.push(str.codePointAt(pos));
	  }
	  return codePoints;
	}

	var UnicodeUtils = {
	  getCodePoints: getCodePoints,
	  getUTF16Length: getUTF16Length,
	  hasSurrogateUnit: hasSurrogateUnit,
	  isCodeUnitInSurrogateRange: isCodeUnitInSurrogateRange,
	  isSurrogatePair: isSurrogatePair,
	  strlen: strlen,
	  substring: substring,
	  substr: substr
	};

	module.exports = UnicodeUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getRangeClientRects
	 * @typechecks
	 * 
	 */

	'use strict';

	var UserAgent = __webpack_require__(55);

	var invariant = __webpack_require__(19);

	var isChrome = UserAgent.isBrowser('Chrome');

	// In Chrome, the client rects will include the entire bounds of all nodes that
	// begin (have a start tag) within the selection, even if the selection does
	// not overlap the entire node. To resolve this, we split the range at each
	// start tag and join the client rects together.
	// https://code.google.com/p/chromium/issues/detail?id=324437
	/* eslint-disable consistent-return */
	function getRangeClientRectsChrome(range) {
	  var tempRange = range.cloneRange();
	  var clientRects = [];

	  for (var ancestor = range.endContainer; ancestor != null; ancestor = ancestor.parentNode) {
	    // If we've climbed up to the common ancestor, we can now use the
	    // original start point and stop climbing the tree.
	    var atCommonAncestor = ancestor === range.commonAncestorContainer;
	    if (atCommonAncestor) {
	      tempRange.setStart(range.startContainer, range.startOffset);
	    } else {
	      tempRange.setStart(tempRange.endContainer, 0);
	    }
	    var rects = Array.from(tempRange.getClientRects());
	    clientRects.push(rects);
	    if (atCommonAncestor) {
	      var _ref;

	      clientRects.reverse();
	      return (_ref = []).concat.apply(_ref, clientRects);
	    }
	    tempRange.setEndBefore(ancestor);
	  }

	   true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Found an unexpected detached subtree when getting range client rects.') : invariant(false) : void 0;
	}
	/* eslint-enable consistent-return */

	/**
	 * Like range.getClientRects() but normalizes for browser bugs.
	 */
	var getRangeClientRects = isChrome ? getRangeClientRectsChrome : function (range) {
	  return Array.from(range.getClientRects());
	};

	module.exports = getRangeClientRects;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getDraftEditorSelectionWithNodes
	 * @typechecks
	 * 
	 */

	'use strict';

	var findAncestorOffsetKey = __webpack_require__(84);
	var getSelectionOffsetKeyForNode = __webpack_require__(85);
	var getUpdatedSelectionState = __webpack_require__(87);
	var invariant = __webpack_require__(19);
	var nullthrows = __webpack_require__(41);

	/**
	 * Convert the current selection range to an anchor/focus pair of offset keys
	 * and values that can be interpreted by components.
	 */
	function getDraftEditorSelectionWithNodes(editorState, root, anchorNode, anchorOffset, focusNode, focusOffset) {
	  var anchorIsTextNode = anchorNode.nodeType === Node.TEXT_NODE;
	  var focusIsTextNode = focusNode.nodeType === Node.TEXT_NODE;

	  // If the selection range lies only on text nodes, the task is simple.
	  // Find the nearest offset-aware elements and use the
	  // offset values supplied by the selection range.
	  if (anchorIsTextNode && focusIsTextNode) {
	    return {
	      selectionState: getUpdatedSelectionState(editorState, nullthrows(findAncestorOffsetKey(anchorNode)), anchorOffset, nullthrows(findAncestorOffsetKey(focusNode)), focusOffset),
	      needsRecovery: false
	    };
	  }

	  var anchorPoint = null;
	  var focusPoint = null;
	  var needsRecovery = true;

	  // An element is selected. Convert this selection range into leaf offset
	  // keys and offset values for consumption at the component level. This
	  // is common in Firefox, where select-all and triple click behavior leads
	  // to entire elements being selected.
	  //
	  // Note that we use the `needsRecovery` parameter in the callback here. This
	  // is because when certain elements are selected, the behavior for subsequent
	  // cursor movement (e.g. via arrow keys) is uncertain and may not match
	  // expectations at the component level. For example, if an entire <div> is
	  // selected and the user presses the right arrow, Firefox keeps the selection
	  // on the <div>. If we allow subsequent keypresses to insert characters
	  // natively, they will be inserted into a browser-created text node to the
	  // right of that <div>. This is obviously undesirable.
	  //
	  // With the `needsRecovery` flag, we inform the caller that it is responsible
	  // for manually setting the selection state on the rendered document to
	  // ensure proper selection state maintenance.

	  if (anchorIsTextNode) {
	    anchorPoint = {
	      key: nullthrows(findAncestorOffsetKey(anchorNode)),
	      offset: anchorOffset
	    };
	    focusPoint = getPointForNonTextNode(root, focusNode, focusOffset);
	  } else if (focusIsTextNode) {
	    focusPoint = {
	      key: nullthrows(findAncestorOffsetKey(focusNode)),
	      offset: focusOffset
	    };
	    anchorPoint = getPointForNonTextNode(root, anchorNode, anchorOffset);
	  } else {
	    anchorPoint = getPointForNonTextNode(root, anchorNode, anchorOffset);
	    focusPoint = getPointForNonTextNode(root, focusNode, focusOffset);

	    // If the selection is collapsed on an empty block, don't force recovery.
	    // This way, on arrow key selection changes, the browser can move the
	    // cursor from a non-zero offset on one block, through empty blocks,
	    // to a matching non-zero offset on other text blocks.
	    if (anchorNode === focusNode && anchorOffset === focusOffset) {
	      needsRecovery = !!anchorNode.firstChild && anchorNode.firstChild.nodeName !== 'BR';
	    }
	  }

	  return {
	    selectionState: getUpdatedSelectionState(editorState, anchorPoint.key, anchorPoint.offset, focusPoint.key, focusPoint.offset),
	    needsRecovery: needsRecovery
	  };
	}

	/**
	 * Identify the first leaf descendant for the given node.
	 */
	function getFirstLeaf(node) {
	  while (node.firstChild && getSelectionOffsetKeyForNode(node.firstChild)) {
	    node = node.firstChild;
	  }
	  return node;
	}

	/**
	 * Identify the last leaf descendant for the given node.
	 */
	function getLastLeaf(node) {
	  while (node.lastChild && getSelectionOffsetKeyForNode(node.lastChild)) {
	    node = node.lastChild;
	  }
	  return node;
	}

	function getPointForNonTextNode(editorRoot, startNode, childOffset) {
	  var node = startNode;
	  var offsetKey = findAncestorOffsetKey(node);

	  !(offsetKey != null || editorRoot && (editorRoot === node || editorRoot.firstChild === node)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Unknown node in selection range.') : invariant(false) : void 0;

	  // If the editorRoot is the selection, step downward into the content
	  // wrapper.
	  if (editorRoot === node) {
	    node = node.firstChild;
	    !(node instanceof Element && node.getAttribute('data-contents') === 'true') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Invalid DraftEditorContents structure.') : invariant(false) : void 0;
	    if (childOffset > 0) {
	      childOffset = node.childNodes.length;
	    }
	  }

	  // If the child offset is zero and we have an offset key, we're done.
	  // If there's no offset key because the entire editor is selected,
	  // find the leftmost ("first") leaf in the tree and use that as the offset
	  // key.
	  if (childOffset === 0) {
	    var key = null;
	    if (offsetKey != null) {
	      key = offsetKey;
	    } else {
	      var firstLeaf = getFirstLeaf(node);
	      key = nullthrows(getSelectionOffsetKeyForNode(firstLeaf));
	    }
	    return { key: key, offset: 0 };
	  }

	  var nodeBeforeCursor = node.childNodes[childOffset - 1];
	  var leafKey = null;
	  var textLength = null;

	  if (!getSelectionOffsetKeyForNode(nodeBeforeCursor)) {
	    // Our target node may be a leaf or a text node, in which case we're
	    // already where we want to be and can just use the child's length as
	    // our offset.
	    leafKey = nullthrows(offsetKey);
	    textLength = getTextContentLength(nodeBeforeCursor);
	  } else {
	    // Otherwise, we'll look at the child to the left of the cursor and find
	    // the last leaf node in its subtree.
	    var lastLeaf = getLastLeaf(nodeBeforeCursor);
	    leafKey = nullthrows(getSelectionOffsetKeyForNode(lastLeaf));
	    textLength = getTextContentLength(lastLeaf);
	  }

	  return {
	    key: leafKey,
	    offset: textLength
	  };
	}

	/**
	 * Return the length of a node's textContent, regarding single newline
	 * characters as zero-length. This allows us to avoid problems with identifying
	 * the correct selection offset for empty blocks in IE, in which we
	 * render newlines instead of break tags.
	 */
	function getTextContentLength(node) {
	  var textContent = node.textContent;
	  return textContent === '\n' ? 0 : textContent.length;
	}

	module.exports = getDraftEditorSelectionWithNodes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 108 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule moveSelectionBackward
	 * 
	 */

	'use strict';

	/**
	 * Given a collapsed selection, move the focus `maxDistance` backward within
	 * the selected block. If the selection will go beyond the start of the block,
	 * move focus to the end of the previous block, but no further.
	 *
	 * This function is not Unicode-aware, so surrogate pairs will be treated
	 * as having length 2.
	 */
	function moveSelectionBackward(editorState, maxDistance) {
	  var selection = editorState.getSelection();
	  var content = editorState.getCurrentContent();
	  var key = selection.getStartKey();
	  var offset = selection.getStartOffset();

	  var focusKey = key;
	  var focusOffset = 0;

	  if (maxDistance > offset) {
	    var keyBefore = content.getKeyBefore(key);
	    if (keyBefore == null) {
	      focusKey = key;
	    } else {
	      focusKey = keyBefore;
	      var blockBefore = content.getBlockForKey(keyBefore);
	      focusOffset = blockBefore.getText().length;
	    }
	  } else {
	    focusOffset = offset - maxDistance;
	  }

	  return selection.merge({
	    focusKey: focusKey,
	    focusOffset: focusOffset,
	    isBackward: true
	  });
	}

	module.exports = moveSelectionBackward;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule removeTextWithStrategy
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(10);

	/**
	 * For a collapsed selection state, remove text based on the specified strategy.
	 * If the selection state is not collapsed, remove the entire selected range.
	 */
	function removeTextWithStrategy(editorState, strategy, direction) {
	  var selection = editorState.getSelection();
	  var content = editorState.getCurrentContent();
	  var target = selection;
	  if (selection.isCollapsed()) {
	    if (direction === 'forward') {
	      if (editorState.isSelectionAtEndOfContent()) {
	        return content;
	      }
	    } else if (editorState.isSelectionAtStartOfContent()) {
	      return content;
	    }

	    target = strategy(editorState);
	    if (target === selection) {
	      return content;
	    }
	  }
	  return DraftModifier.removeRange(content, target, direction);
	}

	module.exports = removeTextWithStrategy;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandBackspaceWord
	 * 
	 */

	'use strict';

	var DraftRemovableWord = __webpack_require__(111);
	var EditorState = __webpack_require__(31);

	var moveSelectionBackward = __webpack_require__(108);
	var removeTextWithStrategy = __webpack_require__(109);

	/**
	 * Delete the word that is left of the cursor, as well as any spaces or
	 * punctuation after the word.
	 */
	function keyCommandBackspaceWord(editorState) {
	  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
	    var selection = strategyState.getSelection();
	    var offset = selection.getStartOffset();
	    // If there are no words before the cursor, remove the preceding newline.
	    if (offset === 0) {
	      return moveSelectionBackward(strategyState, 1);
	    }
	    var key = selection.getStartKey();
	    var content = strategyState.getCurrentContent();
	    var text = content.getBlockForKey(key).getText().slice(0, offset);
	    var toRemove = DraftRemovableWord.getBackward(text);
	    return moveSelectionBackward(strategyState, toRemove.length || 1);
	  }, 'backward');

	  if (afterRemoval === editorState.getCurrentContent()) {
	    return editorState;
	  }

	  return EditorState.push(editorState, afterRemoval, 'remove-range');
	}

	module.exports = keyCommandBackspaceWord;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftRemovableWord
	 * @typechecks
	 * 
	 */

	'use strict';

	var TokenizeUtil = __webpack_require__(112);

	var punctuation = TokenizeUtil.getPunctuation();

	// The apostrophe and curly single quotes behave in a curious way: when
	// surrounded on both sides by word characters, they behave as word chars; when
	// either neighbor is punctuation or an end of the string, they behave as
	// punctuation.
	var CHAMELEON_CHARS = '[\'‘’]';

	// Remove the underscore, which should count as part of the removable word. The
	// "chameleon chars" also count as punctuation in this regex.
	var WHITESPACE_AND_PUNCTUATION = '\\s|(?![_])' + punctuation;

	var DELETE_STRING = '^' + '(?:' + WHITESPACE_AND_PUNCTUATION + ')*' + '(?:' + CHAMELEON_CHARS + '|(?!' + WHITESPACE_AND_PUNCTUATION + ').)*' + '(?:(?!' + WHITESPACE_AND_PUNCTUATION + ').)';
	var DELETE_REGEX = new RegExp(DELETE_STRING);

	var BACKSPACE_STRING = '(?:(?!' + WHITESPACE_AND_PUNCTUATION + ').)' + '(?:' + CHAMELEON_CHARS + '|(?!' + WHITESPACE_AND_PUNCTUATION + ').)*' + '(?:' + WHITESPACE_AND_PUNCTUATION + ')*' + '$';
	var BACKSPACE_REGEX = new RegExp(BACKSPACE_STRING);

	function getRemovableWord(text, isBackward) {
	  var matches = isBackward ? BACKSPACE_REGEX.exec(text) : DELETE_REGEX.exec(text);
	  return matches ? matches[0] : text;
	}

	var DraftRemovableWord = {
	  getBackward: function getBackward(text) {
	    return getRemovableWord(text, true);
	  },

	  getForward: function getForward(text) {
	    return getRemovableWord(text, false);
	  }
	};

	module.exports = DraftRemovableWord;

/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @stub
	 * 
	 */

	'use strict';

	// \u00a1-\u00b1\u00b4-\u00b8\u00ba\u00bb\u00bf
	//             is latin supplement punctuation except fractions and superscript
	//             numbers
	// \u2010-\u2027\u2030-\u205e
	//             is punctuation from the general punctuation block:
	//             weird quotes, commas, bullets, dashes, etc.
	// \u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f
	//             is CJK punctuation
	// \uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65
	//             is some full-width/half-width punctuation
	// \u2E2E\u061f\u066a-\u066c\u061b\u060c\u060d\uFD3e\uFD3F
	//             is some Arabic punctuation marks
	// \u1801\u0964\u104a\u104b
	//             is misc. other language punctuation marks

	var PUNCTUATION = '[.,+*?$|#{}()\'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;' + '\u30FB\u3001\u3002\u3008-\u3011\u3014-\u301F\uFF1A-\uFF1F\uFF01-\uFF0F' + '\uFF3B-\uFF40\uFF5B-\uFF65\u2E2E\u061F\u066A-\u066C\u061B\u060C\u060D' + '\uFD3E\uFD3F\u1801\u0964\u104A\u104B\u2010-\u2027\u2030-\u205E' + '\xA1-\xB1\xB4-\xB8\xBA\xBB\xBF]';

	module.exports = {
	  getPunctuation: function getPunctuation() {
	    return PUNCTUATION;
	  }
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandDeleteWord
	 * 
	 */

	'use strict';

	var DraftRemovableWord = __webpack_require__(111);
	var EditorState = __webpack_require__(31);

	var moveSelectionForward = __webpack_require__(114);
	var removeTextWithStrategy = __webpack_require__(109);

	/**
	 * Delete the word that is right of the cursor, as well as any spaces or
	 * punctuation before the word.
	 */
	function keyCommandDeleteWord(editorState) {
	  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
	    var selection = strategyState.getSelection();
	    var offset = selection.getStartOffset();
	    var key = selection.getStartKey();
	    var content = strategyState.getCurrentContent();
	    var text = content.getBlockForKey(key).getText().slice(offset);
	    var toRemove = DraftRemovableWord.getForward(text);

	    // If there are no words in front of the cursor, remove the newline.
	    return moveSelectionForward(strategyState, toRemove.length || 1);
	  }, 'forward');

	  if (afterRemoval === editorState.getCurrentContent()) {
	    return editorState;
	  }

	  return EditorState.push(editorState, afterRemoval, 'remove-range');
	}

	module.exports = keyCommandDeleteWord;

/***/ },
/* 114 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule moveSelectionForward
	 * 
	 */

	'use strict';

	/**
	 * Given a collapsed selection, move the focus `maxDistance` forward within
	 * the selected block. If the selection will go beyond the end of the block,
	 * move focus to the start of the next block, but no further.
	 *
	 * This function is not Unicode-aware, so surrogate pairs will be treated
	 * as having length 2.
	 */
	function moveSelectionForward(editorState, maxDistance) {
	  var selection = editorState.getSelection();
	  var key = selection.getStartKey();
	  var offset = selection.getStartOffset();
	  var content = editorState.getCurrentContent();

	  var focusKey = key;
	  var focusOffset;

	  var block = content.getBlockForKey(key);

	  if (maxDistance > block.getText().length - offset) {
	    focusKey = content.getKeyAfter(key);
	    focusOffset = 0;
	  } else {
	    focusOffset = offset + maxDistance;
	  }

	  return selection.merge({ focusKey: focusKey, focusOffset: focusOffset });
	}

	module.exports = moveSelectionForward;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandInsertNewline
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(10);
	var EditorState = __webpack_require__(31);

	function keyCommandInsertNewline(editorState) {
	  var contentState = DraftModifier.splitBlock(editorState.getCurrentContent(), editorState.getSelection());
	  return EditorState.push(editorState, contentState, 'split-block');
	}

	module.exports = keyCommandInsertNewline;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandPlainBackspace
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(31);
	var UnicodeUtils = __webpack_require__(105);

	var moveSelectionBackward = __webpack_require__(108);
	var removeTextWithStrategy = __webpack_require__(109);

	/**
	 * Remove the selected range. If the cursor is collapsed, remove the preceding
	 * character. This operation is Unicode-aware, so removing a single character
	 * will remove a surrogate pair properly as well.
	 */
	function keyCommandPlainBackspace(editorState) {
	  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
	    var selection = strategyState.getSelection();
	    var content = strategyState.getCurrentContent();
	    var key = selection.getAnchorKey();
	    var offset = selection.getAnchorOffset();
	    var charBehind = content.getBlockForKey(key).getText()[offset - 1];
	    return moveSelectionBackward(strategyState, charBehind ? UnicodeUtils.getUTF16Length(charBehind, 0) : 1);
	  }, 'backward');

	  if (afterRemoval === editorState.getCurrentContent()) {
	    return editorState;
	  }

	  var selection = editorState.getSelection();
	  return EditorState.push(editorState, afterRemoval.set('selectionBefore', selection), selection.isCollapsed() ? 'backspace-character' : 'remove-range');
	}

	module.exports = keyCommandPlainBackspace;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandPlainDelete
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(31);
	var UnicodeUtils = __webpack_require__(105);

	var moveSelectionForward = __webpack_require__(114);
	var removeTextWithStrategy = __webpack_require__(109);

	/**
	 * Remove the selected range. If the cursor is collapsed, remove the following
	 * character. This operation is Unicode-aware, so removing a single character
	 * will remove a surrogate pair properly as well.
	 */
	function keyCommandPlainDelete(editorState) {
	  var afterRemoval = removeTextWithStrategy(editorState, function (strategyState) {
	    var selection = strategyState.getSelection();
	    var content = strategyState.getCurrentContent();
	    var key = selection.getAnchorKey();
	    var offset = selection.getAnchorOffset();
	    var charAhead = content.getBlockForKey(key).getText()[offset];
	    return moveSelectionForward(strategyState, charAhead ? UnicodeUtils.getUTF16Length(charAhead, 0) : 1);
	  }, 'forward');

	  if (afterRemoval === editorState.getCurrentContent()) {
	    return editorState;
	  }

	  var selection = editorState.getSelection();

	  return EditorState.push(editorState, afterRemoval.set('selectionBefore', selection), selection.isCollapsed() ? 'delete-character' : 'remove-range');
	}

	module.exports = keyCommandPlainDelete;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandMoveSelectionToEndOfBlock
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(31);

	/**
	 * See comment for `moveSelectionToStartOfBlock`.
	 */
	function keyCommandMoveSelectionToEndOfBlock(editorState) {
	  var selection = editorState.getSelection();
	  var endKey = selection.getEndKey();
	  var content = editorState.getCurrentContent();
	  var textLength = content.getBlockForKey(endKey).getLength();
	  return EditorState.set(editorState, {
	    selection: selection.merge({
	      anchorKey: endKey,
	      anchorOffset: textLength,
	      focusKey: endKey,
	      focusOffset: textLength,
	      isBackward: false
	    }),
	    forceSelection: true
	  });
	}

	module.exports = keyCommandMoveSelectionToEndOfBlock;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandMoveSelectionToStartOfBlock
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(31);

	/**
	 * Collapse selection at the start of the first selected block. This is used
	 * for Firefox versions that attempt to navigate forward/backward instead of
	 * moving the cursor. Other browsers are able to move the cursor natively.
	 */
	function keyCommandMoveSelectionToStartOfBlock(editorState) {
	  var selection = editorState.getSelection();
	  var startKey = selection.getStartKey();
	  return EditorState.set(editorState, {
	    selection: selection.merge({
	      anchorKey: startKey,
	      anchorOffset: 0,
	      focusKey: startKey,
	      focusOffset: 0,
	      isBackward: false
	    }),
	    forceSelection: true
	  });
	}

	module.exports = keyCommandMoveSelectionToStartOfBlock;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandTransposeCharacters
	 * 
	 */

	'use strict';

	var DraftModifier = __webpack_require__(10);
	var EditorState = __webpack_require__(31);

	var getContentStateFragment = __webpack_require__(22);

	/**
	 * Transpose the characters on either side of a collapsed cursor, or
	 * if the cursor is at the end of the block, transpose the last two
	 * characters.
	 */
	function keyCommandTransposeCharacters(editorState) {
	  var selection = editorState.getSelection();
	  if (!selection.isCollapsed()) {
	    return editorState;
	  }

	  var offset = selection.getAnchorOffset();
	  if (offset === 0) {
	    return editorState;
	  }

	  var blockKey = selection.getAnchorKey();
	  var content = editorState.getCurrentContent();
	  var block = content.getBlockForKey(blockKey);
	  var length = block.getLength();

	  // Nothing to transpose if there aren't two characters.
	  if (length <= 1) {
	    return editorState;
	  }

	  var removalRange;
	  var finalSelection;

	  if (offset === length) {
	    // The cursor is at the end of the block. Swap the last two characters.
	    removalRange = selection.set('anchorOffset', offset - 1);
	    finalSelection = selection;
	  } else {
	    removalRange = selection.set('focusOffset', offset + 1);
	    finalSelection = removalRange.set('anchorOffset', offset + 1);
	  }

	  // Extract the character to move as a fragment. This preserves its
	  // styling and entity, if any.
	  var movedFragment = getContentStateFragment(content, removalRange);
	  var afterRemoval = DraftModifier.removeRange(content, removalRange, 'backward');

	  // After the removal, the insertion target is one character back.
	  var selectionAfter = afterRemoval.getSelectionAfter();
	  var targetOffset = selectionAfter.getAnchorOffset() - 1;
	  var targetRange = selectionAfter.merge({
	    anchorOffset: targetOffset,
	    focusOffset: targetOffset
	  });

	  var afterInsert = DraftModifier.replaceWithFragment(afterRemoval, targetRange, movedFragment);

	  var newEditorState = EditorState.push(editorState, afterInsert, 'insert-fragment');

	  return EditorState.acceptSelection(newEditorState, finalSelection);
	}

	module.exports = keyCommandTransposeCharacters;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyCommandUndo
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(31);

	function keyCommandUndo(e, editorState, updateFn) {
	  var undoneState = EditorState.undo(editorState);

	  // If the last change to occur was a spellcheck change, allow the undo
	  // event to fall through to the browser. This allows the browser to record
	  // the unwanted change, which should soon lead it to learn not to suggest
	  // the correction again.
	  if (editorState.getLastChangeType() === 'spellcheck-change') {
	    var nativelyRenderedContent = undoneState.getCurrentContent();
	    updateFn(EditorState.set(undoneState, { nativelyRenderedContent: nativelyRenderedContent }));
	    return;
	  }

	  // Otheriwse, manage the undo behavior manually.
	  e.preventDefault();
	  if (!editorState.getNativelyRenderedContent()) {
	    updateFn(undoneState);
	    return;
	  }

	  // Trigger a re-render with the current content state to ensure that the
	  // component tree has up-to-date props for comparison.
	  updateFn(EditorState.set(editorState, { nativelyRenderedContent: null }));

	  // Wait to ensure that the re-render has occurred before performing
	  // the undo action.
	  setTimeout(function () {
	    updateFn(undoneState);
	  }, 0);
	}

	module.exports = keyCommandUndo;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnPaste
	 * 
	 */

	'use strict';

	var BlockMapBuilder = __webpack_require__(5);
	var CharacterMetadata = __webpack_require__(7);
	var DataTransfer = __webpack_require__(81);
	var DraftModifier = __webpack_require__(10);
	var DraftPasteProcessor = __webpack_require__(123);
	var EditorState = __webpack_require__(31);

	var getEntityKeyForSelection = __webpack_require__(49);
	var getTextContentFromFiles = __webpack_require__(86);
	var splitTextIntoTextBlocks = __webpack_require__(127);

	var isEventHandled = __webpack_require__(88);

	/**
	 * Paste content.
	 */
	function editOnPaste(e) {
	  var _this = this;

	  e.preventDefault();
	  var data = new DataTransfer(e.clipboardData);

	  // Get files, unless this is likely to be a string the user wants inline.
	  if (!data.isRichText()) {
	    var files = data.getFiles();
	    var defaultFileText = data.getText();
	    if (files.length > 0) {
	      // Allow customized paste handling for images, etc. Otherwise, fall
	      // through to insert text contents into the editor.
	      if (this.props.handlePastedFiles && isEventHandled(this.props.handlePastedFiles(files))) {
	        return;
	      }

	      getTextContentFromFiles(files, function ( /*string*/fileText) {
	        fileText = fileText || defaultFileText;
	        if (!fileText) {
	          return;
	        }

	        var editorState = _this.props.editorState;

	        var blocks = splitTextIntoTextBlocks(fileText);
	        var character = CharacterMetadata.create({
	          style: editorState.getCurrentInlineStyle(),
	          entity: getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())
	        });

	        var text = DraftPasteProcessor.processText(blocks, character);
	        var fragment = BlockMapBuilder.createFromArray(text);

	        var withInsertedText = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), fragment);

	        _this.update(EditorState.push(editorState, withInsertedText, 'insert-fragment'));
	      });

	      return;
	    }
	  }

	  var textBlocks = [];
	  var text = data.getText();
	  var html = data.getHTML();

	  if (this.props.handlePastedText && isEventHandled(this.props.handlePastedText(text, html))) {
	    return;
	  }

	  if (text) {
	    textBlocks = splitTextIntoTextBlocks(text);
	  }

	  if (!this.props.stripPastedStyles) {
	    // If the text from the paste event is rich content that matches what we
	    // already have on the internal clipboard, assume that we should just use
	    // the clipboard fragment for the paste. This will allow us to preserve
	    // styling and entities, if any are present. Note that newlines are
	    // stripped during comparison -- this is because copy/paste within the
	    // editor in Firefox and IE will not include empty lines. The resulting
	    // paste will preserve the newlines correctly.
	    var internalClipboard = this.getClipboard();
	    if (data.isRichText() && internalClipboard) {
	      if (
	      // If the editorKey is present in the pasted HTML, it should be safe to
	      // assume this is an internal paste.
	      html.indexOf(this.getEditorKey()) !== -1 ||
	      // The copy may have been made within a single block, in which case the
	      // editor key won't be part of the paste. In this case, just check
	      // whether the pasted text matches the internal clipboard.
	      textBlocks.length === 1 && internalClipboard.size === 1 && internalClipboard.first().getText() === text) {
	        this.update(insertFragment(this.props.editorState, internalClipboard));
	        return;
	      }
	    } else if (internalClipboard && data.types.includes('com.apple.webarchive') && !data.types.includes('text/html') && areTextBlocksAndClipboardEqual(textBlocks, internalClipboard)) {
	      // Safari does not properly store text/html in some cases.
	      // Use the internalClipboard if present and equal to what is on
	      // the clipboard. See https://bugs.webkit.org/show_bug.cgi?id=19893.
	      this.update(insertFragment(this.props.editorState, internalClipboard));
	      return;
	    }

	    // If there is html paste data, try to parse that.
	    if (html) {
	      var htmlFragment = DraftPasteProcessor.processHTML(html, this.props.blockRenderMap);
	      if (htmlFragment) {
	        var htmlMap = BlockMapBuilder.createFromArray(htmlFragment);
	        this.update(insertFragment(this.props.editorState, htmlMap));
	        return;
	      }
	    }

	    // Otherwise, create a new fragment from our pasted text. Also
	    // empty the internal clipboard, since it's no longer valid.
	    this.setClipboard(null);
	  }

	  if (textBlocks) {
	    var editorState = this.props.editorState;

	    var character = CharacterMetadata.create({
	      style: editorState.getCurrentInlineStyle(),
	      entity: getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())
	    });

	    var textFragment = DraftPasteProcessor.processText(textBlocks, character);

	    var textMap = BlockMapBuilder.createFromArray(textFragment);
	    this.update(insertFragment(this.props.editorState, textMap));
	  }
	}

	function insertFragment(editorState, fragment) {
	  var newContent = DraftModifier.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), fragment);
	  return EditorState.push(editorState, newContent, 'insert-fragment');
	}

	function areTextBlocksAndClipboardEqual(textBlocks, blockMap) {
	  return textBlocks.length === blockMap.size && blockMap.valueSeq().every(function (block, ii) {
	    return block.getText() === textBlocks[ii];
	  });
	}

	module.exports = editOnPaste;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftPasteProcessor
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(7);
	var ContentBlock = __webpack_require__(8);
	var Immutable = __webpack_require__(6);

	var convertFromHTMLtoContentBlocks = __webpack_require__(124);
	var generateRandomKey = __webpack_require__(23);
	var getSafeBodyFromHTML = __webpack_require__(126);
	var sanitizeDraftText = __webpack_require__(36);

	var List = Immutable.List;
	var Repeat = Immutable.Repeat;


	var DraftPasteProcessor = {
	  processHTML: function processHTML(html, blockRenderMap) {
	    return convertFromHTMLtoContentBlocks(html, getSafeBodyFromHTML, blockRenderMap);
	  },
	  processText: function processText(textBlocks, character) {
	    return textBlocks.map(function (textLine) {
	      textLine = sanitizeDraftText(textLine);
	      return new ContentBlock({
	        key: generateRandomKey(),
	        type: 'unstyled',
	        text: textLine,
	        characterList: List(Repeat(character, textLine.length))
	      });
	    });
	  }
	};

	module.exports = DraftPasteProcessor;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule convertFromHTMLToContentBlocks
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(7);
	var ContentBlock = __webpack_require__(8);
	var DefaultDraftBlockRenderMap = __webpack_require__(43);
	var DraftEntity = __webpack_require__(16);
	var Immutable = __webpack_require__(6);
	var URI = __webpack_require__(125);

	var generateRandomKey = __webpack_require__(23);
	var getSafeBodyFromHTML = __webpack_require__(126);
	var invariant = __webpack_require__(19);
	var nullthrows = __webpack_require__(41);
	var sanitizeDraftText = __webpack_require__(36);

	var List = Immutable.List;
	var OrderedSet = Immutable.OrderedSet;


	var NBSP = '&nbsp;';
	var SPACE = ' ';

	// Arbitrary max indent
	var MAX_DEPTH = 4;

	// used for replacing characters in HTML
	var REGEX_CR = new RegExp('\r', 'g');
	var REGEX_LF = new RegExp('\n', 'g');
	var REGEX_NBSP = new RegExp(NBSP, 'g');
	var REGEX_CARRIAGE = new RegExp('&#13;?', 'g');
	var REGEX_ZWS = new RegExp('&#8203;?', 'g');

	// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
	var boldValues = ['bold', 'bolder', '500', '600', '700', '800', '900'];
	var notBoldValues = ['light', 'lighter', '100', '200', '300', '400'];

	// Block tag flow is different because LIs do not have
	// a deterministic style ;_;
	var inlineTags = {
	  b: 'BOLD',
	  code: 'CODE',
	  del: 'STRIKETHROUGH',
	  em: 'ITALIC',
	  i: 'ITALIC',
	  s: 'STRIKETHROUGH',
	  strike: 'STRIKETHROUGH',
	  strong: 'BOLD',
	  u: 'UNDERLINE'
	};

	var anchorAttr = ['className', 'href', 'rel', 'target', 'title'];

	var lastBlock;

	function getEmptyChunk() {
	  return {
	    text: '',
	    inlines: [],
	    entities: [],
	    blocks: []
	  };
	}

	function getWhitespaceChunk(inEntity) {
	  var entities = new Array(1);
	  if (inEntity) {
	    entities[0] = inEntity;
	  }
	  return {
	    text: SPACE,
	    inlines: [OrderedSet()],
	    entities: entities,
	    blocks: []
	  };
	}

	function getSoftNewlineChunk() {
	  return {
	    text: '\n',
	    inlines: [OrderedSet()],
	    entities: new Array(1),
	    blocks: []
	  };
	}

	function getBlockDividerChunk(block, depth) {
	  return {
	    text: '\r',
	    inlines: [OrderedSet()],
	    entities: new Array(1),
	    blocks: [{
	      type: block,
	      depth: Math.max(0, Math.min(MAX_DEPTH, depth))
	    }]
	  };
	}

	function getListBlockType(tag, lastList) {
	  if (tag === 'li') {
	    return lastList === 'ol' ? 'ordered-list-item' : 'unordered-list-item';
	  }
	  return null;
	}

	function getBlockMapSupportedTags(blockRenderMap) {
	  var unstyledElement = blockRenderMap.get('unstyled').element;
	  return blockRenderMap.map(function (config) {
	    return config.element;
	  }).valueSeq().toSet().filter(function (tag) {
	    return tag && tag !== unstyledElement;
	  }).toArray().sort();
	}

	// custom element conversions
	function getMultiMatchedType(tag, lastList, multiMatchExtractor) {
	  for (var ii = 0; ii < multiMatchExtractor.length; ii++) {
	    var matchType = multiMatchExtractor[ii](tag, lastList);
	    if (matchType) {
	      return matchType;
	    }
	  }
	  return null;
	}

	function getBlockTypeForTag(tag, lastList, blockRenderMap) {
	  var matchedTypes = blockRenderMap.filter(function (config) {
	    return config.element === tag || config.wrapper === tag;
	  }).keySeq().toSet().toArray().sort();

	  // if we dont have any matched type, return unstyled
	  // if we have one matched type return it
	  // if we have multi matched types use the multi-match function to gather type
	  switch (matchedTypes.length) {
	    case 0:
	      return 'unstyled';
	    case 1:
	      return matchedTypes[0];
	    default:
	      return getMultiMatchedType(tag, lastList, [getListBlockType]) || 'unstyled';
	  }
	}

	function processInlineTag(tag, node, currentStyle) {
	  var styleToCheck = inlineTags[tag];
	  if (styleToCheck) {
	    currentStyle = currentStyle.add(styleToCheck).toOrderedSet();
	  } else if (node instanceof HTMLElement) {
	    (function () {
	      var htmlElement = node;
	      currentStyle = currentStyle.withMutations(function (style) {
	        var fontWeight = htmlElement.style.fontWeight;
	        var fontStyle = htmlElement.style.fontStyle;
	        var textDecoration = htmlElement.style.textDecoration;

	        if (boldValues.indexOf(fontWeight) >= 0) {
	          style.add('BOLD');
	        } else if (notBoldValues.indexOf(fontWeight) >= 0) {
	          style.remove('BOLD');
	        }

	        if (fontStyle === 'italic') {
	          style.add('ITALIC');
	        } else if (fontStyle === 'normal') {
	          style.remove('ITALIC');
	        }

	        if (textDecoration === 'underline') {
	          style.add('UNDERLINE');
	        }
	        if (textDecoration === 'line-through') {
	          style.add('STRIKETHROUGH');
	        }
	        if (textDecoration === 'none') {
	          style.remove('UNDERLINE');
	          style.remove('STRIKETHROUGH');
	        }
	      }).toOrderedSet();
	    })();
	  }
	  return currentStyle;
	}

	function joinChunks(A, B) {
	  // Sometimes two blocks will touch in the DOM and we need to strip the
	  // extra delimiter to preserve niceness.
	  var lastInA = A.text.slice(-1);
	  var firstInB = B.text.slice(0, 1);

	  if (lastInA === '\r' && firstInB === '\r') {
	    A.text = A.text.slice(0, -1);
	    A.inlines.pop();
	    A.entities.pop();
	    A.blocks.pop();
	  }

	  // Kill whitespace after blocks
	  if (lastInA === '\r') {
	    if (B.text === SPACE || B.text === '\n') {
	      return A;
	    } else if (firstInB === SPACE || firstInB === '\n') {
	      B.text = B.text.slice(1);
	      B.inlines.shift();
	      B.entities.shift();
	    }
	  }

	  return {
	    text: A.text + B.text,
	    inlines: A.inlines.concat(B.inlines),
	    entities: A.entities.concat(B.entities),
	    blocks: A.blocks.concat(B.blocks)
	  };
	}

	/**
	 * Check to see if we have anything like <p> <blockquote> <h1>... to create
	 * block tags from. If we do, we can use those and ignore <div> tags. If we
	 * don't, we can treat <div> tags as meaningful (unstyled) blocks.
	 */
	function containsSemanticBlockMarkup(html, blockTags) {
	  return blockTags.some(function (tag) {
	    return html.indexOf('<' + tag) !== -1;
	  });
	}

	function hasValidLinkText(link) {
	  !(link instanceof HTMLAnchorElement) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Link must be an HTMLAnchorElement.') : invariant(false) : void 0;
	  var protocol = link.protocol;
	  return protocol === 'http:' || protocol === 'https:' || protocol === 'mailto:';
	}

	function genFragment(node, inlineStyle, lastList, inBlock, blockTags, depth, blockRenderMap, inEntity) {
	  var nodeName = node.nodeName.toLowerCase();
	  var newBlock = false;
	  var nextBlockType = 'unstyled';
	  var lastLastBlock = lastBlock;

	  // Base Case
	  if (nodeName === '#text') {
	    var text = node.textContent;
	    if (text.trim() === '' && inBlock !== 'pre') {
	      return getWhitespaceChunk(inEntity);
	    }
	    if (inBlock !== 'pre') {
	      // Can't use empty string because MSWord
	      text = text.replace(REGEX_LF, SPACE);
	    }

	    // save the last block so we can use it later
	    lastBlock = nodeName;

	    return {
	      text: text,
	      inlines: Array(text.length).fill(inlineStyle),
	      entities: Array(text.length).fill(inEntity),
	      blocks: []
	    };
	  }

	  // save the last block so we can use it later
	  lastBlock = nodeName;

	  // BR tags
	  if (nodeName === 'br') {
	    if (lastLastBlock === 'br' && (!inBlock || getBlockTypeForTag(inBlock, lastList, blockRenderMap) === 'unstyled')) {
	      return getBlockDividerChunk('unstyled', depth);
	    }
	    return getSoftNewlineChunk();
	  }

	  var chunk = getEmptyChunk();
	  var newChunk = null;

	  // Inline tags
	  inlineStyle = processInlineTag(nodeName, node, inlineStyle);

	  // Handle lists
	  if (nodeName === 'ul' || nodeName === 'ol') {
	    if (lastList) {
	      depth += 1;
	    }
	    lastList = nodeName;
	  }

	  // Block Tags
	  if (!inBlock && blockTags.indexOf(nodeName) !== -1) {
	    chunk = getBlockDividerChunk(getBlockTypeForTag(nodeName, lastList, blockRenderMap), depth);
	    inBlock = nodeName;
	    newBlock = true;
	  } else if (lastList && inBlock === 'li' && nodeName === 'li') {
	    chunk = getBlockDividerChunk(getBlockTypeForTag(nodeName, lastList, blockRenderMap), depth);
	    inBlock = nodeName;
	    newBlock = true;
	    nextBlockType = lastList === 'ul' ? 'unordered-list-item' : 'ordered-list-item';
	  }

	  // Recurse through children
	  var child = node.firstChild;
	  if (child != null) {
	    nodeName = child.nodeName.toLowerCase();
	  }

	  var entityId = null;

	  while (child) {
	    if (child instanceof HTMLAnchorElement && child.href && hasValidLinkText(child)) {
	      (function () {
	        var anchor = child;
	        var entityConfig = {};

	        anchorAttr.forEach(function (attr) {
	          var anchorAttribute = anchor.getAttribute(attr);
	          if (anchorAttribute) {
	            entityConfig[attr] = anchorAttribute;
	          }
	        });

	        entityConfig.url = new URI(anchor.href).toString();

	        entityId = DraftEntity.create('LINK', 'MUTABLE', entityConfig);
	      })();
	    } else {
	      entityId = undefined;
	    }

	    newChunk = genFragment(child, inlineStyle, lastList, inBlock, blockTags, depth, blockRenderMap, entityId || inEntity);

	    chunk = joinChunks(chunk, newChunk);
	    var sibling = child.nextSibling;

	    // Put in a newline to break up blocks inside blocks
	    if (sibling && blockTags.indexOf(nodeName) >= 0 && inBlock) {
	      chunk = joinChunks(chunk, getSoftNewlineChunk());
	    }
	    if (sibling) {
	      nodeName = sibling.nodeName.toLowerCase();
	    }
	    child = sibling;
	  }

	  if (newBlock) {
	    chunk = joinChunks(chunk, getBlockDividerChunk(nextBlockType, depth));
	  }

	  return chunk;
	}

	function getChunkForHTML(html, DOMBuilder, blockRenderMap) {
	  html = html.trim().replace(REGEX_CR, '').replace(REGEX_NBSP, SPACE).replace(REGEX_CARRIAGE, '').replace(REGEX_ZWS, '');

	  var supportedBlockTags = getBlockMapSupportedTags(blockRenderMap);

	  var safeBody = DOMBuilder(html);
	  if (!safeBody) {
	    return null;
	  }
	  lastBlock = null;

	  // Sometimes we aren't dealing with content that contains nice semantic
	  // tags. In this case, use divs to separate everything out into paragraphs
	  // and hope for the best.
	  var workingBlocks = containsSemanticBlockMarkup(html, supportedBlockTags) ? supportedBlockTags : ['div'];

	  // Start with -1 block depth to offset the fact that we are passing in a fake
	  // UL block to start with.
	  var chunk = genFragment(safeBody, OrderedSet(), 'ul', null, workingBlocks, -1, blockRenderMap);

	  // join with previous block to prevent weirdness on paste
	  if (chunk.text.indexOf('\r') === 0) {
	    chunk = {
	      text: chunk.text.slice(1),
	      inlines: chunk.inlines.slice(1),
	      entities: chunk.entities.slice(1),
	      blocks: chunk.blocks
	    };
	  }

	  // Kill block delimiter at the end
	  if (chunk.text.slice(-1) === '\r') {
	    chunk.text = chunk.text.slice(0, -1);
	    chunk.inlines = chunk.inlines.slice(0, -1);
	    chunk.entities = chunk.entities.slice(0, -1);
	    chunk.blocks.pop();
	  }

	  // If we saw no block tags, put an unstyled one in
	  if (chunk.blocks.length === 0) {
	    chunk.blocks.push({ type: 'unstyled', depth: 0 });
	  }

	  // Sometimes we start with text that isn't in a block, which is then
	  // followed by blocks. Need to fix up the blocks to add in
	  // an unstyled block for this content
	  if (chunk.text.split('\r').length === chunk.blocks.length + 1) {
	    chunk.blocks.unshift({ type: 'unstyled', depth: 0 });
	  }

	  return chunk;
	}

	function convertFromHTMLtoContentBlocks(html) {
	  var DOMBuilder = arguments.length <= 1 || arguments[1] === undefined ? getSafeBodyFromHTML : arguments[1];
	  var blockRenderMap = arguments.length <= 2 || arguments[2] === undefined ? DefaultDraftBlockRenderMap : arguments[2];

	  // Be ABSOLUTELY SURE that the dom builder you pass here won't execute
	  // arbitrary code in whatever environment you're running this in. For an
	  // example of how we try to do this in-browser, see getSafeBodyFromHTML.

	  var chunk = getChunkForHTML(html, DOMBuilder, blockRenderMap);

	  if (chunk == null) {
	    return null;
	  }
	  var start = 0;
	  return chunk.text.split('\r').map(function (textBlock, ii) {
	    // Make absolutely certain that our text is acceptable.
	    textBlock = sanitizeDraftText(textBlock);
	    var end = start + textBlock.length;
	    var inlines = nullthrows(chunk).inlines.slice(start, end);
	    var entities = nullthrows(chunk).entities.slice(start, end);
	    var characterList = List(inlines.map(function (style, ii) {
	      var data = { style: style, entity: null };
	      if (entities[ii]) {
	        data.entity = entities[ii];
	      }
	      return CharacterMetadata.create(data);
	    }));
	    start = end + 1;

	    return new ContentBlock({
	      key: generateRandomKey(),
	      type: nullthrows(chunk).blocks[ii].type,
	      depth: nullthrows(chunk).blocks[ii].depth,
	      text: textBlock,
	      characterList: characterList
	    });
	  });
	}

	module.exports = convertFromHTMLtoContentBlocks;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 125 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var URI = function () {
	  function URI(uri) {
	    _classCallCheck(this, URI);

	    this._uri = uri;
	  }

	  URI.prototype.toString = function toString() {
	    return this._uri;
	  };

	  return URI;
	}();

	module.exports = URI;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getSafeBodyFromHTML
	 * 
	 */

	'use strict';

	var UserAgent = __webpack_require__(55);

	var isOldIE = UserAgent.isBrowser('IE <= 9');

	// Provides a dom node that will not execute scripts
	// https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation.createHTMLDocument
	// https://developer.mozilla.org/en-US/Add-ons/Code_snippets/HTML_to_DOM

	function getSafeBodyFromHTML(html) {
	  var doc;
	  var root = null;
	  // Provides a safe context
	  if (!isOldIE && document.implementation && document.implementation.createHTMLDocument) {
	    doc = document.implementation.createHTMLDocument('foo');
	    doc.documentElement.innerHTML = html;
	    root = doc.getElementsByTagName('body')[0];
	  }
	  return root;
	}

	module.exports = getSafeBodyFromHTML;

/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule splitTextIntoTextBlocks
	 * 
	 */

	'use strict';

	var NEWLINE_REGEX = /\r\n?|\n/g;

	function splitTextIntoTextBlocks(text) {
	  return text.split(NEWLINE_REGEX);
	}

	module.exports = splitTextIntoTextBlocks;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule editOnSelect
	 * 
	 */

	'use strict';

	var EditorState = __webpack_require__(31);
	var ReactDOM = __webpack_require__(2);

	var getDraftEditorSelection = __webpack_require__(129);

	function editOnSelect() {
	  if (this._blockSelectEvents) {
	    return;
	  }

	  var editorState = this.props.editorState;
	  var documentSelection = getDraftEditorSelection(editorState, ReactDOM.findDOMNode(this.refs.editorContainer).firstChild);
	  var updatedSelectionState = documentSelection.selectionState;

	  if (updatedSelectionState !== editorState.getSelection()) {
	    if (documentSelection.needsRecovery) {
	      editorState = EditorState.forceSelection(editorState, updatedSelectionState);
	    } else {
	      editorState = EditorState.acceptSelection(editorState, updatedSelectionState);
	    }
	    this.update(editorState);
	  }
	}

	module.exports = editOnSelect;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getDraftEditorSelection
	 * @typechecks
	 * 
	 */

	'use strict';

	var getDraftEditorSelectionWithNodes = __webpack_require__(107);

	/**
	 * Convert the current selection range to an anchor/focus pair of offset keys
	 * and values that can be interpreted by components.
	 */
	function getDraftEditorSelection(editorState, root) {
	  var selection = global.getSelection();

	  // No active selection.
	  if (selection.rangeCount === 0) {
	    return {
	      selectionState: editorState.getSelection().set('hasFocus', false),
	      needsRecovery: false
	    };
	  }

	  return getDraftEditorSelectionWithNodes(editorState, root, selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
	}

	module.exports = getDraftEditorSelection;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftEditorPlaceholder.react
	 * @typechecks
	 * 
	 */

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var cx = __webpack_require__(44);

	/**
	 * This component is responsible for rendering placeholder text for the
	 * `DraftEditor` component.
	 *
	 * Override placeholder style via CSS.
	 */
	var DraftEditorPlaceholder = function (_React$Component) {
	  _inherits(DraftEditorPlaceholder, _React$Component);

	  function DraftEditorPlaceholder() {
	    _classCallCheck(this, DraftEditorPlaceholder);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  DraftEditorPlaceholder.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return this.props.text !== nextProps.text || this.props.editorState.getSelection().getHasFocus() !== nextProps.editorState.getSelection().getHasFocus();
	  };

	  DraftEditorPlaceholder.prototype.render = function render() {
	    var hasFocus = this.props.editorState.getSelection().getHasFocus();

	    var className = cx({
	      'public/DraftEditorPlaceholder/root': true,
	      'public/DraftEditorPlaceholder/hasFocus': hasFocus
	    });

	    return React.createElement(
	      'div',
	      { className: className },
	      React.createElement(
	        'div',
	        {
	          className: cx('public/DraftEditorPlaceholder/inner'),
	          id: this.props.accessibilityID },
	        this.props.text
	      )
	    );
	  };

	  return DraftEditorPlaceholder;
	}(React.Component);

	module.exports = DraftEditorPlaceholder;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getDefaultKeyBinding
	 * @typechecks
	 * 
	 */

	'use strict';

	var KeyBindingUtil = __webpack_require__(101);
	var Keys = __webpack_require__(48);
	var UserAgent = __webpack_require__(55);

	var isOSX = UserAgent.isPlatform('Mac OS X');
	var isWindows = UserAgent.isPlatform('Windows');

	// Firefox on OSX had a bug resulting in navigation instead of cursor movement.
	// This bug was fixed in Firefox 29. Feature detection is virtually impossible
	// so we just check the version number. See #342765.
	var shouldFixFirefoxMovement = isOSX && UserAgent.isBrowser('Firefox < 29');

	var hasCommandModifier = KeyBindingUtil.hasCommandModifier;
	var isCtrlKeyCommand = KeyBindingUtil.isCtrlKeyCommand;


	function shouldRemoveWord(e) {
	  return isOSX && e.altKey || isCtrlKeyCommand(e);
	}

	/**
	 * Get the appropriate undo/redo command for a Z key command.
	 */
	function getZCommand(e) {
	  if (!hasCommandModifier(e)) {
	    return null;
	  }
	  return e.shiftKey ? 'redo' : 'undo';
	}

	function getDeleteCommand(e) {
	  // Allow default "cut" behavior for Windows on Shift + Delete.
	  if (isWindows && e.shiftKey) {
	    return null;
	  }
	  return shouldRemoveWord(e) ? 'delete-word' : 'delete';
	}

	function getBackspaceCommand(e) {
	  if (hasCommandModifier(e) && isOSX) {
	    return 'backspace-to-start-of-line';
	  }
	  return shouldRemoveWord(e) ? 'backspace-word' : 'backspace';
	}

	/**
	 * Retrieve a bound key command for the given event.
	 */
	function getDefaultKeyBinding(e) {
	  switch (e.keyCode) {
	    case 66:
	      // B
	      return hasCommandModifier(e) ? 'bold' : null;
	    case 68:
	      // D
	      return isCtrlKeyCommand(e) ? 'delete' : null;
	    case 72:
	      // H
	      return isCtrlKeyCommand(e) ? 'backspace' : null;
	    case 73:
	      // I
	      return hasCommandModifier(e) ? 'italic' : null;
	    case 74:
	      // J
	      return hasCommandModifier(e) ? 'code' : null;
	    case 75:
	      // K
	      return !isWindows && isCtrlKeyCommand(e) ? 'secondary-cut' : null;
	    case 77:
	      // M
	      return isCtrlKeyCommand(e) ? 'split-block' : null;
	    case 79:
	      // O
	      return isCtrlKeyCommand(e) ? 'split-block' : null;
	    case 84:
	      // T
	      return isOSX && isCtrlKeyCommand(e) ? 'transpose-characters' : null;
	    case 85:
	      // U
	      return hasCommandModifier(e) ? 'underline' : null;
	    case 87:
	      // W
	      return isOSX && isCtrlKeyCommand(e) ? 'backspace-word' : null;
	    case 89:
	      // Y
	      if (isCtrlKeyCommand(e)) {
	        return isWindows ? 'redo' : 'secondary-paste';
	      }
	      return null;
	    case 90:
	      // Z
	      return getZCommand(e) || null;
	    case Keys.RETURN:
	      return 'split-block';
	    case Keys.DELETE:
	      return getDeleteCommand(e);
	    case Keys.BACKSPACE:
	      return getBackspaceCommand(e);
	    // LEFT/RIGHT handlers serve as a workaround for a Firefox bug.
	    case Keys.LEFT:
	      return shouldFixFirefoxMovement && hasCommandModifier(e) ? 'move-selection-to-start-of-block' : null;
	    case Keys.RIGHT:
	      return shouldFixFirefoxMovement && hasCommandModifier(e) ? 'move-selection-to-end-of-block' : null;
	    default:
	      return null;
	  }
	}

	module.exports = getDefaultKeyBinding;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule RichTextEditorUtil
	 * @typechecks
	 * 
	 */

	'use strict';

	var DraftEntity = __webpack_require__(16);
	var DraftModifier = __webpack_require__(10);
	var EditorState = __webpack_require__(31);
	var SelectionState = __webpack_require__(35);

	var adjustBlockDepthForContentState = __webpack_require__(133);
	var nullthrows = __webpack_require__(41);

	var RichTextEditorUtil = {
	  currentBlockContainsLink: function currentBlockContainsLink(editorState) {
	    var selection = editorState.getSelection();
	    return editorState.getCurrentContent().getBlockForKey(selection.getAnchorKey()).getCharacterList().slice(selection.getStartOffset(), selection.getEndOffset()).some(function (v) {
	      var entity = v.getEntity();
	      return !!entity && DraftEntity.get(entity).getType() === 'LINK';
	    });
	  },

	  getCurrentBlockType: function getCurrentBlockType(editorState) {
	    var selection = editorState.getSelection();
	    return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
	  },

	  getDataObjectForLinkURL: function getDataObjectForLinkURL(uri) {
	    return { url: uri.toString() };
	  },

	  handleKeyCommand: function handleKeyCommand(editorState, command) {
	    switch (command) {
	      case 'bold':
	        return RichTextEditorUtil.toggleInlineStyle(editorState, 'BOLD');
	      case 'italic':
	        return RichTextEditorUtil.toggleInlineStyle(editorState, 'ITALIC');
	      case 'underline':
	        return RichTextEditorUtil.toggleInlineStyle(editorState, 'UNDERLINE');
	      case 'code':
	        return RichTextEditorUtil.toggleCode(editorState);
	      case 'backspace':
	      case 'backspace-word':
	      case 'backspace-to-start-of-line':
	        return RichTextEditorUtil.onBackspace(editorState);
	      case 'delete':
	      case 'delete-word':
	      case 'delete-to-end-of-block':
	        return RichTextEditorUtil.onDelete(editorState);
	      default:
	        return null;
	    }
	  },

	  insertSoftNewline: function insertSoftNewline(editorState) {
	    var contentState = DraftModifier.insertText(editorState.getCurrentContent(), editorState.getSelection(), '\n', editorState.getCurrentInlineStyle(), null);

	    var newEditorState = EditorState.push(editorState, contentState, 'insert-characters');

	    return EditorState.forceSelection(newEditorState, contentState.getSelectionAfter());
	  },

	  /**
	   * For collapsed selections at the start of styled blocks, backspace should
	   * just remove the existing style.
	   */
	  onBackspace: function onBackspace(editorState) {
	    var selection = editorState.getSelection();
	    if (!selection.isCollapsed() || selection.getAnchorOffset() || selection.getFocusOffset()) {
	      return null;
	    }

	    // First, try to remove a preceding atomic block.
	    var content = editorState.getCurrentContent();
	    var startKey = selection.getStartKey();
	    var blockBefore = content.getBlockBefore(startKey);

	    if (blockBefore && blockBefore.getType() === 'atomic') {
	      var atomicBlockTarget = selection.merge({
	        anchorKey: blockBefore.getKey(),
	        anchorOffset: 0
	      });
	      var asCurrentStyle = DraftModifier.setBlockType(content, atomicBlockTarget, content.getBlockForKey(startKey).getType());
	      var withoutAtomicBlock = DraftModifier.removeRange(asCurrentStyle, atomicBlockTarget, 'backward');
	      if (withoutAtomicBlock !== content) {
	        return EditorState.push(editorState, withoutAtomicBlock, 'remove-range');
	      }
	    }

	    // If that doesn't succeed, try to remove the current block style.
	    var withoutBlockStyle = RichTextEditorUtil.tryToRemoveBlockStyle(editorState);

	    if (withoutBlockStyle) {
	      return EditorState.push(editorState, withoutBlockStyle, 'change-block-type');
	    }

	    return null;
	  },

	  onDelete: function onDelete(editorState) {
	    var selection = editorState.getSelection();
	    if (!selection.isCollapsed()) {
	      return null;
	    }

	    var content = editorState.getCurrentContent();
	    var startKey = selection.getStartKey();
	    var block = content.getBlockForKey(startKey);
	    var length = block.getLength();

	    // The cursor is somewhere within the text. Behave normally.
	    if (selection.getStartOffset() < length) {
	      return null;
	    }

	    var blockAfter = content.getBlockAfter(startKey);

	    if (!blockAfter || blockAfter.getType() !== 'atomic') {
	      return null;
	    }

	    var atomicBlockTarget = selection.merge({
	      focusKey: blockAfter.getKey(),
	      focusOffset: blockAfter.getLength()
	    });

	    var withoutAtomicBlock = DraftModifier.removeRange(content, atomicBlockTarget, 'forward');

	    if (withoutAtomicBlock !== content) {
	      return EditorState.push(editorState, withoutAtomicBlock, 'remove-range');
	    }

	    return null;
	  },

	  onTab: function onTab(event, editorState, maxDepth) {
	    var selection = editorState.getSelection();
	    var key = selection.getAnchorKey();
	    if (key !== selection.getFocusKey()) {
	      return editorState;
	    }

	    var content = editorState.getCurrentContent();
	    var block = content.getBlockForKey(key);
	    var type = block.getType();
	    if (type !== 'unordered-list-item' && type !== 'ordered-list-item') {
	      return editorState;
	    }

	    event.preventDefault();

	    // Only allow indenting one level beyond the block above, and only if
	    // the block above is a list item as well.
	    var blockAbove = content.getBlockBefore(key);
	    if (!blockAbove) {
	      return editorState;
	    }

	    var typeAbove = blockAbove.getType();
	    if (typeAbove !== 'unordered-list-item' && typeAbove !== 'ordered-list-item') {
	      return editorState;
	    }

	    var depth = block.getDepth();
	    if (!event.shiftKey && depth === maxDepth) {
	      return editorState;
	    }

	    maxDepth = Math.min(blockAbove.getDepth() + 1, maxDepth);

	    var withAdjustment = adjustBlockDepthForContentState(content, selection, event.shiftKey ? -1 : 1, maxDepth);

	    return EditorState.push(editorState, withAdjustment, 'adjust-depth');
	  },

	  toggleBlockType: function toggleBlockType(editorState, blockType) {
	    var selection = editorState.getSelection();
	    var startKey = selection.getStartKey();
	    var endKey = selection.getEndKey();
	    var content = editorState.getCurrentContent();
	    var target = selection;

	    // Triple-click can lead to a selection that includes offset 0 of the
	    // following block. The `SelectionState` for this case is accurate, but
	    // we should avoid toggling block type for the trailing block because it
	    // is a confusing interaction.
	    if (startKey !== endKey && selection.getEndOffset() === 0) {
	      var blockBefore = nullthrows(content.getBlockBefore(endKey));
	      endKey = blockBefore.getKey();
	      target = target.merge({
	        anchorKey: startKey,
	        anchorOffset: selection.getStartOffset(),
	        focusKey: endKey,
	        focusOffset: blockBefore.getLength(),
	        isBackward: false
	      });
	    }

	    var hasAtomicBlock = content.getBlockMap().skipWhile(function (_, k) {
	      return k !== startKey;
	    }).reverse().skipWhile(function (_, k) {
	      return k !== endKey;
	    }).some(function (v) {
	      return v.getType() === 'atomic';
	    });

	    if (hasAtomicBlock) {
	      return editorState;
	    }

	    var typeToSet = content.getBlockForKey(startKey).getType() === blockType ? 'unstyled' : blockType;

	    return EditorState.push(editorState, DraftModifier.setBlockType(content, target, typeToSet), 'change-block-type');
	  },

	  toggleCode: function toggleCode(editorState) {
	    var selection = editorState.getSelection();
	    var anchorKey = selection.getAnchorKey();
	    var focusKey = selection.getFocusKey();

	    if (selection.isCollapsed() || anchorKey !== focusKey) {
	      return RichTextEditorUtil.toggleBlockType(editorState, 'code-block');
	    }

	    return RichTextEditorUtil.toggleInlineStyle(editorState, 'CODE');
	  },

	  /**
	   * Toggle the specified inline style for the selection. If the
	   * user's selection is collapsed, apply or remove the style for the
	   * internal state. If it is not collapsed, apply the change directly
	   * to the document state.
	   */
	  toggleInlineStyle: function toggleInlineStyle(editorState, inlineStyle) {
	    var selection = editorState.getSelection();
	    var currentStyle = editorState.getCurrentInlineStyle();

	    // If the selection is collapsed, toggle the specified style on or off and
	    // set the result as the new inline style override. This will then be
	    // used as the inline style for the next character to be inserted.
	    if (selection.isCollapsed()) {
	      return EditorState.setInlineStyleOverride(editorState, currentStyle.has(inlineStyle) ? currentStyle.remove(inlineStyle) : currentStyle.add(inlineStyle));
	    }

	    // If characters are selected, immediately apply or remove the
	    // inline style on the document state itself.
	    var content = editorState.getCurrentContent();
	    var newContent;

	    // If the style is already present for the selection range, remove it.
	    // Otherwise, apply it.
	    if (currentStyle.has(inlineStyle)) {
	      newContent = DraftModifier.removeInlineStyle(content, selection, inlineStyle);
	    } else {
	      newContent = DraftModifier.applyInlineStyle(content, selection, inlineStyle);
	    }

	    return EditorState.push(editorState, newContent, 'change-inline-style');
	  },

	  toggleLink: function toggleLink(editorState, targetSelection, entityKey) {
	    var withoutLink = DraftModifier.applyEntity(editorState.getCurrentContent(), targetSelection, entityKey);

	    return EditorState.push(editorState, withoutLink, 'apply-entity');
	  },

	  /**
	   * When a collapsed cursor is at the start of an empty styled block, allow
	   * certain key commands (newline, backspace) to simply change the
	   * style of the block instead of the default behavior.
	   */
	  tryToRemoveBlockStyle: function tryToRemoveBlockStyle(editorState) {
	    var selection = editorState.getSelection();
	    var offset = selection.getAnchorOffset();
	    if (selection.isCollapsed() && offset === 0) {
	      var key = selection.getAnchorKey();
	      var content = editorState.getCurrentContent();
	      var block = content.getBlockForKey(key);
	      if (block.getLength() > 0) {
	        return null;
	      }

	      var type = block.getType();
	      var blockBefore = content.getBlockBefore(key);
	      if (type === 'code-block' && blockBefore && blockBefore.getType() === 'code-block') {
	        return null;
	      }

	      if (type !== 'unstyled') {
	        return DraftModifier.setBlockType(content, selection, 'unstyled');
	      }
	    }
	    return null;
	  }
	};

	module.exports = RichTextEditorUtil;

/***/ },
/* 133 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adjustBlockDepthForContentState
	 * @typechecks
	 * 
	 */

	'use strict';

	function adjustBlockDepthForContentState(contentState, selectionState, adjustment, maxDepth) {
	  var startKey = selectionState.getStartKey();
	  var endKey = selectionState.getEndKey();
	  var blockMap = contentState.getBlockMap();
	  var blocks = blockMap.toSeq().skipUntil(function (_, k) {
	    return k === startKey;
	  }).takeUntil(function (_, k) {
	    return k === endKey;
	  }).concat([[endKey, blockMap.get(endKey)]]).map(function (block) {
	    var depth = block.getDepth() + adjustment;
	    depth = Math.max(0, Math.min(depth, maxDepth));
	    return block.set('depth', depth);
	  });

	  blockMap = blockMap.merge(blocks);

	  return contentState.merge({
	    blockMap: blockMap,
	    selectionBefore: selectionState,
	    selectionAfter: selectionState
	  });
	}

	module.exports = adjustBlockDepthForContentState;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule convertFromDraftStateToRaw
	 * 
	 */

	'use strict';

	var DraftEntity = __webpack_require__(16);
	var DraftStringKey = __webpack_require__(135);

	var encodeEntityRanges = __webpack_require__(136);
	var encodeInlineStyleRanges = __webpack_require__(137);

	function convertFromDraftStateToRaw(contentState) {
	  var entityStorageKey = 0;
	  var entityStorageMap = {};
	  var rawBlocks = [];

	  contentState.getBlockMap().forEach(function (block, blockKey) {
	    block.findEntityRanges(function (character) {
	      return character.getEntity() !== null;
	    }, function (start) {
	      // Stringify to maintain order of otherwise numeric keys.
	      var stringifiedEntityKey = DraftStringKey.stringify(block.getEntityAt(start));
	      if (!entityStorageMap.hasOwnProperty(stringifiedEntityKey)) {
	        entityStorageMap[stringifiedEntityKey] = '' + entityStorageKey++;
	      }
	    });

	    rawBlocks.push({
	      key: blockKey,
	      text: block.getText(),
	      type: block.getType(),
	      depth: block.getDepth(),
	      inlineStyleRanges: encodeInlineStyleRanges(block),
	      entityRanges: encodeEntityRanges(block, entityStorageMap),
	      data: block.getData().toObject()
	    });
	  });

	  // Flip storage map so that our storage keys map to global
	  // DraftEntity keys.
	  var entityKeys = Object.keys(entityStorageMap);
	  var flippedStorageMap = {};
	  entityKeys.forEach(function (key, jj) {
	    var entity = DraftEntity.get(DraftStringKey.unstringify(key));
	    flippedStorageMap[jj] = {
	      type: entity.getType(),
	      mutability: entity.getMutability(),
	      data: entity.getData()
	    };
	  });

	  return {
	    entityMap: flippedStorageMap,
	    blocks: rawBlocks
	  };
	}

	module.exports = convertFromDraftStateToRaw;

/***/ },
/* 135 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DraftStringKey
	 * @typechecks
	 * 
	 */

	'use strict';

	var DraftStringKey = {
	  stringify: function stringify(key) {
	    return '_' + String(key);
	  },

	  unstringify: function unstringify(key) {
	    return key.slice(1);
	  }
	};

	module.exports = DraftStringKey;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule encodeEntityRanges
	 * @typechecks
	 * 
	 */

	'use strict';

	var DraftStringKey = __webpack_require__(135);
	var UnicodeUtils = __webpack_require__(105);

	var strlen = UnicodeUtils.strlen;

	/**
	 * Convert to UTF-8 character counts for storage.
	 */

	function encodeEntityRanges(block, storageMap) {
	  var encoded = [];
	  block.findEntityRanges(function (character) {
	    return !!character.getEntity();
	  }, function ( /*number*/start, /*number*/end) {
	    var text = block.getText();
	    var key = block.getEntityAt(start);
	    encoded.push({
	      offset: strlen(text.slice(0, start)),
	      length: strlen(text.slice(start, end)),
	      // Encode the key as a number for range storage.
	      key: Number(storageMap[DraftStringKey.stringify(key)])
	    });
	  });
	  return encoded;
	}

	module.exports = encodeEntityRanges;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule encodeInlineStyleRanges
	 * 
	 */

	'use strict';

	var UnicodeUtils = __webpack_require__(105);

	var findRangesImmutable = __webpack_require__(9);

	var areEqual = function areEqual(a, b) {
	  return a === b;
	};
	var isTruthy = function isTruthy(a) {
	  return !!a;
	};
	var EMPTY_ARRAY = [];

	/**
	 * Helper function for getting encoded styles for each inline style. Convert
	 * to UTF-8 character counts for storage.
	 */
	function getEncodedInlinesForType(block, styleList, styleToEncode) {
	  var ranges = [];

	  // Obtain an array with ranges for only the specified style.
	  var filteredInlines = styleList.map(function (style) {
	    return style.has(styleToEncode);
	  }).toList();

	  findRangesImmutable(filteredInlines, areEqual,
	  // We only want to keep ranges with nonzero style values.
	  isTruthy, function (start, end) {
	    var text = block.getText();
	    ranges.push({
	      offset: UnicodeUtils.strlen(text.slice(0, start)),
	      length: UnicodeUtils.strlen(text.slice(start, end)),
	      style: styleToEncode
	    });
	  });

	  return ranges;
	}

	/*
	 * Retrieve the encoded arrays of inline styles, with each individual style
	 * treated separately.
	 */
	function encodeInlineStyleRanges(block) {
	  var styleList = block.getCharacterList().map(function (c) {
	    return c.getStyle();
	  }).toList();
	  var ranges = styleList.flatten().toSet().map(function (style) {
	    return getEncodedInlinesForType(block, styleList, style);
	  });

	  return Array.prototype.concat.apply(EMPTY_ARRAY, ranges.toJS());
	}

	module.exports = encodeInlineStyleRanges;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule convertFromRawToDraftState
	 * 
	 */

	'use strict';

	var _assign = __webpack_require__(17);

	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var ContentBlock = __webpack_require__(8);
	var ContentState = __webpack_require__(34);
	var DraftEntity = __webpack_require__(16);
	var Immutable = __webpack_require__(6);

	var createCharacterList = __webpack_require__(139);
	var decodeEntityRanges = __webpack_require__(140);
	var decodeInlineStyleRanges = __webpack_require__(141);
	var generateRandomKey = __webpack_require__(23);

	var Map = Immutable.Map;


	function convertFromRawToDraftState(rawState) {
	  var blocks = rawState.blocks;
	  var entityMap = rawState.entityMap;


	  var fromStorageToLocal = {};
	  Object.keys(entityMap).forEach(function (storageKey) {
	    var encodedEntity = entityMap[storageKey];
	    var type = encodedEntity.type;
	    var mutability = encodedEntity.mutability;
	    var data = encodedEntity.data;

	    var newKey = DraftEntity.create(type, mutability, data || {});
	    fromStorageToLocal[storageKey] = newKey;
	  });

	  var contentBlocks = blocks.map(function (block) {
	    var key = block.key;
	    var type = block.type;
	    var text = block.text;
	    var depth = block.depth;
	    var inlineStyleRanges = block.inlineStyleRanges;
	    var entityRanges = block.entityRanges;
	    var data = block.data;

	    key = key || generateRandomKey();
	    depth = depth || 0;
	    inlineStyleRanges = inlineStyleRanges || [];
	    entityRanges = entityRanges || [];
	    data = Map(data);

	    var inlineStyles = decodeInlineStyleRanges(text, inlineStyleRanges);

	    // Translate entity range keys to the DraftEntity map.
	    var filteredEntityRanges = entityRanges.filter(function (range) {
	      return fromStorageToLocal.hasOwnProperty(range.key);
	    }).map(function (range) {
	      return _extends({}, range, { key: fromStorageToLocal[range.key] });
	    });

	    var entities = decodeEntityRanges(text, filteredEntityRanges);
	    var characterList = createCharacterList(inlineStyles, entities);

	    return new ContentBlock({ key: key, type: type, text: text, depth: depth, characterList: characterList, data: data });
	  });

	  return ContentState.createFromBlockArray(contentBlocks);
	}

	module.exports = convertFromRawToDraftState;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createCharacterList
	 * @typechecks
	 * 
	 */

	'use strict';

	var CharacterMetadata = __webpack_require__(7);
	var Immutable = __webpack_require__(6);

	var List = Immutable.List;


	function createCharacterList(inlineStyles, entities) {
	  var characterArray = inlineStyles.map(function (style, ii) {
	    var entity = entities[ii];
	    return CharacterMetadata.create({ style: style, entity: entity });
	  });
	  return List(characterArray);
	}

	module.exports = createCharacterList;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule decodeEntityRanges
	 * @typechecks
	 * 
	 */

	'use strict';

	var UnicodeUtils = __webpack_require__(105);

	var substr = UnicodeUtils.substr;

	/**
	 * Convert to native JavaScript string lengths to determine ranges.
	 */

	function decodeEntityRanges(text, ranges) {
	  var entities = Array(text.length).fill(null);
	  if (ranges) {
	    ranges.forEach(function (range) {
	      // Using Unicode-enabled substrings converted to JavaScript lengths,
	      // fill the output array with entity keys.
	      var start = substr(text, 0, range.offset).length;
	      var end = start + substr(text, range.offset, range.length).length;
	      for (var ii = start; ii < end; ii++) {
	        entities[ii] = range.key;
	      }
	    });
	  }
	  return entities;
	}

	module.exports = decodeEntityRanges;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule decodeInlineStyleRanges
	 * @typechecks
	 * 
	 */

	'use strict';

	var UnicodeUtils = __webpack_require__(105);

	var _require = __webpack_require__(6);

	var OrderedSet = _require.OrderedSet;
	var substr = UnicodeUtils.substr;


	var EMPTY_SET = OrderedSet();

	/**
	 * Convert to native JavaScript string lengths to determine ranges.
	 */
	function decodeInlineStyleRanges(text, ranges) {
	  var styles = Array(text.length).fill(EMPTY_SET);
	  if (ranges) {
	    ranges.forEach(function ( /*object*/range) {
	      var cursor = substr(text, 0, range.offset).length;
	      var end = cursor + substr(text, range.offset, range.length).length;
	      while (cursor < end) {
	        styles[cursor] = styles[cursor].add(range.style);
	        cursor++;
	      }
	    });
	  }
	  return styles;
	}

	module.exports = decodeInlineStyleRanges;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getVisibleSelectionRect
	 * @typechecks
	 * 
	 */

	'use strict';

	var getRangeBoundingClientRect = __webpack_require__(143);

	/**
	 * Return the bounding ClientRect for the visible DOM selection, if any.
	 * In cases where there are no selected ranges or the bounding rect is
	 * temporarily invalid, return null.
	 */
	function getVisibleSelectionRect(global) {
	  var selection = global.getSelection();
	  if (!selection.rangeCount) {
	    return null;
	  }

	  var range = selection.getRangeAt(0);
	  var boundingRect = getRangeBoundingClientRect(range);
	  var top = boundingRect.top;
	  var right = boundingRect.right;
	  var bottom = boundingRect.bottom;
	  var left = boundingRect.left;

	  // When a re-render leads to a node being removed, the DOM selection will
	  // temporarily be placed on an ancestor node, which leads to an invalid
	  // bounding rect. Discard this state.

	  if (top === 0 && right === 0 && bottom === 0 && left === 0) {
	    return null;
	  }

	  return boundingRect;
	}

	module.exports = getVisibleSelectionRect;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getRangeBoundingClientRect
	 * @typechecks
	 * 
	 */

	'use strict';

	var getRangeClientRects = __webpack_require__(106);

	/**
	 * Like range.getBoundingClientRect() but normalizes for browser bugs.
	 */
	function getRangeBoundingClientRect(range) {
	  // "Return a DOMRect object describing the smallest rectangle that includes
	  // the first rectangle in list and all of the remaining rectangles of which
	  // the height or width is not zero."
	  // http://www.w3.org/TR/cssom-view/#dom-range-getboundingclientrect
	  var rects = getRangeClientRects(range);
	  var top = 0;
	  var right = 0;
	  var bottom = 0;
	  var left = 0;

	  if (rects.length) {
	    var _rects$ = rects[0];
	    top = _rects$.top;
	    right = _rects$.right;
	    bottom = _rects$.bottom;
	    left = _rects$.left;

	    for (var ii = 1; ii < rects.length; ii++) {
	      var rect = rects[ii];
	      if (rect.height !== 0 || rect.width !== 0) {
	        top = Math.min(top, rect.top);
	        right = Math.max(right, rect.right);
	        bottom = Math.max(bottom, rect.bottom);
	        left = Math.min(left, rect.left);
	      }
	    }
	  }

	  return {
	    top: top,
	    right: right,
	    bottom: bottom,
	    left: left,
	    width: right - left,
	    height: bottom - top
	  };
	}

	module.exports = getRangeBoundingClientRect;

/***/ },
/* 144 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TEXT_HEADING_STYLES = exports.TEXT_HEADING_STYLES = [{ label: 'Normal', style: 'normal' }, { label: 'Heading 1', style: 'header-one' }, { label: 'Heading 2', style: 'header-two' }, { label: 'Heading 3', style: 'header-three' }, { label: 'Heading 4', style: 'header-four' }, { label: 'Heading 5', style: 'header-five' }, { label: 'Heading 6', style: 'header-six' }];

	var FONT_STYLES = exports.FONT_STYLES = [{ label: 'Blockquote', style: 'blockquote' }, { label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }];

	var INLINE_STYLES = exports.INLINE_STYLES = [{ label: 'Bold', style: 'BOLD' }, { label: 'Italic', style: 'ITALIC' }, { label: 'Underline', style: 'UNDERLINE' }];

	//add color code to here if we want to change. DONOT HAVE '#'
	var colors = ["f44336", "e91e63", "9c27b0", "673ab7", "3f51b5", "2196f3", "03a9f4", "00bcd4", "009688", "4caf50", "8bc34a", "cddc39", "ffeb3b", "ffc107", "ff9800", "ff5722", "795548", "607d8b", "4d4d4d", "333333", '000000'],
	    colorEditorConfig = {};

	colors.map(function (color) {
	  return colorEditorConfig[color] = { color: '#' + color };
	});

	var COLORS_PICKER = exports.COLORS_PICKER = colors.map(function (color) {
	  return '#' + color;
	});

	var COLOR_CONFIG_EDITOR = exports.COLOR_CONFIG_EDITOR = colorEditorConfig;

	var LIST_COLORS = exports.LIST_COLORS = colors;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactColor = __webpack_require__(146);

	var _styleConfig = __webpack_require__(144);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Heading = (_temp = _class = function (_React$Component) {
	  _inherits(Heading, _React$Component);

	  function Heading(props) {
	    _classCallCheck(this, Heading);

	    var _this = _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).call(this, props));

	    _this.state = {
	      focusHeadingSelect: false,
	      focusColorPicker: false,
	      headingSelected: 'normal',
	      colorSelected: '#000000' //black
	    };
	    return _this;
	  }

	  _createClass(Heading, [{
	    key: '_toggleBlockType',
	    value: function _toggleBlockType(style) {
	      this.props.toggleBlockType(style);
	    }
	  }, {
	    key: '_toggleInlineStyle',
	    value: function _toggleInlineStyle(style) {
	      var control = this.state.control;
	      control[style] = !control[style];
	      this.setState({ control: control });
	      this.props.toggleInlineStyle(style);
	    }
	  }, {
	    key: '_selectHeading',
	    value: function _selectHeading(type) {
	      //editor isnot support normal. Need to toggle last heading selected.
	      var style = type.style === 'normal' ? this.state.headingSelected : type.style;
	      this.setState({ focusHeadingSelect: false, headingSelected: type.style });
	      if (style !== 'normal') {
	        this.props.toggleBlockType(style);
	      }
	    }
	  }, {
	    key: '_changeHeading',
	    value: function _changeHeading() {
	      this.setState({ focusHeadingSelect: !this.state.focusHeadingSelect });
	    }
	  }, {
	    key: '_selectColor',
	    value: function _selectColor() {
	      this.setState({ focusColorPicker: !this.state.focusColorPicker });
	    }
	  }, {
	    key: '_changeColorComplete',
	    value: function _changeColorComplete(color) {
	      var colorHex = color.hex,
	          colorCode = colorHex.substring(1);

	      this.setState({
	        colorSelected: colorHex,
	        focusColorPicker: !this.state.focusColorPicker
	      });
	      this.props.toggleColor(colorCode);
	    }
	  }, {
	    key: '_renderTextHeading',
	    value: function _renderTextHeading(blockStyle) {
	      var _this2 = this;

	      var options = null,
	          headingSelected = void 0,
	          selectHeadingText = 'Normal',
	          wrapperClass = 'group-control text-heading',
	          overlay = null;

	      if (this.state.focusHeadingSelect) {
	        wrapperClass = 'group-control text-heading focus';
	        overlay = _react2.default.createElement(
	          'div',
	          { className: 'editor-heading-overlay', onClick: this._changeHeading.bind(this) },
	          ' '
	        );
	      }

	      options = _styleConfig.TEXT_HEADING_STYLES.map(function (type, index) {

	        if (type.style === blockStyle) {
	          headingSelected = type;
	        }
	        return _react2.default.createElement(
	          'div',
	          { key: index, onMouseDown: _this2._selectHeading.bind(_this2, type), className: 'heading-item ' + type.style },
	          _react2.default.createElement(
	            'span',
	            { className: type.style },
	            type.label
	          )
	        );
	      });

	      if (headingSelected) {
	        selectHeadingText = headingSelected.label;
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: wrapperClass },
	        _react2.default.createElement(
	          'div',
	          { key: 'selected', onMouseDown: this._changeHeading.bind(this), className: 'text-heading-selected' },
	          _react2.default.createElement(
	            'span',
	            { className: 'text-heading-selected__name' },
	            selectHeadingText
	          )
	        ),
	        overlay,
	        _react2.default.createElement(
	          'div',
	          { className: 'text-heading__options' },
	          options
	        )
	      );
	    }
	  }, {
	    key: '_renderInlineStyle',
	    value: function _renderInlineStyle() {
	      var currentStyle = this.props.editorState.getCurrentInlineStyle(),
	          inlineStyles = _styleConfig.INLINE_STYLES.map(function (type) {
	        type.className = currentStyle.has(type.style) ? 'inline-style__options selected' : 'inline-style__options';
	        return type;
	      }),
	          bold = inlineStyles[0],
	          italic = inlineStyles[1],
	          underline = inlineStyles[2],
	          colorSelected = this.state.colorSelected,
	          colorPicker = null;

	      for (var i = _styleConfig.LIST_COLORS.length - 1; i >= 0; i--) {
	        var colorCode = _styleConfig.LIST_COLORS[i];
	        if (currentStyle.has(colorCode)) {
	          colorSelected = '#' + colorCode;
	          break;
	        }
	      }

	      if (this.state.focusColorPicker) {
	        colorPicker = _react2.default.createElement(
	          'div',
	          { className: 'inline-style__color-picker-wrapper' },
	          _react2.default.createElement('div', { className: 'editor-heading-overlay', onMouseDown: this._selectColor.bind(this) }),
	          _react2.default.createElement(_reactColor.CirclePicker, {
	            width: '294px',
	            colors: _styleConfig.COLORS_PICKER,
	            onChangeComplete: this._changeColorComplete.bind(this) })
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'inline-style group-control' },
	        _react2.default.createElement(
	          'div',
	          { className: bold.className, onMouseDown: this._toggleInlineStyle.bind(this, bold.style) },
	          _react2.default.createElement('i', { className: 'fa fa-bold', 'aria-hidden': 'true' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: italic.className, onMouseDown: this._toggleInlineStyle.bind(this, italic.style) },
	          _react2.default.createElement('i', { className: 'fa fa-italic', 'aria-hidden': 'true' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: underline.className, onMouseDown: this._toggleInlineStyle.bind(this, underline.style) },
	          _react2.default.createElement('i', { className: 'fa fa-underline', 'aria-hidden': 'true' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'inline-style__color' },
	          _react2.default.createElement(
	            'div',
	            { className: 'inline-style__color__wrapper', onMouseDown: this._selectColor.bind(this) },
	            _react2.default.createElement(
	              'div',
	              { className: 'inline-style__color__wrapper__symbol',
	                style: { 'backgroundColor': colorSelected, 'color': colorSelected } },
	              _react2.default.createElement(
	                'span',
	                { className: 'symbol' },
	                'A'
	              )
	            )
	          ),
	          colorPicker
	        )
	      );
	    }
	  }, {
	    key: '_renderFontStyle',
	    value: function _renderFontStyle(blockStyle) {
	      var fontStyles = _styleConfig.FONT_STYLES.map(function (type) {
	        type.className = type.style === blockStyle ? 'font-style__options selected' : 'font-style__options';
	        return type;
	      }),
	          blockquote = fontStyles[0],
	          unorderList = fontStyles[1],
	          orderList = fontStyles[2];

	      return _react2.default.createElement(
	        'div',
	        { className: 'font-style group-control' },
	        _react2.default.createElement(
	          'div',
	          { className: blockquote.className, onMouseDown: this._toggleBlockType.bind(this, blockquote.style) },
	          _react2.default.createElement('i', { className: 'fa fa-quote-left', 'aria-hidden': 'true' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: unorderList.className, onMouseDown: this._toggleBlockType.bind(this, unorderList.style) },
	          _react2.default.createElement('i', { className: 'fa fa-list-ul', 'aria-hidden': 'true' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: orderList.className, onMouseDown: this._toggleBlockType.bind(this, orderList.style) },
	          _react2.default.createElement('i', { className: 'fa fa-list-ol', 'aria-hidden': 'true' })
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var editorState = this.props.editorState,
	          selection = editorState.getSelection(),
	          blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

	      var heading = this._renderTextHeading(blockType),
	          fontStyle = this._renderFontStyle(blockType),
	          inlineStyle = this._renderInlineStyle();

	      return _react2.default.createElement(
	        'div',
	        { className: 'editor-heading' },
	        heading,
	        inlineStyle,
	        fontStyle
	      );
	    }
	  }]);

	  return Heading;
	}(_react2.default.Component), _class.propTypes = {
	  toggleInlineStyle: _react2.default.PropTypes.func.isRequired,
	  toggleBlockType: _react2.default.PropTypes.func.isRequired,
	  toggleColor: _react2.default.PropTypes.func.isRequired,
	  editorState: _react2.default.PropTypes.object.isRequired
	}, _class.defaultProps = {
	  toggleInlineStyle: function toggleInlineStyle() {},
	  toggleBlockType: function toggleBlockType() {},
	  toggleColor: function toggleColor() {},
	  editorState: {}
	}, _temp);
	exports.default = Heading;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.CustomPicker = exports.TwitterPicker = exports.SwatchesPicker = exports.SliderPicker = exports.SketchPicker = exports.PhotoshopPicker = exports.MaterialPicker = exports.HuePicker = exports.GithubPicker = exports.CompactPicker = exports.ChromePicker = exports.CirclePicker = exports.BlockPicker = exports.AlphaPicker = undefined;

	var _Alpha = __webpack_require__(147);

	Object.defineProperty(exports, 'AlphaPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Alpha).default;
	  }
	});

	var _Block = __webpack_require__(344);

	Object.defineProperty(exports, 'BlockPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Block).default;
	  }
	});

	var _Circle = __webpack_require__(346);

	Object.defineProperty(exports, 'CirclePicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Circle).default;
	  }
	});

	var _Chrome = __webpack_require__(349);

	Object.defineProperty(exports, 'ChromePicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Chrome).default;
	  }
	});

	var _Compact = __webpack_require__(353);

	Object.defineProperty(exports, 'CompactPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Compact).default;
	  }
	});

	var _Github = __webpack_require__(362);

	Object.defineProperty(exports, 'GithubPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Github).default;
	  }
	});

	var _Hue = __webpack_require__(364);

	Object.defineProperty(exports, 'HuePicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Hue).default;
	  }
	});

	var _Material = __webpack_require__(366);

	Object.defineProperty(exports, 'MaterialPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Material).default;
	  }
	});

	var _Photoshop = __webpack_require__(367);

	Object.defineProperty(exports, 'PhotoshopPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Photoshop).default;
	  }
	});

	var _Sketch = __webpack_require__(373);

	Object.defineProperty(exports, 'SketchPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Sketch).default;
	  }
	});

	var _Slider = __webpack_require__(376);

	Object.defineProperty(exports, 'SliderPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Slider).default;
	  }
	});

	var _Swatches = __webpack_require__(380);

	Object.defineProperty(exports, 'SwatchesPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Swatches).default;
	  }
	});

	var _Twitter = __webpack_require__(383);

	Object.defineProperty(exports, 'TwitterPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Twitter).default;
	  }
	});

	var _ColorWrap = __webpack_require__(336);

	Object.defineProperty(exports, 'CustomPicker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ColorWrap).default;
	  }
	});

	var _Chrome2 = _interopRequireDefault(_Chrome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Chrome2.default;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AlphaPicker = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(323);

	var _AlphaPointer = __webpack_require__(343);

	var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AlphaPicker = exports.AlphaPicker = function AlphaPicker(_ref) {
	  var rgb = _ref.rgb,
	      hsl = _ref.hsl,
	      width = _ref.width,
	      height = _ref.height,
	      onChange = _ref.onChange,
	      direction = _ref.direction,
	      style = _ref.style,
	      renderers = _ref.renderers,
	      pointer = _ref.pointer;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        position: 'relative',
	        width: width,
	        height: height
	      },
	      alpha: {
	        radius: '2px',
	        style: style
	      }
	    }
	  });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.picker, className: 'alpha-picker' },
	    _react2.default.createElement(_common.Alpha, _extends({}, styles.alpha, {
	      rgb: rgb,
	      hsl: hsl,
	      pointer: pointer,
	      renderers: renderers,
	      onChange: onChange,
	      direction: direction
	    }))
	  );
	};

	AlphaPicker.defaultProps = {
	  width: '316px',
	  height: '16px',
	  direction: 'horizontal',
	  pointer: _AlphaPointer2.default
	};

	exports.default = (0, _common.ColorWrap)(AlphaPicker);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReactCSS=exports.loop=exports.handleActive=exports.handleHover=exports.hover=exports.Component=void 0;var _objectAssign=__webpack_require__(17),_objectAssign2=_interopRequireDefault(_objectAssign),_flattenNames=__webpack_require__(149),_flattenNames2=_interopRequireDefault(_flattenNames),_mergeClasses=__webpack_require__(275),_mergeClasses2=_interopRequireDefault(_mergeClasses),_autoprefix=__webpack_require__(308),_autoprefix2=_interopRequireDefault(_autoprefix),_Component2=__webpack_require__(309),_Component3=_interopRequireDefault(_Component2),_hover2=__webpack_require__(320),_hover3=_interopRequireDefault(_hover2),_active=__webpack_require__(321),_active2=_interopRequireDefault(_active),_loop2=__webpack_require__(322),_loop3=_interopRequireDefault(_loop2);exports.Component=_Component3["default"],exports.hover=_hover3["default"],exports.handleHover=_hover3["default"],exports.handleActive=_active2["default"],exports.loop=_loop3["default"];var ReactCSS=exports.ReactCSS=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var a=(0,_flattenNames2["default"])(r),s=(0,_mergeClasses2["default"])(e,a);return(0,_autoprefix2["default"])(s)};ReactCSS.m=_objectAssign2["default"],exports["default"]=ReactCSS;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.flattenNames=void 0;var _map=__webpack_require__(150),_map2=_interopRequireDefault(_map),_isPlainObject=__webpack_require__(272),_isPlainObject2=_interopRequireDefault(_isPlainObject),_isString=__webpack_require__(274),_isString2=_interopRequireDefault(_isString),flattenNames=exports.flattenNames=function e(t){var i=[];return t.map(function(t){return Array.isArray(t)&&e(t).map(function(e){return i.push(e)}),(0,_isPlainObject2["default"])(t)&&(0,_map2["default"])(t,function(e,t){e===!0&&i.push(t),i.push(t+"-"+e)}),(0,_isString2["default"])(t)&&i.push(t),t}),i};exports["default"]=flattenNames;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(151),
	    baseIteratee = __webpack_require__(152),
	    baseMap = __webpack_require__(266),
	    isArray = __webpack_require__(215);

	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = map;


/***/ },
/* 151 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(153),
	    baseMatchesProperty = __webpack_require__(247),
	    identity = __webpack_require__(262),
	    isArray = __webpack_require__(215),
	    property = __webpack_require__(263);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(154),
	    getMatchData = __webpack_require__(244),
	    matchesStrictComparable = __webpack_require__(246);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(155),
	    baseIsEqual = __webpack_require__(199);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(156),
	    stackClear = __webpack_require__(164),
	    stackDelete = __webpack_require__(165),
	    stackGet = __webpack_require__(166),
	    stackHas = __webpack_require__(167),
	    stackSet = __webpack_require__(168);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(157),
	    listCacheDelete = __webpack_require__(158),
	    listCacheGet = __webpack_require__(161),
	    listCacheHas = __webpack_require__(162),
	    listCacheSet = __webpack_require__(163);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 157 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(159);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(160);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 160 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(159);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(159);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(159);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(156);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ },
/* 165 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ },
/* 166 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 167 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(156),
	    Map = __webpack_require__(169),
	    MapCache = __webpack_require__(184);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(170),
	    root = __webpack_require__(175);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(171),
	    getValue = __webpack_require__(183);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(172),
	    isMasked = __webpack_require__(180),
	    isObject = __webpack_require__(179),
	    toSource = __webpack_require__(182);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(173),
	    isObject = __webpack_require__(179);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(174),
	    getRawTag = __webpack_require__(177),
	    objectToString = __webpack_require__(178);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(175);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(176);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 176 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(174);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 178 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 179 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(181);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(175);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 182 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 183 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(185),
	    mapCacheDelete = __webpack_require__(193),
	    mapCacheGet = __webpack_require__(196),
	    mapCacheHas = __webpack_require__(197),
	    mapCacheSet = __webpack_require__(198);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(186),
	    ListCache = __webpack_require__(156),
	    Map = __webpack_require__(169);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(187),
	    hashDelete = __webpack_require__(189),
	    hashGet = __webpack_require__(190),
	    hashHas = __webpack_require__(191),
	    hashSet = __webpack_require__(192);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(188);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(170);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 189 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(188);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(188);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(188);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(194);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(195);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 195 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(194);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(194);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(194);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(200),
	    isObjectLike = __webpack_require__(224);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(155),
	    equalArrays = __webpack_require__(201),
	    equalByTag = __webpack_require__(207),
	    equalObjects = __webpack_require__(211),
	    getTag = __webpack_require__(239),
	    isArray = __webpack_require__(215),
	    isBuffer = __webpack_require__(225),
	    isTypedArray = __webpack_require__(229);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(202),
	    arraySome = __webpack_require__(205),
	    cacheHas = __webpack_require__(206);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(184),
	    setCacheAdd = __webpack_require__(203),
	    setCacheHas = __webpack_require__(204);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 203 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 204 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 205 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 206 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(174),
	    Uint8Array = __webpack_require__(208),
	    eq = __webpack_require__(160),
	    equalArrays = __webpack_require__(201),
	    mapToArray = __webpack_require__(209),
	    setToArray = __webpack_require__(210);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(175);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 209 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 210 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(212);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(213),
	    getSymbols = __webpack_require__(216),
	    keys = __webpack_require__(219);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(214),
	    isArray = __webpack_require__(215);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 214 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 215 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(217),
	    stubArray = __webpack_require__(218);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ },
/* 217 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ },
/* 218 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(220),
	    baseKeys = __webpack_require__(234),
	    isArrayLike = __webpack_require__(238);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(221),
	    isArguments = __webpack_require__(222),
	    isArray = __webpack_require__(215),
	    isBuffer = __webpack_require__(225),
	    isIndex = __webpack_require__(228),
	    isTypedArray = __webpack_require__(229);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 221 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(223),
	    isObjectLike = __webpack_require__(224);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(173),
	    isObjectLike = __webpack_require__(224);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 224 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(175),
	    stubFalse = __webpack_require__(227);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(226)(module)))

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 227 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 228 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(230),
	    baseUnary = __webpack_require__(232),
	    nodeUtil = __webpack_require__(233);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(173),
	    isLength = __webpack_require__(231),
	    isObjectLike = __webpack_require__(224);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 231 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 232 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(176);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(226)(module)))

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(235),
	    nativeKeys = __webpack_require__(236);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 235 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(237);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 237 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(172),
	    isLength = __webpack_require__(231);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(240),
	    Map = __webpack_require__(169),
	    Promise = __webpack_require__(241),
	    Set = __webpack_require__(242),
	    WeakMap = __webpack_require__(243),
	    baseGetTag = __webpack_require__(173),
	    toSource = __webpack_require__(182);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(170),
	    root = __webpack_require__(175);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(170),
	    root = __webpack_require__(175);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(170),
	    root = __webpack_require__(175);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(170),
	    root = __webpack_require__(175);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(245),
	    keys = __webpack_require__(219);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(179);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 246 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(199),
	    get = __webpack_require__(248),
	    hasIn = __webpack_require__(259),
	    isKey = __webpack_require__(251),
	    isStrictComparable = __webpack_require__(245),
	    matchesStrictComparable = __webpack_require__(246),
	    toKey = __webpack_require__(258);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(249);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(250),
	    toKey = __webpack_require__(258);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(215),
	    isKey = __webpack_require__(251),
	    stringToPath = __webpack_require__(253),
	    toString = __webpack_require__(256);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(215),
	    isSymbol = __webpack_require__(252);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(173),
	    isObjectLike = __webpack_require__(224);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(254);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(255);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(184);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(257);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(174),
	    arrayMap = __webpack_require__(151),
	    isArray = __webpack_require__(215),
	    isSymbol = __webpack_require__(252);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(252);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(260),
	    hasPath = __webpack_require__(261);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 260 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(250),
	    isArguments = __webpack_require__(222),
	    isArray = __webpack_require__(215),
	    isIndex = __webpack_require__(228),
	    isLength = __webpack_require__(231),
	    toKey = __webpack_require__(258);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 262 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(264),
	    basePropertyDeep = __webpack_require__(265),
	    isKey = __webpack_require__(251),
	    toKey = __webpack_require__(258);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 264 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(249);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(267),
	    isArrayLike = __webpack_require__(238);

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	module.exports = baseMap;


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(268),
	    createBaseEach = __webpack_require__(271);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(269),
	    keys = __webpack_require__(219);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(270);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 270 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(238);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(173),
	    getPrototype = __webpack_require__(273),
	    isObjectLike = __webpack_require__(224);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(237);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(173),
	    isArray = __webpack_require__(215),
	    isObjectLike = __webpack_require__(224);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeClasses=void 0;var _map=__webpack_require__(150),_map2=_interopRequireDefault(_map),_cloneDeep=__webpack_require__(276),_cloneDeep2=_interopRequireDefault(_cloneDeep),_objectAssign=__webpack_require__(17),_objectAssign2=_interopRequireDefault(_objectAssign),mergeClasses=exports.mergeClasses=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=e["default"]&&(0,_cloneDeep2["default"])(e["default"])||{};return t.map(function(t){var s=e[t];return s&&(0,_map2["default"])(s,function(e,t){r[t]||(r[t]={}),(0,_objectAssign2["default"])(r[t],s[t])}),t}),r};exports["default"]=mergeClasses;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(277);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}

	module.exports = cloneDeep;


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(155),
	    arrayEach = __webpack_require__(278),
	    assignValue = __webpack_require__(279),
	    baseAssign = __webpack_require__(282),
	    baseAssignIn = __webpack_require__(284),
	    cloneBuffer = __webpack_require__(288),
	    copyArray = __webpack_require__(289),
	    copySymbols = __webpack_require__(290),
	    copySymbolsIn = __webpack_require__(291),
	    getAllKeys = __webpack_require__(212),
	    getAllKeysIn = __webpack_require__(293),
	    getTag = __webpack_require__(239),
	    initCloneArray = __webpack_require__(294),
	    initCloneByTag = __webpack_require__(295),
	    initCloneObject = __webpack_require__(306),
	    isArray = __webpack_require__(215),
	    isBuffer = __webpack_require__(225),
	    isObject = __webpack_require__(179),
	    keys = __webpack_require__(219);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys)
	    : (isFlat ? keysIn : keys);

	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 278 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(280),
	    eq = __webpack_require__(160);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(281);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(170);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(283),
	    keys = __webpack_require__(219);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(279),
	    baseAssignValue = __webpack_require__(280);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(283),
	    keysIn = __webpack_require__(285);

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn(source), object);
	}

	module.exports = baseAssignIn;


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(220),
	    baseKeysIn = __webpack_require__(286),
	    isArrayLike = __webpack_require__(238);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(179),
	    isPrototype = __webpack_require__(235),
	    nativeKeysIn = __webpack_require__(287);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ },
/* 287 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(175);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(226)(module)))

/***/ },
/* 289 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(283),
	    getSymbols = __webpack_require__(216);

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(283),
	    getSymbolsIn = __webpack_require__(292);

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}

	module.exports = copySymbolsIn;


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(214),
	    getPrototype = __webpack_require__(273),
	    getSymbols = __webpack_require__(216),
	    stubArray = __webpack_require__(218);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	module.exports = getSymbolsIn;


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(213),
	    getSymbolsIn = __webpack_require__(292),
	    keysIn = __webpack_require__(285);

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	module.exports = getAllKeysIn;


/***/ },
/* 294 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(296),
	    cloneDataView = __webpack_require__(297),
	    cloneMap = __webpack_require__(298),
	    cloneRegExp = __webpack_require__(301),
	    cloneSet = __webpack_require__(302),
	    cloneSymbol = __webpack_require__(304),
	    cloneTypedArray = __webpack_require__(305);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(208);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(296);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(299),
	    arrayReduce = __webpack_require__(300),
	    mapToArray = __webpack_require__(209);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ },
/* 299 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ },
/* 300 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 301 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(303),
	    arrayReduce = __webpack_require__(300),
	    setToArray = __webpack_require__(210);

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ },
/* 303 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(174);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(296);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(307),
	    getPrototype = __webpack_require__(273),
	    isPrototype = __webpack_require__(235);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(179);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	module.exports = baseCreate;


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.autoprefix=void 0;var _map=__webpack_require__(150),_map2=_interopRequireDefault(_map),_objectAssign=__webpack_require__(17),_objectAssign2=_interopRequireDefault(_objectAssign),transforms={borderRadius:function(e){return{msBorderRadius:e,MozBorderRadius:e,OBorderRadius:e,WebkitBorderRadius:e,borderRadius:e}},boxShadow:function(e){return{msBoxShadow:e,MozBoxShadow:e,OBoxShadow:e,WebkitBoxShadow:e,boxShadow:e}},userSelect:function(e){return{WebkitTouchCallout:e,KhtmlUserSelect:e,MozUserSelect:e,msUserSelect:e,WebkitUserSelect:e,userSelect:e}},flex:function(e){return{WebkitBoxFlex:e,MozBoxFlex:e,WebkitFlex:e,msFlex:e,flex:e}},flexBasis:function(e){return{WebkitFlexBasis:e,flexBasis:e}},justifyContent:function(e){return{WebkitJustifyContent:e,justifyContent:e}},transition:function(e){return{msTransition:e,MozTransition:e,OTransition:e,WebkitTransition:e,transition:e}},transform:function(e){return{msTransform:e,MozTransform:e,OTransform:e,WebkitTransform:e,transform:e}},absolute:function(e){var t=e&&e.split(" ");return{position:"absolute",top:t&&t[0],right:t&&t[1],bottom:t&&t[2],left:t&&t[3]}},extend:function(e,t){var r=t[e];return r?r:{extend:e}}},autoprefix=exports.autoprefix=function(e){var t={};return(0,_map2["default"])(e,function(e,r){var o={};(0,_map2["default"])(e,function(e,t){var r=transforms[t];r?(0,_objectAssign2["default"])(o,r(e)):o[t]=e}),t[r]=o}),t};exports["default"]=autoprefix;

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReactCSSComponent=void 0;var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_inline=__webpack_require__(310),_inline2=_interopRequireDefault(_inline),_once=__webpack_require__(315),_once2=_interopRequireDefault(_once),warning=(0,_once2["default"])(function(){return console.warn("Extending ReactCSS.Component\n  is deprecated in ReactCSS 1.0.0")}),ReactCSSComponent=exports.ReactCSSComponent=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"css",value:function(e){return warning(),_inline2["default"].call(this,e)}},{key:"styles",value:function(){return this.css()}}]),t}(_react2["default"].Component);ReactCSSComponent.contextTypes={mixins:_react2["default"].PropTypes.object},exports["default"]=ReactCSSComponent;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _isObject=__webpack_require__(179),_isObject2=_interopRequireDefault(_isObject),_checkClassStructure=__webpack_require__(311),_checkClassStructure2=_interopRequireDefault(_checkClassStructure),_combine=__webpack_require__(312),_combine2=_interopRequireDefault(_combine);module.exports=function(e){var s=this,t=[];if(!this.classes)throw console.warn("Define this.classes on `"+this.constructor.name+"`");(0,_checkClassStructure2["default"])(this.classes());var r=function(e,r){s.classes()[e]?t.push(s.classes()[e]):e&&r&&r.warn===!0&&console.warn("The `"+e+"` css class does not exist on `"+s.constructor.name+"`")};r("default");for(var i in this.props){var c=this.props[i];(0,_isObject2["default"])(c)||(c===!0?(r(i),r(i+"-true")):r(c?i+"-"+c:i+"-false"))}if(this.props&&this.props.activeBounds)for(var o=0;o<this.props.activeBounds.length;o++){var n=this.props.activeBounds[o];r(n)}for(var a in e){var u=e[a];u===!0&&r(a,{warn:!0})}var l={};return this.context&&this.context.mixins&&(l=this.context.mixins),(0,_combine2["default"])(t,l)};

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkClassStructure=void 0;var _map=__webpack_require__(150),_map2=_interopRequireDefault(_map),_isObject=__webpack_require__(179),_isObject2=_interopRequireDefault(_isObject),checkClassStructure=exports.checkClassStructure=function(e){(0,_map2["default"])(e,function(t,s){e.hasOwnProperty(s)&&((0,_isObject2["default"])(t)?(0,_map2["default"])(t,function(e,u){t.hasOwnProperty(u)&&((0,_isObject2["default"])(e)||console.warn("Make sure the value of the element `"+s+"`\n                is an object of css. You passed it `"+t+"`"))}):console.warn("Make sure the value of `"+s+"` is an object of\n          html elements. You passed it `"+t+"`"))})};exports["default"]=checkClassStructure;

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.combine=void 0;var _merge=__webpack_require__(313),_merge2=_interopRequireDefault(_merge),_transformMixins=__webpack_require__(314),_transformMixins2=_interopRequireDefault(_transformMixins),combine=exports.combine=function(e,r){var i=(0,_merge2["default"])(e);return(0,_transformMixins2["default"])(i,r)};exports["default"]=combine;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _merge=__webpack_require__(313),_merge2=_interopRequireDefault(_merge),_isObject=__webpack_require__(179),_isObject2=_interopRequireDefault(_isObject),merge=function(e){return(0,_isObject2["default"])(e)&&!Array.isArray(e)?e:1===e.length?e[0]:_merge2["default"].recursive.apply(void 0,e)};exports["default"]=merge;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _isObject=__webpack_require__(179),_isObject2=_interopRequireDefault(_isObject),_merge=__webpack_require__(313),_merge2=_interopRequireDefault(_merge),localProps={borderRadius:function(e){if(null!==e)return{msBorderRadius:e,MozBorderRadius:e,OBorderRadius:e,WebkitBorderRadius:e,borderRadius:e}},boxShadow:function(e){if(null!==e)return{msBoxShadow:e,MozBoxShadow:e,OBoxShadow:e,WebkitBoxShadow:e,boxShadow:e}},userSelect:function(e){if(null!==e)return{WebkitTouchCallout:e,KhtmlUserSelect:e,MozUserSelect:e,msUserSelect:e,WebkitUserSelect:e,userSelect:e}},flex:function(e){if(null!==e)return{WebkitBoxFlex:e,MozBoxFlex:e,WebkitFlex:e,msFlex:e,flex:e}},flexBasis:function(e){if(null!==e)return{WebkitFlexBasis:e,flexBasis:e}},justifyContent:function(e){if(null!==e)return{WebkitJustifyContent:e,justifyContent:e}},transition:function(e){if(null!==e)return{msTransition:e,MozTransition:e,OTransition:e,WebkitTransition:e,transition:e}},transform:function(e){if(null!==e)return{msTransform:e,MozTransform:e,OTransform:e,WebkitTransform:e,transform:e}},Absolute:function(e){if(null!==e){var r=e.split(" ");return{position:"absolute",top:r[0],right:r[1],bottom:r[2],left:r[3]}}},Extend:function(e,r){var t=r[e];if(t)return t}},transform=function e(r,t,n){var i=(0,_merge2["default"])(t,localProps),o={};for(var u in r){var s=r[u];if((0,_isObject2["default"])(s)&&!Array.isArray(s))o[u]=e(s,t,r);else if(i[u]){var l=i[u](s,n);for(var a in l){var f=l[a];o[a]=f}}else o[u]=s}return o};module.exports=function(e,r,t){return transform(e,r,t)};

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var before = __webpack_require__(316);

	/**
	 * Creates a function that is restricted to invoking `func` once. Repeat calls
	 * to the function return the value of the first invocation. The `func` is
	 * invoked with the `this` binding and arguments of the created function.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * var initialize = _.once(createApplication);
	 * initialize();
	 * initialize();
	 * // => `createApplication` is invoked once
	 */
	function once(func) {
	  return before(2, func);
	}

	module.exports = once;


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(317);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that invokes `func`, with the `this` binding and arguments
	 * of the created function, while it's called less than `n` times. Subsequent
	 * calls to the created function return the result of the last `func` invocation.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {number} n The number of calls at which `func` is no longer invoked.
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * jQuery(element).on('click', _.before(5, addContactToList));
	 * // => Allows adding up to 4 contacts to the list.
	 */
	function before(n, func) {
	  var result;
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  n = toInteger(n);
	  return function() {
	    if (--n > 0) {
	      result = func.apply(this, arguments);
	    }
	    if (n <= 1) {
	      func = undefined;
	    }
	    return result;
	  };
	}

	module.exports = before;


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(318);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(319);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(179),
	    isSymbol = __webpack_require__(252);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.hover=void 0;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),hover=exports.hover=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span";return function(r){function o(){var r,n,u,a;_classCallCheck(this,o);for(var s=arguments.length,c=Array(s),i=0;i<s;i++)c[i]=arguments[i];return n=u=_possibleConstructorReturn(this,(r=o.__proto__||Object.getPrototypeOf(o)).call.apply(r,[this].concat(c))),u.state={hover:!1},u.handleMouseOver=function(){return u.setState({hover:!0})},u.handleMouseOut=function(){return u.setState({hover:!1})},u.render=function(){return _react2["default"].createElement(t,{onMouseOver:u.handleMouseOver,onMouseOut:u.handleMouseOut},_react2["default"].createElement(e,_extends({},u.props,u.state)))},a=n,_possibleConstructorReturn(u,a)}return _inherits(o,r),o}(_react2["default"].Component)};exports["default"]=hover;

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.active=void 0;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),active=exports.active=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span";return function(r){function n(){var r,o,a,c;_classCallCheck(this,n);for(var u=arguments.length,s=Array(u),i=0;i<u;i++)s[i]=arguments[i];return o=a=_possibleConstructorReturn(this,(r=n.__proto__||Object.getPrototypeOf(n)).call.apply(r,[this].concat(s))),a.state={active:!1},a.handleMouseDown=function(){return a.setState({active:!0})},a.handleMouseUp=function(){return a.setState({active:!1})},a.render=function(){return _react2["default"].createElement(t,{onMouseDown:a.handleMouseDown,onMouseUp:a.handleMouseUp},_react2["default"].createElement(e,_extends({},a.props,a.state)))},c=o,_possibleConstructorReturn(a,c)}return _inherits(n,r),n}(_react2["default"].Component)};exports["default"]=active;

/***/ },
/* 322 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var loopable=function(e,t){var l={},o=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l[e]=t};return 0===e&&o("first-child"),e===t-1&&o("last-child"),(0===e||e%2===0)&&o("even"),1===Math.abs(e%2)&&o("odd"),o("nth-child",e),l};exports["default"]=loopable;

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Alpha = __webpack_require__(324);

	Object.defineProperty(exports, 'Alpha', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Alpha).default;
	  }
	});

	var _Checkboard = __webpack_require__(326);

	Object.defineProperty(exports, 'Checkboard', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Checkboard).default;
	  }
	});

	var _EditableInput = __webpack_require__(328);

	Object.defineProperty(exports, 'EditableInput', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_EditableInput).default;
	  }
	});

	var _Hue = __webpack_require__(329);

	Object.defineProperty(exports, 'Hue', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Hue).default;
	  }
	});

	var _Saturation = __webpack_require__(331);

	Object.defineProperty(exports, 'Saturation', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Saturation).default;
	  }
	});

	var _ColorWrap = __webpack_require__(336);

	Object.defineProperty(exports, 'ColorWrap', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ColorWrap).default;
	  }
	});

	var _Swatch = __webpack_require__(342);

	Object.defineProperty(exports, 'Swatch', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Swatch).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Alpha = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _alpha = __webpack_require__(325);

	var alpha = _interopRequireWildcard(_alpha);

	var _Checkboard = __webpack_require__(326);

	var _Checkboard2 = _interopRequireDefault(_Checkboard);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Alpha = exports.Alpha = function (_ref) {
	  _inherits(Alpha, _ref);

	  function Alpha() {
	    var _ref2;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Alpha);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {
	      var change = alpha.calculateChange(e, skip, _this.props, _this.refs.container);
	      change && _this.props.onChange(change, e);
	    }, _this.handleMouseDown = function (e) {
	      _this.handleChange(e, true);
	      window.addEventListener('mousemove', _this.handleChange);
	      window.addEventListener('mouseup', _this.handleMouseUp);
	    }, _this.handleMouseUp = function () {
	      _this.unbindEventListeners();
	    }, _this.unbindEventListeners = function () {
	      window.removeEventListener('mousemove', _this.handleChange);
	      window.removeEventListener('mouseup', _this.handleMouseUp);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Alpha, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unbindEventListeners();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var rgb = this.props.rgb;
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          alpha: {
	            absolute: '0px 0px 0px 0px',
	            borderRadius: this.props.radius
	          },
	          checkboard: {
	            absolute: '0px 0px 0px 0px',
	            overflow: 'hidden'
	          },
	          gradient: {
	            absolute: '0px 0px 0px 0px',
	            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',
	            boxShadow: this.props.shadow,
	            borderRadius: this.props.radius
	          },
	          container: {
	            position: 'relative',
	            height: '100%',
	            margin: '0 3px'
	          },
	          pointer: {
	            position: 'absolute',
	            left: rgb.a * 100 + '%'
	          },
	          slider: {
	            width: '4px',
	            borderRadius: '1px',
	            height: '8px',
	            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
	            background: '#fff',
	            marginTop: '1px',
	            transform: 'translateX(-2px)'
	          }
	        },
	        'vertical': {
	          gradient: {
	            background: 'linear-gradient(to bottom, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)'
	          },
	          pointer: {
	            left: 0,
	            top: rgb.a * 100 + '%'
	          }
	        },
	        'overwrite': _extends({}, this.props.style)
	      }, {
	        vertical: this.props.direction === 'vertical',
	        overwrite: true
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.alpha },
	        _react2.default.createElement(
	          'div',
	          { style: styles.checkboard },
	          _react2.default.createElement(_Checkboard2.default, { renderers: this.props.renderers })
	        ),
	        _react2.default.createElement('div', { style: styles.gradient }),
	        _react2.default.createElement(
	          'div',
	          {
	            style: styles.container,
	            ref: 'container',
	            onMouseDown: this.handleMouseDown,
	            onTouchMove: this.handleChange,
	            onTouchStart: this.handleChange
	          },
	          _react2.default.createElement(
	            'div',
	            { style: styles.pointer },
	            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
	          )
	        )
	      );
	    }
	  }]);

	  return Alpha;
	}(_react.PureComponent || _react.Component);

	exports.default = Alpha;

/***/ },
/* 325 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.calculateChange = calculateChange;
	function calculateChange(e, skip, props, container) {
	  !skip && e.preventDefault();
	  var containerWidth = container.clientWidth;
	  var containerHeight = container.clientHeight;
	  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
	  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
	  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
	  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

	  if (props.direction === 'vertical') {
	    var a = void 0;
	    if (top < 0) {
	      a = 0;
	    } else if (top > containerHeight) {
	      a = 1;
	    } else {
	      a = Math.round(top * 100 / containerHeight) / 100;
	    }

	    if (props.hsl.a !== a) {
	      return {
	        h: props.hsl.h,
	        s: props.hsl.s,
	        l: props.hsl.l,
	        a: a,
	        source: 'rgb'
	      };
	    }
	  } else {
	    var _a = void 0;
	    if (left < 0) {
	      _a = 0;
	    } else if (left > containerWidth) {
	      _a = 1;
	    } else {
	      _a = Math.round(left * 100 / containerWidth) / 100;
	    }

	    if (props.a !== _a) {
	      return {
	        h: props.hsl.h,
	        s: props.hsl.s,
	        l: props.hsl.l,
	        a: _a,
	        source: 'rgb'
	      };
	    }
	  }
	  return null;
	}

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Checkboard = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _checkboard = __webpack_require__(327);

	var checkboard = _interopRequireWildcard(_checkboard);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Checkboard = exports.Checkboard = function Checkboard(_ref) {
	  var white = _ref.white,
	      grey = _ref.grey,
	      size = _ref.size,
	      renderers = _ref.renderers;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      grid: {
	        absolute: '0px 0px 0px 0px',
	        background: 'url(' + checkboard.get(white, grey, size, renderers.canvas) + ') center left'
	      }
	    }
	  });

	  return _react2.default.createElement('div', { style: styles.grid });
	};

	Checkboard.defaultProps = {
	  size: 8,
	  white: 'transparent',
	  grey: 'rgba(0,0,0,.08)',
	  renderers: {}
	};

	exports.default = Checkboard;

/***/ },
/* 327 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.render = render;
	exports.get = get;
	var checkboardCache = {};

	function render(c1, c2, size, serverCanvas) {
	  if (typeof document === 'undefined' && !serverCanvas) return null;
	  var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');
	  canvas.width = canvas.height = size * 2;
	  var ctx = canvas.getContext('2d');
	  if (!ctx) return null; // If no context can be found, return early.
	  ctx.fillStyle = c1;
	  ctx.fillRect(0, 0, canvas.width, canvas.height);
	  ctx.fillStyle = c2;
	  ctx.fillRect(0, 0, size, size);
	  ctx.translate(size, size);
	  ctx.fillRect(0, 0, size, size);
	  return canvas.toDataURL();
	}

	function get(c1, c2, size, serverCanvas) {
	  var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');
	  var checkboard = render(c1, c2, size, serverCanvas);

	  if (checkboardCache[key]) {
	    return checkboardCache[key];
	  }
	  checkboardCache[key] = checkboard;
	  return checkboard;
	}

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EditableInput = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditableInput = exports.EditableInput = function (_ref) {
	  _inherits(EditableInput, _ref);

	  function EditableInput(props) {
	    _classCallCheck(this, EditableInput);

	    var _this = _possibleConstructorReturn(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));

	    _this.handleBlur = function () {
	      if (_this.state.blurValue) {
	        _this.setState({ value: _this.state.blurValue, blurValue: null });
	      }
	    };

	    _this.handleChange = function (e) {
	      if (!!_this.props.label) {
	        _this.props.onChange(_defineProperty({}, _this.props.label, e.target.value), e);
	      } else {
	        _this.props.onChange(e.target.value, e);
	      }

	      _this.setState({ value: e.target.value });
	    };

	    _this.handleKeyDown = function (e) {
	      var number = Number(e.target.value);
	      if (number) {
	        var amount = _this.props.arrowOffset || 1;

	        // Up
	        if (e.keyCode === 38) {
	          if (_this.props.label !== null) {
	            _this.props.onChange(_defineProperty({}, _this.props.label, number + amount), e);
	          } else {
	            _this.props.onChange(number + amount, e);
	          }

	          _this.setState({ value: number + amount });
	        }

	        // Down
	        if (e.keyCode === 40) {
	          if (_this.props.label !== null) {
	            _this.props.onChange(_defineProperty({}, _this.props.label, number - amount), e);
	          } else {
	            _this.props.onChange(number - amount, e);
	          }

	          _this.setState({ value: number - amount });
	        }
	      }
	    };

	    _this.handleDrag = function (e) {
	      if (_this.props.dragLabel) {
	        var newValue = Math.round(_this.props.value + e.movementX);
	        if (newValue >= 0 && newValue <= _this.props.dragMax) {
	          _this.props.onChange(_defineProperty({}, _this.props.label, newValue), e);
	        }
	      }
	    };

	    _this.handleMouseDown = function (e) {
	      if (_this.props.dragLabel) {
	        e.preventDefault();
	        _this.handleDrag(e);
	        window.addEventListener('mousemove', _this.handleDrag);
	        window.addEventListener('mouseup', _this.handleMouseUp);
	      }
	    };

	    _this.handleMouseUp = function () {
	      _this.unbindEventListeners();
	    };

	    _this.unbindEventListeners = function () {
	      window.removeEventListener('mousemove', _this.handleDrag);
	      window.removeEventListener('mouseup', _this.handleMouseUp);
	    };

	    _this.state = {
	      value: String(props.value).toUpperCase(),
	      blurValue: String(props.value).toUpperCase()
	    };
	    return _this;
	  }

	  _createClass(EditableInput, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var input = this.refs.input;
	      if (nextProps.value !== this.state.value) {
	        if (input === document.activeElement) {
	          this.setState({ blurValue: String(nextProps.value).toUpperCase() });
	        } else {
	          this.setState({ value: String(nextProps.value).toUpperCase() });
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unbindEventListeners();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          wrap: {
	            position: 'relative'
	          }
	        },
	        'user-override': {
	          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
	          input: this.props.style && this.props.style.input ? this.props.style.input : {},
	          label: this.props.style && this.props.style.label ? this.props.style.label : {}
	        },
	        'dragLabel-true': {
	          label: {
	            cursor: 'ew-resize'
	          }
	        }
	      }, {
	        'user-override': true
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrap },
	        _react2.default.createElement('input', {
	          style: styles.input,
	          ref: 'input',
	          value: this.state.value,
	          onKeyDown: this.handleKeyDown,
	          onChange: this.handleChange,
	          onBlur: this.handleBlur,
	          placeholder: this.props.placeholder
	        }),
	        this.props.label ? _react2.default.createElement(
	          'span',
	          { style: styles.label, onMouseDown: this.handleMouseDown },
	          this.props.label
	        ) : null
	      );
	    }
	  }]);

	  return EditableInput;
	}(_react.PureComponent || _react.Component);

	exports.default = EditableInput;

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Hue = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _hue = __webpack_require__(330);

	var hue = _interopRequireWildcard(_hue);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hue = exports.Hue = function (_ref) {
	  _inherits(Hue, _ref);

	  function Hue() {
	    var _ref2;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Hue);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {
	      var change = hue.calculateChange(e, skip, _this.props, _this.refs.container);
	      change && _this.props.onChange(change, e);
	    }, _this.handleMouseDown = function (e) {
	      _this.handleChange(e, true);
	      window.addEventListener('mousemove', _this.handleChange);
	      window.addEventListener('mouseup', _this.handleMouseUp);
	    }, _this.handleMouseUp = function () {
	      _this.unbindEventListeners();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Hue, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unbindEventListeners();
	    }
	  }, {
	    key: 'unbindEventListeners',
	    value: function unbindEventListeners() {
	      window.removeEventListener('mousemove', this.handleChange);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          hue: {
	            absolute: '0px 0px 0px 0px',
	            background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%,\n            #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
	            borderRadius: this.props.radius,
	            boxShadow: this.props.shadow
	          },
	          container: {
	            margin: '0 2px',
	            position: 'relative',
	            height: '100%'
	          },
	          pointer: {
	            position: 'absolute',
	            left: this.props.hsl.h * 100 / 360 + '%'
	          },
	          slider: {
	            marginTop: '1px',
	            width: '4px',
	            borderRadius: '1px',
	            height: '8px',
	            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
	            background: '#fff',
	            transform: 'translateX(-2px)'
	          }
	        },
	        'vertical': {
	          hue: {
	            background: 'linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n            #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)'
	          },
	          pointer: {
	            left: '0px',
	            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
	          }
	        }
	      }, { vertical: this.props.direction === 'vertical' });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.hue },
	        _react2.default.createElement(
	          'div',
	          {
	            style: styles.container,
	            ref: 'container',
	            onMouseDown: this.handleMouseDown,
	            onTouchMove: this.handleChange,
	            onTouchStart: this.handleChange
	          },
	          _react2.default.createElement(
	            'div',
	            { style: styles.pointer },
	            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
	          )
	        )
	      );
	    }
	  }]);

	  return Hue;
	}(_react.PureComponent || _react.Component);

	exports.default = Hue;

/***/ },
/* 330 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.calculateChange = calculateChange;
	function calculateChange(e, skip, props, container) {
	  !skip && e.preventDefault();
	  var containerWidth = container.clientWidth;
	  var containerHeight = container.clientHeight;
	  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
	  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
	  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
	  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

	  if (props.direction === 'vertical') {
	    var h = void 0;
	    if (top < 0) {
	      h = 359;
	    } else if (top > containerHeight) {
	      h = 0;
	    } else {
	      var percent = -(top * 100 / containerHeight) + 100;
	      h = 360 * percent / 100;
	    }

	    if (props.hsl.h !== h) {
	      return {
	        h: h,
	        s: props.hsl.s,
	        l: props.hsl.l,
	        a: props.hsl.a,
	        source: 'rgb'
	      };
	    }
	  } else {
	    var _h = void 0;
	    if (left < 0) {
	      _h = 0;
	    } else if (left > containerWidth) {
	      _h = 359;
	    } else {
	      var _percent = left * 100 / containerWidth;
	      _h = 360 * _percent / 100;
	    }

	    if (props.hsl.h !== _h) {
	      return {
	        h: _h,
	        s: props.hsl.s,
	        l: props.hsl.l,
	        a: props.hsl.a,
	        source: 'rgb'
	      };
	    }
	  }
	  return null;
	}

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Saturation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _throttle = __webpack_require__(332);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _saturation = __webpack_require__(335);

	var saturation = _interopRequireWildcard(_saturation);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Saturation = exports.Saturation = function (_ref) {
	  _inherits(Saturation, _ref);

	  function Saturation(props) {
	    _classCallCheck(this, Saturation);

	    var _this = _possibleConstructorReturn(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));

	    _this.handleChange = function (e, skip) {
	      _this.throttle(_this.props.onChange, saturation.calculateChange(e, skip, _this.props, _this.refs.container), e);
	    };

	    _this.handleMouseDown = function (e) {
	      _this.handleChange(e, true);
	      window.addEventListener('mousemove', _this.handleChange);
	      window.addEventListener('mouseup', _this.handleMouseUp);
	    };

	    _this.handleMouseUp = function () {
	      _this.unbindEventListeners();
	    };

	    _this.throttle = (0, _throttle2.default)(function (fn, data, e) {
	      fn(data, e);
	    }, 50);
	    return _this;
	  }

	  _createClass(Saturation, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unbindEventListeners();
	    }
	  }, {
	    key: 'unbindEventListeners',
	    value: function unbindEventListeners() {
	      window.removeEventListener('mousemove', this.handleChange);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _ref2 = this.props.style || {},
	          color = _ref2.color,
	          white = _ref2.white,
	          black = _ref2.black,
	          pointer = _ref2.pointer,
	          circle = _ref2.circle;

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          color: {
	            absolute: '0px 0px 0px 0px',
	            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
	            borderRadius: this.props.radius
	          },
	          white: {
	            absolute: '0px 0px 0px 0px',
	            background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))'
	          },
	          black: {
	            absolute: '0px 0px 0px 0px',
	            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
	            boxShadow: this.props.shadow
	          },
	          pointer: {
	            position: 'absolute',
	            top: -(this.props.hsv.v * 100) + 100 + '%',
	            left: this.props.hsv.s * 100 + '%',
	            cursor: 'default'
	          },
	          circle: {
	            width: '4px',
	            height: '4px',
	            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
	            borderRadius: '50%',
	            cursor: 'hand',
	            transform: 'translate(-2px, -2px)'
	          }
	        },
	        'custom': {
	          color: color,
	          white: white,
	          black: black,
	          pointer: pointer,
	          circle: circle
	        }
	      }, { 'custom': !!this.props.style });

	      return _react2.default.createElement(
	        'div',
	        {
	          style: styles.color,
	          ref: 'container',
	          onMouseDown: this.handleMouseDown,
	          onTouchMove: this.handleChange,
	          onTouchStart: this.handleChange
	        },
	        _react2.default.createElement(
	          'div',
	          { style: styles.white },
	          _react2.default.createElement('div', { style: styles.black }),
	          _react2.default.createElement(
	            'div',
	            { style: styles.pointer },
	            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.circle })
	          )
	        )
	      );
	    }
	  }]);

	  return Saturation;
	}(_react.PureComponent || _react.Component);

	exports.default = Saturation;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(333),
	    isObject = __webpack_require__(179);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	module.exports = throttle;


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(179),
	    now = __webpack_require__(334),
	    toNumber = __webpack_require__(319);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(175);

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	module.exports = now;


/***/ },
/* 335 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.calculateChange = calculateChange;
	function calculateChange(e, skip, props, container) {
	  !skip && e.preventDefault();
	  var containerWidth = container.clientWidth;
	  var containerHeight = container.clientHeight;
	  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
	  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
	  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
	  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

	  if (left < 0) {
	    left = 0;
	  } else if (left > containerWidth) {
	    left = containerWidth;
	  } else if (top < 0) {
	    top = 0;
	  } else if (top > containerHeight) {
	    top = containerHeight;
	  }

	  var saturation = left * 100 / containerWidth;
	  var bright = -(top * 100 / containerHeight) + 100;

	  return {
	    h: props.hsl.h,
	    s: saturation,
	    v: bright,
	    a: props.hsl.a,
	    source: 'rgb'
	  };
	}

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ColorWrap = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _debounce = __webpack_require__(333);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _color = __webpack_require__(337);

	var _color2 = _interopRequireDefault(_color);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColorWrap = exports.ColorWrap = function ColorWrap(Picker) {
	  var ColorPicker = function (_ref) {
	    _inherits(ColorPicker, _ref);

	    function ColorPicker(props) {
	      _classCallCheck(this, ColorPicker);

	      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

	      _this.handleChange = function (data, event) {
	        var isValidColor = _color2.default.simpleCheckForValidColor(data);
	        if (isValidColor) {
	          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
	          _this.setState(colors);
	          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
	          _this.props.onChange && _this.props.onChange(colors, event);
	        }
	      };

	      _this.state = _extends({}, _color2.default.toState(props.color, 0), {
	        visible: props.display
	      });

	      _this.debounce = (0, _debounce2.default)(function (fn, data, event) {
	        fn(data, event);
	      }, 100);
	      return _this;
	    }

	    _createClass(ColorPicker, [{
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        this.setState(_extends({}, _color2.default.toState(nextProps.color, this.state.oldHue), {
	          visible: nextProps.display
	        }));
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, { onChange: this.handleChange }));
	      }
	    }]);

	    return ColorPicker;
	  }(_react.PureComponent || _react.Component);

	  ColorPicker.defaultProps = {
	    color: {
	      h: 250,
	      s: 0.50,
	      l: 0.20,
	      a: 1
	    }
	  };

	  return ColorPicker;
	};

	exports.default = ColorWrap;

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.red = undefined;

	var _each = __webpack_require__(338);

	var _each2 = _interopRequireDefault(_each);

	var _tinycolor = __webpack_require__(341);

	var _tinycolor2 = _interopRequireDefault(_tinycolor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  simpleCheckForValidColor: function simpleCheckForValidColor(data) {
	    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v'];
	    var checked = 0;
	    var passed = 0;
	    (0, _each2.default)(keysToCheck, function (letter) {
	      if (data[letter]) {
	        checked++;
	        if (!isNaN(data[letter])) {
	          passed++;
	        }
	      }
	    });
	    return checked === passed ? data : false;
	  },
	  toState: function toState(data, oldHue) {
	    var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);
	    var hsl = color.toHsl();
	    var hsv = color.toHsv();
	    if (hsl.s === 0) {
	      hsl.h = oldHue || 0;
	      hsv.h = oldHue || 0;
	    }

	    return {
	      hsl: hsl,
	      hex: '#' + color.toHex(),
	      rgb: color.toRgb(),
	      hsv: hsv,
	      oldHue: data.h || oldHue || hsl.h,
	      source: data.source
	    };
	  },
	  isValidHex: function isValidHex(hex) {
	    return (0, _tinycolor2.default)(hex).isValid();
	  }
	};
	var red = exports.red = {
	  hsl: { a: 1, h: 0, l: 0.5, s: 1 },
	  hex: '#ff0000',
	  rgb: { r: 255, g: 0, b: 0, a: 1 },
	  hsv: { h: 0, s: 1, v: 1, a: 1 }
	};

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(339);


/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(278),
	    baseEach = __webpack_require__(267),
	    castFunction = __webpack_require__(340),
	    isArray = __webpack_require__(215);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, castFunction(iteratee));
	}

	module.exports = forEach;


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(262);

	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}

	module.exports = castFunction;


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// jscs: disable

	// TinyColor v1.1.2
	// https://github.com/bgrins/TinyColor
	// Brian Grinstead, MIT License

	(function() {

	var trimLeft = /^[\s,#]+/;
	var trimRight = /\s+$/;
	var tinyCounter = 0;
	var math = Math;
	var mathRound = math.round;
	var mathMin = math.min;
	var mathMax = math.max;
	var mathRandom = math.random;

	function tinycolor(color, opts) {

			color = (color) ? color : '';
			opts = opts || { };

			// If input is already a tinycolor, return itself
			if (color instanceof tinycolor) {
				 return color;
			}
			// If we are called as a function, call using new instead
			if (!(this instanceof tinycolor)) {
					return new tinycolor(color, opts);
			}

			var rgb = inputToRGB(color);
			this._originalInput = color,
			this._r = rgb.r,
			this._g = rgb.g,
			this._b = rgb.b,
			this._a = rgb.a,
			this._roundA = mathRound(100*this._a) / 100,
			this._format = opts.format || rgb.format;
			this._gradientType = opts.gradientType;

			// Don't let the range of [0,255] come back in [0,1].
			// Potentially lose a little bit of precision here, but will fix issues where
			// .5 gets interpreted as half of the total, instead of half of 1
			// If it was supposed to be 128, this was already taken care of by `inputToRgb`
			if (this._r < 1) { this._r = mathRound(this._r); }
			if (this._g < 1) { this._g = mathRound(this._g); }
			if (this._b < 1) { this._b = mathRound(this._b); }

			this._ok = rgb.ok;
			this._tc_id = tinyCounter++;
	}

	tinycolor.prototype = {
			isDark: function() {
					return this.getBrightness() < 128;
			},
			isLight: function() {
					return !this.isDark();
			},
			isValid: function() {
					return this._ok;
			},
			getOriginalInput: function() {
				return this._originalInput;
			},
			getFormat: function() {
					return this._format;
			},
			getAlpha: function() {
					return this._a;
			},
			getBrightness: function() {
					//http://www.w3.org/TR/AERT#color-contrast
					var rgb = this.toRgb();
					return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
			},
			getLuminance: function() {
					//http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
					var rgb = this.toRgb();
					var RsRGB, GsRGB, BsRGB, R, G, B;
					RsRGB = rgb.r/255;
					GsRGB = rgb.g/255;
					BsRGB = rgb.b/255;

					if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
					if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
					if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
					return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
			},
			setAlpha: function(value) {
					this._a = boundAlpha(value);
					this._roundA = mathRound(100*this._a) / 100;
					return this;
			},
			toHsv: function() {
					var hsv = rgbToHsv(this._r, this._g, this._b);
					return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
			},
			toHsvString: function() {
					var hsv = rgbToHsv(this._r, this._g, this._b);
					var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
					return (this._a == 1) ?
						"hsv("	+ h + ", " + s + "%, " + v + "%)" :
						"hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
			},
			toHsl: function() {
					var hsl = rgbToHsl(this._r, this._g, this._b);
					return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
			},
			toHslString: function() {
					var hsl = rgbToHsl(this._r, this._g, this._b);
					var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
					return (this._a == 1) ?
						"hsl("	+ h + ", " + s + "%, " + l + "%)" :
						"hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
			},
			toHex: function(allow3Char) {
					return rgbToHex(this._r, this._g, this._b, allow3Char);
			},
			toHexString: function(allow3Char) {
					return '#' + this.toHex(allow3Char);
			},
			toHex8: function() {
					return rgbaToHex(this._r, this._g, this._b, this._a);
			},
			toHex8String: function() {
					return '#' + this.toHex8();
			},
			toRgb: function() {
					return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
			},
			toRgbString: function() {
					return (this._a == 1) ?
						"rgb("	+ mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
						"rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
			},
			toPercentageRgb: function() {
					return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
			},
			toPercentageRgbString: function() {
					return (this._a == 1) ?
						"rgb("	+ mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
						"rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
			},
			toName: function() {
					if (this._a === 0) {
							return "transparent";
					}

					if (this._a < 1) {
							return false;
					}

					return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
			},
			toFilter: function(secondColor) {
					var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
					var secondHex8String = hex8String;
					var gradientType = this._gradientType ? "GradientType = 1, " : "";

					if (secondColor) {
							var s = tinycolor(secondColor);
							secondHex8String = s.toHex8String();
					}

					return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
			},
			toString: function(format) {
					var formatSet = !!format;
					format = format || this._format;

					var formattedString = false;
					var hasAlpha = this._a < 1 && this._a >= 0;
					var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

					if (needsAlphaFormat) {
							// Special case for "transparent", all other non-alpha formats
							// will return rgba when there is transparency.
							if (format === "name" && this._a === 0) {
									return this.toName();
							}
							return this.toRgbString();
					}
					if (format === "rgb") {
							formattedString = this.toRgbString();
					}
					if (format === "prgb") {
							formattedString = this.toPercentageRgbString();
					}
					if (format === "hex" || format === "hex6") {
							formattedString = this.toHexString();
					}
					if (format === "hex3") {
							formattedString = this.toHexString(true);
					}
					if (format === "hex8") {
							formattedString = this.toHex8String();
					}
					if (format === "name") {
							formattedString = this.toName();
					}
					if (format === "hsl") {
							formattedString = this.toHslString();
					}
					if (format === "hsv") {
							formattedString = this.toHsvString();
					}

					return formattedString || this.toHexString();
			},

			_applyModification: function(fn, args) {
					var color = fn.apply(null, [this].concat([].slice.call(args)));
					this._r = color._r;
					this._g = color._g;
					this._b = color._b;
					this.setAlpha(color._a);
					return this;
			},
			lighten: function() {
					return this._applyModification(lighten, arguments);
			},
			brighten: function() {
					return this._applyModification(brighten, arguments);
			},
			darken: function() {
					return this._applyModification(darken, arguments);
			},
			desaturate: function() {
					return this._applyModification(desaturate, arguments);
			},
			saturate: function() {
					return this._applyModification(saturate, arguments);
			},
			greyscale: function() {
					return this._applyModification(greyscale, arguments);
			},
			spin: function() {
					return this._applyModification(spin, arguments);
			},

			_applyCombination: function(fn, args) {
					return fn.apply(null, [this].concat([].slice.call(args)));
			},
			analogous: function() {
					return this._applyCombination(analogous, arguments);
			},
			complement: function() {
					return this._applyCombination(complement, arguments);
			},
			monochromatic: function() {
					return this._applyCombination(monochromatic, arguments);
			},
			splitcomplement: function() {
					return this._applyCombination(splitcomplement, arguments);
			},
			triad: function() {
					return this._applyCombination(triad, arguments);
			},
			tetrad: function() {
					return this._applyCombination(tetrad, arguments);
			}
	};

	// If input is an object, force 1 into "1.0" to handle ratios properly
	// String input requires "1.0" as input, so 1 will be treated as 1
	tinycolor.fromRatio = function(color, opts) {
			if (typeof color == "object") {
					var newColor = {};
					for (var i in color) {
							if (color.hasOwnProperty(i)) {
									if (i === "a") {
											newColor[i] = color[i];
									}
									else {
											newColor[i] = convertToPercentage(color[i]);
									}
							}
					}
					color = newColor;
			}

			return tinycolor(color, opts);
	};

	// Given a string or object, convert that input to RGB
	// Possible string inputs:
	//
	//		 "red"
	//		 "#f00" or "f00"
	//		 "#ff0000" or "ff0000"
	//		 "#ff000000" or "ff000000"
	//		 "rgb 255 0 0" or "rgb (255, 0, 0)"
	//		 "rgb 1.0 0 0" or "rgb (1, 0, 0)"
	//		 "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
	//		 "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
	//		 "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
	//		 "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
	//		 "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
	//
	function inputToRGB(color) {

			var rgb = { r: 0, g: 0, b: 0 };
			var a = 1;
			var ok = false;
			var format = false;

			if (typeof color == "string") {
					color = stringInputToObject(color);
			}

			if (typeof color == "object") {
					if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
							rgb = rgbToRgb(color.r, color.g, color.b);
							ok = true;
							format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
					}
					else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
							color.s = convertToPercentage(color.s, 1);
							color.v = convertToPercentage(color.v, 1);
							rgb = hsvToRgb(color.h, color.s, color.v);
							ok = true;
							format = "hsv";
					}
					else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
							color.s = convertToPercentage(color.s);
							color.l = convertToPercentage(color.l);
							rgb = hslToRgb(color.h, color.s, color.l);
							ok = true;
							format = "hsl";
					}

					if (color.hasOwnProperty("a")) {
							a = color.a;
					}
			}

			a = boundAlpha(a);

			return {
					ok: ok,
					format: color.format || format,
					r: mathMin(255, mathMax(rgb.r, 0)),
					g: mathMin(255, mathMax(rgb.g, 0)),
					b: mathMin(255, mathMax(rgb.b, 0)),
					a: a
			};
	}


	// Conversion Functions
	// --------------------

	// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
	// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

	// `rgbToRgb`
	// Handle bounds / percentage checking to conform to CSS color spec
	// <http://www.w3.org/TR/css3-color/>
	// *Assumes:* r, g, b in [0, 255] or [0, 1]
	// *Returns:* { r, g, b } in [0, 255]
	function rgbToRgb(r, g, b){
			return {
					r: bound01(r, 255) * 255,
					g: bound01(g, 255) * 255,
					b: bound01(b, 255) * 255
			};
	}

	// `rgbToHsl`
	// Converts an RGB color value to HSL.
	// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
	// *Returns:* { h, s, l } in [0,1]
	function rgbToHsl(r, g, b) {

			r = bound01(r, 255);
			g = bound01(g, 255);
			b = bound01(b, 255);

			var max = mathMax(r, g, b), min = mathMin(r, g, b);
			var h, s, l = (max + min) / 2;

			if(max == min) {
					h = s = 0; // achromatic
			}
			else {
					var d = max - min;
					s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
					switch(max) {
							case r: h = (g - b) / d + (g < b ? 6 : 0); break;
							case g: h = (b - r) / d + 2; break;
							case b: h = (r - g) / d + 4; break;
					}

					h /= 6;
			}

			return { h: h, s: s, l: l };
	}

	// `hslToRgb`
	// Converts an HSL color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	function hslToRgb(h, s, l) {
			var r, g, b;

			h = bound01(h, 360);
			s = bound01(s, 100);
			l = bound01(l, 100);

			function hue2rgb(p, q, t) {
					if(t < 0) t += 1;
					if(t > 1) t -= 1;
					if(t < 1/6) return p + (q - p) * 6 * t;
					if(t < 1/2) return q;
					if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
					return p;
			}

			if(s === 0) {
					r = g = b = l; // achromatic
			}
			else {
					var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
					var p = 2 * l - q;
					r = hue2rgb(p, q, h + 1/3);
					g = hue2rgb(p, q, h);
					b = hue2rgb(p, q, h - 1/3);
			}

			return { r: r * 255, g: g * 255, b: b * 255 };
	}

	// `rgbToHsv`
	// Converts an RGB color value to HSV
	// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
	// *Returns:* { h, s, v } in [0,1]
	function rgbToHsv(r, g, b) {

			r = bound01(r, 255);
			g = bound01(g, 255);
			b = bound01(b, 255);

			var max = mathMax(r, g, b), min = mathMin(r, g, b);
			var h, s, v = max;

			var d = max - min;
			s = max === 0 ? 0 : d / max;

			if(max == min) {
					h = 0; // achromatic
			}
			else {
					switch(max) {
							case r: h = (g - b) / d + (g < b ? 6 : 0); break;
							case g: h = (b - r) / d + 2; break;
							case b: h = (r - g) / d + 4; break;
					}
					h /= 6;
			}
			return { h: h, s: s, v: v };
	}

	// `hsvToRgb`
	// Converts an HSV color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	 function hsvToRgb(h, s, v) {

			h = bound01(h, 360) * 6;
			s = bound01(s, 100);
			v = bound01(v, 100);

			var i = math.floor(h),
					f = h - i,
					p = v * (1 - s),
					q = v * (1 - f * s),
					t = v * (1 - (1 - f) * s),
					mod = i % 6,
					r = [v, q, p, p, t, v][mod],
					g = [t, v, v, q, p, p][mod],
					b = [p, p, t, v, v, q][mod];

			return { r: r * 255, g: g * 255, b: b * 255 };
	}

	// `rgbToHex`
	// Converts an RGB color to hex
	// Assumes r, g, and b are contained in the set [0, 255]
	// Returns a 3 or 6 character hex
	function rgbToHex(r, g, b, allow3Char) {

			var hex = [
					pad2(mathRound(r).toString(16)),
					pad2(mathRound(g).toString(16)),
					pad2(mathRound(b).toString(16))
			];

			// Return a 3 character hex if possible
			if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
					return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
			}

			return hex.join("");
	}
			// `rgbaToHex`
			// Converts an RGBA color plus alpha transparency to hex
			// Assumes r, g, b and a are contained in the set [0, 255]
			// Returns an 8 character hex
			function rgbaToHex(r, g, b, a) {

					var hex = [
							pad2(convertDecimalToHex(a)),
							pad2(mathRound(r).toString(16)),
							pad2(mathRound(g).toString(16)),
							pad2(mathRound(b).toString(16))
					];

					return hex.join("");
			}

	// `equals`
	// Can be called with any tinycolor input
	tinycolor.equals = function (color1, color2) {
			if (!color1 || !color2) { return false; }
			return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
	};
	tinycolor.random = function() {
			return tinycolor.fromRatio({
					r: mathRandom(),
					g: mathRandom(),
					b: mathRandom()
			});
	};


	// Modification Functions
	// ----------------------
	// Thanks to less.js for some of the basics here
	// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

	function desaturate(color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.s -= amount / 100;
			hsl.s = clamp01(hsl.s);
			return tinycolor(hsl);
	}

	function saturate(color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.s += amount / 100;
			hsl.s = clamp01(hsl.s);
			return tinycolor(hsl);
	}

	function greyscale(color) {
			return tinycolor(color).desaturate(100);
	}

	function lighten (color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.l += amount / 100;
			hsl.l = clamp01(hsl.l);
			return tinycolor(hsl);
	}

	function brighten(color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var rgb = tinycolor(color).toRgb();
			rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
			rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
			rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
			return tinycolor(rgb);
	}

	function darken (color, amount) {
			amount = (amount === 0) ? 0 : (amount || 10);
			var hsl = tinycolor(color).toHsl();
			hsl.l -= amount / 100;
			hsl.l = clamp01(hsl.l);
			return tinycolor(hsl);
	}

	// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	// Values outside of this range will be wrapped into this range.
	function spin(color, amount) {
			var hsl = tinycolor(color).toHsl();
			var hue = (mathRound(hsl.h) + amount) % 360;
			hsl.h = hue < 0 ? 360 + hue : hue;
			return tinycolor(hsl);
	}

	// Combination Functions
	// ---------------------
	// Thanks to jQuery xColor for some of the ideas behind these
	// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

	function complement(color) {
			var hsl = tinycolor(color).toHsl();
			hsl.h = (hsl.h + 180) % 360;
			return tinycolor(hsl);
	}

	function triad(color) {
			var hsl = tinycolor(color).toHsl();
			var h = hsl.h;
			return [
					tinycolor(color),
					tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
					tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
			];
	}

	function tetrad(color) {
			var hsl = tinycolor(color).toHsl();
			var h = hsl.h;
			return [
					tinycolor(color),
					tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
					tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
					tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
			];
	}

	function splitcomplement(color) {
			var hsl = tinycolor(color).toHsl();
			var h = hsl.h;
			return [
					tinycolor(color),
					tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
					tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
			];
	}

	function analogous(color, results, slices) {
			results = results || 6;
			slices = slices || 30;

			var hsl = tinycolor(color).toHsl();
			var part = 360 / slices;
			var ret = [tinycolor(color)];

			for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
					hsl.h = (hsl.h + part) % 360;
					ret.push(tinycolor(hsl));
			}
			return ret;
	}

	function monochromatic(color, results) {
			results = results || 6;
			var hsv = tinycolor(color).toHsv();
			var h = hsv.h, s = hsv.s, v = hsv.v;
			var ret = [];
			var modification = 1 / results;

			while (results--) {
					ret.push(tinycolor({ h: h, s: s, v: v}));
					v = (v + modification) % 1;
			}

			return ret;
	}

	// Utility Functions
	// ---------------------

	tinycolor.mix = function(color1, color2, amount) {
			amount = (amount === 0) ? 0 : (amount || 50);

			var rgb1 = tinycolor(color1).toRgb();
			var rgb2 = tinycolor(color2).toRgb();

			var p = amount / 100;
			var w = p * 2 - 1;
			var a = rgb2.a - rgb1.a;

			var w1;

			if (w * a == -1) {
					w1 = w;
			} else {
					w1 = (w + a) / (1 + w * a);
			}

			w1 = (w1 + 1) / 2;

			var w2 = 1 - w1;

			var rgba = {
					r: rgb2.r * w1 + rgb1.r * w2,
					g: rgb2.g * w1 + rgb1.g * w2,
					b: rgb2.b * w1 + rgb1.b * w2,
					a: rgb2.a * p	+ rgb1.a * (1 - p)
			};

			return tinycolor(rgba);
	};


	// Readability Functions
	// ---------------------
	// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

	// `contrast`
	// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
	tinycolor.readability = function(color1, color2) {
			var c1 = tinycolor(color1);
			var c2 = tinycolor(color2);
			return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
	};

	// `isReadable`
	// Ensure that foreground and background color combinations meet WCAG2 guidelines.
	// The third argument is an optional Object.
	//			the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
	//			the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
	// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

	// *Example*
	//		tinycolor.isReadable("#000", "#111") => false
	//		tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false

	tinycolor.isReadable = function(color1, color2, wcag2) {
			var readability = tinycolor.readability(color1, color2);
			var wcag2Parms, out;

			out = false;

			wcag2Parms = validateWCAG2Parms(wcag2);
			switch (wcag2Parms.level + wcag2Parms.size) {
					case "AAsmall":
					case "AAAlarge":
							out = readability >= 4.5;
							break;
					case "AAlarge":
							out = readability >= 3;
							break;
					case "AAAsmall":
							out = readability >= 7;
							break;
			}
			return out;

	};

	// `mostReadable`
	// Given a base color and a list of possible foreground or background
	// colors for that base, returns the most readable color.
	// Optionally returns Black or White if the most readable color is unreadable.
	// *Example*
	//		tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
	//		tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();	// "#ffffff"
	//		tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
	//		tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


	tinycolor.mostReadable = function(baseColor, colorList, args) {
			var bestColor = null;
			var bestScore = 0;
			var readability;
			var includeFallbackColors, level, size ;
			args = args || {};
			includeFallbackColors = args.includeFallbackColors ;
			level = args.level;
			size = args.size;

			for (var i= 0; i < colorList.length ; i++) {
					readability = tinycolor.readability(baseColor, colorList[i]);
					if (readability > bestScore) {
							bestScore = readability;
							bestColor = tinycolor(colorList[i]);
					}
			}

			if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
					return bestColor;
			}
			else {
					args.includeFallbackColors=false;
					return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
			}
	};


	// Big List of Colors
	// ------------------
	// <http://www.w3.org/TR/css3-color/#svg-color>
	var names = tinycolor.names = {
			aliceblue: "f0f8ff",
			antiquewhite: "faebd7",
			aqua: "0ff",
			aquamarine: "7fffd4",
			azure: "f0ffff",
			beige: "f5f5dc",
			bisque: "ffe4c4",
			black: "000",
			blanchedalmond: "ffebcd",
			blue: "00f",
			blueviolet: "8a2be2",
			brown: "a52a2a",
			burlywood: "deb887",
			burntsienna: "ea7e5d",
			cadetblue: "5f9ea0",
			chartreuse: "7fff00",
			chocolate: "d2691e",
			coral: "ff7f50",
			cornflowerblue: "6495ed",
			cornsilk: "fff8dc",
			crimson: "dc143c",
			cyan: "0ff",
			darkblue: "00008b",
			darkcyan: "008b8b",
			darkgoldenrod: "b8860b",
			darkgray: "a9a9a9",
			darkgreen: "006400",
			darkgrey: "a9a9a9",
			darkkhaki: "bdb76b",
			darkmagenta: "8b008b",
			darkolivegreen: "556b2f",
			darkorange: "ff8c00",
			darkorchid: "9932cc",
			darkred: "8b0000",
			darksalmon: "e9967a",
			darkseagreen: "8fbc8f",
			darkslateblue: "483d8b",
			darkslategray: "2f4f4f",
			darkslategrey: "2f4f4f",
			darkturquoise: "00ced1",
			darkviolet: "9400d3",
			deeppink: "ff1493",
			deepskyblue: "00bfff",
			dimgray: "696969",
			dimgrey: "696969",
			dodgerblue: "1e90ff",
			firebrick: "b22222",
			floralwhite: "fffaf0",
			forestgreen: "228b22",
			fuchsia: "f0f",
			gainsboro: "dcdcdc",
			ghostwhite: "f8f8ff",
			gold: "ffd700",
			goldenrod: "daa520",
			gray: "808080",
			green: "008000",
			greenyellow: "adff2f",
			grey: "808080",
			honeydew: "f0fff0",
			hotpink: "ff69b4",
			indianred: "cd5c5c",
			indigo: "4b0082",
			ivory: "fffff0",
			khaki: "f0e68c",
			lavender: "e6e6fa",
			lavenderblush: "fff0f5",
			lawngreen: "7cfc00",
			lemonchiffon: "fffacd",
			lightblue: "add8e6",
			lightcoral: "f08080",
			lightcyan: "e0ffff",
			lightgoldenrodyellow: "fafad2",
			lightgray: "d3d3d3",
			lightgreen: "90ee90",
			lightgrey: "d3d3d3",
			lightpink: "ffb6c1",
			lightsalmon: "ffa07a",
			lightseagreen: "20b2aa",
			lightskyblue: "87cefa",
			lightslategray: "789",
			lightslategrey: "789",
			lightsteelblue: "b0c4de",
			lightyellow: "ffffe0",
			lime: "0f0",
			limegreen: "32cd32",
			linen: "faf0e6",
			magenta: "f0f",
			maroon: "800000",
			mediumaquamarine: "66cdaa",
			mediumblue: "0000cd",
			mediumorchid: "ba55d3",
			mediumpurple: "9370db",
			mediumseagreen: "3cb371",
			mediumslateblue: "7b68ee",
			mediumspringgreen: "00fa9a",
			mediumturquoise: "48d1cc",
			mediumvioletred: "c71585",
			midnightblue: "191970",
			mintcream: "f5fffa",
			mistyrose: "ffe4e1",
			moccasin: "ffe4b5",
			navajowhite: "ffdead",
			navy: "000080",
			oldlace: "fdf5e6",
			olive: "808000",
			olivedrab: "6b8e23",
			orange: "ffa500",
			orangered: "ff4500",
			orchid: "da70d6",
			palegoldenrod: "eee8aa",
			palegreen: "98fb98",
			paleturquoise: "afeeee",
			palevioletred: "db7093",
			papayawhip: "ffefd5",
			peachpuff: "ffdab9",
			peru: "cd853f",
			pink: "ffc0cb",
			plum: "dda0dd",
			powderblue: "b0e0e6",
			purple: "800080",
			rebeccapurple: "663399",
			red: "f00",
			rosybrown: "bc8f8f",
			royalblue: "4169e1",
			saddlebrown: "8b4513",
			salmon: "fa8072",
			sandybrown: "f4a460",
			seagreen: "2e8b57",
			seashell: "fff5ee",
			sienna: "a0522d",
			silver: "c0c0c0",
			skyblue: "87ceeb",
			slateblue: "6a5acd",
			slategray: "708090",
			slategrey: "708090",
			snow: "fffafa",
			springgreen: "00ff7f",
			steelblue: "4682b4",
			tan: "d2b48c",
			teal: "008080",
			thistle: "d8bfd8",
			tomato: "ff6347",
			turquoise: "40e0d0",
			violet: "ee82ee",
			wheat: "f5deb3",
			white: "fff",
			whitesmoke: "f5f5f5",
			yellow: "ff0",
			yellowgreen: "9acd32"
	};

	// Make it easy to access colors via `hexNames[hex]`
	var hexNames = tinycolor.hexNames = flip(names);


	// Utilities
	// ---------

	// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
	function flip(o) {
			var flipped = { };
			for (var i in o) {
					if (o.hasOwnProperty(i)) {
							flipped[o[i]] = i;
					}
			}
			return flipped;
	}

	// Return a valid alpha value [0,1] with all invalid values being set to 1
	function boundAlpha(a) {
			a = parseFloat(a);

			if (isNaN(a) || a < 0 || a > 1) {
					a = 1;
			}

			return a;
	}

	// Take input from [0, n] and return it as [0, 1]
	function bound01(n, max) {
			if (isOnePointZero(n)) { n = "100%"; }

			var processPercent = isPercentage(n);
			n = mathMin(max, mathMax(0, parseFloat(n)));

			// Automatically convert percentage into number
			if (processPercent) {
					n = parseInt(n * max, 10) / 100;
			}

			// Handle floating point rounding errors
			if ((math.abs(n - max) < 0.000001)) {
					return 1;
			}

			// Convert into [0, 1] range if it isn't already
			return (n % max) / parseFloat(max);
	}

	// Force a number between 0 and 1
	function clamp01(val) {
			return mathMin(1, mathMax(0, val));
	}

	// Parse a base-16 hex value into a base-10 integer
	function parseIntFromHex(val) {
			return parseInt(val, 16);
	}

	// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
	// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
	function isOnePointZero(n) {
			return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
	}

	// Check to see if string passed in is a percentage
	function isPercentage(n) {
			return typeof n === "string" && n.indexOf('%') != -1;
	}

	// Force a hex value to have 2 characters
	function pad2(c) {
			return c.length == 1 ? '0' + c : '' + c;
	}

	// Replace a decimal with it's percentage value
	function convertToPercentage(n, multiplier) {
			multiplier = multiplier || 100;
			if (n <= 1) {
					n = (n * multiplier) + "%";
			}

			return n;
	}

	// Converts a decimal to a hex value
	function convertDecimalToHex(d) {
			return Math.round(parseFloat(d) * 255).toString(16);
	}
	// Converts a hex value to a decimal
	function convertHexToDecimal(h) {
			return (parseIntFromHex(h) / 255);
	}

	var matchers = (function() {

			// <http://www.w3.org/TR/css3-values/#integers>
			var CSS_INTEGER = "[-\\+]?\\d+%?";

			// <http://www.w3.org/TR/css3-values/#number-value>
			var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

			// Allow positive/negative integer/number.	Don't capture the either/or, just the entire outcome.
			var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

			// Actual matching.
			// Parentheses and commas are optional, but not required.
			// Whitespace can take the place of commas or opening paren
			var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
			var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

			return {
					rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
					rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
					hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
					hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
					hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
					hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
					hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
					hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
					hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
			};
	})();

	// `stringInputToObject`
	// Permissive string parsing.	Take in a number of formats, and output an object
	// based on detected format.	Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
	function stringInputToObject(color) {

			color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
			var named = false;
			if (names[color]) {
					color = names[color];
					named = true;
			}
			else if (color == 'transparent') {
					return { r: 0, g: 0, b: 0, a: 0, format: "name" };
			}

			// Try to match string input using regular expressions.
			// Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
			// Just return an object and let the conversion functions handle that.
			// This way the result will be the same whether the tinycolor is initialized with string or object.
			var match;
			if ((match = matchers.rgb.exec(color))) {
					return { r: match[1], g: match[2], b: match[3] };
			}
			if ((match = matchers.rgba.exec(color))) {
					return { r: match[1], g: match[2], b: match[3], a: match[4] };
			}
			if ((match = matchers.hsl.exec(color))) {
					return { h: match[1], s: match[2], l: match[3] };
			}
			if ((match = matchers.hsla.exec(color))) {
					return { h: match[1], s: match[2], l: match[3], a: match[4] };
			}
			if ((match = matchers.hsv.exec(color))) {
					return { h: match[1], s: match[2], v: match[3] };
			}
			if ((match = matchers.hsva.exec(color))) {
					return { h: match[1], s: match[2], v: match[3], a: match[4] };
			}
			if ((match = matchers.hex8.exec(color))) {
					return {
							a: convertHexToDecimal(match[1]),
							r: parseIntFromHex(match[2]),
							g: parseIntFromHex(match[3]),
							b: parseIntFromHex(match[4]),
							format: named ? "name" : "hex8"
					};
			}
			if ((match = matchers.hex6.exec(color))) {
					return {
							r: parseIntFromHex(match[1]),
							g: parseIntFromHex(match[2]),
							b: parseIntFromHex(match[3]),
							format: named ? "name" : "hex"
					};
			}
			if ((match = matchers.hex3.exec(color))) {
					return {
							r: parseIntFromHex(match[1] + '' + match[1]),
							g: parseIntFromHex(match[2] + '' + match[2]),
							b: parseIntFromHex(match[3] + '' + match[3]),
							format: named ? "name" : "hex"
					};
			}

			return false;
	}

	function validateWCAG2Parms(parms) {
			// return valid WCAG2 parms for isReadable.
			// If input parms are invalid, return {"level":"AA", "size":"small"}
			var level, size;
			parms = parms || {"level":"AA", "size":"small"};
			level = (parms.level || "AA").toUpperCase();
			size = (parms.size || "small").toLowerCase();
			if (level !== "AA" && level !== "AAA") {
					level = "AA";
			}
			if (size !== "small" && size !== "large") {
					size = "small";
			}
			return {"level":level, "size":size};
	}
	// Node: Export function
	if (typeof module !== "undefined" && module.exports) {
			module.exports = tinycolor;
	}
	// AMD/requirejs: Define the module
	else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	// Browser: Expose to window
	else {
			window.tinycolor = tinycolor;
	}

	})();


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Swatch = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Swatch = exports.Swatch = function Swatch(_ref) {
	  var color = _ref.color,
	      style = _ref.style,
	      onClick = _ref.onClick,
	      _ref$title = _ref.title,
	      title = _ref$title === undefined ? color : _ref$title;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatch: {
	        background: color,
	        height: '100%',
	        width: '100%',
	        cursor: 'pointer'
	      }
	    },
	    'custom': {
	      swatch: style
	    }
	  }, 'custom');

	  var handleClick = function handleClick(e) {
	    return onClick(color, e);
	  };

	  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick, title: title });
	};

	exports.default = Swatch;

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AlphaPointer = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AlphaPointer = exports.AlphaPointer = function AlphaPointer(_ref) {
	  var direction = _ref.direction;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        width: '18px',
	        height: '18px',
	        borderRadius: '50%',
	        transform: 'translate(-9px, -1px)',
	        backgroundColor: 'rgb(248, 248, 248)',
	        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
	      }
	    },
	    'vertical': {
	      picker: {
	        transform: 'translate(-3px, -9px)'
	      }
	    }
	  }, { vertical: direction === 'vertical' });

	  return _react2.default.createElement('div', { style: styles.picker });
	};

	exports.default = AlphaPointer;

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Block = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(337);

	var _color2 = _interopRequireDefault(_color);

	var _common = __webpack_require__(323);

	var _BlockSwatches = __webpack_require__(345);

	var _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Block = exports.Block = function Block(_ref) {
	  var onChange = _ref.onChange,
	      hex = _ref.hex,
	      colors = _ref.colors,
	      width = _ref.width,
	      triangle = _ref.triangle;

	  var handleChange = function handleChange(hexCode, e) {
	    _color2.default.isValidHex(hexCode) && onChange({
	      hex: hexCode,
	      source: 'hex'
	    }, e);
	  };

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      card: {
	        width: width,
	        background: '#fff',
	        boxShadow: '0 1px rgba(0,0,0,.1)',
	        borderRadius: '6px',
	        position: 'relative'
	      },
	      head: {
	        height: '110px',
	        background: hex,
	        borderRadius: '6px 6px 0 0',
	        display: 'flex',
	        alignItems: 'center',
	        justifyContent: 'center'
	      },
	      body: {
	        padding: '10px'
	      },
	      label: {
	        fontSize: '18px',
	        color: '#fff'
	      },
	      triangle: {
	        width: '0px',
	        height: '0px',
	        borderStyle: 'solid',
	        borderWidth: '0 10px 10px 10px',
	        borderColor: 'transparent transparent ' + hex + ' transparent',
	        position: 'absolute',
	        top: '-10px',
	        left: '50%',
	        marginLeft: '-10px'
	      },
	      input: {
	        width: '100%',
	        fontSize: '12px',
	        color: '#666',
	        border: '0px',
	        outline: 'none',
	        height: '22px',
	        boxShadow: 'inset 0 0 0 1px #ddd',
	        borderRadius: '4px',
	        padding: '0 7px',
	        boxSizing: 'border-box'
	      }
	    },
	    'hide-triangle': {
	      triangle: {
	        display: 'none'
	      }
	    }
	  }, { 'hide-triangle': triangle === 'hide' });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.card, className: 'block-picker' },
	    _react2.default.createElement('div', { style: styles.triangle }),
	    _react2.default.createElement(
	      'div',
	      { style: styles.head },
	      _react2.default.createElement(
	        'div',
	        { style: styles.label },
	        hex
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.body },
	      _react2.default.createElement(_BlockSwatches2.default, { colors: colors, onClick: handleChange }),
	      _react2.default.createElement(_common.EditableInput, {
	        placeholder: 'Hex Code',
	        style: { input: styles.input },
	        value: '',
	        onChange: handleChange
	      })
	    )
	  );
	};

	Block.defaultProps = {
	  width: '170px',
	  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
	  triangle: 'top'
	};

	exports.default = (0, _common.ColorWrap)(Block);

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BlockSwatches = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(150);

	var _map2 = _interopRequireDefault(_map);

	var _common = __webpack_require__(323);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BlockSwatches = exports.BlockSwatches = function BlockSwatches(_ref) {
	  var colors = _ref.colors,
	      onClick = _ref.onClick;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatches: {
	        marginRight: '-10px'
	      },
	      swatch: {
	        width: '22px',
	        height: '22px',
	        float: 'left',
	        marginRight: '10px',
	        marginBottom: '10px',
	        borderRadius: '4px'
	      },
	      clear: {
	        clear: 'both'
	      }
	    }
	  });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.swatches },
	    (0, _map2.default)(colors, function (c) {
	      return _react2.default.createElement(_common.Swatch, {
	        key: c,
	        color: c,
	        style: styles.swatch,
	        onClick: onClick
	      });
	    }),
	    _react2.default.createElement('div', { style: styles.clear })
	  );
	};

	exports.default = BlockSwatches;

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Circle = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(150);

	var _map2 = _interopRequireDefault(_map);

	var _materialColors = __webpack_require__(347);

	var material = _interopRequireWildcard(_materialColors);

	var _common = __webpack_require__(323);

	var _CircleSwatch = __webpack_require__(348);

	var _CircleSwatch2 = _interopRequireDefault(_CircleSwatch);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Circle = exports.Circle = function Circle(_ref) {
	  var width = _ref.width,
	      onChange = _ref.onChange,
	      colors = _ref.colors,
	      hex = _ref.hex,
	      circleSize = _ref.circleSize,
	      circleSpacing = _ref.circleSpacing;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      card: {
	        width: width,
	        display: 'flex',
	        flexWrap: 'wrap',
	        marginRight: -circleSpacing,
	        marginBottom: -circleSpacing
	      }
	    }
	  });

	  var handleChange = function handleChange(hexCode, e) {
	    return onChange({ hex: hexCode, source: 'hex' }, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.card, className: 'circle-picker' },
	    (0, _map2.default)(colors, function (c) {
	      return _react2.default.createElement(_CircleSwatch2.default, {
	        key: c,
	        color: c,
	        onClick: handleChange,
	        active: hex === c.toLowerCase(),
	        circleSize: circleSize,
	        circleSpacing: circleSpacing
	      });
	    })
	  );
	};

	Circle.defaultProps = {
	  width: '252px',
	  circleSize: 28,
	  circleSpacing: 14,
	  colors: [material.red['500'], material.pink['500'], material.purple['500'], material.deepPurple['500'], material.indigo['500'], material.blue['500'], material.lightBlue['500'], material.cyan['500'], material.teal['500'], material.green['500'], material.lightGreen['500'], material.lime['500'], material.yellow['500'], material.amber['500'], material.orange['500'], material.deepOrange['500'], material.brown['500'], material.blueGrey['500']]
	};

	exports.default = (0, _common.ColorWrap)(Circle);

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    root.materialColors = factory();
	  }
	})(this, function() {
	  return {"red":{"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"},"pink":{"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"},"purple":{"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"},"deepPurple":{"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"},"indigo":{"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"},"blue":{"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"},"lightBlue":{"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"},"cyan":{"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"},"teal":{"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"},"green":{"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"},"lightGreen":{"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"},"lime":{"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"},"yellow":{"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"},"amber":{"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"},"orange":{"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"},"deepOrange":{"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"},"brown":{"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"},"blueGrey":{"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"},"darkText":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"},"lightText":{"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"},"darkIcons":{"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"},"lightIcons":{"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"},"white":"#ffffff","black":"#000000"};
	});


/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CircleSwatch = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(323);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CircleSwatch = exports.CircleSwatch = function CircleSwatch(_ref) {
	  var color = _ref.color,
	      onClick = _ref.onClick,
	      hover = _ref.hover,
	      active = _ref.active,
	      circleSize = _ref.circleSize,
	      circleSpacing = _ref.circleSpacing;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatch: {
	        width: circleSize,
	        height: circleSize,
	        marginRight: circleSpacing,
	        marginBottom: circleSpacing,
	        transform: 'scale(1)',
	        transition: '100ms transform ease'
	      },
	      Swatch: {
	        borderRadius: '50%',
	        background: 'transparent',
	        boxShadow: 'inset 0 0 0 ' + circleSize / 2 + 'px ' + color,
	        transition: '100ms box-shadow ease'
	      }
	    },
	    'hover': {
	      swatch: {
	        transform: 'scale(1.2)'
	      }
	    },
	    'active': {
	      Swatch: {
	        boxShadow: 'inset 0 0 0 3px ' + color
	      }
	    }
	  }, { hover: hover, active: active });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.swatch },
	    _react2.default.createElement(_common.Swatch, { style: styles.Swatch, color: color, onClick: onClick })
	  );
	};

	CircleSwatch.defaultProps = {
	  circleSize: 28,
	  circleSpacing: 14
	};

	exports.default = (0, _reactcss.hover)(CircleSwatch);

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Chrome = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(323);

	var _ChromeFields = __webpack_require__(350);

	var _ChromeFields2 = _interopRequireDefault(_ChromeFields);

	var _ChromePointer = __webpack_require__(351);

	var _ChromePointer2 = _interopRequireDefault(_ChromePointer);

	var _ChromePointerCircle = __webpack_require__(352);

	var _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Chrome = exports.Chrome = function Chrome(_ref) {
	  var onChange = _ref.onChange,
	      disableAlpha = _ref.disableAlpha,
	      rgb = _ref.rgb,
	      hsl = _ref.hsl,
	      hsv = _ref.hsv,
	      hex = _ref.hex,
	      renderers = _ref.renderers;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        background: '#fff',
	        borderRadius: '2px',
	        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
	        boxSizing: 'initial',
	        width: '225px',
	        fontFamily: 'Menlo'
	      },
	      saturation: {
	        width: '100%',
	        paddingBottom: '55%',
	        position: 'relative',
	        borderRadius: '2px 2px 0 0',
	        overflow: 'hidden'
	      },
	      Saturation: {
	        radius: '2px 2px 0 0'
	      },
	      body: {
	        padding: '16px 16px 12px'
	      },
	      controls: {
	        display: 'flex'
	      },
	      color: {
	        width: '32px'
	      },
	      swatch: {
	        marginTop: '6px',
	        width: '16px',
	        height: '16px',
	        borderRadius: '8px',
	        position: 'relative',
	        overflow: 'hidden'
	      },
	      active: {
	        absolute: '0px 0px 0px 0px',
	        borderRadius: '8px',
	        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
	        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',
	        zIndex: '2'
	      },
	      toggles: {
	        flex: '1'
	      },
	      hue: {
	        height: '10px',
	        position: 'relative',
	        marginBottom: '8px'
	      },
	      Hue: {
	        radius: '2px'
	      },
	      alpha: {
	        height: '10px',
	        position: 'relative'
	      },
	      Alpha: {
	        radius: '2px'
	      }
	    },
	    'disableAlpha': {
	      color: {
	        width: '22px'
	      },
	      alpha: {
	        display: 'none'
	      },
	      hue: {
	        marginBottom: '0px'
	      },
	      swatch: {
	        width: '10px',
	        height: '10px',
	        marginTop: '0px'
	      }
	    }
	  }, { disableAlpha: disableAlpha });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.picker, className: 'chrome-picker' },
	    _react2.default.createElement(
	      'div',
	      { style: styles.saturation },
	      _react2.default.createElement(_common.Saturation, {
	        style: styles.Saturation,
	        hsl: hsl,
	        hsv: hsv,
	        pointer: _ChromePointerCircle2.default,
	        onChange: onChange
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.body },
	      _react2.default.createElement(
	        'div',
	        { style: styles.controls, className: 'flexbox-fix' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.color },
	          _react2.default.createElement(
	            'div',
	            { style: styles.swatch },
	            _react2.default.createElement('div', { style: styles.active }),
	            _react2.default.createElement(_common.Checkboard, { renderers: renderers })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.toggles },
	          _react2.default.createElement(
	            'div',
	            { style: styles.hue },
	            _react2.default.createElement(_common.Hue, {
	              style: styles.Hue,
	              hsl: hsl,
	              pointer: _ChromePointer2.default,
	              onChange: onChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.alpha },
	            _react2.default.createElement(_common.Alpha, {
	              style: styles.Alpha,
	              rgb: rgb,
	              hsl: hsl,
	              pointer: _ChromePointer2.default,
	              renderers: renderers,
	              onChange: onChange
	            })
	          )
	        )
	      ),
	      _react2.default.createElement(_ChromeFields2.default, {
	        rgb: rgb,
	        hsl: hsl,
	        hex: hex,
	        onChange: onChange,
	        disableAlpha: disableAlpha
	      })
	    )
	  );
	};

	exports.default = (0, _common.ColorWrap)(Chrome);

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChromeFields = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(337);

	var _color2 = _interopRequireDefault(_color);

	var _common = __webpack_require__(323);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-did-mount-set-state, no-param-reassign */

	var ChromeFields = exports.ChromeFields = function (_React$Component) {
	  _inherits(ChromeFields, _React$Component);

	  function ChromeFields() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ChromeFields);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChromeFields.__proto__ || Object.getPrototypeOf(ChromeFields)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      view: ''
	    }, _this.toggleViews = function () {
	      if (_this.state.view === 'hex') {
	        _this.setState({ view: 'rgb' });
	      } else if (_this.state.view === 'rgb') {
	        _this.setState({ view: 'hsl' });
	      } else if (_this.state.view === 'hsl') {
	        if (_this.props.hsl.a === 1) {
	          _this.setState({ view: 'hex' });
	        } else {
	          _this.setState({ view: 'rgb' });
	        }
	      }
	    }, _this.handleChange = function (data, e) {
	      if (data.hex) {
	        _color2.default.isValidHex(data.hex) && _this.props.onChange({
	          hex: data.hex,
	          source: 'hex'
	        }, e);
	      } else if (data.r || data.g || data.b) {
	        _this.props.onChange({
	          r: data.r || _this.props.rgb.r,
	          g: data.g || _this.props.rgb.g,
	          b: data.b || _this.props.rgb.b,
	          source: 'rgb'
	        }, e);
	      } else if (data.a) {
	        if (data.a < 0) {
	          data.a = 0;
	        } else if (data.a > 1) {
	          data.a = 1;
	        }

	        _this.props.onChange({
	          h: _this.props.hsl.h,
	          s: _this.props.hsl.s,
	          l: _this.props.hsl.l,
	          a: Math.round(data.a * 100) / 100,
	          source: 'rgb'
	        }, e);
	      } else if (data.h || data.s || data.l) {
	        _this.props.onChange({
	          h: data.h || _this.props.hsl.h,
	          s: data.s && data.s.replace('%', '') || _this.props.hsl.s,
	          l: data.l && data.l.replace('%', '') || _this.props.hsl.l,
	          source: 'hsl'
	        }, e);
	      }
	    }, _this.showHighlight = function (e) {
	      e.target.style.background = '#eee';
	    }, _this.hideHighlight = function (e) {
	      e.target.style.background = 'transparent';
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ChromeFields, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.hsl.a === 1 && this.state.view !== 'hex') {
	        this.setState({ view: 'hex' });
	      } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
	        this.setState({ view: 'rgb' });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {
	        this.setState({ view: 'rgb' });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          wrap: {
	            paddingTop: '16px',
	            display: 'flex'
	          },
	          fields: {
	            flex: '1',
	            display: 'flex',
	            marginLeft: '-6px'
	          },
	          field: {
	            paddingLeft: '6px',
	            width: '100%'
	          },
	          alpha: {
	            paddingLeft: '6px',
	            width: '100%'
	          },
	          toggle: {
	            width: '32px',
	            textAlign: 'right',
	            position: 'relative'
	          },
	          icon: {
	            marginRight: '-4px',
	            marginTop: '12px',
	            cursor: 'pointer',
	            position: 'relative'
	          },
	          iconHighlight: {
	            position: 'absolute',
	            width: '24px',
	            height: '28px',
	            background: '#eee',
	            borderRadius: '4px',
	            top: '10px',
	            left: '12px',
	            display: 'none'
	          },
	          input: {
	            fontSize: '11px',
	            color: '#333',
	            width: '100%',
	            borderRadius: '2px',
	            border: 'none',
	            boxShadow: 'inset 0 0 0 1px #dadada',
	            height: '21px',
	            textAlign: 'center'
	          },
	          label: {
	            textTransform: 'uppercase',
	            fontSize: '11px',
	            lineHeight: '11px',
	            color: '#969696',
	            textAlign: 'center',
	            display: 'block',
	            marginTop: '12px'
	          },
	          svg: {
	            width: '24px',
	            height: '24px',
	            border: '1px transparent solid',
	            borderRadius: '5px'
	          }
	        },
	        'disableAlpha': {
	          alpha: {
	            display: 'none'
	          }
	        }
	      }, this.props, this.state);

	      var fields = void 0;
	      if (this.state.view === 'hex') {
	        fields = _react2.default.createElement(
	          'div',
	          { style: styles.fields, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'hex', value: this.props.hex,
	              onChange: this.handleChange
	            })
	          )
	        );
	      } else if (this.state.view === 'rgb') {
	        fields = _react2.default.createElement(
	          'div',
	          { style: styles.fields, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'r',
	              value: this.props.rgb.r,
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'g',
	              value: this.props.rgb.g,
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'b',
	              value: this.props.rgb.b,
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.alpha },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'a',
	              value: this.props.rgb.a,
	              arrowOffset: 0.01,
	              onChange: this.handleChange
	            })
	          )
	        );
	      } else if (this.state.view === 'hsl') {
	        fields = _react2.default.createElement(
	          'div',
	          { style: styles.fields, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'h',
	              value: Math.round(this.props.hsl.h),
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 's',
	              value: Math.round(this.props.hsl.s * 100) + '%',
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.field },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'l',
	              value: Math.round(this.props.hsl.l * 100) + '%',
	              onChange: this.handleChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.alpha },
	            _react2.default.createElement(_common.EditableInput, {
	              style: { input: styles.input, label: styles.label },
	              label: 'a',
	              value: this.props.hsl.a,
	              arrowOffset: 0.01,
	              onChange: this.handleChange
	            })
	          )
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrap, className: 'flexbox-fix' },
	        fields,
	        _react2.default.createElement(
	          'div',
	          { style: styles.toggle },
	          _react2.default.createElement(
	            'div',
	            { style: styles.icon, onClick: this.toggleViews, ref: 'icon' },
	            _react2.default.createElement(
	              'svg',
	              {
	                style: styles.svg,
	                viewBox: '0 0 24 24',
	                onMouseOver: this.showHighlight,
	                onMouseEnter: this.showHighlight,
	                onMouseOut: this.hideHighlight
	              },
	              _react2.default.createElement('path', {
	                ref: 'iconUp',
	                fill: '#333',
	                d: 'M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z'
	              }),
	              _react2.default.createElement('path', {
	                ref: 'iconDown',
	                fill: '#333',
	                d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z'
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ChromeFields;
	}(_react2.default.Component);

	exports.default = ChromeFields;

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChromePointer = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ChromePointer = exports.ChromePointer = function ChromePointer() {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        width: '12px',
	        height: '12px',
	        borderRadius: '6px',
	        transform: 'translate(-6px, -1px)',
	        backgroundColor: 'rgb(248, 248, 248)',
	        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
	      }
	    }
	  });

	  return _react2.default.createElement('div', { style: styles.picker });
	};

	exports.default = ChromePointer;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ChromePointerCircle = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ChromePointerCircle = exports.ChromePointerCircle = function ChromePointerCircle() {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        width: '12px',
	        height: '12px',
	        borderRadius: '6px',
	        boxShadow: 'inset 0 0 0 1px #fff',
	        transform: 'translate(-6px, -6px)'
	      }
	    }
	  });

	  return _react2.default.createElement('div', { style: styles.picker });
	};

	exports.default = ChromePointerCircle;

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Compact = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(150);

	var _map2 = _interopRequireDefault(_map);

	var _color = __webpack_require__(337);

	var _color2 = _interopRequireDefault(_color);

	var _reactMaterialDesign = __webpack_require__(354);

	var _common = __webpack_require__(323);

	var _CompactColor = __webpack_require__(360);

	var _CompactColor2 = _interopRequireDefault(_CompactColor);

	var _CompactFields = __webpack_require__(361);

	var _CompactFields2 = _interopRequireDefault(_CompactFields);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Compact = exports.Compact = function Compact(_ref) {
	  var onChange = _ref.onChange,
	      colors = _ref.colors,
	      hex = _ref.hex,
	      rgb = _ref.rgb;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      Compact: {
	        background: '#f6f6f6',
	        radius: '4px'
	      },
	      compact: {
	        paddingTop: '5px',
	        paddingLeft: '5px',
	        boxSizing: 'initial',
	        width: '240px'
	      },
	      clear: {
	        clear: 'both'
	      }
	    }
	  });

	  var handleChange = function handleChange(data, e) {
	    if (data.hex) {
	      _color2.default.isValidHex(data.hex) && onChange({
	        hex: data.hex,
	        source: 'hex'
	      }, e);
	    } else {
	      onChange(data, e);
	    }
	  };

	  return _react2.default.createElement(
	    _reactMaterialDesign.Raised,
	    { style: styles.Compact },
	    _react2.default.createElement(
	      'div',
	      { style: styles.compact, className: 'compact-picker' },
	      _react2.default.createElement(
	        'div',
	        null,
	        (0, _map2.default)(colors, function (c) {
	          return _react2.default.createElement(_CompactColor2.default, {
	            key: c,
	            color: c,
	            active: c.toLowerCase() === hex,
	            onClick: handleChange
	          });
	        }),
	        _react2.default.createElement('div', { style: styles.clear })
	      ),
	      _react2.default.createElement(_CompactFields2.default, { hex: hex, rgb: rgb, onChange: handleChange })
	    )
	  );
	};

	Compact.defaultProps = {
	  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']
	};

	exports.default = (0, _common.ColorWrap)(Compact);

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true,
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libComponentsRaised = __webpack_require__(355);

	var _libComponentsRaised2 = _interopRequireDefault(_libComponentsRaised);

	var _libComponentsTile = __webpack_require__(356);

	var _libComponentsTile2 = _interopRequireDefault(_libComponentsTile);

	var _libComponentsTabs = __webpack_require__(357);

	var _libComponentsTabs2 = _interopRequireDefault(_libComponentsTabs);

	exports.Raised = _libComponentsRaised2['default'];
	exports.Tile = _libComponentsTile2['default'];
	exports.Tabs = _libComponentsTabs2['default'];


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Raised = function (_React$Component) {
	  _inherits(Raised, _React$Component);

	  function Raised() {
	    _classCallCheck(this, Raised);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Raised).apply(this, arguments));
	  }

	  _createClass(Raised, [{
	    key: 'render',
	    value: function render() {

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          wrap: {
	            position: 'relative'
	          },
	          content: {
	            position: 'relative'
	          },
	          bg: {
	            absolute: '0px 0px 0px 0px',
	            boxShadow: '0 ${ this.props.zDepth }px ${ this.props.zDepth * 4 }px rgba(0,0,0,.24)',
	            borderRadius: this.props.radius,
	            background: this.props.background
	          }
	        },
	        'zDepth-0': {
	          bg: {
	            boxShadow: 'none'
	          }
	        },

	        'zDepth-1': {
	          bg: {
	            boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
	          }
	        },
	        'zDepth-2': {
	          bg: {
	            boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
	          }
	        },
	        'zDepth-3': {
	          bg: {
	            boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
	          }
	        },
	        'zDepth-4': {
	          bg: {
	            boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
	          }
	        },
	        'zDepth-5': {
	          bg: {
	            boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
	          }
	        },
	        'square': {
	          bg: {
	            borderRadius: '0'
	          }
	        },
	        'circle': {
	          bg: {
	            borderRadius: '50%'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrap },
	        _react2.default.createElement('div', { style: styles.bg }),
	        _react2.default.createElement(
	          'div',
	          { style: styles.content },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Raised;
	}(_react2.default.Component);

	Raised.propTypes = {
	  background: _react2.default.PropTypes.string,
	  zDepth: _react2.default.PropTypes.oneOf(['0', '1', '2', '3', '4', '5', 0, 1, 2, 3, 4, 5]),
	  radius: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
	};

	Raised.defaultProps = {
	  background: '#fff',
	  zDepth: '1',
	  radius: '2px'
	};

	exports.default = Raised;

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node: true, esnext: true */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tile = function (_React$Component) {
	  _inherits(Tile, _React$Component);

	  function Tile() {
	    _classCallCheck(this, Tile);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tile).apply(this, arguments));
	  }

	  _createClass(Tile, [{
	    key: 'render',
	    value: function render() {

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          tile: {
	            fontSize: '16px',
	            padding: '16px',
	            display: 'flex',
	            justifyContent: 'space-between',
	            color: this.props.color
	          },
	          primary: {
	            display: 'flex',
	            width: '100%'
	          },
	          sidebar: {
	            minWidth: '56px',
	            maxWidth: '56px',
	            flexBasis: '56px' },
	          // 72 minus 16
	          content: {
	            background: 'none',
	            flex: '1',
	            overflow: 'auto'
	          },
	          secondary: {
	            flexBasis: '42',
	            textAlign: 'center'
	          },
	          sidebarIcon: {
	            marginTop: '-12px',
	            marginLeft: '-12px',
	            marginBottom: '-12px'
	          }
	        },
	        'divider': {
	          tile: {
	            boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.12)'
	          }
	        },
	        'condensed': {
	          tile: {
	            paddingBottom: '0px',
	            paddingTop: '0px',
	            paddingRight: '0px'
	          },
	          sidebar: {
	            minWidth: '28px',
	            maxWidth: '28px',
	            flexBasis: '28px'
	          }
	        }
	      }, {
	        'clickable': this.props.onClick
	      }, this.props);

	      var _props$children = _slicedToArray(this.props.children, 2);

	      var sidebar = _props$children[0];
	      var content = _props$children[1];


	      return _react2.default.createElement(
	        'div',
	        { style: styles.tile, className: 'flexbox-fix' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.primary, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.sidebar, key: "sidebar-#{ sidebar }" },
	            sidebar
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.content, key: "content-#{ content }" },
	            content
	          )
	        )
	      );
	    }
	  }]);

	  return Tile;
	}(_react2.default.Component);

	;

	exports.default = Tile;

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _isString = __webpack_require__(274);

	var _isString2 = _interopRequireDefault(_isString);

	var _Tab = __webpack_require__(358);

	var _Tab2 = _interopRequireDefault(_Tab);

	var _Link = __webpack_require__(359);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// var Ink = require('./Ink');

	// var context = {
	//   primaryColor: '#2196F3',
	//   accentColor: '#E91E63',
	//   theme: 'light'
	// }

	var Tabs = function (_React$Component) {
	  _inherits(Tabs, _React$Component);

	  function Tabs(props) {
	    _classCallCheck(this, Tabs);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this));

	    var selectedTab;
	    if (props.selectedTab < (props.tabs && props.tabs.length)) {
	      selectedTab = props.selectedTab;
	    } else {
	      selectedTab = 0;
	    }

	    _this.state = {
	      selectedTab: selectedTab
	    };

	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.slide = _this.slide.bind(_this);
	    return _this;
	  }

	  _createClass(Tabs, [{
	    key: 'handleClick',
	    value: function handleClick(tab) {
	      if (this.props.onChange) {
	        this.props.onChange(tab);
	      }

	      this.setState({
	        selectedTab: tab
	      });
	    }
	  }, {
	    key: 'slide',
	    value: function slide() {
	      if (this.props.tabs.length) {
	        var containerNode = this.refs.tabs.getDOMNode();
	        var containerLeft = containerNode.scrollLeft;
	        var containerRight = containerNode.offsetWidth + containerNode.scrollLeft;

	        var selectedNode = this.refs['tab-' + this.state.selectedTab] && this.refs['tab-' + this.state.selectedTab].getDOMNode();
	        var selectedLeft = selectedNode && selectedNode.getBoundingClientRect().left - containerNode.getBoundingClientRect().left + containerNode.scrollLeft;
	        var selectedRight = selectedNode && selectedLeft + selectedNode.offsetWidth;

	        // scroll right if tab is off screen
	        if (selectedRight > containerRight) {
	          containerNode.scrollLeft += selectedRight - containerRight;
	        }

	        // scroll left if tab is off screen
	        if (selectedLeft < containerLeft) {
	          containerNode.scrollLeft -= containerLeft - selectedLeft;
	        }

	        // slide the indicator
	        var indicator = this.refs.indicator;
	        indicator.style.left = selectedLeft + 'px';
	        indicator.style.width = selectedNode.offsetWidth + 'px';
	        indicator.style.height = '2px';
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.slide();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.selectedTab !== this.state.selectedTab) {
	        this.setState({ selectedTab: nextProps.selectedTab });
	      }
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      if (nextState.selectedTab >= (nextProps.tabs && nextProps.tabs.length)) {
	        nextState.selectedTab = nextProps.tabs.length - 1;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.slide();
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          tabs: {
	            position: 'relative',
	            background: this.props.background
	          },
	          tabWrap: {
	            display: 'flex'
	          },
	          tab: {
	            justifyContent: 'flex-start',
	            minWidth: '68px',
	            maxWidth: '240px'
	          },
	          Tab: {
	            color: this.props.color,
	            inactive: this.props.inactive,
	            capitalize: this.props.capitalize
	          },
	          indicator: {
	            height: '0',
	            position: 'absolute',
	            bottom: '0',
	            left: '0',
	            background: this.props.color,
	            transition: 'all 200ms linear'
	          }
	        },
	        'scrollable': {
	          tabs: {
	            overflowX: 'scroll'
	          },
	          tabWrap: {
	            paddingLeft: '60px',
	            justifyContent: 'flex-start',
	            width: '400%'
	          },
	          tab: {
	            width: 'auto'
	          }
	        },
	        'align-justify': {
	          tabWrap: {
	            justifyContent: 'space-between'
	          },
	          tab: {
	            width: 100 / this.props.tabs.length + '%'
	          }
	        },
	        'align-left': {
	          tabWrap: {
	            paddingLeft: '60px',
	            justifyContent: 'flex-start'
	          },
	          tab: {
	            width: 'auto'
	          }
	        },
	        'align-center': {
	          tabWrap: {
	            justifyContent: 'center'
	          },
	          tab: {
	            width: 'auto'
	          }
	        }
	      }, {
	        'scrollable': this.props.width / this.props.tabs.length < 72
	      }, this.props, this.state);

	      var tabs = [];
	      for (var i = 0; i < this.props.tabs.length; i++) {
	        var tab = this.props.tabs[i];

	        var label;
	        var callback;
	        var callbackValue;
	        var newTab;
	        if ((0, _isString2.default)(tab)) {
	          label = tab;
	          callback = null;
	        } else {
	          label = tab.label;
	          callback = tab.onClick;
	          callbackValue = tab.callbackValue;
	          newTab = tab.newTab;
	        }

	        tabs.push(_react2.default.createElement(
	          'div',
	          { style: styles.tab, ref: 'tab-' + i, key: i },
	          _react2.default.createElement(
	            _Link2.default,
	            { onClick: callback, callbackValue: callbackValue, newTab: newTab },
	            _react2.default.createElement(
	              _Tab2.default,
	              { style: styles.Tab, tab: i, selected: this.state.selectedTab === i, selectable: tab.selectable, onClick: this.handleClick },
	              label
	            )
	          )
	        ));
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: styles.tabs, ref: 'tabs' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.tabWrap, className: 'flexbox-fix' },
	          tabs
	        ),
	        _react2.default.createElement('div', { style: styles.indicator, ref: 'indicator' })
	      );
	    }
	  }]);

	  return Tabs;
	}(_react2.default.Component);

	Tabs.defaultProps = {
	  selectedTab: 0,
	  background: 'transparent',
	  color: '#fff'
	};

	exports.default = Tabs;

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tab = function (_React$Component) {
	  _inherits(Tab, _React$Component);

	  function Tab() {
	    _classCallCheck(this, Tab);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(Tab, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      if (this.props.selectable !== false) {
	        this.props.onClick(this.props.tab);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var styles = (0, _reactcss2.default)({
	        'default': {
	          tab: {
	            color: this.props.inactive || this.props.color,
	            cursor: 'pointer',
	            paddingLeft: '12px',
	            paddingRight: '12px',
	            height: '48px',
	            lineHeight: '48px',
	            textAlign: 'center',
	            fontSize: '14px',
	            textTransform: this.props.capitalize === false ? '' : 'uppercase',
	            fontWeight: '500',
	            whiteSpace: 'nowrap',
	            opacity: '.47',
	            transition: 'opacity 100ms linear'
	          }
	        },
	        'selected': {
	          tab: {
	            color: this.props.color,
	            opacity: '.87'
	          }
	        }
	      }, this.props);

	      return _react2.default.createElement(
	        'div',
	        { style: styles.tab, onClick: this.handleClick },
	        this.props.children
	      );
	    }
	  }]);

	  return Tab;
	}(_react2.default.Component);

	Tab.propTypes = {
	  selected: _react2.default.PropTypes.bool
	};

	Tab.defaultProps = {
	  selected: false,
	  color: '#fff'
	};

	exports.default = Tab;

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _isString = __webpack_require__(274);

	var _isString2 = _interopRequireDefault(_isString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Link = function (_React$Component) {
	  _inherits(Link, _React$Component);

	  function Link() {
	    _classCallCheck(this, Link);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(Link, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      if (this.props.onClick) {
	        this.props.onClick(e, this.props.callbackValue);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var a;
	      if ((0, _isString2.default)(this.props.onClick)) {
	        a = _react2.default.createElement(
	          'a',
	          { style: { textDecoration: 'none' }, href: this.props.onClick, target: this.props.newTab && '_blank' },
	          this.props.children
	        );
	      } else {
	        a = _react2.default.createElement(
	          'a',
	          { style: { textDecoration: 'none' }, onClick: this.handleClick },
	          this.props.children
	        );
	      }

	      return a;
	    }
	  }]);

	  return Link;
	}(_react2.default.Component);

	// Link.propTypes =
	//   onClick: React.PropTypes.oneOfType(
	//     React.PropTypes.string,
	//     React.PropTypes.func
	//   );

	Link.defaultProps = {
	  newTab: false
	};

	exports.default = Link;

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CompactColor = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CompactColor = exports.CompactColor = function CompactColor(_ref) {
	  var color = _ref.color,
	      onClick = _ref.onClick,
	      active = _ref.active;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      color: {
	        background: color,
	        width: '15px',
	        height: '15px',
	        float: 'left',
	        marginRight: '5px',
	        marginBottom: '5px',
	        position: 'relative',
	        cursor: 'pointer'
	      },
	      dot: {
	        absolute: '5px 5px 5px 5px',
	        background: '#fff',
	        borderRadius: '50%',
	        opacity: '0'
	      }
	    },
	    'active': {
	      dot: {
	        opacity: '1'
	      }
	    },
	    'color-#FFFFFF': {
	      color: {
	        boxShadow: 'inset 0 0 0 1px #ddd'
	      },
	      dot: {
	        background: '#000'
	      }
	    }
	  }, { active: active, 'color-#FFFFFF': color === '#FFFFFF' });

	  var handleClick = function handleClick(e) {
	    return onClick({ hex: color }, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.color, onClick: handleClick },
	    _react2.default.createElement('div', { style: styles.dot })
	  );
	};

	exports.default = CompactColor;

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CompactFields = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(323);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CompactFields = exports.CompactFields = function CompactFields(_ref) {
	  var hex = _ref.hex,
	      rgb = _ref.rgb,
	      onChange = _ref.onChange;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      fields: {
	        display: 'flex',
	        paddingBottom: '6px',
	        paddingRight: '5px',
	        position: 'relative'
	      },
	      active: {
	        position: 'absolute',
	        top: '6px',
	        left: '5px',
	        height: '9px',
	        width: '9px',
	        background: hex
	      },
	      HEXwrap: {
	        flex: '6',
	        position: 'relative'
	      },
	      HEXinput: {
	        width: '80%',
	        padding: '0px',
	        paddingLeft: '20%',
	        border: 'none',
	        outline: 'none',
	        background: 'none',
	        fontSize: '12px',
	        color: '#333',
	        height: '16px'
	      },
	      HEXlabel: {
	        display: 'none'
	      },
	      RGBwrap: {
	        flex: '3',
	        position: 'relative'
	      },
	      RGBinput: {
	        width: '70%',
	        padding: '0px',
	        paddingLeft: '30%',
	        border: 'none',
	        outline: 'none',
	        background: 'none',
	        fontSize: '12px',
	        color: '#333',
	        height: '16px'
	      },
	      RGBlabel: {
	        position: 'absolute',
	        top: '3px',
	        left: '0px',
	        lineHeight: '16px',
	        textTransform: 'uppercase',
	        fontSize: '12px',
	        color: '#999'
	      }
	    }
	  });

	  var handleChange = function handleChange(data, e) {
	    if (data.r || data.g || data.b) {
	      onChange({
	        r: data.r || rgb.r,
	        g: data.g || rgb.g,
	        b: data.b || rgb.b,
	        source: 'rgb'
	      }, e);
	    } else {
	      onChange({
	        hex: data.hex,
	        source: 'hex'
	      }, e);
	    }
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.fields, className: 'flexbox-fix' },
	    _react2.default.createElement('div', { style: styles.active }),
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
	      label: 'hex',
	      value: hex,
	      onChange: handleChange
	    }),
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	      label: 'r',
	      value: rgb.r,
	      onChange: handleChange
	    }),
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	      label: 'g',
	      value: rgb.g,
	      onChange: handleChange
	    }),
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	      label: 'b',
	      value: rgb.b,
	      onChange: handleChange
	    })
	  );
	};

	exports.default = CompactFields;

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Github = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(150);

	var _map2 = _interopRequireDefault(_map);

	var _common = __webpack_require__(323);

	var _GithubSwatch = __webpack_require__(363);

	var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Github = exports.Github = function Github(_ref) {
	  var width = _ref.width,
	      colors = _ref.colors,
	      onChange = _ref.onChange,
	      triangle = _ref.triangle;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      card: {
	        width: width,
	        background: '#fff',
	        border: '1px solid rgba(0,0,0,0.2)',
	        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
	        borderRadius: '4px',
	        position: 'relative',
	        padding: '5px',
	        display: 'flex',
	        flexWrap: 'wrap'
	      },
	      triangle: {
	        position: 'absolute',
	        border: '7px solid transparent',
	        borderBottomColor: '#fff'
	      },
	      triangleShadow: {
	        position: 'absolute',
	        border: '8px solid transparent',
	        borderBottomColor: 'rgba(0,0,0,0.15)'
	      }
	    },
	    'hide-triangle': {
	      triangle: {
	        display: 'none'
	      },
	      triangleShadow: {
	        display: 'none'
	      }
	    },
	    'top-left-triangle': {
	      triangle: {
	        top: '-14px',
	        left: '10px'
	      },
	      triangleShadow: {
	        top: '-16px',
	        left: '9px'
	      }
	    },
	    'top-right-triangle': {
	      triangle: {
	        top: '-14px',
	        right: '10px'
	      },
	      triangleShadow: {
	        top: '-16px',
	        right: '9px'
	      }
	    }
	  }, {
	    'hide-triangle': triangle === 'hide',
	    'top-left-triangle': triangle === 'top-left',
	    'top-right-triangle': triangle === 'top-right'
	  });

	  var handleChange = function handleChange(hex, e) {
	    return onChange({ hex: hex, source: 'hex' }, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.card, className: 'github-picker' },
	    _react2.default.createElement('div', { style: styles.triangleShadow }),
	    _react2.default.createElement('div', { style: styles.triangle }),
	    (0, _map2.default)(colors, function (c) {
	      return _react2.default.createElement(_GithubSwatch2.default, { color: c, key: c, onClick: handleChange });
	    })
	  );
	};

	Github.defaultProps = {
	  width: '200px',
	  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
	  triangle: 'top-left'
	};

	exports.default = (0, _common.ColorWrap)(Github);

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GithubSwatch = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(323);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GithubSwatch = exports.GithubSwatch = function GithubSwatch(_ref) {
	  var hover = _ref.hover,
	      color = _ref.color,
	      onClick = _ref.onClick;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatch: {
	        width: '25px',
	        height: '25px'
	      }
	    },
	    'hover': {
	      swatch: {
	        position: 'relative',
	        zIndex: '2',
	        outline: '2px solid #fff',
	        boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
	      }
	    }
	  }, { hover: hover });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.swatch },
	    _react2.default.createElement(_common.Swatch, { color: color, onClick: onClick })
	  );
	};

	exports.default = (0, _reactcss.hover)(GithubSwatch);

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HuePicker = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(323);

	var _HuePointer = __webpack_require__(365);

	var _HuePointer2 = _interopRequireDefault(_HuePointer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HuePicker = exports.HuePicker = function HuePicker(_ref) {
	  var width = _ref.width,
	      height = _ref.height,
	      onChange = _ref.onChange,
	      hsl = _ref.hsl,
	      direction = _ref.direction,
	      pointer = _ref.pointer;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        position: 'relative',
	        width: width,
	        height: height
	      },
	      hue: {
	        radius: '2px'
	      }
	    }
	  });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.picker, className: 'hue-picker' },
	    _react2.default.createElement(_common.Hue, _extends({}, styles.hue, {
	      hsl: hsl,
	      pointer: pointer,
	      onChange: onChange,
	      direction: direction
	    }))
	  );
	};

	HuePicker.defaultProps = {
	  width: '316px',
	  height: '16px',
	  direction: 'horizontal',
	  pointer: _HuePointer2.default
	};

	exports.default = (0, _common.ColorWrap)(HuePicker);

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderPointer = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SliderPointer = exports.SliderPointer = function SliderPointer(_ref) {
	  var direction = _ref.direction;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        width: '18px',
	        height: '18px',
	        borderRadius: '50%',
	        transform: 'translate(-9px, -1px)',
	        backgroundColor: 'rgb(248, 248, 248)',
	        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
	      }
	    },
	    'vertical': {
	      picker: {
	        transform: 'translate(-3px, -9px)'
	      }
	    }
	  }, { vertical: direction === 'vertical' });

	  return _react2.default.createElement('div', { style: styles.picker });
	};

	exports.default = SliderPointer;

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Material = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(337);

	var _color2 = _interopRequireDefault(_color);

	var _reactMaterialDesign = __webpack_require__(354);

	var _common = __webpack_require__(323);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Material = exports.Material = function Material(_ref) {
	  var onChange = _ref.onChange,
	      hex = _ref.hex,
	      rgb = _ref.rgb;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      material: {
	        width: '98px',
	        height: '98px',
	        padding: '16px',
	        fontFamily: 'Roboto'
	      },
	      HEXwrap: {
	        position: 'relative'
	      },
	      HEXinput: {
	        width: '100%',
	        marginTop: '12px',
	        fontSize: '15px',
	        color: '#333',
	        padding: '0px',
	        border: '0px',
	        borderBottom: '2px solid ' + hex,
	        outline: 'none',
	        height: '30px'
	      },
	      HEXlabel: {
	        position: 'absolute',
	        top: '0px',
	        left: '0px',
	        fontSize: '11px',
	        color: '#999999',
	        textTransform: 'capitalize'
	      },
	      Hex: {
	        style: {}
	      },
	      RGBwrap: {
	        position: 'relative'
	      },
	      RGBinput: {
	        width: '100%',
	        marginTop: '12px',
	        fontSize: '15px',
	        color: '#333',
	        padding: '0px',
	        border: '0px',
	        borderBottom: '1px solid #eee',
	        outline: 'none',
	        height: '30px'
	      },
	      RGBlabel: {
	        position: 'absolute',
	        top: '0px',
	        left: '0px',
	        fontSize: '11px',
	        color: '#999999',
	        textTransform: 'capitalize'
	      },
	      split: {
	        display: 'flex',
	        marginRight: '-10px',
	        paddingTop: '11px'
	      },
	      third: {
	        flex: '1',
	        paddingRight: '10px'
	      }
	    }
	  });

	  var handleChange = function handleChange(data, e) {
	    if (data.hex) {
	      _color2.default.isValidHex(data.hex) && onChange({
	        hex: data.hex,
	        source: 'hex'
	      }, e);
	    } else if (data.r || data.g || data.b) {
	      onChange({
	        r: data.r || rgb.r,
	        g: data.g || rgb.g,
	        b: data.b || rgb.b,
	        source: 'rgb'
	      }, e);
	    }
	  };

	  return _react2.default.createElement(
	    _reactMaterialDesign.Raised,
	    null,
	    _react2.default.createElement(
	      'div',
	      { style: styles.material, className: 'material-picker' },
	      _react2.default.createElement(_common.EditableInput, {
	        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
	        label: 'hex',
	        value: hex,
	        onChange: handleChange
	      }),
	      _react2.default.createElement(
	        'div',
	        { style: styles.split, className: 'flexbox-fix' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.third },
	          _react2.default.createElement(_common.EditableInput, {
	            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	            label: 'r', value: rgb.r,
	            onChange: handleChange
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.third },
	          _react2.default.createElement(_common.EditableInput, {
	            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	            label: 'g',
	            value: rgb.g,
	            onChange: handleChange
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.third },
	          _react2.default.createElement(_common.EditableInput, {
	            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	            label: 'b',
	            value: rgb.b,
	            onChange: handleChange
	          })
	        )
	      )
	    )
	  );
	};

	exports.default = (0, _common.ColorWrap)(Material);

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Photoshop = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(323);

	var _PhotoshopFields = __webpack_require__(368);

	var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);

	var _PhotoshopPointerCircle = __webpack_require__(369);

	var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);

	var _PhotoshopPointer = __webpack_require__(370);

	var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);

	var _PhotoshopButton = __webpack_require__(371);

	var _PhotoshopButton2 = _interopRequireDefault(_PhotoshopButton);

	var _PhotoshopPreviews = __webpack_require__(372);

	var _PhotoshopPreviews2 = _interopRequireDefault(_PhotoshopPreviews);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Photoshop = exports.Photoshop = function (_React$Component) {
	  _inherits(Photoshop, _React$Component);

	  function Photoshop(props) {
	    _classCallCheck(this, Photoshop);

	    var _this = _possibleConstructorReturn(this, (Photoshop.__proto__ || Object.getPrototypeOf(Photoshop)).call(this));

	    _this.state = {
	      currentColor: props.hex
	    };
	    return _this;
	  }

	  _createClass(Photoshop, [{
	    key: 'render',
	    value: function render() {
	      var styles = (0, _reactcss2.default)({
	        'default': {
	          picker: {
	            background: '#DCDCDC',
	            borderRadius: '4px',
	            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
	            boxSizing: 'initial',
	            width: '513px'
	          },
	          head: {
	            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
	            borderBottom: '1px solid #B1B1B1',
	            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
	            height: '23px',
	            lineHeight: '24px',
	            borderRadius: '4px 4px 0 0',
	            fontSize: '13px',
	            color: '#4D4D4D',
	            textAlign: 'center'
	          },
	          body: {
	            padding: '15px 15px 0',
	            display: 'flex'
	          },
	          saturation: {
	            width: '256px',
	            height: '256px',
	            position: 'relative',
	            border: '2px solid #B3B3B3',
	            borderBottom: '2px solid #F0F0F0',
	            overflow: 'hidden'
	          },
	          hue: {
	            position: 'relative',
	            height: '256px',
	            width: '19px',
	            marginLeft: '10px',
	            border: '2px solid #B3B3B3',
	            borderBottom: '2px solid #F0F0F0'
	          },
	          controls: {
	            width: '180px',
	            marginLeft: '10px'
	          },
	          top: {
	            display: 'flex'
	          },
	          previews: {
	            width: '60px'
	          },
	          actions: {
	            flex: '1',
	            marginLeft: '20px'
	          }
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: styles.picker, className: 'photoshop-picker' },
	        _react2.default.createElement(
	          'div',
	          { style: styles.head },
	          this.props.header
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.body, className: 'flexbox-fix' },
	          _react2.default.createElement(
	            'div',
	            { style: styles.saturation },
	            _react2.default.createElement(_common.Saturation, {
	              hsl: this.props.hsl,
	              hsv: this.props.hsv,
	              pointer: _PhotoshopPointerCircle2.default,
	              onChange: this.props.onChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.hue },
	            _react2.default.createElement(_common.Hue, {
	              direction: 'vertical',
	              hsl: this.props.hsl,
	              pointer: _PhotoshopPointer2.default,
	              onChange: this.props.onChange
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.controls },
	            _react2.default.createElement(
	              'div',
	              { style: styles.top, className: 'flexbox-fix' },
	              _react2.default.createElement(
	                'div',
	                { style: styles.previews },
	                _react2.default.createElement(_PhotoshopPreviews2.default, {
	                  rgb: this.props.rgb,
	                  currentColor: this.state.currentColor
	                })
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.actions },
	                _react2.default.createElement(_PhotoshopButton2.default, { label: 'OK', onClick: this.props.onAccept, active: true }),
	                _react2.default.createElement(_PhotoshopButton2.default, { label: 'Cancel', onClick: this.props.onCancel }),
	                _react2.default.createElement(_PhotoshopFields2.default, {
	                  onChange: this.props.onChange,
	                  rgb: this.props.rgb,
	                  hsv: this.props.hsv,
	                  hex: this.props.hex
	                })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Photoshop;
	}(_react2.default.Component);

	Photoshop.defaultProps = {
	  header: 'Color Picker'
	};

	exports.default = (0, _common.ColorWrap)(Photoshop);

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPicker = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(337);

	var _color2 = _interopRequireDefault(_color);

	var _common = __webpack_require__(323);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PhotoshopPicker = exports.PhotoshopPicker = function PhotoshopPicker(_ref) {
	  var onChange = _ref.onChange,
	      rgb = _ref.rgb,
	      hsv = _ref.hsv,
	      hex = _ref.hex;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      fields: {
	        paddingTop: '5px',
	        paddingBottom: '9px',
	        width: '80px',
	        position: 'relative'
	      },
	      divider: {
	        height: '5px'
	      },
	      RGBwrap: {
	        position: 'relative'
	      },
	      RGBinput: {
	        marginLeft: '40%',
	        width: '40%',
	        height: '18px',
	        border: '1px solid #888888',
	        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
	        marginBottom: '5px',
	        fontSize: '13px',
	        paddingLeft: '3px',
	        marginRight: '10px'
	      },
	      RGBlabel: {
	        left: '0px',
	        width: '34px',
	        textTransform: 'uppercase',
	        fontSize: '13px',
	        height: '18px',
	        lineHeight: '22px',
	        position: 'absolute'
	      },
	      HEXwrap: {
	        position: 'relative'
	      },
	      HEXinput: {
	        marginLeft: '20%',
	        width: '80%',
	        height: '18px',
	        border: '1px solid #888888',
	        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
	        marginBottom: '6px',
	        fontSize: '13px',
	        paddingLeft: '3px'
	      },
	      HEXlabel: {
	        position: 'absolute',
	        top: '0px',
	        left: '0px',
	        width: '14px',
	        textTransform: 'uppercase',
	        fontSize: '13px',
	        height: '18px',
	        lineHeight: '22px'
	      },
	      fieldSymbols: {
	        position: 'absolute',
	        top: '5px',
	        right: '-7px',
	        fontSize: '13px'
	      },
	      symbol: {
	        height: '20px',
	        lineHeight: '22px',
	        paddingBottom: '7px'
	      }
	    }
	  });

	  var handleChange = function handleChange(data, e) {
	    if (data['#']) {
	      _color2.default.isValidHex(data['#']) && onChange({
	        hex: data['#'],
	        source: 'hex'
	      }, e);
	    } else if (data.r || data.g || data.b) {
	      onChange({
	        r: data.r || rgb.r,
	        g: data.g || rgb.g,
	        b: data.b || rgb.b,
	        source: 'rgb'
	      }, e);
	    } else if (data.h || data.s || data.v) {
	      onChange({
	        h: data.h || hsv.h,
	        s: data.s || hsv.s,
	        v: data.v || hsv.v,
	        source: 'hsv'
	      }, e);
	    }
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.fields },
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	      label: 'h',
	      value: Math.round(hsv.h),
	      onChange: handleChange
	    }),
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	      label: 's',
	      value: Math.round(hsv.s * 100),
	      onChange: handleChange
	    }),
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	      label: 'v',
	      value: Math.round(hsv.v * 100),
	      onChange: handleChange
	    }),
	    _react2.default.createElement('div', { style: styles.divider }),
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	      label: 'r',
	      value: rgb.r,
	      onChange: handleChange
	    }),
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	      label: 'g',
	      value: rgb.g,
	      onChange: handleChange
	    }),
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
	      label: 'b',
	      value: rgb.b,
	      onChange: handleChange
	    }),
	    _react2.default.createElement('div', { style: styles.divider }),
	    _react2.default.createElement(_common.EditableInput, {
	      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
	      label: '#',
	      value: hex.replace('#', ''),
	      onChange: handleChange
	    }),
	    _react2.default.createElement(
	      'div',
	      { style: styles.fieldSymbols },
	      _react2.default.createElement(
	        'div',
	        { style: styles.symbol },
	        '\xB0'
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: styles.symbol },
	        '%'
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: styles.symbol },
	        '%'
	      )
	    )
	  );
	};

	exports.default = PhotoshopPicker;

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPointerCircle = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle(_ref) {
	  var hsl = _ref.hsl;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        width: '12px',
	        height: '12px',
	        borderRadius: '6px',
	        boxShadow: 'inset 0 0 0 1px #fff',
	        transform: 'translate(-6px, -6px)'
	      }
	    },
	    'black-outline': {
	      picker: {
	        boxShadow: 'inset 0 0 0 1px #000'
	      }
	    }
	  }, { 'black-outline': hsl.l > 0.5 });

	  return _react2.default.createElement('div', { style: styles.picker });
	};

	exports.default = PhotoshopPointerCircle;

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPointerCircle = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle() {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      triangle: {
	        width: 0,
	        height: 0,
	        borderStyle: 'solid',
	        borderWidth: '4px 0 4px 6px',
	        borderColor: 'transparent transparent transparent #fff',
	        position: 'absolute',
	        top: '1px',
	        left: '1px'
	      },
	      triangleBorder: {
	        width: 0,
	        height: 0,
	        borderStyle: 'solid',
	        borderWidth: '5px 0 5px 8px',
	        borderColor: 'transparent transparent transparent #555'
	      },

	      left: {
	        Extend: 'triangleBorder',
	        transform: 'translate(-13px, -4px)'
	      },
	      leftInside: {
	        Extend: 'triangle',
	        transform: 'translate(-8px, -5px)'
	      },

	      right: {
	        Extend: 'triangleBorder',
	        transform: 'translate(20px, -14px) rotate(180deg)'
	      },
	      rightInside: {
	        Extend: 'triangle',
	        transform: 'translate(-8px, -5px)'
	      }
	    }
	  });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.pointer },
	    _react2.default.createElement(
	      'div',
	      { style: styles.left },
	      _react2.default.createElement('div', { style: styles.leftInside })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.right },
	      _react2.default.createElement('div', { style: styles.rightInside })
	    )
	  );
	};

	exports.default = PhotoshopPointerCircle;

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopBotton = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PhotoshopBotton = exports.PhotoshopBotton = function PhotoshopBotton(_ref) {
	  var onClick = _ref.onClick,
	      label = _ref.label,
	      children = _ref.children,
	      active = _ref.active;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      button: {
	        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
	        border: '1px solid #878787',
	        borderRadius: '2px',
	        height: '20px',
	        boxShadow: '0 1px 0 0 #EAEAEA',
	        fontSize: '14px',
	        color: '#000',
	        lineHeight: '20px',
	        textAlign: 'center',
	        marginBottom: '10px',
	        cursor: 'pointer'
	      }
	    },
	    'active': {
	      button: {
	        boxShadow: '0 0 0 1px #878787'
	      }
	    }
	  }, { active: active });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.button, onClick: onClick },
	    label || children
	  );
	};

	exports.default = PhotoshopBotton;

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PhotoshopPreviews = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PhotoshopPreviews = exports.PhotoshopPreviews = function PhotoshopPreviews(_ref) {
	  var rgb = _ref.rgb,
	      currentColor = _ref.currentColor;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatches: {
	        border: '1px solid #B3B3B3',
	        borderBottom: '1px solid #F0F0F0',
	        marginBottom: '2px',
	        marginTop: '1px'
	      },
	      new: {
	        height: '34px',
	        background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',
	        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
	      },
	      current: {
	        height: '34px',
	        background: currentColor,
	        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
	      },
	      label: {
	        fontSize: '14px',
	        color: '#000',
	        textAlign: 'center'
	      }
	    }
	  });

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { style: styles.label },
	      'new'
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.swatches },
	      _react2.default.createElement('div', { style: styles.new }),
	      _react2.default.createElement('div', { style: styles.current })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.label },
	      'current'
	    )
	  );
	};

	exports.default = PhotoshopPreviews;

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Sketch = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(323);

	var _SketchFields = __webpack_require__(374);

	var _SketchFields2 = _interopRequireDefault(_SketchFields);

	var _SketchPresetColors = __webpack_require__(375);

	var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Sketch = exports.Sketch = function Sketch(_ref) {
	  var width = _ref.width,
	      rgb = _ref.rgb,
	      hex = _ref.hex,
	      hsv = _ref.hsv,
	      hsl = _ref.hsl,
	      onChange = _ref.onChange,
	      disableAlpha = _ref.disableAlpha,
	      presetColors = _ref.presetColors,
	      renderers = _ref.renderers;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        width: width,
	        padding: '10px 10px 0',
	        boxSizing: 'initial',
	        background: '#fff',
	        borderRadius: '4px',
	        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
	      },
	      saturation: {
	        width: '100%',
	        paddingBottom: '75%',
	        position: 'relative',
	        overflow: 'hidden'
	      },
	      Saturation: {
	        radius: '3px',
	        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	      },
	      controls: {
	        display: 'flex'
	      },
	      sliders: {
	        padding: '4px 0',
	        flex: '1'
	      },
	      color: {
	        width: '24px',
	        height: '24px',
	        position: 'relative',
	        marginTop: '4px',
	        marginLeft: '4px',
	        borderRadius: '3px'
	      },
	      activeColor: {
	        absolute: '0px 0px 0px 0px',
	        borderRadius: '2px',
	        background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
	        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	      },
	      hue: {
	        position: 'relative',
	        height: '10px',
	        overflow: 'hidden'
	      },
	      Hue: {
	        radius: '2px',
	        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	      },

	      alpha: {
	        position: 'relative',
	        height: '10px',
	        marginTop: '4px',
	        overflow: 'hidden'
	      },
	      Alpha: {
	        radius: '2px',
	        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
	      }
	    },
	    'disableAlpha': {
	      color: {
	        height: '10px'
	      },
	      hue: {
	        height: '10px'
	      },
	      alpha: {
	        display: 'none'
	      }
	    }
	  }, { disableAlpha: disableAlpha });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.picker, className: 'sketch-picker' },
	    _react2.default.createElement(
	      'div',
	      { style: styles.saturation },
	      _react2.default.createElement(_common.Saturation, {
	        style: styles.Saturation,
	        hsl: hsl,
	        hsv: hsv,
	        onChange: onChange
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.controls, className: 'flexbox-fix' },
	      _react2.default.createElement(
	        'div',
	        { style: styles.sliders },
	        _react2.default.createElement(
	          'div',
	          { style: styles.hue },
	          _react2.default.createElement(_common.Hue, {
	            style: styles.Hue,
	            hsl: hsl,
	            onChange: onChange
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.alpha },
	          _react2.default.createElement(_common.Alpha, {
	            style: styles.Alpha,
	            rgb: rgb,
	            hsl: hsl,
	            renderers: renderers,
	            onChange: onChange
	          })
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: styles.color },
	        _react2.default.createElement(_common.Checkboard, null),
	        _react2.default.createElement('div', { style: styles.activeColor })
	      )
	    ),
	    _react2.default.createElement(_SketchFields2.default, {
	      rgb: rgb,
	      hsl: hsl,
	      hex: hex,
	      onChange: onChange,
	      disableAlpha: disableAlpha
	    }),
	    _react2.default.createElement(_SketchPresetColors2.default, { colors: presetColors, onClick: onChange })
	  );
	};

	Sketch.defaultProps = {
	  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'],
	  width: 200
	};

	exports.default = (0, _common.ColorWrap)(Sketch);

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ShetchFields = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _color = __webpack_require__(337);

	var _color2 = _interopRequireDefault(_color);

	var _common = __webpack_require__(323);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable no-param-reassign */

	var ShetchFields = exports.ShetchFields = function ShetchFields(_ref) {
	  var onChange = _ref.onChange,
	      rgb = _ref.rgb,
	      hsl = _ref.hsl,
	      hex = _ref.hex,
	      disableAlpha = _ref.disableAlpha;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      fields: {
	        display: 'flex',
	        paddingTop: '4px'
	      },
	      single: {
	        flex: '1',
	        paddingLeft: '6px'
	      },
	      alpha: {
	        flex: '1',
	        paddingLeft: '6px'
	      },
	      double: {
	        flex: '2'
	      },
	      input: {
	        width: '80%',
	        padding: '4px 10% 3px',
	        border: 'none',
	        boxShadow: 'inset 0 0 0 1px #ccc',
	        fontSize: '11px'
	      },
	      label: {
	        display: 'block',
	        textAlign: 'center',
	        fontSize: '11px',
	        color: '#222',
	        paddingTop: '3px',
	        paddingBottom: '4px',
	        textTransform: 'capitalize'
	      }
	    },
	    'disableAlpha': {
	      alpha: {
	        display: 'none'
	      }
	    }
	  }, { disableAlpha: disableAlpha });

	  var handleChange = function handleChange(data, e) {
	    if (data.hex) {
	      _color2.default.isValidHex(data.hex) && onChange({
	        hex: data.hex,
	        source: 'hex'
	      }, e);
	    } else if (data.r || data.g || data.b) {
	      onChange({
	        r: data.r || rgb.r,
	        g: data.g || rgb.g,
	        b: data.b || rgb.b,
	        a: rgb.a,
	        source: 'rgb'
	      }, e);
	    } else if (data.a) {
	      if (data.a < 0) {
	        data.a = 0;
	      } else if (data.a > 100) {
	        data.a = 100;
	      }

	      data.a = data.a / 100;
	      onChange({
	        h: hsl.h,
	        s: hsl.s,
	        l: hsl.l,
	        a: data.a,
	        source: 'rgb'
	      }, e);
	    }
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.fields, className: 'flexbox-fix' },
	    _react2.default.createElement(
	      'div',
	      { style: styles.double },
	      _react2.default.createElement(_common.EditableInput, {
	        style: { input: styles.input, label: styles.label },
	        label: 'hex',
	        value: hex.replace('#', ''),
	        onChange: handleChange
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.single },
	      _react2.default.createElement(_common.EditableInput, {
	        style: { input: styles.input, label: styles.label },
	        label: 'r',
	        value: rgb.r,
	        onChange: handleChange,
	        dragLabel: 'true',
	        dragMax: '255'
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.single },
	      _react2.default.createElement(_common.EditableInput, {
	        style: { input: styles.input, label: styles.label },
	        label: 'g',
	        value: rgb.g,
	        onChange: handleChange,
	        dragLabel: 'true',
	        dragMax: '255'
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.single },
	      _react2.default.createElement(_common.EditableInput, {
	        style: { input: styles.input, label: styles.label },
	        label: 'b',
	        value: rgb.b,
	        onChange: handleChange,
	        dragLabel: 'true',
	        dragMax: '255'
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.alpha },
	      _react2.default.createElement(_common.EditableInput, {
	        style: { input: styles.input, label: styles.label },
	        label: 'a',
	        value: Math.round(rgb.a * 100),
	        onChange: handleChange,
	        dragLabel: 'true',
	        dragMax: '100'
	      })
	    )
	  );
	};

	exports.default = ShetchFields;

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SketchPresetColors = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(323);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SketchPresetColors = exports.SketchPresetColors = function SketchPresetColors(_ref) {
	  var colors = _ref.colors,
	      onClick = _ref.onClick;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      colors: {
	        margin: '0 -10px',
	        padding: '10px 0 0 10px',
	        borderTop: '1px solid #eee',
	        display: 'flex',
	        flexWrap: 'wrap',
	        position: 'relative'
	      },
	      swatchWrap: {
	        width: '16px',
	        height: '16px',
	        margin: '0 10px 10px 0'
	      },
	      swatch: {
	        borderRadius: '3px',
	        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
	      }
	    },
	    'no-presets': {
	      colors: {
	        display: 'none'
	      }
	    }
	  }, {
	    'no-presets': !colors || !colors.length
	  });

	  var handleClick = function handleClick(hex, e) {
	    onClick({
	      hex: hex,
	      source: 'hex'
	    }, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.colors, className: 'flexbox-fix' },
	    colors.map(function (colorObjOrString) {
	      var c = typeof colorObjOrString === 'string' ? { color: colorObjOrString } : colorObjOrString;
	      return _react2.default.createElement(
	        'div',
	        { key: c.color, style: styles.swatchWrap },
	        _react2.default.createElement(_common.Swatch, _extends({}, c, {
	          style: styles.swatch,
	          onClick: handleClick
	        }))
	      );
	    })
	  );
	};
	SketchPresetColors.propTypes = {
	  colors: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.shape({
	    color: _react2.default.PropTypes.string,
	    title: _react2.default.PropTypes.string
	  })]))
	};

	exports.default = SketchPresetColors;

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Slider = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _common = __webpack_require__(323);

	var _SliderSwatches = __webpack_require__(377);

	var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);

	var _SliderPointer = __webpack_require__(379);

	var _SliderPointer2 = _interopRequireDefault(_SliderPointer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Slider = exports.Slider = function Slider(_ref) {
	  var hsl = _ref.hsl,
	      onChange = _ref.onChange,
	      pointer = _ref.pointer;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      hue: {
	        height: '12px',
	        position: 'relative'
	      },
	      Hue: {
	        radius: '2px'
	      }
	    }
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: 'slider-picker' },
	    _react2.default.createElement(
	      'div',
	      { style: styles.hue },
	      _react2.default.createElement(_common.Hue, {
	        style: styles.Hue,
	        hsl: hsl,
	        pointer: pointer,
	        onChange: onChange
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.swatches },
	      _react2.default.createElement(_SliderSwatches2.default, { hsl: hsl, onClick: onChange })
	    )
	  );
	};

	Slider.defaultProps = {
	  pointer: _SliderPointer2.default
	};

	exports.default = (0, _common.ColorWrap)(Slider);

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderSwatches = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _SliderSwatch = __webpack_require__(378);

	var _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SliderSwatches = exports.SliderSwatches = function SliderSwatches(_ref) {
	  var onClick = _ref.onClick,
	      hsl = _ref.hsl;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatches: {
	        marginTop: '20px'
	      },
	      swatch: {
	        boxSizing: 'border-box',
	        width: '20%',
	        paddingRight: '1px',
	        float: 'left'
	      },
	      clear: {
	        clear: 'both'
	      }
	    }
	  });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.swatches },
	    _react2.default.createElement(
	      'div',
	      { style: styles.swatch },
	      _react2.default.createElement(_SliderSwatch2.default, {
	        hsl: hsl,
	        offset: '.80',
	        active: Math.round(hsl.l * 100) / 100 === 0.80 && Math.round(hsl.s * 100) / 100 === 0.50,
	        onClick: onClick,
	        first: true
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.swatch },
	      _react2.default.createElement(_SliderSwatch2.default, {
	        hsl: hsl,
	        offset: '.65',
	        active: Math.round(hsl.l * 100) / 100 === 0.65 && Math.round(hsl.s * 100) / 100 === 0.50,
	        onClick: onClick
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.swatch },
	      _react2.default.createElement(_SliderSwatch2.default, {
	        hsl: hsl,
	        offset: '.50',
	        active: Math.round(hsl.l * 100) / 100 === 0.50 && Math.round(hsl.s * 100) / 100 === 0.50,
	        onClick: onClick
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.swatch },
	      _react2.default.createElement(_SliderSwatch2.default, {
	        hsl: hsl,
	        offset: '.35',
	        active: Math.round(hsl.l * 100) / 100 === 0.35 && Math.round(hsl.s * 100) / 100 === 0.50,
	        onClick: onClick
	      })
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.swatch },
	      _react2.default.createElement(_SliderSwatch2.default, {
	        hsl: hsl,
	        offset: '.20',
	        active: Math.round(hsl.l * 100) / 100 === 0.20 && Math.round(hsl.s * 100) / 100 === 0.50,
	        onClick: onClick,
	        last: true
	      })
	    ),
	    _react2.default.createElement('div', { style: styles.clear })
	  );
	};

	exports.default = SliderSwatches;

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderSwatch = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SliderSwatch = exports.SliderSwatch = function SliderSwatch(_ref) {
	  var hsl = _ref.hsl,
	      offset = _ref.offset,
	      onClick = _ref.onClick,
	      active = _ref.active,
	      first = _ref.first,
	      last = _ref.last;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      swatch: {
	        height: '12px',
	        background: 'hsl(' + hsl.h + ', 50%, ' + offset * 100 + '%)',
	        cursor: 'pointer'
	      }
	    },
	    'first': {
	      swatch: {
	        borderRadius: '2px 0 0 2px'
	      }
	    },
	    'last': {
	      swatch: {
	        borderRadius: '0 2px 2px 0'
	      }
	    },
	    'active': {
	      swatch: {
	        transform: 'scaleY(1.8)',
	        borderRadius: '3.6px/2px'
	      }
	    }
	  }, { active: active, first: first, last: last });

	  var handleClick = function handleClick(e) {
	    return onClick({
	      h: hsl.h,
	      s: 0.5,
	      l: offset,
	      source: 'hsl'
	    }, e);
	  };

	  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick });
	};

	exports.default = SliderSwatch;

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SliderPointer = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SliderPointer = exports.SliderPointer = function SliderPointer() {
	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        width: '14px',
	        height: '14px',
	        borderRadius: '6px',
	        transform: 'translate(-7px, -1px)',
	        backgroundColor: 'rgb(248, 248, 248)',
	        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
	      }
	    }
	  });

	  return _react2.default.createElement('div', { style: styles.picker });
	};

	exports.default = SliderPointer;

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Swatches = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(150);

	var _map2 = _interopRequireDefault(_map);

	var _color = __webpack_require__(337);

	var _color2 = _interopRequireDefault(_color);

	var _materialColors = __webpack_require__(347);

	var material = _interopRequireWildcard(_materialColors);

	var _common = __webpack_require__(323);

	var _reactMaterialDesign = __webpack_require__(354);

	var _SwatchesGroup = __webpack_require__(381);

	var _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Swatches = exports.Swatches = function Swatches(_ref) {
	  var width = _ref.width,
	      height = _ref.height,
	      onChange = _ref.onChange,
	      colors = _ref.colors,
	      hex = _ref.hex;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      picker: {
	        width: width,
	        height: height
	      },
	      overflow: {
	        height: height,
	        overflowY: 'scroll'
	      },
	      body: {
	        padding: '16px 0 6px 16px'
	      },
	      clear: {
	        clear: 'both'
	      }
	    }
	  });

	  var handleChange = function handleChange(data, e) {
	    _color2.default.isValidHex(data) && onChange({
	      hex: data,
	      source: 'hex'
	    }, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.picker, className: 'swatches-picker' },
	    _react2.default.createElement(
	      _reactMaterialDesign.Raised,
	      null,
	      _react2.default.createElement(
	        'div',
	        { style: styles.overflow },
	        _react2.default.createElement(
	          'div',
	          { style: styles.body },
	          (0, _map2.default)(colors, function (group) {
	            return _react2.default.createElement(_SwatchesGroup2.default, {
	              key: group.toString(),
	              group: group,
	              active: hex,
	              onClick: handleChange
	            });
	          }),
	          _react2.default.createElement('div', { style: styles.clear })
	        )
	      )
	    )
	  );
	};

	/* eslint-disable max-len */
	Swatches.defaultProps = {
	  width: 320,
	  height: 240,
	  colors: [[material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100']], [material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100']], [material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100']], [material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100']], [material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100']], [material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100']], [material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100']], [material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100']], [material.teal['900'], material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100']], ['#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100']], [material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100']], [material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100']], [material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100']], [material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100']], [material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100']], [material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100']], [material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100']], [material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100']], ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']]
	};

	exports.default = (0, _common.ColorWrap)(Swatches);

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SwatchesGroup = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(150);

	var _map2 = _interopRequireDefault(_map);

	var _SwatchesColor = __webpack_require__(382);

	var _SwatchesColor2 = _interopRequireDefault(_SwatchesColor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SwatchesGroup = exports.SwatchesGroup = function SwatchesGroup(_ref) {
	  var onClick = _ref.onClick,
	      group = _ref.group,
	      active = _ref.active;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      group: {
	        paddingBottom: '10px',
	        width: '40px',
	        float: 'left',
	        marginRight: '10px'
	      }
	    }
	  });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.group },
	    (0, _map2.default)(group, function (color, i) {
	      return _react2.default.createElement(_SwatchesColor2.default, {
	        key: color,
	        color: color,
	        active: color.toLowerCase() === active,
	        first: i === 0,
	        last: i === group.length - 1,
	        onClick: onClick
	      });
	    })
	  );
	};

	exports.default = SwatchesGroup;

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SwatchesColor = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SwatchesColor = exports.SwatchesColor = function SwatchesColor(_ref) {
	  var color = _ref.color,
	      onClick = _ref.onClick,
	      first = _ref.first,
	      last = _ref.last,
	      active = _ref.active;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      color: {
	        width: '40px',
	        height: '24px',
	        cursor: 'pointer',
	        background: color,
	        marginBottom: '1px'
	      },
	      check: {
	        fill: '#fff',
	        marginLeft: '8px',
	        display: 'none'
	      }
	    },
	    'first': {
	      color: {
	        overflow: 'hidden',
	        borderRadius: '2px 2px 0 0'
	      }
	    },
	    'last': {
	      color: {
	        overflow: 'hidden',
	        borderRadius: '0 0 2px 2px'
	      }
	    },
	    'active': {
	      check: {
	        display: 'block'
	      }
	    },
	    'color-#FFFFFF': {
	      color: {
	        boxShadow: 'inset 0 0 0 1px #eee'
	      },
	      check: {
	        fill: '#333'
	      }
	    }
	  }, { first: first, last: last, active: active, 'color=#FFFFFF': color === '#FFFFFF' });

	  var handleClick = function handleClick(e) {
	    return onClick(color, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.color, onClick: handleClick },
	    _react2.default.createElement(
	      'div',
	      { style: styles.check },
	      _react2.default.createElement(
	        'svg',
	        { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24' },
	        _react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
	      )
	    )
	  );
	};

	exports.default = SwatchesColor;

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Twitter = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactcss = __webpack_require__(148);

	var _reactcss2 = _interopRequireDefault(_reactcss);

	var _map = __webpack_require__(150);

	var _map2 = _interopRequireDefault(_map);

	var _color = __webpack_require__(337);

	var _color2 = _interopRequireDefault(_color);

	var _common = __webpack_require__(323);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Twitter = exports.Twitter = function Twitter(_ref) {
	  var onChange = _ref.onChange,
	      colors = _ref.colors,
	      width = _ref.width,
	      triangle = _ref.triangle;

	  var styles = (0, _reactcss2.default)({
	    'default': {
	      card: {
	        width: width,
	        background: '#fff',
	        border: '0 solid rgba(0,0,0,0.25)',
	        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
	        borderRadius: '4px',
	        position: 'relative'
	      },
	      body: {
	        padding: '15px 9px 9px 15px'
	      },
	      label: {
	        fontSize: '18px',
	        color: '#fff'
	      },
	      triangle: {
	        width: '0px',
	        height: '0px',
	        borderStyle: 'solid',
	        borderWidth: '0 9px 10px 9px',
	        borderColor: 'transparent transparent #fff transparent',
	        position: 'absolute'
	      },
	      triangleShadow: {
	        width: '0px',
	        height: '0px',
	        borderStyle: 'solid',
	        borderWidth: '0 9px 10px 9px',
	        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
	        position: 'absolute'
	      },
	      hash: {
	        background: '#F0F0F0',
	        height: '30px',
	        width: '30px',
	        borderRadius: '4px 0 0 4px',
	        float: 'left',
	        color: '#98A1A4',
	        display: 'flex',
	        alignItems: 'center',
	        justifyContent: 'center'
	      },
	      input: {
	        width: '100px',
	        fontSize: '14px',
	        color: '#666',
	        border: '0px',
	        outline: 'none',
	        height: '28px',
	        boxShadow: 'inset 0 0 0 1px #F0F0F0',
	        borderRadius: '0 4px 4px 0',
	        float: 'left',
	        paddingLeft: '8px'
	      },
	      swatch: {
	        width: '30px',
	        height: '30px',
	        float: 'left',
	        borderRadius: '4px',
	        margin: '0 6px 6px 0'
	      },
	      clear: {
	        clear: 'both'
	      }
	    },
	    'hide-triangle': {
	      triangle: {
	        display: 'none'
	      },
	      triangleShadow: {
	        display: 'none'
	      }
	    },
	    'top-left-triangle': {
	      triangle: {
	        top: '-10px',
	        left: '12px'
	      },
	      triangleShadow: {
	        top: '-11px',
	        left: '12px'
	      }
	    },
	    'top-right-triangle': {
	      triangle: {
	        top: '-10px',
	        right: '12px'
	      },
	      triangleShadow: {
	        top: '-11px',
	        right: '12px'
	      }
	    }
	  }, {
	    'hide-triangle': triangle === 'hide',
	    'top-left-triangle': triangle === 'top-left',
	    'top-right-triangle': triangle === 'top-right'
	  });

	  var handleChange = function handleChange(hex, e) {
	    _color2.default.isValidHex(hex) && onChange({
	      hex: hex,
	      source: 'hex'
	    }, e);
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.card, className: 'twitter-picker' },
	    _react2.default.createElement('div', { style: styles.triangleShadow }),
	    _react2.default.createElement('div', { style: styles.triangle }),
	    _react2.default.createElement(
	      'div',
	      { style: styles.body },
	      (0, _map2.default)(colors, function (c, i) {
	        return _react2.default.createElement(_common.Swatch, {
	          key: i,
	          color: c,
	          hex: c,
	          style: styles.swatch,
	          onClick: handleChange
	        });
	      }),
	      _react2.default.createElement(
	        'div',
	        { style: styles.hash },
	        '#'
	      ),
	      _react2.default.createElement(_common.EditableInput, {
	        placeholder: 'ff691f',
	        style: { input: styles.input },
	        value: '',
	        onChange: handleChange
	      }),
	      _react2.default.createElement('div', { style: styles.clear })
	    )
	  );
	};

	Twitter.defaultProps = {
	  width: '276px',
	  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
	  triangle: 'top-left'
	};

	exports.default = (0, _common.ColorWrap)(Twitter);

/***/ }
/******/ ])
});
;