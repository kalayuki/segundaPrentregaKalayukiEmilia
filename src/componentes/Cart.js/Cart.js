import React from 'react'
import { useCartContext } from '../Context/CartContext'
import {Link} from 'react-router-dom'

const Cart = () => {


    const {cart, deleteProduct} = useCartContext()

  return (
    <div>{

     cart.map(product => (

        <>
        
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={product.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}!</h2>
    <h2>Cantidad agregada: {product.quantity}</h2>
    <button className='btn'  onClick={()=> deleteProduct(product)}>Eliminar producto</button>
     
 </div>
 </div>

     

       
        

        </>
     )
     )

    }
    <div>
   
    <Link to={'/'}>
    <button className='btn' >Ir a la tienda</button>
    </Link>
    </div>
    
    
    </div>
  )
}

export default Cart