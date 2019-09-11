/*
 * className: AddBGImageScreen
 * Author   : ChengXin
 * Created  : July 6th 2019
 * Updated  : July 18th 2019
*/

import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default class AddBGImageScreen extends Component {
    state = {
        selectedImg: '',
        selectedImgID: -1,
        images: [
            './images/1.jpg',
            './images/2.jpg',
            './images/3.jpg',
            './images/4.jpg',
            './images/5.jpg',
            './images/6.jpg',
        ],
        fileInputElement: null,
        bgImages: []
    }

    constructor(props) {
        super(props);
        this.setImage = this.setImage.bind(this);
    }
    async getBGImages(){
        fetch("http://165.22.179.40:81/api/v1/categories/?category_type=sticker", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-key': 'mlkjhgfdsazxcvbnmlkjhgffdsaqwrio',
                'Authorization': 'Bearer wFZjqH5oaCMEoST7NdYIzcgn6rt7gx' 
            },
        }).then(res => res.json())
          .then(res => {this.setState({bgImages: res.data});});
    }

    componentDidMount(){
        this.fileSelector = this.buildFileSelector();
        this.getBGImages();
    }
    setImage(imageUrl, selectedID) {
        this.setState({
            selectedImg: imageUrl,
            selectedImgID: selectedID
        });
    }
    buildFileSelector = () => {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('accept', 'image/*');
        fileSelector.setAttribute('multiple', 'multiple');
        fileSelector.onchange = this.getPhoto;
        this.setState({fileInputElement: fileSelector});
        return fileSelector;
    }
    handleFileSelect = () => {
        this.fileSelector.click();
    }
    getPhoto = (e) => {
        e.preventDefault();
        let image_width, image_height;
        let file = e.target.files[0];

        if (e.target.files && e.target.files[0]) {
            var img = document.createElement("img");
            this.state.backgroundImageFile = e.target.files[0];
            let handle = this.props.handleAddBGImage;

            img.onload = function () {
                image_width = this.width;
                image_height = this.height;
                
                if (image_width < 300 && image_height < 480) {
                    alert("Woops! This image is small! Please choose bigger image."); 
                    return;
                } else {
                    handle(window.URL.createObjectURL(file))
                }
            };
          
            var reader = new FileReader();
            reader.onloadend = function (ended) {
              img.src = ended.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);
        }
        console.log(this.state.fileInputElement.value)
    }

    _renderImage = ( item, index ) => {
        return (
            <Col key={index} md={3} sm={4} onClick={() => this.setImage(item, index)} style={styles.divImgStyle}> 
                <img key={index} src={item} width="100%" height="150px" style={this.state.selectedImgID != index? styles.imageStyle: styles.selectedImgStyle}/> 
            </Col>
        )
    }
    
    render () {
        console.log("bg images => ", this.state.bgImages);
        return (
            <div className="galaryStyle">
                <Row className="imageGalaryStyle">
                    {this.state.images.map((imageUrl, index) => this._renderImage(imageUrl, index))}
                </Row>
                <Row style={{bottom: 0}}>
                    <Col md></Col>
                    <Col md>
                        <Row>
                            <Col md={1}>
                            </Col>
                            <Col md={11}>
                                <Row>
                                    <Col md>
                                        <Button style={{float: "right"}} onClick={() => this.handleFileSelect()}>Browser...</Button>
                                    </Col>
                                    <Col md>
                                        <Button onClick={() => this.props.handleAddBGImage(this.state.selectedImg)}>Select Background</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
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