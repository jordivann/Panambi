import type { ServiceAccount } from 'firebase-admin';
import { initializeApp, cert, getApps } from 'firebase-admin/app';

// Cargar las credenciales del servicio de Firebase desde variables de entorno
const serviceAccount: Partial<ServiceAccount> = {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  clientEmail: import.meta.env.VITE_FIREBASE_CLIENT_EMAIL,
  privateKey: import.meta.env.VITE_FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

// Inicializar la app de Firebase
const activeApps = getApps();

const initApp = () => {
  if (import.meta.env.PROD) {
    console.info('PROD env detected. Using default service account.');
    return initializeApp();
  }
  console.info('Loading service account from env.');
  return initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
  });
};

export const app = activeApps.length === 0 ? initApp() : activeApps[0];
