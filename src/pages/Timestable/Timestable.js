import React, { Component } from "react";
import '../../App.css';
import ParticlesBg from 'particles-bg';
// import TimesNav from '../../components/TimesNav';
import video from "../../components/videos/Video.mov";
import "./Timestable.css";
import {Link} from "react-router-dom";
import mylogo from "../../components/images/mylogo.png"

class Timestable extends Component {
  render () {

    return (
    <section id="timestable">

        <Link to = "/" smooth={"true"} duration={500} style={{cursor:'pointer'}}>
        <img className="logo" src={mylogo} alt=""/>
        </Link>

      <ParticlesBg color="#c22085" type="cobweb" bg={true} />

      <div className="container">
        <div id="outer">
        <video autoPlay loop muted src={video} width="100%" />
        </div>

        <h1>Times Table World App</h1>

        <h2> 

        Having a hard time doing mental math? Times Table World offers learners a 
        platform to practice answering multiplication questions up to the 19 times table! 
        <br/><br/>
        Up for a challenge? Beat your personal bests! 
        Do mental math the easy and fun way with Times Table World!

        <br/><br/>

        Contact: julieerhee@gmail.com 

        </h2>

      </div>

    </section>
    )
  }
}

export {Timestable};
