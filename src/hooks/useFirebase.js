import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getIdToken,
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
  const [token, setToken] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const loginWithEmail = (email, password, move) => {
    setAuthLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setAuthError(null);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setAuthLoading(false));
  };
  const registerWithEmail = (email, password, name, move) => {
    setAuthLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then((result) => {
            setUser(result.user);
            setAuthError(null);
          })
          .catch((error) => setAuthError(error.message));
      })
      .catch((error) => setAuthError(error.message))
      .finally(() => setAuthLoading(false));
  };
  const GoogleLogin = () => {
    setAuthLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(() => {
        setAuthError(false);
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
        getIdToken(currentUser, (token) => {
          console.log(token);
          setToken(token);
        });
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
    token,
    authLoading,
    GoogleLogin,
    loginWithEmail,
    registerWithEmail,
    authError,
  };
};
export default useFirebase;
