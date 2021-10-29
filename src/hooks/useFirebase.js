import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializingAuthentication from "../firebase/firebase.init";

initializingAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
        console.log("State changing is not working");
      }
    });
  }, [auth]);
  const handleGoogleSignin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signingout successfully!");
      })
      .catch((error) => console.log(error.message));
  };
  return { user, handleGoogleSignin, handleLogOut };
};

export default useFirebase;
