import { createContext } from "react";
import { ProductState } from "../interfaces/interfaces";

export type ProductContextProps={
  productState: ProductState
}

export const ProductContext= createContext<ProductContextProps>({} as ProductContextProps)