import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import Marquee from "./components/Marquee"
import Profiles from "./components/Profiles"
import Wall from "./components/Wall"
import Charts from "./components/Charts"
import Tables from "./components/Tables"
import Settings from "./components/Settings"

function App() {
  return (
    <Router>
      <div> 
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{backgroundColor: "white"}}>
            <Route path="/tables" exact component={Tables} />
            <Route path="/charts" exact component={Charts} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/wall" exact component={Wall} />
            <Route path="/profiles" exact component={Profiles} />
            <Route path="/marquee/:text" exact component={Marquee} />
            <Route path="/profile/:id" exact component={Profile} />
            <Route path="/" exact component={Dashboard} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
