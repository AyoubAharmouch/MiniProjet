import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";


export default function ProductList({product , addToCart}) {
    const [search,setsearch]=useState("");

  return (
    <>
    <Form className="d-flex res justify-content-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={((e)=>(setsearch(e.target.value)))}
            />
            
          </Form>
   
    <div className='d-flex row ms-3  '>

        {
            product.filter((item)=>{
                return search.toLowerCase() === "" ?item : ( item.name.toLowerCase().includes(search) );
              }
      
              ).map((produit)=>{
                return(
                    <Card style={{ width: '18rem' }} className='col-lg-4 col-md-6 col-sm-11'> 
                        <Card.Img variant="top" src={produit.img} />
                        <Card.Body>
                            <Card.Title>{produit.name}</Card.Title>
                            <Card.Text>
                            {produit.company} <br />
                            {produit.price}$
                            </Card.Text>
                            <Button variant="success" onClick={( ) => addToCart(produit) }>
                                Add to cart
                            </Button>
                        </Card.Body>
    </Card>
                )

            })
        }
    </div>
    </>
  )
}
