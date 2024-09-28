import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/firestoreService';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Iniciando fetch de productos...');
      try {
        const productos = await getAllProducts();
        console.log('Productos obtenidos:', productos);
        setData(productos);
      } catch (error) {
        console.error('Error al obtener productos en MyComponent:', error);
        setError(error.message || 'Ocurrió un error al cargar los productos');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Productos:</h2>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Precio: {item.price}</p>
            {/* Agrega más detalles del producto según tu estructura de datos */}
          </div>
        ))
      ) : (
        <div>No hay productos disponibles.</div>
      )}
    </div>
  );
};

export default MyComponent;
