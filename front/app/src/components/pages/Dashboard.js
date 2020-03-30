import React from 'react';
import { Row, Col, Button } from 'react-materialize';
import Sidenav from '../template/Sidenav';

function Dashboard(props) {
  return <div className="Dashboard">
    <Row>
      <Col s="1">
        <Sidenav/>
      </Col>
      <Col s="11">
        <h1>Dashboard</h1>
        <Button node="a" style={{ marginRight: '5px'}} href="/dashboard" waves="light">
          Accéder au simulateur
        </Button>
      </Col>
    </Row>

  </div>;
}

export default Dashboard;
