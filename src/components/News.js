import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

const News=(props)=> {

  const [articles, setArticles]=useState([])
  const [loading, setLoading]=useState([true])
  const [page, setPage]=useState([1])


   const updateNews= async ()=>{
      props.setProgress(10);  //this is for loading bar
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9e92eb74f4e547a7b50987baa0246b91&page=${page}`;
      setLoading(true);
      let data= await fetch(url);
      props.setProgress(30);  //this is for loading bar
      let parseData= await data.json();
      props.setProgress(70);   //this is for loading bar
      setArticles(parseData.articles)
      setLoading(false)
      props.setProgress(100);   //this is for loading bar

  }

      useEffect(() => {
        updateNews();

      }, [])
 
    

   const handleNextClick= async ()=>{
  
    setPage(page+1)
      updateNews()

    }

    const handlePreviousClick= async ()=>{
  
     setPage(page+1)
        updateNews()
    }



 
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:"35px 0px"}}>Top HeadLines</h2>
        {loading && <Spinner/>}
        <div className='row'>
        {!loading && articles.map((element)=>{
          return <div className='col-md-4' key={element.url} >
           <NewsItem title={element?element.title.slice(0,40):""} description={element.description?element.description.slice(0,50):""} imageUrl={element.urlToImage}
           newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
           </div>

        })}
       
      </div>

      <div className="container d-flex justify-content-between"> 
      <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePreviousClick}>&larr; Previous</button>
      <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
      </div>
      </div>
    )
  }


News.defaultProps = {
  country: "in",
  category: "general"   //initially general is set
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string  //this is for category news

}

export default News