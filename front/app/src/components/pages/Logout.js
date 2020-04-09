import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, TextInput, CardPanel} from 'react-materialize';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/userActions';
import LoginForm from '../forms/LoginForm';
import { Field, reduxForm } from 'redux-form'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
class Logout extends Component{
  constructor(props) {
    super(props);
    localStorage.setItem('state', undefined);
    this.setState({isConnected : false});
  }

  render(){
    return <Redirect to="/" from="/logout" />
  }
}
const mapStateToProps= (state) => {

  return state.userReducer;
}

export default connect(mapStateToProps)(Logout);
