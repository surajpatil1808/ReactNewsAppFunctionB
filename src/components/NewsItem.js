import React, { Component } from 'react'

const NewsItem=(props)=> {

 
    let {title,description,imageUrl,newsUrl,author, date, source}=props;
    return (
      <div className="my3">
        <div className="card">
        <div style={{
          display:'flex', justifyContent:'flex-end', position: 'absolute', right:'0'}}>
            <span className="badge rounded-pill bg-danger">{source} </span>
            </div>
            <img src={!imageUrl? "https://thumbs.dreamstime.com/b/news-header-background-title-abstract-colorful-global-map-text-hightech-design-blue-colorful-template-90494676.jpg": imageUrl} className="card-img-top" alt="..." />
             <div className="card-body">

            {/* <h5 className="card-title">{title} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source} </span> </h5> */}
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown" : author} on {new Date (date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
    </div>
      </div>
    )
  }

export default NewsItem