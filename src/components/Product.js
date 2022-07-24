import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch()
  const addToCard = () => {
    dispatch(cartAction.addToCart({
      id,
      name,
      price
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCard}>Add to cart</button>
    </div>
  );
};

export default Product;
