import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJpBtFc57kqFDbwSV8mQfUGR8h8MNfc4s",
  authDomain: "react-contact-3004c.firebaseapp.com",
  databaseURL: "https://react-contact-3004c-default-rtdb.firebaseio.com",
  projectId: "react-contact-3004c",
  storageBucket: "react-contact-3004c.appspot.com",
  messagingSenderId: "4118563941",
  appId: "1:4118563941:web:079b422aa7ae0b38e14a8c"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;