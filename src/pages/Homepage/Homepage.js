import React, { Component } from "react";
import ParticlesBg from 'particles-bg'
import '../../App.css';
import {NavBtnLink} from "../../components/Sidebar/NavBarElements"

class Homepage extends Component {
  render () {
    return (

      <section id="home" className="homepage">

      <ParticlesBg color="#719FB0" type="cobweb" bg={true} />

      <div>

      <div className="center">

        <div className="hometext">Hi! I'm Juheon.<br></br>I'm a high school student and an avid software developer.</div>

        <NavBtnLink to='/timestable'>Check out my app!</NavBtnLink> 

      </div>

      </div>

      </section>
    )
  }
}

export {Homepage};

// F788FF