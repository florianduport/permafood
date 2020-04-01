import React from 'react';
import { Row, Col, Button, TextInput, Container, CardPanel, Icon, Form } from 'react-materialize';

function Login(props) {
  return <div className="Homepage">
    <Row>
      <Col s={12} className="align-center">

        <div className="section"></div>
        <h5 className="teal-text center">Connectez-vous</h5>
        <div className="section"></div>

        <Col s={4}></Col>
        <Col s={4}>
            <CardPanel
              className="grey lighten-4"
              title="Disponible à consommer en Janvier"
            >
             <form className="container center" style={{display: 'block'}}>
              <Row>
              <TextInput
              noLayout
                email
                id="TextInput-4"
                label="Email"
                validate
                />
              </Row>
              <Row>
              <TextInput
              noLayout
                id="TextInput-4"
                label="Password"
                password
                />
              </Row>
              <Row>
                <label >
                  <a className='pink-text' href='#!'><b>Mot de passe oublié?</b></a>
                </label>
              </Row>
              <Row>
                <Button name='btn_login' className='col s12 btn btn-large waves-effect amber'>Login</Button>
              </Row>

                  <a href="#!">Creer un compte</a>
              </form>
            </CardPanel>
        </Col>
        <Col s={4}></Col>
      </Col>
    </Row>

    <div className="section"></div>

  </div>;
}

export default Login;
