import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadlines = () => {

    const[articles,setArticles] =useState([]);

    useEffect(()=>{

        const url =' https://newsapi.org/v2/top-headlines?country=us&apiKey=f0431fdbe4474a31bb0e8cd71ad7c986';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setArticles(data.articles))


    },[])
    return (
        <div>
            
    <h1>Top Headlines:{articles.length}</h1>
    {

        articles.map(article=> <News article={article}></News>)

    }
                                                                                                                                        
            
        </div>
    );
};

export default TopHeadlines;