import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

interface NavigationProps {
    closeNav: () => void;
}

const Navigation = (props: NavigationProps) => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
    <div className="overlay-content">
    <Link to="/" onClick={() => props.closeNav()}>Home</Link>
    <Link to="/vitamin" onClick={() => props.closeNav()}>Vitamin Juice</Link>
    <Link to="/clothing" onClick={() => props.closeNav()}>Clothing</Link>
    <Link to="/supplements" onClick={() => props.closeNav()}>Supplements</Link>
    <Link to="/contact" onClick={() => props.closeNav()}>Contact</Link>
    </div>
  </div>
);

export default Navigation;
