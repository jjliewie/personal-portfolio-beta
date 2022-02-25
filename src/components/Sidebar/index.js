import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link as LinkH } from 'react-router-dom';
import './Sidebar.css';
import {animateScroll as scroll} from 'react-scroll'
import { SideLink, Nav} from './NavBarElements';
import mylogo from "../images/mylogo.png"


const Sidebar = () => {

    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
      setOpen(!isOpen)
      document.body.style.overflowY = !isOpen? 'hidden': 'scroll';
    }
  
    const closeSideBar = () => {
      setOpen(false)
      document.body.style.overflowY = 'scroll';
    }

    return (

        <>

        <LinkH to = "/" smooth={"true"} duration={500} onClick={function(event){ scroll.scrollToTop(); closeSideBar()}} style={{cursor:'pointer'}}>
        <img className="logo" src={mylogo} alt=""/>
        </LinkH>

        <Menu 
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
            width = {"100%"}
            right
            className={"menu"}
            ba
        >


        <SideLink to ="/" smooth={"true"} spy={true} duration={500} onClick={function(event){ scroll.scrollToTop(); closeSideBar()}}>
        <div className='hvr-sweep-to-right'>
            Home
        </div>
        </SideLink>


        <SideLink to="about" smooth={"true"} spy={true} duration={500} onClick={closeSideBar}>
        <div className='hvr-sweep-to-right'>
            About
        </div>
        </SideLink>
       
        <SideLink to="resume" smooth={"true"} spy={true} duration={500} onClick={closeSideBar}>
        <div className='hvr-sweep-to-right'>
            Resume
        </div>
        </SideLink>
       
        {/* <SideLink to="projects" smooth={"true"} spy={true} duration={500} onClick={closeSideBar}>
        <div className='hvr-sweep-to-right'>
            Projects
        </div>
        </SideLink>
       
        <SideLink to="links" smooth={"true"} spy={true} duration={500} onClick={closeSideBar}>
        <div className='hvr-sweep-to-right'>
            Links
        </div>
        </SideLink>

        <SideLink to="publications" smooth={"true"} spy={true} duration={500} onClick={closeSideBar}>
        <div className='hvr-sweep-to-right'>
            Publications
        </div>
        </SideLink> */}
       
        </Menu>

        <Nav />
        
        </>

    );
  };

export default Sidebar;