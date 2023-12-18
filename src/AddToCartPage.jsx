import React, { useState } from 'react';

const AddToCartPage = () => {

  const [itemsInCart, setItemsInCart] = useState(1);

  const addToCart = () => {
 
    // Assuming each click adds one item to the cart
    setItemsInCart(prevItems => prevItems + 1);
    
  };
  const minusToCart=()=>{
    setItemsInCart(prevItems => prevItems - 1)
  }

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Product Name</h1>
        <p className="card-text">Price:</p>
       
        <p className="card-text">Items in Cart: {itemsInCart}</p>
        <span>
        <button onClick={addToCart} className="btn btn-neutral w-10">
          +
        </button>
        <button onClick={minusToCart} className="btn btn-neutral w-10">
          -
        </button>
        </span>
        <button  className="btn btn-primary ">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCartPage;

