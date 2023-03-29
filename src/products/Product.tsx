import { ProductForm } from "./components/ProductForm"
import { ProductProvider } from "./context/ProductProvider"

export const Product = () => {
  return (
    <ProductProvider>
        <ProductForm/>
    </ProductProvider>
  )
}