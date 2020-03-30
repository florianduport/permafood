import React from 'react';
import { Row, Col, Button } from 'react-materialize';

function Login(props) {
  return <div className="Homepage">
  <center>
    <Row>
      <Col s="12" className="align-center">

        <div className="section"></div>
        <h5 className="teal-text">Connectez-vous</h5>
        <div className="section"></div>

        <Col s="4"></Col>
        <Col s="4">
            <div className="container">
              <div className="z-depth-1 grey lighten-4 row">

                <form className="col s12" method="post">
                  <div class='row'>
                    <div className='col s12'>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='input-field col s12'>
                      <input className='validate' type='email' name='email' id='email' />
                      <label for='email'>Entrez votre email</label>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='input-field col s12'>
                      <input className='validate' type='password' name='password' id='password' />
                      <label for='password'>Entrez votre mot de passe</label>
                    </div>
                    <label >
                      <a className='pink-text' href='#!'><b>Mot de passe oublié?</b></a>
                    </label>
                  </div>
                  <center>
                    <div className='row'>
                      <Col s="1"></Col>
                      <Button node="submit" name='btn_login' className='col s10 btn btn-large waves-effect amber'>Login</Button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
        </Col>
        <Col s="4"></Col>
      </Col>
    </Row>


    <div className="section"></div>

    <a href="#!">Creer un compte</a>
  </center>
  </div>;
}

export default Login;
