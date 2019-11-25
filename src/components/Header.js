import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => (  
<nav className="nav-wrapper  red lighten-2 ">
<a href="#!" className="brand-logo center">{titulo}</a>
</nav>
);
 
Header.protoTypes ={
    titulo : PropTypes.string.isRequired
}
export default Header;