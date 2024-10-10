import React from 'react';
import './styles/productCard.css';

const ProductCard = ({
  producto,
  getImagenUrl,
  calcularPrecioConDescuento,
  agregarAlCarrito,
  comprar,
}) => {
  return (
    <div className="card">
      <a href={`/productos/${producto.id}`} className="product-card">
        <p>{producto.title}</p>
        <div className="image-container">
          <img src={getImagenUrl(producto.imageReference)} alt="Producto" />
        </div>
        {producto.discount ? (
          <p className="descuento">
            <del>
              {producto.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </del>
            <span className="descuento-porcentaje">
              {producto.discountPercent * 100}%
            </span>
            <br />
            <strong className="precio-con-descuento">
              {calcularPrecioConDescuento(producto).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </strong>
          </p>
        ) : (
          <p className="precio-normal">
            {producto.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        )}
      </a>
      <div className="button-container">
        <button
          onClick={() => agregarAlCarrito(producto)}
          className="button-carrito"
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button onClick={() => comprar(producto)} className="button-comprar">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
