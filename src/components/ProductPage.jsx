import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/firestoreService';
import Loader from './Loader';
import ProductCard from './ProductCard';
import './styles/productPage.css';

const ProductPage = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // {{ edit_1 }} Nuevo estado para controlar la carga

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      setIsLoading(true);
      const productosData = await getAllProducts();
      setProductos(productosData);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setIsLoading(false); // {{ edit_3 }} Finalizar la carga
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

  const agregarAlCarrito = (producto) => {
    console.log('Producto agregado al carrito', producto);
  };

  const comprar = (producto) => {
    console.log('Iniciando proceso de compra', producto);
  };

  return (
    <div className="product-page">
      <div className="header-productos">
        <h1>Productos</h1>
      </div>
      <div className="breadcrumbs">
        <a href="/">Inicio</a>
        <span>/</span>
        <a href="/productos">Productos</a>
      </div>
      {isLoading ? ( // {{ edit_4 }} Mostrar loader mientras se cargan los datos
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="product-list">
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              producto={producto}
              getImagenUrl={getImagenUrl}
              calcularPrecioConDescuento={calcularPrecioConDescuento}
              agregarAlCarrito={agregarAlCarrito}
              comprar={comprar}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
