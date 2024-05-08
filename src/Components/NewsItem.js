import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imageUrl,url,author,date,source}=this.props;
    return (
      <div>
        <div className="card">
          <div style={
            {
              display:'flex',
              justifyContent:'flex-end',
              right:'0',
              position:'absolute'
            }
          }>
          <span className="badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://etinsights.et-edge.com/wp-content/uploads/2024/03/shutterstock_1501269425.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            style={{ height: "170px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title : ""}...</h5>
            <p className="card-text">{description ? description : ""}...</p>
            <p className="card-text">
              <small className="text-muted">
                by {!author ? "Unknown" : author} at{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem