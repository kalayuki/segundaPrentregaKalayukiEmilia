import React from 'react'
import {Link} from 'react-router-dom'



const Item = ({id, category, cantidad, title, medida , precio ,stock, description,img }) => {
  return (
   
   

 <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}!</h2>
    
    <div className="card-actions justify-end">
    <Link to={`/detalles/${id}`}>
      <button className="btn btn-primary">Ver detall</button>
      </Link>
    </div>
  
</div>


     </div>
    
  )
}

export default Item