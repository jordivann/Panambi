import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { app };

// // Verifica la inicialización
// console.log('Firebase initialized:', app.name);
// console.log('Firestore instance:', db);

// const fetchData = async () => {
//   try {
//     const snapshot = await getDocs(collection(db, 'productos'));
//     const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     console.log('Productos:', items);
//   } catch (error) {
//     console.error('Error al obtener productos:', error);
//   }
// };

// fetchData();
