import { title } from 'process';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import Image from 'next/image';


    interface NewsItemProp{
        imgUrl: string,
        title:string|null,
        desc:string|null,
        pub: string|null,
        link:string,
        source:string|null
        text:string|null
    }
function NewsItem({imgUrl,title,desc,pub,link,source,text}:NewsItemProp) {
    const [lgShow, setLgShow] = useState(false);
  return (
    <Card style={{ width: '18rem' }} className='my-2'>
      <Card.Img variant="top" src={imgUrl}  alt='NewsApp'/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Badge bg="dark">{source}</Badge>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="dark"><a href={link} target='blank'>Read full article</a></Button> 
        <div className='my-1'>
      <Button  variant="dark" onClick={() => setLgShow(true)}>Read more</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {title} <Badge bg="dark">{source}</Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Text>
          {!text?(desc):(text)} <br/>
          <a href={link} target='blank'>Read full article at {source}</a>
          </Card.Text>
        </Card.Body>
      </Card>
        </Modal.Body>
      </Modal>
    </div>
      </Card.Body>
      <Card.Footer>
          <small className="text-muted">{pub}</small>
        </Card.Footer>
    </Card>
  );
}
export default NewsItem;