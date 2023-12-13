import Nav from './comp/NavG'
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './comp/Homeg'
import Categories from "./comp/Categories"
import Contact from './comp/Contactus'
import Avis from './comp/AvisPer'
import Favorite from './comp/fav'



function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Avis" element={<Avis />} />
          <Route path="/Favorite" element={<Favorite />} />
          
          {/* <Route path="/*" element={<h1>404</h1>} /> */}
        </Routes>
    </div>
  );
}

export default App;
