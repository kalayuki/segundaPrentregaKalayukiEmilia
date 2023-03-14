import React, { useState } from 'react'

const ItemCount = ({stock, initial=1,onAdd}) => {

  const [count, setCount] = useState(initial)

  const addCouter=()=>{
    count < stock && setCount (count + 1)
  }

   const subtractCounter=()=>{
    count > initial && setCount (count -1)
   }
  

  return (
    <div>
      <div>
    <button onClick={subtractCounter} className='btn' >-</button>
    <span className='text-xl m-2'>{count}</span> 
    <button onClick={addCouter}  className='btn'>+</button>
    </div>
    <div className="card-actions justify-center">
      <button  onClick={()=> onAdd (count)} className="btn btn-primary">Añadir al carrito</button>
    </div>
    </div>
  )
}

export default ItemCount