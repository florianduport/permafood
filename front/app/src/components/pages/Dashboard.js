import React from 'react';
import { Row, Col, Button, Icon, Card, Range } from 'react-materialize';
import Sidenav from '../template/Sidenav';

function Dashboard(props) {
  return <div className="Dashboard">
    <Row>
      <Col s={3}>
        <Sidenav/>
      </Col>
      <Col s={9}>


        <h1>Simulateur</h1>
        <h5>Parcours la timeline mois par mois pour simuler ton potager</h5>
        <Range
          max="12"
          min="1"
          name="points"
        />
        <Row>
          <Col
            m={6}
            s={12}
          >
            <Card
              className="blue-grey darken-1"
              closeIcon={<Icon>close</Icon>}
              revealIcon={<Icon>more_vert</Icon>}
              textClassName="white-text"
              title="Disponible à consommer en Janvier"
            >
              I am a very simple card.
            </Card>
          </Col>
          <Col
            m={6}
            s={12}
          >
            <Card
              className="blue-grey darken-1"
              closeIcon={<Icon>close</Icon>}
              revealIcon={<Icon>more_vert</Icon>}
              textClassName="white-text"
              title="Apports nutrionnels"
            >
              I am a very simple card.
            </Card>
          </Col>
        </Row>
        <h5>Actions à faire au potager</h5>
        <Row>
          <Col
            m={6}
            s={12}
          >
            <Card
              className="blue-grey darken-1"
              closeIcon={<Icon>close</Icon>}
              revealIcon={<Icon>more_vert</Icon>}
              textClassName="white-text"
              title="À semer en Janvier"
            >
              I am a very simple card.
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            m={6}
            s={12}
          >
            <Card
              className="blue-grey darken-1"
              closeIcon={<Icon>close</Icon>}
              revealIcon={<Icon>more_vert</Icon>}
              textClassName="white-text"
              title="À planter au potager en Janvier"
            >
              I am a very simple card.
            </Card>
          </Col>
        </Row>


      </Col>
    </Row>

  </div>;
}

export default Dashboard;
