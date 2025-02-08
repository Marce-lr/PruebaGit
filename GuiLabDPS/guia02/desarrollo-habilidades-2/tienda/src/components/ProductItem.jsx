import React from "react";

function ProductItem({ productId, productName, price, imageUrl }) {
  return (
    <div className="product-item">
      <h2>{productName}</h2>
      <img src={imageUrl} alt={productName} />
      <p>Price: ${price}</p>
    </div>
  );
}

export default ProductItem;
