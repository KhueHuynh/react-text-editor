'use strict';

import React from 'react';
import Dropzone from 'react-dropzone';

class ImportImagePopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
      imageSelectedIndex: -1
    }
  }

  static propTypes = {
    uploadImage: React.PropTypes.func,
    importImage: React.PropTypes.func,
    imageUploadeds: React.PropTypes.object,
  }

  static defaultProps = {
    uploadImage: () => {},
    importImage: () => {},
    imageUploadeds: {}
  }

  _onChangeUrl(e) {
    this.setState({imageUrl: e.target.value});
  }

  _onURLInputKeyDown(e) {
    if (e.which === 13) {
      this.props.importImage(this.state.imageUrl);
    }
  }

  _importExternalLink(e) {
    this.props.importImage(this.state.imageUrl);
  }

  _onReceivedFiles(files) {
    this.props.uploadImage(files[0]);
  }

  _selectImage(index) {
    this.setState({imageSelectedIndex: index});
  }

  _confirmSelection() {
    let index = this.state.imageSelectedIndex,
        imageUploadeds = this.sate.imageUploadeds,
        imageSelected = imageUploadeds[index];

    if (imageSelected) {
      this.props.importImage(imageSelected.link);
    }
  }

  render() {
    let imageUploadeds = this.props.imageUploadeds,
        preview = null;

    preview = imageUploadeds.map((data, index) => {
      let isUploading = !data.link, //upload success has link
          classWrapper = 'image-preview-item',
          onSelect = () => {};

      if (isUploading) {
        classWrapper += ' uploading';
        onSelect = this._selectImage.bind(this, index);
      }

      if (index === this.state.imageSelectedIndex) {
        classWrapper += ' selected';
      }

      return (
        <div className={classWrapper} key={index}>
          <image src={data.preview}/>
        </div>
      );
    });

    return (
      <div className="react-editor-import-image-popup">
        <div className="import-image-tab">
          <Dropzone multiple={false} className="add-image" onDrop={this._onReceivedFiles.bind(this)}>
            <span>
              <i class="fa fa-upload" aria-hidden="true"></i>
            </span>
          </Dropzone>
          <button className="add-link"></button>
        </div>
        <div className="import-image-content">
          <div className="image-preview">

            {preview}

            <div className="image-preview-actions">
              <button className="confirm-selected"
                onClick={this._confirmSelection.bind(this)}>
                Confirm
              </button>
            </div>
          </div>
          <div className="image-link">
            <input type="text"
              onKeyDown={this._onURLInputKeyDown}
              onChange={this._onChangeUrl}/>
            <button onClick={this._importExternalLink}>
              Import
            </button>
          </div>
        </div>
      </div>
    );
  }
}