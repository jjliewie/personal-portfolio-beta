import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  MainLink
} from './NavbarElements';

import {animateScroll as scroll} from 'react-scroll'
  
const Navbar = () => {
  return (
    <>
      <Nav className='sticky'>
        <Bars />
        <NavMenu>
          <MainLink to = "/" smooth={"true"} duration={500}  onClick={scroll.scrollToTop}>
            Home
          </MainLink>

          <NavLink to="about" spy={true} smooth={"true"} duration={500}>
          About
          </NavLink>

          <NavLink to="resume" smooth={"true"} spy={true} duration={500}>
          Resume
          </NavLink>

          <NavLink to='projects' smooth={"true"} spy={true} duration={500}>
            Projects
          </NavLink>
          <NavLink to='links' smooth={"true"} spy={true} duration={500}>
            Links
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/timestable'>Times Table World</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;