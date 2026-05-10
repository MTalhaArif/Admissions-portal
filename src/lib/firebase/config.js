import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const isConfiguredCheck = !!firebaseConfig.apiKey && firebaseConfig.apiKey !== 'your-api-key';

let app, auth, db;
let isConfigured = false;

if (isConfiguredCheck) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    isConfigured = true;
  } catch (error) {
    console.warn('Firebase initialization error. Running in mock mode.', error.message);
    app = { mock: true };
    auth = { mock: true };
    db = { mock: true };
  }
} else {
  console.warn('Firebase API Key missing. Running in mock mode.');
  app = { mock: true };
  auth = { mock: true };
  db = { mock: true };
}

export { app, auth, db, isConfigured };
