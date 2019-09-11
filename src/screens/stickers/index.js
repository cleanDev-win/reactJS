/*
 * className: AddSticker
 * Author   : ChengXin
 * Created  : July 6th 2019
 * Updated  : July 15th 2019
*/

import React, { Component } from 'react';
import { Row, Col, ListGroup, Tab, Button } from 'react-bootstrap';

export default class AddSticker extends Component {
    constructor(props) {
        super(props);
        this.setImage = this.setImage.bind(this);
        this.state={
            stickers: []
        }
    }

    componentDidMount() {
        fetch("http://165.22.179.40:81/api/v1/categories/?category_type=sticker", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-key': 'mlkjhgfdsazxcvbnmlkjhgffdsaqwrio',
                'Authorization': 'Bearer wFZjqH5oaCMEoST7NdYIzcgn6rt7gx' 
            },
        }).then(res => res.json())
          .then(res => {
              this.setState({ stickers: res.data});
        })
    }

    state = {
        selectedImg: '',
        selectedImgID: -1,
        images: [
            './images/sticker/1.png',
            './images/sticker/2.png',
            './images/sticker/3.jpg',
            './images/sticker/4.jpg',
            './images/sticker/5.png',
            './images/sticker/6.jpg',
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
                <img key={index} src={item} width="100%" height="150px" style={this.state.selectedImgID != index? styles.imageStyle: styles.selectedImgStyle}/> 
            </Col>
        )
    }
    
    render () {
        console.log("stickers=>", this.state.stickers);
        return (
            <div className="galaryStyle">
                <Row className="imageGalaryStyle">
                    <Tab.Container id="list-group-tabs-sticker" defaultActiveKey="#type1">
                        <Row className="no-margin">
                            <Col sm={3}>
                                <ListGroup>
                                    <ListGroup.Item action href="#type1">
                                        Animals
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#type2">
                                        Flowers
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#type3">
                                        Jombie
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col sm={9} className="choose_sticker_section">
                                <Tab.Content 
                                    style={{ overflowY:'hidden', overflowX: 'hidden'}}>
                                    <Tab.Pane eventKey="#type1" className="list-scroller">
                                        <Row>
                                            {this.state.images.map((imageUrl, index) => this._renderImage(imageUrl, index))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#type2">
                                        <Row>
                                            {this.state.images.map((imageUrl, index) => this._renderImage(imageUrl, index))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#type3">
                                        <Row>
                                            {this.state.images.map((imageUrl, index) => this._renderImage(imageUrl, index))}
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Row>
                <Row style={{bottom: 0}}>
                    <Col md></Col>
                    <Col md>
                        <Row>
                            <Col md></Col>
                            <Col md>
                                <Button onClick={() => this.props.handleAddStickers(this.state.selectedImg)}>Select Sticker</Button>
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
        borderStyle: 'solid',
    }
}