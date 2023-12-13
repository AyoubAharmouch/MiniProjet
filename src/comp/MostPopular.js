import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import Card from 'react-bootstrap/Card';
import '../css/popular.css';

export default function MostPopular() {
  const [pop,setpop]=useState([
    {
      img: "https://images.unsplash.com/photo-1508724388512-7fda6cbd4b3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "rallye ",
      star: <AiFillStar className="rating-star" />,
      reviews: "(2373 reviews)",
      newPrice: "2000 MAD",
      category: "mountain ",
    },
    {
      img: "https://media.istockphoto.com/id/1351289644/photo/buggy-car-on-the-sand-dunes.jpg?s=2048x2048&w=is&k=20&c=eVQWtmeJuJyqBhKg-wmw643eRpUIAiFFY5R4OdF0XP0=",
      title: "Buggy",
      star: <AiFillStar className="rating-star" />,
      reviews: "(9823 reviews)",
      newPrice: "1800 MAD",
      category: "desert ",
    },
    {
      img: "https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?s=2048x2048&w=is&k=20&c=qB3W5QPBAij3pW9OdYxDomXQwPbUOzkM7o8FjOp7Vyc=",
      title: "Kayak",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "1500 MAD",
      category: "sea",
    }
  ])
  return (
    <div>
        <h1>Most Popular </h1>
        <div className='popular row'> 
          {
            pop.map((pup,i)=>{
              return( <Card className='col-lg-3 -md-6 col-sm-10 pc' key={i} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pup.img} />
              <Card.Body>
                <Card.Title>{pup.title}</Card.Title>
                <Card.Text>
                  {pup.star} {pup.star}{pup.star}{pup.star}{pup.star}{pup.reviews} <br />
                  {pup.newPrice}
                </Card.Text>
              </Card.Body>
            </Card>)
            })
          }
        </div>
        <div className='opi row'>

        <div className='col-lg-4'>
        <h2>Embark on Adventures with Us!</h2>
        <p>
          Whether it's exploring hidden trails, scaling majestic mountains, or
          discovering serene beaches, our adventure website is your gateway to
          thrilling experiences.
        </p>
      </div>
      <div className='col-lg-4'> 
        <img
          src="https://i.pinimg.com/564x/34/9d/45/349d45d4bb3e76c72a4475b9163de5cc.jpg" // Replace with the actual path to your image
          alt="Adventure"
          style={{ "width": '30vh', "height": '40vh' }}
        />
      </div>
        </div>




        <div className='opi row'>

<div className='col-lg-4'> 
  <img
    src="https://i.pinimg.com/564x/76/04/4d/76044da7888b707a9c12d63661bc42c5.jpg" 
    alt="Adventure"
    style={{ "width": '30vh', "height": '40vh' }}
  />
</div>
<div className='col-lg-4'>
    <h2>Descovre more !!</h2>
    <p>
    In the quiet embrace of dawn, the sun paints the sky in hues of pink and gold. A gentle breeze whispers through the leaves, awakening the world to a new day. Birds orchestrate a melody, filling the air with the sweet symphony of nature's awakening. Dew-kissed petals glisten in the morning light, a testament to the beauty that unfolds with each sunrise. As the day unfolds, moments of serenity interweave with the rhythm of life, creating a tapestry of experiences. In the stillness of twilight, the world takes a breath, preparing for the nocturnal ballet of stars. Under the moon's gentle glow, dreams take flight, carried by the promise of a new tomorrow
    </p>
</div>
</div> 
    </div>
  )
}
