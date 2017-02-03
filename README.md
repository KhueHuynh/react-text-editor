# React Text Editor

The libarary use [Draft-js](https://facebook.github.io/draft-js/docs/overview.html), [React-Color-Picker](https://casesandberg.github.io/react-color/).

It have some basic control: heading, font style(italic, bolde, underline, clor), order list, unorder list, blockquote.


## Required:
- React 0.14.* || 15
- Font Awesome


## Use

	import Editor from 'react-text-editor';
	This package is use es6 syntax. Need to config in your system to build

## Props:
- value: {string}
- placeholder: {string}
- readOnly: {boolean}

## Get data:

Use refs[REF_EDITOR_NAME].getValue();

### Example

	<Editor ref="textEditor"/>

	this.refs.textEditor.getValue();


## Loading Css

Link github: https://raw.githubusercontent.com/KhueHuynh/react-text-editor/master/dist/style.css

## License

The Simperium Javascript library is available for free and commercial use under the MIT license.