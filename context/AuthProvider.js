import { createContext, useContext, useState, useEffect } from "react";

import { auth, db } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const usersCollectionRef = collection(db, "users");

  const signup = async (email, password, name) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(usersCollectionRef, user.user.uid), {
      name: name,
    });
    return user;
  };
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, loading, signup, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
