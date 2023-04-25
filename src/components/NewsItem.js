import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props; // to call by props in class based component this. is used

    return (

      <div className='my-4'>
        <div class="card" style={{ width: "18rem;" }}>
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}
          </span>
          <img src={!imgUrl ? "https://imgs.search.brave.com/tisW0bNV5BSyBqC7YKNDl5nRPZCnSpekgLwfVIuJwnE/rs:fit:841:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/dGdYNGxFUXNPdmJk/MHhsN0tYLTNRSGFF/TCZwaWQ9QXBp" : imgUrl} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">Author : {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            {/* // to show dime and author from bootstap and to convert in GMT formate */}
            <a href={newsUrl} className="btn btn-sm btn-warning">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem