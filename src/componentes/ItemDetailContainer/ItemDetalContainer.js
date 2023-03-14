import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import  { useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'




export const ItemDetalContainer = () => {
  const {id}=useParams()

  const [product, setProduct] = useState({})

 useEffect(() => {
  const getProducto = async () => {
  const dataBase = getFirestore()      
// doc, vamos a hacer el filtrado para obtener un producto
  const queryRef = doc(dataBase , "items", id);
// recibimos la info
    const response = await getDoc(queryRef);
// creamos un nuevo objeto con la info
    const newItem = {
      id: response.id,
      ...response.data(),
    };
// actualizamos el estado
    setTimeout(()=>{
      setProduct(newItem);
    }, 2000)
  };
  getProducto();

}, [id]);


  return (
  <div>
   
        <ItemDetail product={product}/>
    
        </div>
  )
}

export default ItemDetalContainer