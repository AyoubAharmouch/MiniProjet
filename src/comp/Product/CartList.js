import React,{useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function CartList({cart}) {
    const  counter=useSelector(state => state.qte)
    const dispatch =useDispatch();
    const incf =()=>{
        dispatch({
            type : 'inc'
        })
    }
    const decf =()=>{
        dispatch({
            type : 'dec'
        })
    }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    const [CART,setcart] =useState([])
    useEffect(()=>{
        setcart(cart)
    },[cart])
  return (
    <div className='d-flex row'>
        {
            CART.map((produit,cindex)=>{
                return(
                    <Card  style={{ width: '18rem' }} className='col-lg-4 col-md-6 col-sm-11'> 
                        <Card.Img variant="top" src={produit.img} />
                        <Card.Body>
                            <Card.Title>{produit.name}</Card.Title>
                            <Card.Text>
                            {produit.price * produit.qte} $<br />

                            <Button variant="success" onClick={()=>{
                                const _CART=CART.map((item,index)=>{
                                    return cindex === index ? {...item , qte : item.qte +1} : item
                                }) 
                                setcart(_CART)
                            }}>+</Button>
                            {produit.qte}
                            <Button variant="secondary"onClick={()=>{
                                const _CART=CART.map((item,index)=>{
                                    return cindex === index ? {...item , qte : item.qte >0 ?item.qte -1 : 0} : item
                                }) 
                                setcart(_CART)
                            }}>-</Button>

                            </Card.Text>
                            
                        </Card.Body>
    </Card>
                )
            })
        }
        <p> <h3>total:</h3>
            {
                CART.map(item =>item.price * item.qte) .reduce((total,value)=> total+value ,0)
            }$
        </p>
        <div>
        <>
      <Button variant="primary" onClick={handleShow}>
        pay now
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>pay</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <>
      <InputGroup className="mb-3">
       
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </InputGroup>

      <InputGroup className="mb-3">
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
        <Form.Control
          placeholder="adresse"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        
      </InputGroup>

      <Form.Label htmlFor="basic-url">Telephone :</Form.Label>
      <InputGroup className="mb-3">
        
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text id="basic-addon2">{
                CART.map(item =>item.price * item.qte) .reduce((total,value)=> total+value ,0)
            }</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        
      </InputGroup>
      <Form.Label htmlFor="basic-url">nr card :</Form.Label>
      <InputGroup className="mb-3">
        
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup><Form.Label htmlFor="basic-url">date :</Form.Label>
      <InputGroup className="mb-3">
        
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <Button type="submit"onClick={()=>alert("pay succesufly")} href="./home">Submit form</Button>
    </>
        </Offcanvas.Body>
      </Offcanvas>
    </>
        </div>
    </div>
  )
}
