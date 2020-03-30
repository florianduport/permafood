import React from 'react';
import 'materialize-css';
import { SideNav as SideNavM, SideNavItem, Icon, Button, Row, Collection, CollectionItem } from 'react-materialize';

function Sidenav(props) {
  return <div>
    <Collection>
      <CollectionItem className="black-text" href="/"><i class="material-icons">insert_chart</i> Dashboard</CollectionItem>
      <CollectionItem className="black-text" href="/"><i class="material-icons">insert_chart</i> Famille</CollectionItem>
      <CollectionItem className="black-text" href="/"><i class="material-icons">insert_chart</i> Potager</CollectionItem>
    </Collection>
  </div>;
}

export default Sidenav;
