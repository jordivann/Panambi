import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/client';
import type { Product } from '../types/Product';

// Obtiene todos los productos de la colección
export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const productsCol = collection(db, 'productos');
    const productsSnapshot = await getDocs(productsCol);

    const products = productsSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
      } as Product;
    });
    console.log(`${products.length} products retrieved`);
    return products;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    if (error instanceof Error) {
      throw new Error(`Error al obtener productos: ${error.message}`);
    }
    throw new Error('Error desconocido al obtener productos');
  }
};
