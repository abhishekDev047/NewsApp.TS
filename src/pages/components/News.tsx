import React,{useEffect, useState} from 'react';
import NewsItem from './NewsItem';

const News = () => {
    interface item {
            author:string|null,
            content:string|null,
            description:string|null,
            publishedAt:string|null,
            source:{
                id:any|null,
                name:string|null
            },
            title:string|null,
            url:string,
            urlToImage:string
    }
    const [category, setCategory] = useState('business')
    const [items, setItems] = useState<item[]>([])
    const getNews = async()=>{
        let url:string= `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=2e35f49b697b4944b5fef967dac23f05`;
        let response = await fetch(url);
        let data = await response.json();
        setItems(data.articles)
    }
    console.log(items)

    useEffect(() => {
    getNews()
    }, [category])
    
  return (
    <div>
        {items.map((item:item,index:number)=>(
            <NewsItem key={index} imgUrl={item.urlToImage} title={item.title} desc={item.description} pub={item.publishedAt} link={item.url} source={item.source.name}/>
        ))}
        
    </div>
  )
}

export default News;