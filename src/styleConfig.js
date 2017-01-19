'use strict';

export const TEXT_HEADING_STYLES = [
  {label: 'Normal', style: 'normal'},
  {label: 'Heading 1', style: 'header-one'},
  {label: 'Heading 2', style: 'header-two'},
  {label: 'Heading 3', style: 'header-three'},
  {label: 'Heading 4', style: 'header-four'},
  {label: 'Heading 5', style: 'header-five'},
  {label: 'Heading 6', style: 'header-six'}
];

export const FONT_STYLES = [
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  // {label: 'Code Block', style: 'code-block'} not use at the moment
]

export const INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  // {label: 'Monospace', style: 'CODE'}, not use at the moment
];

//add color code to here if we want to change. DONOT HAVE '#'
let colors = [
      "f44336", "e91e63", "9c27b0", "673ab7", "3f51b5", "2196f3",
      "03a9f4", "00bcd4", "009688", "4caf50", "8bc34a", "cddc39",
      "ffeb3b", "ffc107", "ff9800", "ff5722", "795548", "607d8b",
      "4d4d4d", "333333", '000000'
    ],
    colorEditorConfig = {};

colors.map((color) => colorEditorConfig[color] = {color: '#' + color});

export const COLORS_PICKER = colors.map((color) => '#' + color);

export const COLOR_CONFIG_EDITOR = colorEditorConfig;

export const LIST_COLORS = colors;
