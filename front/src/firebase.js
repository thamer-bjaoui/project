import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA-bq_BSEMNieH8jCQi_EAFHnBcByvx5NY",
  authDomain: "bi3-wechri-d5dc0.firebaseapp.com",
  projectId: "bi3-wechri-d5dc0",
  storageBucket: "bi3-wechri-d5dc0.appspot.com",
  messagingSenderId: "590181635249",
  appId: "1:590181635249:web:0451f1e382c5d1de8bfe90"
};




const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

