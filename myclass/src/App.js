import React from "react";
import "./index.css";
// import Newcomp from "./components/Newcomp";
// import MyGame from "./components/MyGame";
// import ImageFlow from "./components/ImageFlow";
// import Card from "./components/Card"
// import Homescreen from "./components/myBuild/Homescreen";
// import Headernav from "./components/myBuild/Routerstudy/Headernav";
import styled from "styled-components"
// import AboutPage from "./components/Routerstudy/AboutPage";
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
// import HomePage from "./components/Routerstudy/HomePage";
// import HelpPage from "./components/Routerstudy/HelpPage";
// import Headernav from "./components/Routerstudy/Headernav";
// import ContactPage from "./components/Routerstudy/ContactPage";
import Slider1 from "./components/Slider1";
import Mybuild from "./components/build/Mybuild";
import Mypage from "./components/Assignment/Mypage";

const App = () => {
  return (
    <Holder>
      <Mypage/>
      {/* <Mybuild/> */}
      {/* <Slider1/> */}
    {/* <Router> */}
      {/* <Newcomp/> */}
      {/* <MyGame/> */}
      {/* <ImageFlow/> */}
      {/* <Card/> */}
      {/* <Homescreen/> */}
      {/* <Headernav/> */}
      {/* <Headernav/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/contact" component={ContactPage}/>
        <Route exact path="/help" component={HelpPage}/>
        <Route exact path="/about" component={AboutPage}/>
      </Switch>
    </Router> */}
    </Holder>
  );
};
export default App

const Holder = styled.body `
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // padding-top: 150px;
`
