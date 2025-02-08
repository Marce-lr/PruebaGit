import React, { useState } from "react";
import ProductItem from "../components/ProductItem";

function ProductList() {
  const [products] = useState([
    {
      productId: 1,
      productName: "Pizza Margarita",
      price: 12.99,
      imageUrl:
        "https://i.pinimg.com/736x/d9/db/94/d9db947145fb931a2bd2b0dc46b59ac0.jpg",
    },
    {
      productId: 2,
      productName: "Hamburguesa con Queso",
      price: 6.99,
      imageUrl:
        "https://i.pinimg.com/736x/9c/84/9d/9c849dfe14521dcad32d00ed69abe6e8.jpg",
    },
    {
      productId: 3,
      productName: "Tacos al Pastor",
      price: 3.49,
      imageUrl:
        "https://i.pinimg.com/736x/78/e2/4c/78e24c0821b5af687b08e20e6749c83f.jpg",
    },
    {
      productId: 4,
      productName: "Ensalada César",
      price: 5.99,
      imageUrl:
        "https://i.pinimg.com/736x/8b/e9/c5/8be9c5abaa83c00c111d1b682a2aa6cf.jpg",
    },
    {
      productId: 5,
      productName: "Pasta Carbonara",
      price: 9.99,
      imageUrl:
        "https://i.pinimg.com/736x/0d/17/7f/0d177f6cb549a70418c50a18fdc0a06f.jpg",
    },
    {
      productId: 6,
      productName: "Sushi Roll",
      price: 13.5,
      imageUrl:
        "https://i.pinimg.com/736x/36/8a/ef/368aefa81efb74cb6c3dea7a89b90f94.jpg",
    },
    {
      productId: 7,
      productName: "Pollo a la Parrilla",
      price: 11.99,
      imageUrl:
        "https://i.pinimg.com/736x/cf/28/10/cf2810bd561cbb44f790a6189c021e2b.jpg",
    },
    {
      productId: 8,
      productName: "Ceviche de Camarón",
      price: 8.99,
      imageUrl:
        "https://i.pinimg.com/736x/ae/bf/76/aebf76c2d72f3ec13f48289662b93e4a.jpg",
    },
    {
      productId: 9,
      productName: "Tostadas de Atún",
      price: 4.99,
      imageUrl:
        "https://i.pinimg.com/736x/3b/44/ae/3b44ae347ef9d8a99e405c9001bcf318.jpg",
    },
    {
      productId: 10,
      productName: "Burrito de Carne Asada",
      price: 8.5,
      imageUrl:
        "https://i.pinimg.com/736x/20/d7/8b/20d78b319abc44e18e7bc682d4b54cf3.jpg",
    },
  ]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.productId} className="product-item">
          <img src={product.imageUrl} alt={product.productName} />
          <h2>{product.productName}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
