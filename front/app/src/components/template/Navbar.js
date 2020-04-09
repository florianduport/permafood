import React, {Component} from 'react';
import { Navbar as NavbarM, NavItem, Icon } from 'react-materialize';
import { connect } from 'react-redux';
class Navbar extends Component{


  constructor(props) {
    super(props);
  }

  render(){

  return <NavbarM
  alignLinks="right"
  brand={<a className="brand-logo white-text" href="/" style={{ marginLeft: '15px'}}><i className="material-icons">local_florist</i>Permafood</a>}
  id="mobile-nav" className="teal"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>

    <NavItem className="white-text" href={!this.props.isConnected ? "/login" : "/logout" }>
      {!this.props.isConnected ? "Se connecter" : "Se déconnecter" }
    </NavItem>


</NavbarM>;
}
}

const mapStateToProps= (state) => {
  return state.userReducer
}
/*const mapDispatchToProps = (dispatch) => ({
  handleSubmitAction: value => {
    return dispatch(loginAction(value));
  }
});
*/

export default connect(mapStateToProps)(Navbar);
