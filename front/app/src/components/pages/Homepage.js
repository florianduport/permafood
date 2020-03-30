import React from 'react';
import { Row, Col, Button } from 'react-materialize';

function Homepage(props) {
  return <div className="Homepage">
    <Row>
    <Col
      s="12"
    >
        <h1 className="center">Découvrez Permafood</h1>
        <h4 className="center">Planifiez votre autonomie alimentaire en fonction de vos apports journaliers</h4>
          <div className="center-align">
            <Button large className="amber" node="a" style={{ marginRight: '5px'}} href="/dashboard" waves="light">
              Accéder au simulateur
            </Button>
          </div>
    </Col>
    </Row>

  </div>;
}

export default Homepage;
