import { Link } from "react-router-dom";

export default function Products() {

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" }
  ];

  return (
    <div>
      <h1>Products Page</h1>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ))}

    </div>
  );
}