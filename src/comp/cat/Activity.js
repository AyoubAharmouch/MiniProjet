import React,{useState} from 'react'
import "./Activity.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Side from '../../sidbar/Side';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';



export default function Activity({act,fav,addFav}) {
  
  const [Fbtn,setFbtn] = useState(false);
        let once = Fbtn? "" : "disabled";
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
    <div className='card-container justify-content-center '>

      {
        act.filter((item)=>{
          return search.toLowerCase() === "" ?item : (item.title.toLowerCase().includes(search)|| item.category.toLowerCase().includes(search) );
        }

        ).map((actItem,actindex)=>{
          return(
            <div key={actindex} >
              <Card className='card ' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='card-img' src={actItem.img} />
      <Card.Body>
        <Card.Title className='card-title'>{actItem.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='ratings-star'>{actItem.star}{actItem.star}{actItem.star}</ListGroup.Item>
        <ListGroup.Item className='card-review'>{actItem.reviews}</ListGroup.Item>
        <ListGroup.Item className='card-price'>{actItem.newPrice}</ListGroup.Item>
        <ListGroup.Item className=''> {actItem.category} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button href="../Contact" variant="outline-success">try it now </Button>
      <Button onClick={() => addFav(actItem)} variant="outline-danger">
            Add To Wish List
          </Button>
      

      </Card.Body>
    </Card>
            </div>
          )
          
        })
      }
    </div>
    </>
  )
}

{/* {
  addFav? (
    <Button onClick={() => addFav(actItem)} variant="outline-danger">
      Add To Wish List
    </Button>
  ) :<Button onClick={()=>addFav(actItem)} variant="outline-danger" disabled={true} >
  Add To Wish List
  </Button>
} */}