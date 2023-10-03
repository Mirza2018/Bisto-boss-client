import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loadding, setLoadding] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoadding(false)
        })

        return () => {
            unsubscribe;
        }
    }, [auth])
    

    const handleLogin = (email, pass) => {
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const handleSignIn = (email, pass) => {
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const handleGoogle = () => {
        setLoadding(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLoadding(true)
        return signOut(auth)
    }

    const values = {
        user,
        loadding,
        handleGoogle,
        handleLogin,
        handleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;