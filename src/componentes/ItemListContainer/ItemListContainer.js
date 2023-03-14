import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { products } from '../mock/Productos'
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'





export const ItemListContainer = () => {

  const {category}=useParams()

  const [products, setProducts] = useState([])

 const [loader, setLoader] = useState(false)
  
 
useEffect(() => {
  const dataBase = getFirestore()
// creamos una función que va a obtener los datos de firebase
  const getData = async () => {
// con una condicional, si no tiene categorías, 
      const queryRef = !category
// va a traer todos los productos
          ? collection(dataBase , "items")
// si tiene categorías, firebase va a filtrarlas
          : query(
              collection(dataBase , "items"),
              where("category", "==", category)
          );
// recibimos los datos
      const response = await getDocs(queryRef);
// y hacemos un map para crear objetos con esos datos.
      const productos = response.docs.map((doc) => {
          const newProduct = {
              ...doc.data(),
              id: doc.id,
          };
// lo retornamos
          return newProduct;
      });
      setTimeout(() => {
// simulamos una demora de 2' y actualizamos los 2 estados.
          setProducts(productos);
          setLoader(false)

      }, 2000)
  };
// llamamos a la función
  getData();
  setLoader(true)

}, [category])
console.log(products)
return (
  <div className='mt-5'>

    <h1>Lista de productos</h1>

    {loader? <h1>Cargando...</h1>:
   <ItemList products={products}></ItemList>
  
}
  </div>
)
}
export default ItemListContainer