import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps={
      country:"in",
      pageSize:"6",
      category:"general",
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

   submit(text)
  {
    console.log(text);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title=`${this.props.category}-NewsMonkey`;
  }

  async newsUpdate(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
     this.props.setProgress(30);
    let parsedData = await data.json();
     this.props.setProgress(60);
    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading: false,
    });
     this.props.setProgress(100);
  }

  async componentDidMount() {
    this.newsUpdate();
  }

  // handlePrevious = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.newsUpdate();
  // };

  // handleNext = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.newsUpdate();
  // }

  fetchMoreData=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({
      page: this.state.page + 1,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  }


  render() {
    return (
      <>
          <h2 className=" mb-4 text-center" style={{marginTop:"90px"}}>News Buddy - main {this.props.category} highlights</h2>
          {this.state.loading&&<Loading />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.articles.length <= this.state.totalResults&&<Loading />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-3 my-3" key={element.url}>
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        url={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            style={{ width: "100px" }}
            onClick={this.handlePrevious}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 ===
              Math.round(this.state.totalResults /this.props.pageSize+ 1)
            }
            className="btn btn-dark"
            style={{ width: "100px" }}
            onClick={this.handleNext}
          >
            Next
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
