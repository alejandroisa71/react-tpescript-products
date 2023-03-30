export interface Product {
  id: string;
  name: string;
  active: boolean;
}

export interface ProductState{
  productCount:number;
  products:Product[];
  active:boolean;
}
