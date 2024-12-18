import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBCB22YmIFsqWpedBK3TuTjLVZadmCoiF4",
  authDomain: "react-firebase-39988.firebaseapp.com",
  projectId: "react-firebase-39988",
  storageBucket: "react-firebase-39988.firebasestorage.app",
  messagingSenderId: "1094225918613",
  appId: "1:1094225918613:web:af2ccd7a25d3366139799c",
  measurementId: "G-8D72W6LBDW"
};

const app=initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;