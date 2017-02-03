import React from 'react';
import ReactDOM from 'react-dom';
import { COLORS_PICKER } from './styleConfig'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  _onToggle(color) {
    return (e) => {
      e.preventDefault();
      let colorCode = color.substring(1)
      this.props.onToggle(colorCode);
    };
  }

  _renderColorList() {
    let colorArray = [];
    COLORS_PICKER.map((type, index) => {
      let style = { backgroundColor: COLORS_PICKER[index]};
      colorArray.push(
        <span className="color-picker__color" key={index} style={style} onMouseDown={this._onToggle.call(this, COLORS_PICKER[index])}>
        </span>
      )
    });
    return colorArray;
  }

  render() {
    let colorList = this._renderColorList();

    return (
      <div className="color-picker__wrapper">
        <div className="color-picker__picker">
          {colorList}
        </div>
      </div>
    );
  }
}

export default ColorPicker;