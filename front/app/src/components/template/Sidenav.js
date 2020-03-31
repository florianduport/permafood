import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

function Sidenav(props) {
  return <div>
    <Collection>
      <CollectionItem className="black-text center" href="/">

        <i className="material-icons large">account_circle</i>        <br/>
        <span className="title">John Doe</span>
        <p className="center">johndoe@test.com</p>
        <br/>
      </CollectionItem>
      <CollectionItem className="black-text" href="/dashboard"><i className="material-icons" style={{"verticalAlign":"-7px"}}>dashboard</i> Simulateur</CollectionItem>
      <CollectionItem className="black-text" href="/family"><i className="material-icons" style={{"verticalAlign":"-7px"}}>group</i> Configurer ma Famille</CollectionItem>
      <CollectionItem className="black-text" href="/garden"><i className="material-icons" style={{"verticalAlign":"-7px"}}>local_florist</i> Configurer mon Potager</CollectionItem>
      <CollectionItem className="black-text" href="/seedata"><i className="material-icons" style={{"verticalAlign":"-7px"}}>folder</i> Consulter les données</CollectionItem>
    </Collection>
  </div>;
}

export default Sidenav;
