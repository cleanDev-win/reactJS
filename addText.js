import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import htmlToImage from 'html-to-image';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class AddTextScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            code: this.props.code
        }
        console.log("code ====> " + this.state.code);
    }

    state = {
        editorState: null,
        code: '',
    }

    onEditorStateChange = (editorState) => {        
        this.setState({
            editorState,
        });

    };

    handleText = () => {
        var htmlCode = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
        let handle = this.props.handleAddText;
        var node = document.querySelector('.public-DraftStyleDefault-ltr');
        htmlToImage.toPng(node).then(function (dataUrl) {
            handle(dataUrl, htmlCode);
        });
    }
    
    render () {
        if (this.state.code !== "") {
            const blocksFromHtml = htmlToDraft(this.state.code);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            this.state.editorState = EditorState.createWithContent(contentState);
            console.log("editorState ===> " + JSON.stringify(this.state.editorState));
        }
        return (
            <div className="galaryStyle">
                <Row className="imageGalaryStyle">
                    <Editor
                        editorState={this.state.editorState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        localization={{ locale: 'en', translations: editorLabels }}
                        onEditorStateChange={this.onEditorStateChange}
                    />    
                </Row>
                <Row style={{bottom: 0}}>
                    <Col md></Col>
                    <Col md>
                        <Row>
                            <Col md></Col>
                            <Col md>
                                <Button onClick={this.handleText}>Add Text</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

const editorLabels = {
    'generic.add' : 'Add',
    'generic.cancel' : 'Cancel',
    'components.controls.fontfamily.fontfamily': 'Font',
    'components.controls.history.history': 'History',
    'components.controls.history.undo': 'Undo',
    'components.controls.history.redo': 'Redo',
}

let styles = {
    divImgStyle: {
        marginBottom: 10,
    },

    imageStyle: {
        borderRadius: 4,
    },

    selectedImgStyle: {
        borderRadius: 4,
        borderColor: 'fuchsia',
        borderWidth: 6,
        borderStyle: 'solid'
    }
}