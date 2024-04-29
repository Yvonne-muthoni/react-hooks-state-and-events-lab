import React,{useState}from "react";

function Item({ name, category }) {
  const [addInCart, setCart] = useState() 
  function handleCart()  {
    setCart(!addInCart) 
  }
  const liClassName = addInCart ? "in-cart" : "";
 const buttonText = addInCart ? "Remove From Cart" : "Add to Cart";
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
