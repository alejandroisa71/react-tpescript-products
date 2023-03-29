export interface IProduct {
  name: string;
  active: boolean;
}

export interface ProductState{
  productCount:number,
  products:[],
  active:boolean
}