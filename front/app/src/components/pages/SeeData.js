import React from 'react';
import { Row, Col, Button, Card, Icon, Range } from 'react-materialize';
import Sidenav from '../template/Sidenav';

function SeeData(props) {
  return <div className="SeeData">
  <Row>
    <Col s={3}>
      <Sidenav/>
    </Col>
    <Col s={9}>

    <h1>Consulter les données du simulateur</h1>
    </Col>
  </Row>
  </div>;
}

export default SeeData;
