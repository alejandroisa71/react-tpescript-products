import React, { useState, useRef } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
interface IProduct {
  name: string;
  active: boolean;
}

export const ProductForm = () => {
  const [newProduct, setNewProduct] = useState<string>("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const productInput =useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addProduct(newProduct);
    setNewProduct("");
    productInput.current?.focus()
  };

  const addProduct = (name: string) => {
    const newProducts = [...products, { name, active: false }];
    setProducts(newProducts);
  };

  const toggleActiveProduct = (i: number) => {
    const newProducts: IProduct[] = [...products];
    newProducts[i].active = !newProducts[i].active;
    setProducts(newProducts);
  };

  const removeProduct = (i: number) => {
    const newProducts: IProduct[]=[...products]
    newProducts.splice(i,1)
    setProducts(newProducts)
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setNewProduct(e.target.value)}
                  value={newProduct}
                  className="form-control"
                  ref={productInput}
                  autoFocus
                />
                <button className="btn btn-success w-100 mt-2">Guardar</button>
              </form>
            </div>
          </div>
          {products.map((p: IProduct, i: number) => (
            <div className="card card-body mt-2" key={i}>
              <h1 style={{ textDecoration: p.active ? "line-through" : "" }}>
                {p.name}
              </h1>
              <div>
                <button
                  className="btn btn-secondary"
                  onClick={() => toggleActiveProduct(i)}
                >
                  {p.active ? "✓" : "✗"}
                </button>
                <button
                  className=" btn btn-danger"
                  onClick={() => removeProduct(i)}
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
