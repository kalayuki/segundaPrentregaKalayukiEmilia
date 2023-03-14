import { createContext, useContext, useState } from "react"


export const Contexto = createContext()

export const useCartContext=()=>{

   const cartContext =useContext(Contexto)
   return cartContext

}


export const CartContext = ({children}) => {

    const [cart , setCart ]= useState([])

    const addNewProduct = (product)=>{

       const oldProduct= cart.find((currenProduct)=>currenProduct.id === product.id)


           

            if(!oldProduct){
                const newCart=[...cart,product]

                setCart(newCart)
            }else{

                const oldCart=cart.filter((currenProduct)=> currenProduct.id !== product.id)

                const newProduct = {...product,quantity : product.quantity + oldProduct.quantity}
                
                setCart([...oldCart, newProduct])
            }

        
       
    }


        const deleteProduct =(product)=>{
            const newCart= cart.filter ((currentPrduct)=> currentPrduct.id !== product.id)
            setCart(newCart)
        }
console.log(cart)


  return (
    <Contexto.Provider value ={{
        cart,
        addNewProduct,
        deleteProduct
    }}>
    
    {children}
    </Contexto.Provider>
  )
}

