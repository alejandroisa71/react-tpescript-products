import { Product } from "../interfaces/interfaces"

interface props{
  product: Product
}


export const ProductItem = ({product}:props) => {
  return (
    <li><div className="card card-body mt-2" key={product.id}>
    <h1 style={{ textDecoration: product.active ? "line-through" : "" }}>
      {product.name}
    </h1>
    <div>
      <button
        className="btn btn-secondary"
        // onClick={() => toggleActiveProduct(i)}
      >
        {product.active ? "✓" : "✗"}
      </button>
      <button
        className=" btn btn-danger"
        // onClick={() => removeProduct(i)}
      >
        🗑
      </button>
    </div>
  </div></li>
  )
}