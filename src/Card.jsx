
import { Link } from "react-router-dom";
import AddToCartPage from "./AddToCartPage";


function Card({info}) {


  const { category,title,id, price, image, rating:{rate}}= info


  return (

    <>
    <div className="card w-96  bg-base-100 shadow-xl">
  <div className=" flex justify-center">
  <img src={image} alt="Shoes" width={150} height={150} />
  </div>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p>Name: {title}</p>
    <p>Price: {price}</p>
    <p>Rating: {rate}</p>
    <div className="card-actions justify-end">
      <Link to={`/product/${id}`}><button className="btn btn-primary" onClick={AddToCartPage}>Add to cart</button></Link>
      
    </div>
  </div>
</div>
    </>
  );
}

export default Card;