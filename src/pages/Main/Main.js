import React, {Component} from "react";
import { Homepage } from "../Homepage/Homepage";
import { Resume } from "../Resume/Resume";
import { About } from "../About/About";
import Sidebar from '../../components/Sidebar';


class Main extends Component {
    render () {
      return (
        <>
        <Sidebar />
        <div className="com-div">
        <Homepage/>
        <About/>
        <Resume/>
        {/* <Projects/> */}
        {/* <Links/> */}
        </div>
        </>
      )
    }
  }
  
export {Main};
  