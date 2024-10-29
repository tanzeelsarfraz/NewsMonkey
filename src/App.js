import { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
export default class App extends Component {
  myName = "Tanzeel";
  pageSize = 10;
  constructor() {
    super();
    this.state = {
      mode: "light",
    };
    console.log("App component called");
  }
  componentDidMount() {
    console.log("COmponent DidMountc called from App");
  }
  handleModeChange = () => {
    console.log("on Click event called");
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark",
      });
      document.body.style.backgroundColor = "black";
    } else {
      this.setState({
        mode: "light",
      });
      document.body.style.backgroundColor = "white";
    }
  };
  render() {
    console.log(`Render called from App`);
    return (
      <>
      <Router>
      <Navbar
          mode={this.state.mode}
          handleModeChange={this.handleModeChange}
        />
        <div className="container my-3">
        <Routes>
          <Route path="/" element = {<News key="general"  mode={this.state.mode} pageSize = {this.pageSize} country = "us" category="general" />}></Route>
          <Route path="/business" element = {<News key="business"  mode={this.state.mode} pageSize = {this.pageSize} country = "us" category="business" />}></Route>
          <Route path="/entertainment" element = {<News key="entertainment" mode={this.state.mode} pageSize = {this.pageSize} country = "us" category="entertainment" />}></Route>
          <Route path="/general" element = {<News key="general" mode={this.state.mode} pageSize = {this.pageSize} country = "us" category="general" />}></Route>
          <Route path="/health" element = {<News key="health" mode={this.state.mode} pageSize = {this.pageSize} country = "us" category="health" />}></Route>
          <Route path="/science" element = {<News key="science" mode={this.state.mode} pageSize = {this.pageSize} country = "us" category="science" />}></Route>
          <Route path="/sports" element = {<News key="sports" mode={this.state.mode} pageSize = {this.pageSize} country = "us" category="sports" />}></Route>
          <Route path="/technology" element = {<News key="technology" mode={this.state.mode} pageSize = {this.pageSize} country = "us" category="technology" />}></Route>

        </Routes>
        </div>
      </Router>
        
          
        
      </>
    );
  }
}
