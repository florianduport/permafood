import React, { Component } from 'react';
import { Row, Col, Button, TextInput, CardPanel} from 'react-materialize';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/userActions';

class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render(){
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
             <form onSubmit={
               (e) => {
               e.preventDefault()
               this.props.onLogin(this.state)
               }
             } id="loginForm" className="container center" style={{display: 'block'}}>
              <Row>
              <TextInput
              noLayout
                email
                id="TextInput-Login"
                label="Email"
                name="username"
                validate
                defaultValue={this.state.username} onChange={this.handleChange}
                />
              </Row>
              <Row>
              <TextInput
              noLayout
                id="TextInput-Password"
                label="Password"
                password
                name="password"
                validate
                defaultValue={this.state.password} onChange={this.handleChange}
                />
              </Row>
              <Row>
                <label >
                  <a className='pink-text' href='#!'><b>Mot de passe oublié?</b></a>
                </label>
              </Row>
              <Row>
                <Button
                type="submit"
                name='btn_login' className='col s12 btn btn-large waves-effect amber'>
                Se connecter
                </Button>
              </Row>

                  <a href="#!">Creer un compte</a>
              </form>
            </CardPanel>
        </Col>
        <Col s={4}></Col>
      </Col>
    </Row>

    <div className="section"></div>

  </div>
  }

}


const mapDispatchToProps = dispatch => {
  return {
    onLogin: login => {
      dispatch(loginAction(login));
    }

  };
};

/*export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
  onSubmit: loginAction // submit function must be passed to onSubmit
})(Login)
*/
export default connect(null, mapDispatchToProps)(Login);
