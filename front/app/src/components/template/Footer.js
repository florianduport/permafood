import React from 'react';
import { Footer as FooterM } from 'react-materialize';

function Footer(props) {
  return <FooterM
    className="teal"
    copyrights="Permafood 2020 Copyright"
        moreLinks={<a className="grey-text text-lighten-4 right" href="#!">Mentions légales</a>}
  >
    <h5 className="white-text">
      Permafood, service gratuit !
    </h5>
    <p className="grey-text text-lighten-4">
      Planifiez votre autonomie alimentaire en fonction de vos apports journaliers
    </p>
  </FooterM>;
}

export default Footer;
