import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo-1.png';

const Navbar = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '30px',
      backgroundColor: 'rgb(246, 139, 0)',
      padding: '10px',
      paddingLeft: '20px',
      paddingRight: '20px',
    }}
  >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '54px', height: '60px', margin: '0px 20px' }} />
    </Link>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '50px',
        fontFamily: 'Alegreya',
        fontSize: '24px',
        alignItems: 'center',
      }}
    >
      <Link className="home-nav" to="/" style={{ textDecoration: 'none', color: '#000', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" className="exercise-nav" style={{ textDecoration: 'none', color: '#000' }}>Exercises</a>
    </div>
  </div>
);

export default Navbar;
