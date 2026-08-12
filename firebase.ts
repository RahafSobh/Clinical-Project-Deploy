import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/**
 * Firebase project configuration for the Clinical Patient Analysis System.
 */
const firebaseConfig = {
  apiKey: 'AIzaSyD1vzyH4jxFIcfyE4OUeW8TsZ200TXPc3g',
  authDomain: 'seminarproject-9f835.firebaseapp.com',
  projectId: 'seminarproject-9f835',
  storageBucket: 'seminarproject-9f835.firebasestorage.app',
  messagingSenderId: '241077793798',
  appId: '1:241077793798:web:effd7dd877ca52ae59bf87',
  measurementId: 'G-Q4TB4EXD6G',
};

/** The initialized Firebase app instance. */
export const app = initializeApp(firebaseConfig);

/** The Firestore database instance used across the app. */
export const db = getFirestore(app);
