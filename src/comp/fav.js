// import React from 'react'
// import Nav from './NavG'
// import Hero from "./hero"
// import Favlist from './cat/Favlist'
// import Footer from './Footer';



// export default function Fav() {
  
//   return (
//     <div>
//         <Nav />
//         <Hero
//         cName="hero-mid"
//         heroImg="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         title1="your wish list"
//       />
//       <Favlist fav={fav} />

//       <div>
//       </div>
//       <Footer />

//     </div>
//   )
// }

// Fav.js

import React,{useState} from 'react';
import Nav from './NavG';
import Hero from './hero';
import Footer from './Footer';

export default function Fav() {
  const [bookings, setBookings] = useState([]);

  const handleBookAdventure = (bookingDetails) => {
    // Perform booking logic (send data to the server, update backend, etc.)
    // For now, just add the booking details to the state
    setBookings([...bookings, bookingDetails]);
  }

  return (
    <div>
      <Nav />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title1="your wish list"
      />
      {/* <AdventureDetails adventure={selectedAdventure} onBook={handleBookAdventure} /> */}
      <Footer />
    </div>
  );
}
