import './App.css';
import Button from './common/Button'

import {Col,Layout, Row, Modal, Tag} from 'antd'

import {Typography} from 'antd';



import {MapContainer, TileLayer,Marker, Popup} from 'react-leaflet';

import { useState } from 'react';
import 'leaflet/dist/leaflet.css'
import cities from './data/cities.json'

import ContactForm from './components/ContactForm'
import L from 'leaflet'

import Icon from './svgs/iconfinder_map-marker_299087.svg'
import Paragraph from 'antd/lib/typography/Paragraph';

const {Header, Footer, Content} = Layout;

const {Title} = Typography;

const markerIcon = new L.Icon({
  iconUrl: Icon,
  iconSize: [35, 35],
  className: 'leaflet-div-icon'
});



function App() {  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    
    <Layout>
    <Header className="Navbar">
    <Title  level={2} className="logo">Help me </Title>
    </Header>
    <Content>
      <Row justify="center">
      <Col >
      <MapContainer center={ [28.603187199999997, 77.07361279999999] } zoom={5} scrollWheelZoom={true}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {cities.map((patient,idx) =>
    <Marker
    position={[patient.lat, patient.lng]} 
    key={idx}
    icon={markerIcon}
    >
      <Popup>
        <Paragraph copyable={{text: `${patient.name}, ${patient.needs}` }}>
        <p>{patient.name}</p>
        <ul>
          {patient.needs.map((need,idx ) => <Tag  key={idx}>{need}</Tag>)}
        </ul>
        </Paragraph>
        
      </Popup>
    </Marker>
      )}
  </MapContainer>
      </Col>
      </Row>
    </Content>
    <Row justify="center">
      <Col >
      <Button onClick={showModal}>Help Me</Button>
    <Modal title="Add Patient's info" 
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel} >
        Return
      </Button>,
      <Button key="submit" type="primary"  onClick={handleOk}>
        Submit
      </Button>
    ]}>
      <ContactForm
        title="Something Somethign"
        content="lsdkfjs"
        id="contact"

        />
        
      </Modal>
      
      </Col>

    </Row>
    
    <Footer>Footer</Footer>
  </Layout>
  );
}

export default App;
