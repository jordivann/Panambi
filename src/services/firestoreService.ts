import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/client';
import { FirebaseError } from 'firebase/app';

export const getAllProducts = async (): Promise<any[]> => {
  console.log('Intentando obtener todos los productos...');
  try {
    const productosRef = collection(db, 'productos');
    console.log('Referencia de colección:', productosRef);

    const snapshot = await getDocs(productosRef);
    console.log('Snapshot obtenido:', snapshot);

    if (snapshot.empty) {
      console.log('No se encontraron documentos en la colección Productos');
      return [];
    }

    const productos = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log('Productos obtenidos:', productos);
    return productos;
  } catch (error) {
    if (error instanceof FirebaseError) {
      console.error('Error de Firebase al obtener productos:', error);
      console.error('Detalles del error:', {
        code: error.code,
        message: error.message,
        stack: error.stack,
      });
    } else {
      console.error('Error inesperado:', error);
    }
    throw error;
  }
};
export const getProductoById = async (id: string) => {
  console.log(`Intentando obtener el producto con ID: ${id}`); // Log del ID
  try {
    const productoDoc = doc(db, 'productos', id); // Asegúrate de que la colección se llama 'Productos' (con P mayúscula)
    const productoSnapshot = await getDoc(productoDoc);
    console.log('Snapshot del producto obtenido:', productoSnapshot); // Log del snapshot del producto
    return productoSnapshot.exists()
      ? { id: productoSnapshot.id, ...productoSnapshot.data() }
      : null;
  } catch (error) {
    console.error('Error fetching product by ID:', error); // Log de error
    throw error;
  }
};
