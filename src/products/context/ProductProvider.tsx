import { ProductContext } from "./ProductContext"
import { ProductState } from "../interfaces/interfaces"
import { useReducer } from "react"
import { productReducer } from "./productReducer"

const INITIAL_STATE: ProductState ={
  productCount: 2,
  products: [
    {
      id: "1",
      name: "Pc Laptop",
      active:false
    },
    {
      id: "2",
      name: "Mouse",
      active:true
    }
  ],
  active: false
}


interface props{
    children: JSX.Element | JSX.Element[]
}

export const ProductProvider = ({children}:props) => {
  const [productState, dispatch] = useReducer(productReducer, INITIAL_STATE);
  return (
    <ProductContext.Provider value={({
      productState
    })}>
        {children}
    </ProductContext.Provider>
  )
}