import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./favlist.css"

export default function Favlist({ fav,setfav }) {
  const handleRemoveItem = (index) => {
    const updatedFav = fav.filter((item, i) => i !== index);  // Ensure fav is defined before using filter
    setfav(updatedFav);
  }
  return (
    <div>
 <div className="logo-container">
          <h1><i class="fa-solid fa-heart"></i> <sup>{fav.length}</sup></h1>
          <h2>wishes</h2>
        </div>
        <section className='d-flex row justify-content-center' style={{"margin-left":"2rem" , "margin-right":"2rem"}}>
      {fav.map((u, i) => (
        <Card key={i} className='cardl col-lg-12 col-md-6 col-sm-4  ' style={{ width: '18rem' }}>
          <Card.Img variant="top" className='card-img' src={u.img} />
          <Card.Body>
            <Card.Title className='card-title'>{u.title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className='ratings-star'>{u.star}{u.star}{u.star}</ListGroup.Item>
            <ListGroup.Item className='card-review'>{u.reviews}</ListGroup.Item>
            <ListGroup.Item className='card-price'>{u.newPrice}</ListGroup.Item>
            <ListGroup.Item className=''>{u.category}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            {/* <Button variant="outline-danger"><FaHeart /></Button> */}
            <Button variant="outline-danger"  onClick={() => handleRemoveItem(i)} ><FaRegHeart /></Button>
          </Card.Body>
        </Card>
      ))}
      </section>
    </div>
  );
}
