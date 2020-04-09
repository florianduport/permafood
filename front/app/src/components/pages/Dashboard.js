import React from 'react';
import { Row, Col, Button, Icon, Card, Range } from 'react-materialize';
import Sidenav from '../template/Sidenav';
import { connect } from 'react-redux';

function Dashboard(props) {
  return <div className="Dashboard">
    {JSON.stringify(props)}
    <Row>
      <Col s={3}>
        <Sidenav/>
      </Col>
      <Col s={9}>


        <h1>Simulateur</h1>

        <h5>Infos sur la simulation : </h5>
        <ul>
          <li>Date de la simulation : 10/01/2020 à 09h00</li>
          <li>Taille de la famille : 5 personnes</li>
          <li>Taille du potager : 10 000m2</li>
        </ul>

        <Button className="amber">
          Regénérer la simulation
        </Button>

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

const mapStateToProps= (state) => {
  return state
}
/*const mapDispatchToProps = (dispatch) => ({
  handleSubmitAction: value => {
    return dispatch(loginAction(value));
  }
});
*/

export default connect(mapStateToProps)(Dashboard);
