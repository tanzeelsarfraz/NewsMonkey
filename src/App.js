import { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  myName = "Tanzeel";
  pageSize = 10;
  constructor() {
    super();
    this.state = {
      mode: "light",
      progress: 0,
    };
  }
  componentDidMount() {
  }
  handleModeChange = () => {
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
  setLoaderBarState = (progress) => {
    this.setState({
      progress: progress,
    });
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
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <div className="container my-3">
            <Routes>
              <Route
                path="/"
                element={
                  <News
                    setLoaderBarState={this.setLoaderBarState}
                    key="general"
                    mode={this.state.mode}
                    pageSize={this.pageSize}
                    country="us"
                    category="general"
                  />
                }
              ></Route>
              <Route
                path="/business"
                element={
                  <News
                    setLoaderBarState={this.setLoaderBarState}
                    key="business"
                    mode={this.state.mode}
                    pageSize={this.pageSize}
                    country="us"
                    category="business"
                  />
                }
              ></Route>
              <Route
                path="/entertainment"
                element={
                  <News
                    setLoaderBarState={this.setLoaderBarState}
                    key="entertainment"
                    mode={this.state.mode}
                    pageSize={this.pageSize}
                    country="us"
                    category="entertainment"
                  />
                }
              ></Route>
              <Route
                path="/general"
                element={
                  <News
                    setLoaderBarState={this.setLoaderBarState}
                    key="general"
                    mode={this.state.mode}
                    pageSize={this.pageSize}
                    country="us"
                    category="general"
                  />
                }
              ></Route>
              <Route
                path="/health"
                element={
                  <News
                    setLoaderBarState={this.setLoaderBarState}
                    key="health"
                    mode={this.state.mode}
                    pageSize={this.pageSize}
                    country="us"
                    category="health"
                  />
                }
              ></Route>
              <Route
                path="/science"
                element={
                  <News
                    setLoaderBarState={this.setLoaderBarState}
                    key="science"
                    mode={this.state.mode}
                    pageSize={this.pageSize}
                    country="us"
                    category="science"
                  />
                }
              ></Route>
              <Route
                path="/sports"
                element={
                  <News
                    setLoaderBarState={this.setLoaderBarState}
                    key="sports"
                    mode={this.state.mode}
                    pageSize={this.pageSize}
                    country="us"
                    category="sports"
                  />
                }
              ></Route>
              <Route
                path="/technology"
                element={
                  <News
                    setLoaderBarState={this.setLoaderBarState}
                    key="technology"
                    mode={this.state.mode}
                    pageSize={this.pageSize}
                    country="us"
                    category="technology"
                  />
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
