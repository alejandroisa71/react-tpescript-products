import { ProductForm } from "./components/ProductForm"
import { ProductList } from "./components/ProductList"
import { ProductProvider } from "./context/ProductProvider"

export const Product = () => {
  return (
    <ProductProvider>
        <ProductForm/>
        {/* <ProductList/> */}
    </ProductProvider>
  )
}