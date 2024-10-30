import { Component } from "react";
import img from "./loader.gif";
export default class Loader extends Component {
  render() {
    return <img className="my-3" src={img}></img>;
  }
}
