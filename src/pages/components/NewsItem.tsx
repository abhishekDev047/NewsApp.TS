import { title } from 'process';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Image from 'next/image';


    interface NewsItemProp{
        imgUrl: string,
        title:string|null,
        desc:string|null,
        pub: string|null,
        link:string,
        source:string|null
    }
function NewsItem({imgUrl,title,desc,pub,link,source}:NewsItemProp) {
  return (
    <Card style={{ width: '18rem' }} className='my-2'>
      <Card.Img variant="top" src={imgUrl}  alt='NewsApp'/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Badge bg="dark">{source}</Badge>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary"><a href={link}>Read</a></Button>
      </Card.Body>
      <Card.Footer>
          <small className="text-muted">{pub}</small>
        </Card.Footer>
    </Card>
  );
}
export default NewsItem;