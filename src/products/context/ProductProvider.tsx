import { ProductContext } from "./ProductContext"

const INITIAL_STATE={
  productCount:2,
  
}


interface props{
    children: JSX.Element | JSX.Element[]
}

export const ProductProvider = ({children}:props) => {
  return (
    <ProductContext.Provider value={({})}>
        {children}
    </ProductContext.Provider>
  )
}