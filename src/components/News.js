import { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./loader";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: [],
      loading: false,
      page: 1,
      category: this.props.category,
      totalResults: 0,
    };
  }
  async fetchNews(pageNumber) {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?category=${this.state.category}&country=${this.props.country}&apiKey=ee755bf42b6747f286ae256862715bfb&pageSize=${this.props.pageSize}&page=${pageNumber}`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      newsArticles: data.articles,
      loading: false,
      totalResults: data.totalResults,
      page: pageNumber,
    });
  }
  handlePagination = async (buttonType) => {
    if (buttonType === "previous") {
      await this.fetchNews(this.state.page - 1);
    } else {
      await this.fetchNews(this.state.page + 1);
    }
  };
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    await this.fetchNews(this.state.page);
  }
  capitalizeCategory = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  render() {
    return (
      <>
        <h2 className="text-center" style = {{color:this.props.mode === "light" ? "black": "white"}}>
          News Monkey - Top{" "}
          <strong>{this.capitalizeCategory(this.state.category)}</strong> News
        </h2>
        {this.state.loading && (
          <div className="text-center">
            <Loader />
          </div>
        )}
        {!this.state.loading && this.state.newsArticles.length > 0 && (
          <div className="row">
            {this.state.newsArticles.map((element) => {
              return (
                <div className="col-md-3 my-3" key={element.url}>
                  <NewsItem
                    mode={this.props.mode}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    url = {element.url}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className={`btn btn-${
              this.props.mode === "light" ? "dark" : "light"
            } btn-sm`}
            type="button"
            onClick={() => this.handlePagination("previous")}
          >
            Previous &larr;
          </button>
          <button
            disabled={
              this.state.totalResults <= this.state.page * this.props.pageSize
            }
            className={`btn btn-${
              this.props.mode === "light" ? "dark" : "light"
            } btn-sm`}
            type="button"
            onClick={() => this.handlePagination("next")}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
