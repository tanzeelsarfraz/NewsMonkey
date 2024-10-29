import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  static defaultProps = {
    title: "News Monkey",
  };
  static propTypes = {
    title: PropTypes.number.isRequired,
  };
  tabs = {
    home: "active",
    business: "inactive",
    general: "inactive",
    health: "inactive",
    science: "inactive",
    sports: "inactive",
    technology: "inactive",
    entertainment: "inactive",
  };
  constructor() {
    super();
    this.state = {
      navItems: this.tabs,
    };
  }

  handleCategoryChange = (tabName) => {
    if (tabName === "business")
      this.setState({
        navItems: {
          home: "inactive",
          business: "active",
          general: "inactive",
          health: "inactive",
          science: "inactive",
          sports: "inactive",
          technology: "inactive",
          entertainment: "inactive",
        },
      });
    else if (tabName === "entertainment")
      this.setState({
        navItems: {
          home: "inactive",
          business: "inactive",
          general: "inactive",
          health: "inactive",
          science: "inactive",
          sports: "inactive",
          technology: "inactive",
          entertainment: "active",
        },
      });
  };
  componentDidMount() {}
  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {this.props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${this.state.navItems.home}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.handleCategoryChange("business")}
                  className={`nav-link ${this.state.navItems.business}`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.handleCategoryChange("entertainment")}
                  className={`nav-link ${this.state.navItems.entertainment}`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.handleCategoryChange("general")}
                  className="nav-link"
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.handleCategoryChange("health")}
                  className="nav-link"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.handleCategoryChange("science")}
                  className="nav-link"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.handleCategoryChange("sports")}
                  className="nav-link"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => this.handleCategoryChange("technology")}
                  className="nav-link"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  onClick={this.props.handleModeChange}
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                  style={{
                    color: this.props.mode === "light" ? "black" : "white",
                  }}
                >
                  Enable {this.props.mode === "light" ? "Dark" : "Light"} mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
