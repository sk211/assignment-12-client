import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializetionFirebase =()=>{
    initializeApp(firebaseConfig);
}
export default initializetionFirebase