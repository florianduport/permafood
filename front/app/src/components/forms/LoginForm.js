import React, {Component} from 'react'
import { Row, Col, Button, TextInput, CardPanel, Chip} from 'react-materialize';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/userActions';

class LoginForm extends Component{


  constructor(props) {
    super(props);
  }

  render(){
  const { error, handleSubmit, pristine, reset, submitting } = this.props
  return (
    <form onSubmit={this.props.handleSubmit} className="container center" style={{display: 'block'}}>

     {error && <Chip className="amber">{error}</Chip>}
     <Row>
       <Field name="username" component="input" type="email" />
     </Row>
     <Row>
     <Field name="password" component="input" type="password" />
     </Row>
     <Row>
       <label >
         <a className='pink-text' href='#!'><b>Mot de passe oublié?</b></a>
       </label>
     </Row>
     <Row>
       <Button
       type="submit"
       name='btn_login' className='col s12 btn btn-large waves-effect amber' disabled={this.props.submitting}>
       Se connecter
       </Button>
     </Row>

         <a href="#!">Creer un compte</a>
     </form>
  )
}
}


function mapStateToProps(state) {
  return { initialValues: state.userReducer.login }
}


LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

LoginForm = connect(mapStateToProps)(LoginForm)


export default LoginForm;
