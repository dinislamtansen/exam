
import { Link } from "react-router-dom";


function Card({info}) {


  const { category,title,id,  image, rating:{rate}}= info


  return (

    <>
    <div className="card w-96  bg-base-100 shadow-xl">
  <figure ><img src={image} alt="Shoes"  /></figure>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <p>{title}</p>
    <p>{rate}</p>
    <div className="card-actions justify-end">
      <Link to={`/product/${id}`}><button className="btn btn-primary">Details</button></Link>
      
    </div>
  </div>
</div>
    </>
  );
}

export default Card;