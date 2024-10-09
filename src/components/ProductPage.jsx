import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/firestoreService';
import "./styles/productPage.css"

const ProductPage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      console.log('obtenerProductos');
      const productosData = await getAllProducts();
      setProductos(productosData);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  const getImagenUrl = (imageReference) => {
    return `${imageReference}`;
  };

  const calcularPrecioConDescuento = (producto) => {
    if (producto.discount) {
      const precioConDescuento =
        producto.price - producto.price * producto.discountPercent;
      return precioConDescuento;
    }
    return producto.price;
  };

  const agregarAlCarrito = () => {
    console.log('Producto agregado al carrito');
  };

  const comprar = () => {
    console.log('Iniciando proceso de compra');
  };

  return (

  <div className="product-page">
    <div className="header-productos">
      <h1>Productos</h1>
    </div>
    <div className="breadcrumbs">
      <a to="/">Inicio</a>
      <span>/</span>
      <a to="/productos">Productos</a>
    </div>
    <div className="product-list">
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            <a to={`/productos/${producto.id}`} className="product-card">
              <p>{producto.title}</p>
              <div className="">
                <img
                  src={getImagenUrl(producto.imageReference)}
                  alt="Producto"
                />
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
                    {calcularPrecioConDescuento(producto).toLocaleString(
                      'en-US',
                      { style: 'currency', currency: 'USD' }
                    )}
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
            <div className="d-flex gap-2 m-1 align-items-center justify-content-center">
              <button
                onClick={agregarAlCarrito}
                className="btn button-carrito"
              >
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button onClick={comprar} className="btn button-comprar">
                Comprar
              </button>
            </div>
          </div>
        ))}
    </div>
  </div>
  );
};

export default ProductPage;
