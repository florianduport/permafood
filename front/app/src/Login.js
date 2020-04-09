import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, TextInput, CardPanel} from 'react-materialize';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/userActions';
import LoginForm from '../forms/LoginForm';
import { Field, reduxForm } from 'redux-form'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
class Login extends Component{


  constructor(props) {
    super(props);
  }

  render(){
  if(this.props.userReducer.login.token){
    return <Redirect to="/dashboard" from="/login" />
  }

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
             {JSON.stringify(this.props.userReducer.login.token)}
             <LoginForm onSubmit={values => this.props.handleSubmitAction(values)}/>
            </CardPanel>
        </Col>
        <Col s={4}></Col>
      </Col>
    </Row>

    <div className="section"></div>

  </div>
  }

}
const mapStateToProps= (state) => {

  return state
}
const mapDispatchToProps = (dispatch) => ({
  handleSubmitAction: value => {
    return dispatch(loginAction(value));
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);
