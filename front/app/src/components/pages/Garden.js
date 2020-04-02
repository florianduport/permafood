import React from 'react';
import { Row, Col, Card, Icon, Range } from 'react-materialize';
import Sidenav from '../template/Sidenav';

function Garden(props) {
  return <div className="Garden">
  <Row>
    <Col s={3}>
      <Sidenav/>
    </Col>
    <Col s={9}>

    <h1>Configurer mon potager</h1>
    <Row>
      <Col
        m={6}
        s={12}
      >
        <Card
          actions={[
            <a key="1" href="/">Enregistrer</a>
          ]}
          className="blue-grey darken-1"
          closeIcon={<Icon>close</Icon>}
          revealIcon={<Icon>more_vert</Icon>}
          textClassName="white-text"
        >
          Surface du potager en m2 :
          <Range
            max="10000"
            min="0"
            name="points"
          />
        </Card>
      </Col>
    </Row>

    </Col>
  </Row>

  </div>;
}

export default Garden;
