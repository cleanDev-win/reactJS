import React, { Component } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import { Button, Tabs, Modal, Row, Col, Container, ListGroup, Tab } from 'react-bootstrap';

import Transformer from './components/transformer';
import AddedImage from './components/addedImage';
import AddedBGImage from './components/addedBGImage';
import URLImage from './components/urlImage';

import AddText from './screens/addtext/index';
import AddImage from './screens/addimgs/index';
import AddBGImage from './screens/addbgimgs/index';
import AddSticker from './screens/stickers/index';
import ModelListofType from './screens/models/index';
import AddColor from './screens/colors/index';
import Products from './screens/products/index';
import store from './store/index';
import { addElement } from './actions/index';
import './App.css';

class ModalComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
       makes: [],
    };
  }

  componentDidMount() {

    console.log("props token ==> " + this.props.token);
    let temp = "wFZjqH5oaCMEoST7NdYIzcgn6rt7gx";
    fetch("http://165.22.179.40:81/api/v1/makes", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-key': 'mlkjhgfdsazxcvbnmlkjhgffdsaqwrio',
        'Authorization': 'Bearer ' + temp
      }
    }).then(res=>res.json()).then(res=>{
      this.setState({makes: res.data});
    });
  }
  render () {
    console.log("makes=>", this.state.makes);
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Choose Model
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
              <div>
                <Row className="tab-title">
                  <Col sm={4}>
                    <p>Choose Mobile Type</p>
                  </Col>
                  <Col sm={8} className="choose-model-section">
                    <p>Choose your model</p>
                  </Col>
                </Row>
                <Tab.Container id="list-group-tabs-cover-model" defaultActiveKey="#type1">
                  <Row>
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroup.Item action href="#type1">
                          iPhone
                        </ListGroup.Item>
                        <ListGroup.Item action href="#type2">
                          Samsung Galaxy
                        </ListGroup.Item>
                        <ListGroup.Item action href="#type3">
                          BlackBerry
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={8} className="choose-model-section">
                      <ModelListofType />
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {this.props.onHide(); this.props.selectedmodel()}}>Select</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>  
    )
  }
}

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      toastShow: false,
      selectedModel: false,
      selectedShapeName: '',
      addedImgs: [],
      addedTexts: [],
      backgroundImg: '',
      backgroundColor: '',
      showModal: false,
      selectedCover: '',
      key: '',
      code: '',
      access_token: '',
    };
  }

  handleExportClick = () => {
    this.setState({selectedShapeName: ''});
    const dataURL = this.stageRef.getStage().toDataURL();
	// change size of photo to 780x1920
    this.downloadURI(dataURL, "cover.jpg");
  }

  downloadURI(uri, name) {
    const link = window.document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  handleStageMouseDown = e => {
    if (e.target === e.target.getStage()) {
      this.setState({
        selectedShapeName: ''
      });
      return;
    }
    const clickedOnTransformer =
      e.target.getParent().className === 'Transformer';
    if (clickedOnTransformer) {
      return;
    }

    const name = e.target.name();
    if (name === `image${e.target.index}`) {
      this.setState({
        selectedShapeName: name
      });
    } else {
      this.setState({
        selectedShapeName: ''
      });
    }
    let elements = store.getState().imageEle;
    if (elements[e.target.index] === undefined) 
      return;
    if (elements[e.target.index].code !== '') {
      this.setState({ key: 'addtext', code: elements[e.target.index].code });
      console.log('key  =====> ' + e.target.index);
    }
  };

  handleAddElement = (imageUrl, code = '') => {
    if (this.state.selectedCover === '') {
      alert("Woops! You have to select model of your cover.");
      return;
    }
    store.dispatch(addElement(imageUrl, code));
    this.forceUpdate();
  }

  handleAddBGImage = (imageUrl) => {
    if (this.state.selectedCover === '') {
      alert("Woops! You have to select model of your cover.");
      return;
    }
    this.setState({
      backgroundImg: imageUrl
    })
  }

  handleSelectColor = (color) => {
    if (this.state.selectedCover === '') {
      alert("Woops! You have to select model of your cover.");
      return;
    }
    this.setState({
      backgroundColor: color
    })
  }

  chooseCoverProduct = (coverUrl) => {
    this.setState({
      selectedCover: coverUrl,
      backgroundColor: '',
      selectedShapeName: '',
      addedImgs: [],
      addedStickers: [],
      backgroundImg: ''
    })
  }

  setSelectedModelFlag = () => {
    this.setState({
      selectedModel: true
    });
    this.setState({ key: 'chooseProd' })
  }

  componentDidUpdate = () => {
    this.state.addedImgs = store.getState().imageEle;
  }

  componentDidMount = () => {
    fetch("http://165.22.179.40:81/api/v1/login/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-key": "mlkjhgfdsazxcvbnmlkjhgffdsaqwrio"
      }, 
      body: JSON.stringify({
        "mobile": "9988776655",
        "password": "qwerty123"
      })
    }).then(res => res.text())
      .then(res => {
        let response = JSON.parse(res);
        console.log("data ===> " + response);
        this.setState({ access_token: response.data.token});
      })
      .catch(err => err);
  }

  render() {
    let modalClose = () => this.setState({ showModal: false });
    let elements = store.getState().imageEle;
    console.log("this.state.key ======= >" + this.state.access_token);
    return (
      <div className="App">
        <header className="App-header">
          <p> Mobile Cover Design </p>
        </header>
        <div className="App-content rect-border row no-margin">
          <div className="cover-board">
            <div className="image-board rect-border">
              <Stage width="288" height="480" ref={node => { this.stageRef = node }} className="konva-stage" onMouseDown={this.handleStageMouseDown} >
                <Layer>
                  <Rect width="288" height="480" fill={this.state.backgroundColor}></Rect>
                </Layer>
                <Layer>
                  <AddedBGImage src={this.state.backgroundImg}></AddedBGImage>
                </Layer>
                <Layer>
                  { elements.map((ele, index) => (
                    <AddedImage key={index} name={`image${index}`} src={ele.url}></AddedImage>
                  )) }
                  <Transformer
                    selectedShapeName={this.state.selectedShapeName}
                  />
                </Layer>                
                <Layer hitGraphEnabled={false}>
                  <URLImage src={ this.state.selectedCover } ref={node => { this.mask = node }}/>
                </Layer>
              </Stage>
            </div>
            <div className="choose-cover">
              <div>
                <Button 
                  variant="primary"
                  onClick={() => this.setState({ showModal: true })}
                  className="btn-primary"  
                >
                  Choose Model
                </Button>
                <Button
                  onClick={() => this.handleExportClick()}
                >
                  Publish
                </Button>
              </div>
            </div>
          </div>
          <div className="control-board">
            <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
              <Tab eventKey="chooseProd" title="Products" className="border-item">
                {this.state.selectedModel? <Products chooseProduct={this.chooseCoverProduct} /> : <p>Please choose Model of your mobile.</p>}
              </Tab>
              <Tab eventKey="addimage" title="Add Image" className="border-item">
                <AddImage handleAddImage={this.handleAddElement}/>
              </Tab>
              <Tab eventKey="addtext" title="Add Text" className="border-item">
                  <AddText handleAddText={this.handleAddElement} code={this.state.code}/>
              </Tab>
              <Tab eventKey="sticker" title="Add Sticker" className="border-item">
                <AddSticker handleAddStickers={this.handleAddElement}/>
              </Tab>
              <Tab eventKey="bgcolor" title="BG Color" className="border-item">
                <AddColor handleSelectColor={this.handleSelectColor}/>
              </Tab>
              <Tab eventKey="bgimage" title="BG Image" className="border-item">
                <AddBGImage handleAddBGImage={this.handleAddBGImage}/>
              </Tab>
            </Tabs>
          </div>
        </div>
        <ModalComponent
          show={this.state.showModal}
          onHide={modalClose}
          selectedmodel={this.setSelectedModelFlag}
          token={this.state.access_token}
        />
        <footer className="App-footer">
          <p> @created by chengxin</p>
        </footer>
      </div>
    );
  }
}




export default App;
