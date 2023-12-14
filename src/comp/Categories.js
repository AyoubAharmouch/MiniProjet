import React, { useState } from "react";
import Nav from "./NavG";
import Hero from "./hero";
import Activity from "./cat/Activity";
import Side from "../sidbar/Side";
import { AiFillStar } from "react-icons/ai";
import Favlist from "./cat/Favlist";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function Categories() {

  const [act, setact] = useState([
    {
      img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Surf",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "250 MAD",
      category: "sea",
    },
    {
      img: "https://images.unsplash.com/photo-1630879937467-4afa290b1a6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "parachute",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "600 MAD",
      category: "sky",
    },

    {
      img: "https://images.unsplash.com/photo-1508724388512-7fda6cbd4b3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "rallye ",
      star: <AiFillStar className="rating-star" />,
      reviews: "(2373 reviews)",
      newPrice: "2000 MAD",
      category: "mountain ",
    },
    {
      img: "https://images.unsplash.com/photo-1559677624-3c956f10d431?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bungee jumping",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "200 M    AD",
      category: "sky",
    },
    {
      img: "https://media.istockphoto.com/id/1358858500/photo/alpine-skiing-above-lake-tahoe-on-the-nevada-california-border-usa.jpg?s=2048x2048&w=is&k=20&c=JePT1suYRv6L6C2bwBt2jnKm_MjSGWYOOcAxozz8nDI=",
      title: "skiing",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "750 MAD",
      category: "mountain",
    },
    {
      img: "https://images.unsplash.com/photo-1534296264129-b318f8140c27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "boat",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "280 MAD",
      category: "sea",
    },
    {
      img: "https://images.unsplash.com/photo-1605762566242-bd1c73c885b0?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "mountain",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "1050 MAD",
      category: "mountain",
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
      img: "https://images.unsplash.com/photo-1566682372561-2273e5226306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hot air balloons",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "2500 MAD",
      category: "sky",
    },

    {
      img: "https://images.unsplash.com/photo-1563499779966-6e4a52eb1ee4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "surf using air",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "700 MAD",
      category: "sea",
    },

    {
      img: "https://images.unsplash.com/photo-1598992269462-4e9a96cb539e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Zing Zipline",
      star: <AiFillStar className="rating-star" />,
      reviews: "(189 reviews)",
      newPrice: "460 MAD",
      category: "mountain",
    },

    {
      img: "https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?s=2048x2048&w=is&k=20&c=qB3W5QPBAij3pW9OdYxDomXQwPbUOzkM7o8FjOp7Vyc=",
      title: "Kayak",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "1500 MAD",
      category: "sea",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/04/27/07/26/rock-climbing-2264698_1280.jpg",
      title: "mountain",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "2050 MAD",
      category: "mountain",
    },
    {
      img: "https://images.unsplash.com/photo-1623346696997-00ed9df73f61?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "jetski",
      star: <AiFillStar className="rating-star" />,
      reviews: "(12123 reviews)",
      newPrice: "700 MAD",
      category: "sea",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/07/05/18/35/aircraft-1499171_1280.jpg",
      title: "plane",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "7500 MAD",
      category: "sky",
    },
    {
      img: "https://media.istockphoto.com/id/1145064928/photo/tourist-riding-camel-in-desert.jpg?s=2048x2048&w=is&k=20&c=2XCDTAI81Pjun3kAweUuyNYgTkzcsgJxR0eylqfPsok=",
      title: "desert ",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "350 MAD",
      category: "desert ",
    },

    {
      img: "https://media.istockphoto.com/id/1313410807/photo/happy-friends-driving-quads-in-the-desert-at-sunset.jpg?s=2048x2048&w=is&k=20&c=2x7jjLPiJ__Hu9LGzYUH-lz9T2WoP0-a-CJZr9eQcN8=",
      title: "quads",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "950 MAD",
      category: "desert",
    },
    {
      img: "https://images.unsplash.com/photo-1456613820599-bfe244172af5?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "montain",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
      newPrice: "1080 MAD",
      category: "mountain",
    },
    {
      img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3d/08/e4.jpg",
      title: "equitation sur plage",
      star: <AiFillStar className="rating-star" />,
      reviews: "(5993 reviews)",
      newPrice: "120MAD",
      category: "sea",
    },{
      img: "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Diving",
      star: <AiFillStar className="rating-star" />,
      reviews: "(593 reviews)",
      newPrice: "900MAD",
      category: "sea",
    }
  ]);

  const [fav, setfav] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const addFav = (data) => {
    if (!fav.includes(data)) {
      setfav([...fav, data]);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  };
  return (
    <div>
      {/* <Nav count={fav.length} /> */}
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1618083707368-b3823daa2726?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title1="choose your next adventure"
      />
      {/* <Recommanded  /> */}
      <Stack direction="horizontal" gap={2}>
      {showMessage && <Badge  style={{"backgroundColor":"red" , "position":"fixed" }} bg="danger">Added to wishlist!</Badge> }
      </Stack>
        <Side fav={fav} />
          <Favlist fav={fav} setfav={setfav} />

      <Activity fav={fav} act={act} setfav={setfav}  addFav={addFav} />

      <Footer />
    </div>


  );
}
