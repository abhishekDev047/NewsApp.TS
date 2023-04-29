import React,{useEffect, useState} from 'react';
import NewsItem from './NewsItem';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';
import { Dropdown } from 'react-bootstrap';
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const News = ()=> {
    const [category, setCategory] = useState('general');
    const [country, setCountry] = useState('in');

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
    };
    
    const [items, setItems] = useState<item[]>([])
    const [isLoading, setLoading] = useState(true)
    const getNews = async()=>{
      let key1:string= '2e35f49b697b4944b5fef967dac23f05';
      let key2:string= '8d353b32aba04f6b80823ec9f45871a1';
        setLoading(true);
        let url:string= `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${key2}`;
        let response = await fetch(url);
        let data = await response.json();
        setItems(data.articles);
        setLoading(false)
       
    }
    useEffect(() => {
    getNews()
    }, [category,country])
    
  return (
    <div className='container'>
            <Navbar bg="light" expand="lg" fixed="top">
      <Container >
      <Navbar.Brand>NewsApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
    <Button variant='secondary' className='m-2' onClick={()=>setCategory('general')}>
    All
  </Button>
  <Button variant='secondary'  className='m-2' onClick={()=>setCategory('business')}>
     Business
  </Button>
  <Button variant='secondary'  className='m-2' onClick={()=>setCategory('entertainment')}>
     Entertainment
  </Button>
  <Button variant='secondary'  className='m-2' onClick={()=>setCategory('health')}>
     Health
  </Button>
  <Button variant='secondary' className='m-2' onClick={()=>setCategory('science')}>
     Science
  </Button>
  <Button variant='secondary'  className='m-2' onClick={()=>setCategory('sports')}>
     Sports
  </Button>
  <Button variant='secondary'  className='m-2'  onClick={()=>setCategory('technology')}>
     Technology
  </Button>
          </Nav>
          </Navbar.Collapse>
          {/* <Nav> */}
               <Dropdown className='me-auto'>
      <Dropdown.Toggle variant="light" id="dropdown-basic" className='fs-3'>
       <BsGlobeCentralSouthAsia/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item> <Button variant='secondary' onClick={()=>setCountry('in')} >IN</Button> </Dropdown.Item>
        <Dropdown.Item> <Button variant='secondary' onClick={()=>setCountry('us')} >US</Button></Dropdown.Item>
        <Dropdown.Item>  <Button variant='secondary' onClick={()=>setCountry('ca')} >CA</Button></Dropdown.Item>
        <Dropdown.Item> <Button variant='secondary' onClick={()=>setCountry('gb')}>UK</Button></Dropdown.Item>
        <Dropdown.Item> <Button variant='secondary' onClick={()=>setCountry('sa')} >SA</Button></Dropdown.Item>
        <Dropdown.Item> <Button variant='secondary' onClick={()=>setCountry('au')} >AUS</Button></Dropdown.Item>
        <Dropdown.Item> <Button variant='secondary' onClick={()=>setCountry('nz')} >NZ</Button></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
          {/* </Nav> */}
       
      </Container>
    </Navbar>

    <div className='container pt-4 mt-5'> <h3>Top Headlines for {category.toUpperCase()} <i>{country}</i></h3>
 
    <hr/>
    </div>

    <div className='d-flex justify-content-around flex-wrap'>
            {isLoading?(<div className='container d-flex justify-content-center'>
                <Spinner animation="border" className='fs-3' role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
            </div>):
            ( items.map((item:item,index:number)=>(
            <NewsItem key={index} imgUrl={item.urlToImage} title={item.title} desc={item.description} pub={item.publishedAt} link={item.url} source={item.source.name} text={item.content}/>)
        ))} 
    </div>
    </div>
  )
}

export default News;