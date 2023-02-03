import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import Logo from "../logo.jpg";

export default function Navbar() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
        <img className='logo' src={Logo} />

          <MDBNavbarToggler
            className="navbar-toggler me-auto"
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon className='me-3' icon='bars' fas />
            Vitthalai Printing Press
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal3}>
        <div className='shadow-3 pt-1'>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 1
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Link 2
          </MDBBtn>
          
        </div>
      </MDBCollapse>
    </>
  );
}