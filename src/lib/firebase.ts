// This file is machine-generated - edit at your own risk!
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  projectId: 'gearlink-crm',
  appId: '1:531464431713:web:ad73cfdfcd8fb2610d6220',
  storageBucket: 'gearlink-crm.firebasestorage.app',
  apiKey: 'AIzaSyAc-Np2TPwLoD_ebDagl4YqwQ-ZMGuYZN4',
  authDomain: 'gearlink-crm.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '531464431713',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
