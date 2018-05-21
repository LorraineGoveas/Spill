import React, { Component } from 'react';
import Dropzone from 'react-dropzone';


class FileUploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadStatus: false
        }

        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(acceptedFiles) {
        console.log(acceptedFiles)
        console.log('wau')
    }

    render() {
        return (
            <Dropzone onDrop={(files) => this.handleDrop(files)}>
                <div>Add an image to your post</div>
            </Dropzone>
        )
    }
}

export default FileUploader;
