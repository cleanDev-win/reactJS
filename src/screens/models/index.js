/*
 * className: ModelListofType
 * Author   : ChengXin
 * Created  : July 4th 2019
 * Updated  : July 6th 2019
*/

import React, { Component } from 'react';
import { Row, Col, Tab } from 'react-bootstrap';

export default class ModelListofType extends Component {
    state = {
        selectedID: -1,
        iPhone: [
            {type: 'iPhone 5', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'iPhone 5s', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'iPhone 6', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'iPhone 6s', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'iPhone 7', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'iPhone 8', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'iPhone xs', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
        ],
        samsung: [
            {type: 'Samsung', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'Samsung', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'Samsung', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'Samsung', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'Samsung', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'Samsung', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'Samsung', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
        ],
        blackBerry: [
            {type: 'BlackBerry phorn 1234 green', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry phorn 1234 green', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry phorn 1234 green', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry phorn 1234 green', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry phorn 1234 green', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
            {type: 'BlackBerry', coverUrl: '', size: [{w: 200, h: 300}], cameraPos: [{x: 50, y: 50}], cameraUrl: ''},
        ],
    }                                                               

    _renderModel = ( item, index ) => {
        return(
            <Col key={index} sm={4} className="model-item" onClick={() => this.setState({selectedID: index})}>
                <div key={index} className="item" style = {this.state.selectedID === index? styles.selectedModelStyle: styles.modelStyle}>
                    <p>{ item.type }</p>
                </div>
            </Col>
        )
    };

    render () {
        return (
            <Tab.Content 
                style={{height: 350, overflowY:'scroll', overflowX: 'hidden'}}>
                <Tab.Pane eventKey="#type1" className="list-scroller">
                    <Row>
                        {this.state.iPhone.map((model, index) => this._renderModel(model, index))}
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="#type2">
                    <Row>
                        {this.state.samsung.map((model, index) => this._renderModel(model, index))}
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="#type3">
                    <Row>
                        {this.state.blackBerry.map((model, index) => this._renderModel(model, index))}
                    </Row>
                </Tab.Pane>
            </Tab.Content>
        )
    }
}

let styles = {
    divModelStyle: {
        marginBottom: 10,
    },
  
    modelStyle: {
        marginRight: 5,
        borderRadius: 4,
    },
  
    selectedModelStyle: {
        marginRight: 5,
        borderRadius: 4,
        borderColor: 'fuchsia',
        borderWidth: 6,
        borderStyle: 'solid'
    }
  }