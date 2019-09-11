/*
 * className: ProductsScreen
 * Author   : ChengXin
 * Created  : July 8th 2019
 * Updated  : July 9th 2019
*/

import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default class ProductsScreen extends Component {
    constructor(props) {
        super(props);
        this.setImage = this.setImage.bind(this);
    }

    state = {
        selectedImg: '',
        selectedImgID: -1,
        images: [
            // './images/xiaomi.jpg',
            './images/ios.png',
        ]
    }

    setImage(imageUrl, selectedID) {
        this.setState({
            selectedImg: imageUrl,
            selectedImgID: selectedID
        });
    }

    _renderImage = ( item, index ) => {
        return (
            <Col key={index} md={3} sm={4} onClick={() => this.setImage(item, index)} style={styles.divImgStyle}> 
                <img key={index} src={item} width="100%" height="300px" style={this.state.selectedImgID !== index? styles.imageStyle: styles.selectedImgStyle}/> 
            </Col>
        )
    }
    
    render () {
        return (
            <div className="galaryStyle">
                <Row className="imageGalaryStyle">
                    {this.state.images.map((imageUrl, index) => this._renderImage(imageUrl, index))}
                </Row>
                <Row style={{bottom: 0}}>
                    <Col md></Col>
                    <Col md>
                        <Row>
                            <Col md></Col>
                            <Col md>
                                <Button onClick={() => this.props.chooseProduct(this.state.selectedImg)}>Choose Product</Button>
                                {/* <Button>Upload Image</Button> */}
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