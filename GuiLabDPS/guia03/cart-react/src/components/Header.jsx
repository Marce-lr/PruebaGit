import React from "react";

export const Header = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) => {
  const [active, setActive] = React.useState(false);

  const oneDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header>
      <h1>Tienda de Libros</h1>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <img
            src="https://img.freepik.com/vetores-premium/icone-de-carrinho-de-compras-rapido_414847-513.jpg?w=2000"
            alt="carrito"
            className="icon-cart"
          />
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
        <div
          className={'container-cart-products $(active ? "" : "hidden-cart"}'}
        >
          {allProducts.length ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    {
                      /*Se agregó esta imagen para mostrar la foto del libro en el carrito*/
                      <img
                        src={product.urlImage} // Se usa la URL de la imagen del libro
                        alt={product.title} // Texto alternativo con el titulo del libro
                        className="cart-product-image"
                        style={{ width: "50px", height: "50px" }} // Ajuste de tamaño de la imagen
                      />
                    }
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>
                      <p className="titulo-producto-carrito">
                        {" "}
                        {product.title}{" "}
                      </p>
                      <span className="precio-producto-carrito">
                        ${product.price}
                      </span>
                    </div>
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-red-icon.png"
                      alt="cerrar"
                      className="icon-close"
                      onClick={() => oneDeleteProduct(product)}
                    />
                  </div>
                ))}
                <div className="cart-total">
                  <h3>Total:</h3>
                  <span className="total-pagar">${total}</span>
                </div>
                <button className="btn-clear-all" onClick={onCleanCart}>
                  Vaciar Carrito
                </button>
              </div>
            </>
          ) : (
            <p className="cart-empty">El carrito esta vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};
