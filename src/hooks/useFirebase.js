import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInit from "../firebase/firebase.init";

FirebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const loginWithEmail = (email, password, navigate, url) => {
    setAuthLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setAuthError(null);
        navigate(url);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setAuthLoading(false));
  };
  const registerWithEmail = (email, password, name, navigate, url) => {
    setAuthLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then((result) => {
            setAuthError(null);
            navigate(url);
            console.log(result)
          })
          .catch((error) => {
            console.log(error)
            setAuthError(error.message);
          });
      })
      .catch((error) => setAuthError(error.message))
      .finally(() => setAuthLoading(false));
  };
  const GoogleLogin = (navigate, redirectUrl) => {
    setAuthLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(() => {
        setAuthError(false);
        navigate(redirectUrl);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(setAuthError(false));
  };
  const Logout = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser({});
      }
      setAuthLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    user,
    Logout,
    authLoading,
    GoogleLogin,
    loginWithEmail,
    registerWithEmail,
    authError,
  };
};
export default useFirebase;
