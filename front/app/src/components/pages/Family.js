import React from 'react';
import { Row, Col, Card, Icon, Range } from 'react-materialize';
import Sidenav from '../template/Sidenav';

function Family(props) {
  return <div className="Family">
    <Row>
      <Col s={3}>
        <Sidenav/>
      </Col>
      <Col s={9}>

      <h1>Configurer ma Famille</h1>
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
            Nombre d'hommes :
            <Range
              max="10"
              min="0"
              name="points"
            />
            Nombre de femmes :
            <Range
              max="10"
              min="0"
              name="points"
            />
            Nombre d'enfants (0-10 ans) :
            <Range
              max="10"
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

export default Family;
