import {
    createUserWithEmailAndPassword,
    getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializetionFirebase from "../pages/Login/Firebase/firebase.init";

initializetionFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState('')

  const registerUser = (email, password, location, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        handleUserRegester(result.user.email)
        setAuthError('');
        const destination = location?.state?.from || "/"
        history.replace(destination)
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(()=> setIsLoading(false))
  };
     
  const handleUserRegester = (email) =>{
    fetch("https://salty-stream-34659.herokuapp.com/addUsers",{
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({email}),
      // body: JSON.stringify(email)
    })
    .then(res=>res.json())
    .then(result=>console.log(result))
  }

  const logOut = () => {
    setIsLoading(true)


    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {})
      .finally(()=> setIsLoading(false))

  };

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false)
          })
  }, [auth])

  const signInUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/"
        history.replace(destination)
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(()=> setIsLoading(false));
  };
    
const signInGoogle =( location, history) =>{
  setIsLoading(true)
  signInWithPopup(auth, GoogleProvider)
  .then((result) => {
    const destination = location?.state?.from || "/"
        history.replace(destination)
    // const user = result.user;
    setAuthError('');

  }).catch((error) => {
    setAuthError(error.message)
  }).finally(()=>setIsLoading(false));

}
  return {
    user,
    registerUser,
    logOut,
    isLoading,
    signInUser,
    authError,
    signInGoogle
  };
};
export default useFirebase;
