import React, { Component } from "react";
import '../../App.css';
import "./About.css"

class About extends Component {
  render () {

    return (

      <section id="about" className="about">

      <div className = "about-wrapper">

      <div className = "about-left">
        <div className = "about-left-content">
          <div>
            <div className = "shadow">
              <div className = "about-img">
                <img src = "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png" alt = "about image"/>
              </div>
            </div>
            <h2>Juheon Rhee</h2>
            <h3>julieerhee@gmail.com</h3>
          </div>
        </div>
      </div>

      <div className = "about-right">

        <h2>About <span>Me</span></h2>

        <div className = "about-para">
          <p>Hi! I’m Juheon, and I’m currently a Junior in high school. 
            I’m really into coding and computer science in general. 
            I also like to write, and I have a few creative writing publications. 
            You can check it out on my links section. </p>
          <p>Recently I’ve been really into IOS development, 
            and I’ll be publishing my first app on the AppStore soon. </p>
        </div>

        <div className = "about-btns">
          <button type = "button" className="btn btn-white">Download Resume</button>
          <button type = "button" className="btn btn-white"><a href="https://github.com/jjliewie" style={{textDecoration:"none", color:"white"}} >Github</a></button>
        </div>

      </div>
    </div>

      </section>
    )
  }
}

export {About}
