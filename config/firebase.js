import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import config from './dotenvconfig';

const firebaseConfig = {
  apiKey: "AIzaSyA_W8RL9RG-lTJfQVUWwMeeoRn7M_1XIMA",
  authDomain: "ksbm-chat-app-34b2c.firebaseapp.com",
  projectId: "ksbm-chat-app-34b2c",
  storageBucket: "ksbm-chat-app-34b2c.appspot.com",
  messagingSenderId: "411933694172",
  appId: "1:411933694172:web:9f1f2c0bc91d6a5f073c19",
  measurementId: "G-H3FHNELJTB"
};

// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
