import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loadding, setLoadding] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            //get jwt
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        //console.log(data.data.token, 'axios data');
                        localStorage.setItem('access-token', data.data.token)
                        setLoadding(false)
                    })

            }
            else {
                localStorage.removeItem('access-token')
            }


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
    const updateUserProfile = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    const values = {
        user,
        loadding,
        handleGoogle,
        handleLogin,
        handleSignIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;