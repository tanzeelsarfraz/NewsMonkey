import { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./loader";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: [],
      loading: true,
      page: 1,
      category: this.props.category,
      totalResults: 0,
    };
  }
  async fetchNews(pageNumber) {
    try {
      this.props.setLoaderBarState(10);
      const url = `https://newsapi.org/v2/top-headlines?category=${this.state.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${pageNumber}`;
      let response = await fetch(url);
      this.props.setLoaderBarState(30);

      let data = await response.json();
      this.props.setLoaderBarState(70);
      this.setState({
        newsArticles: data.articles,
        totalResults: data.totalResults,
        page: pageNumber,
        loading: false,
      });
      this.props.setLoaderBarState(100);
    } catch {
      this.setState({
        newsArticles: [],
        totalResults: 0,
        page: pageNumber,
        loading: false,
      });
    }
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
  fetchMoreData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?category=${
        this.state.category
      }&country=${
        this.props.country
      }&apiKey=${this.props.apiKey}&pageSize=${
        this.props.pageSize
      }&page=${this.state.page + 1}`;
      let response = await fetch(url);
      let data = await response.json();
      this.setState({
        newsArticles: this.state.newsArticles.concat(data.articles),
        totalResults: data.totalResults,
        page: this.state.page + 1,
      });
    } catch {
      this.setState({
        newsArticles: [],
        totalResults: 0,
      });
    }
  };
  render() {
    return (
      <>
        <h2
          className="text-center"
          style={{ color: this.props.mode === "light" ? "black" : "white" }}
        >
          News Monkey - Top{" "}
          <strong>{this.capitalizeCategory(this.state.category)}</strong> News
        </h2>
        {this.state.loading && (
          <div className="text-center">
            <Loader />
          </div>
        )}
        <InfiniteScroll
          dataLength={this.state.newsArticles.length}
          next={this.fetchMoreData}
          hasMore={this.state.newsArticles.length != this.state.totalResults}
          loader={
            <div className="text-center">
              <Loader />
            </div>
          }
          scrollableTarget="scrollableDiv"
        >
          {this.state.newsArticles.length > 0 && (
            <div className="container">
              <div className="row">
                {this.state.newsArticles.map((element, index) => {
                  return (
                    <div className="col-md-3 my-3" key={index}>
                      <NewsItem
                        mode={this.props.mode}
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageUrl={element.urlToImage}
                        url={element.url}
                        author={element.author ? element.author : "Unknown"}
                        modifiedDate={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
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
        </div> */}
      </>
    );
  }
}
