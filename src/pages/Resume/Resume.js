import React, { Component } from "react";
import '../../App.css';
import './Resume.css';

class Resume extends Component {
  render () {
    return (
      <section id="resume" className="resume">
        
    <div className="container">

     <div className="full-name">
      <span className="first-name">Resume</span> 
    </div>
    <br/>
    <br/>
    <br/>
   <div className="details">
    <div className="section">
      <div className="section__title">Experience</div>
      <div className="section__list">
        <div className="section__list-item">
          <div className="left">
            <div className="name">TA for Computer Science Class</div>
            <div className="addr">International School Manila</div>
            <div className="duration">2020-2023</div>
          </div>
          <div className="right">
            <div className="name">Translating</div>
            <div className="desc">Korean - English</div>
          </div>
        </div>
                <div className="section__list-item">
          <div className="left">
            <div className="name">Woolgathering</div>
            <div className="addr">Manila, Philippines</div>
            <div className="duration">December 2020 - Now</div>
          </div>
          <div className="right">
            <div className="name">Creative Writing</div>
            <div className="desc">Poetry, short story publications</div>
          </div>
        </div>

      </div>
    </div>
    <div className="section">
      <div className="section__title">Education / Certificates</div>
      <div className="section__list">
        <div className="section__list-item">
          <div className="left">
            <div className="name">International School Manila</div>
            <div className="addr">Manila, Philippines</div>
            <div className="duration">Graduating class 2023</div>
          </div>
          <div className="right">
            <div className="name">Java, Python, Javscript</div>
            <div className="desc">Certificates from HackerRank</div>
          </div>
        </div>
        <div className="section__list-item">
          <div className="left">
            <div className="name">USACO</div>
            <div className="addr">Gold Division</div>
            <div className="duration">Bronze Perfect Scorer (1000/1000)</div>
          </div>
          {/* <div className="right">
            <div className="name">Fr developer</div>
            <div className="desc">did This and that</div>
          </div> */}
        </div>

      </div>
  </div>
     <div className="section">
      <div className="section__title">Projects</div> 
       <div className="section__list">
         <div className="section__list-item">
           <div className="name">Times Table World App</div>
           <div className="text">IOS app created with SwiftUI that allows you to improve and test your basic multiplication skills, from two times table to nineteen times table.</div>
         </div>

         <div className="section__list-item">
           <div className="name">This Personal Portfolio</div>
           <div className="text">Developed a personal portfolio with React JS.</div>
         </div>
         
         <div className="section__list-item">
              <div className="name">Woolgathering</div>
          <div className="text">Current website developer for Woolgathering Website, created with only HTML, CSS, and Javascript.
           </div>
         </div>
       </div>
    </div>
     <div className="section">
     <div className="section__title">
       Interests
       </div>
       <div className="section__list">
         <div className="section__list-item">
                  Swimming, cross country, badminton, programming, reading, writing, and many more!
          </div>
       </div>
     </div>
     </div>
  </div>
  </section>
    )
  }
}

export {Resume};
