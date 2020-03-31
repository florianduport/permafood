import React from 'react';
import { Navbar as NavbarM, NavItem, Icon } from 'react-materialize';

function Navbar(props) {
  return <NavbarM
  alignLinks="right"
  brand={<a className="brand-logo white-text" href="/" style={{ marginLeft: '15px'}}><i class="material-icons">local_florist</i>Permafood</a>}
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
  <NavItem className="white-text" href="/login">
    Se connecter
  </NavItem>
</NavbarM>;
}

export default Navbar;
