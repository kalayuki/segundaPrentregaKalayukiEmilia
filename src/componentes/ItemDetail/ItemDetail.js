

import { useCartContext } from '../Context/CartContext'
import ItemCount from '../count/ItemCount'
import { products } from '../mock/Productos'



const ItemDetail = ({product }) => {

   
    const {addNewProduct} = useCartContext()

    
   

  

      const onAdd=(quantity)=>{

        

        const newProduct ={...product, quantity}
      
        addNewProduct(newProduct)
      

      }
        return (
         
          <div className='conteinerDetail' >
       

       <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={product.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}!</h2>
    <p>{product.description}</p>
    <p> Cantidad {product.cantidad}</p>
    <p>Precio: ${product.precio}</p>
    <ItemCount stock={product.stock} initial = {0} onAdd={onAdd}></ItemCount>
    
  </div>
</div>
       
           </div>
          
        )
      }
      
  
    

export default ItemDetail