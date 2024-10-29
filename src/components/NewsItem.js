import { Component } from "react";

export default class NewsItem extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div className="card" style = {{backgroundColor:this.props.mode === "light" ? "white": "black", borderColor:this.props.mode === "light" ? "black": "white"}}>
        <img src={imageUrl ? imageUrl : "https://scitechdaily.com/images/Asian-Tiger-Mosquito-Aedes-albopictus.jpg"} style = {{height:"200px"}}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style = {{color:this.props.mode === "light" ? "black": "white"}}>{title.length > 24 ? title.slice(0,24)+"..." : title.length}</h5>
          <p className="card-text" style = {{color:this.props.mode === "light" ? "black": "white"}}>
            {description.length > 64 ? description.slice(0,64)+"...": description}
          </p>
          <a href={url} target = "_blank" className={`btn btn-${this.props.mode === "light" ? "dark" : "light"}`}>
            Read More
          </a>
        </div>
      </div>
    );
  }
}
