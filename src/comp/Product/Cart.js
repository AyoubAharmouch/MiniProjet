import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart({cart , handleshow}) {
  return (
    <div style={{ width: "40px", height: "40px" }} className="text-end mt-2 ms-2 fixed-top justify-content-end text-success"  onDoubleClick={()=>handleshow(true)} onClick={()=>handleshow(false)} >
        <sup className="fw-bold">{cart.length}</sup>
      <FaShoppingCart style={{ width: "30px", height: "30px" }}  />
    </div>
  )
}
