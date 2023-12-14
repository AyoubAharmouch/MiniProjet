import React, { useState } from 'react'
import Hero from '../hero';
import Footer from '../Footer';
import Cart from './Cart';
import ProductList from './ProductList';
import Data from "./Data.json"
import CartList from './CartList';
export default function Product() {

    const [product,setproduct]=useState(Data);
    const [showCart,setshowCart] = useState(false)
    const [cart,setcart]=useState([]);
    const addToCart = (choose) =>{
        setcart([...cart,{...choose,qte:1}])
    }
    const handleshow = (value)=>{
        setshowCart(value)
    }

  return (
    <div>
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title1="Product"
      />
      <Cart cart={cart} handleshow={handleshow} />
      {
        showCart?
        <CartList cart={cart} /> :
        <ProductList  product={product} addToCart={addToCart} />
      }

      <Footer />
    </div>
  )
}
