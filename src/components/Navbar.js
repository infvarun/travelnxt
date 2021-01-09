import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Searchbar from './Searchbar'
import { Navbar as Navigate, Nav, NavDropdown, Form, FormControl, Button as Btn} from 'react-bootstrap';

import Dropdn from './Dropdn'

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };



  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <Navigate bg="light" expand="lg">
      <Navigate.Brand href="/">
        <i> <img src="triplogo.jpg" alt="tripnxt-logor" width={60}  /><b>tripnxt</b></i>
      </Navigate.Brand>
      <Navigate.Toggle aria-controls="basic-navbar-nav" />
      <Navigate.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">


        </Nav>
        <Searchbar searchKey={props.searchByKey}/>
        <Dropdn filterByCategory={props.filterOnCategory}
               filterByLocation={props.filterOnLocation}
                items={['Adrenaline', 'Adventure', 'Mystery', 'Luxury','Peace']}
                places={['Bali','Atalanta','Himalaya','Rajgir','Sahara','Amazon']}/>
      </Navigate.Collapse>
    </Navigate>


    </>
  );
}

export default Navbar;
