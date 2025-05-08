/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { setPersistence, browserLocalPersistence } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google signIn
    const goolgeSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //update profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // useEffect(() => {
    //     setPersistence(auth, browserLocalPersistence)
    //         .then(() => {
    //             const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //                 setUser(currentUser);
    //                 if (currentUser) {
    //                     const userInfo = { email: currentUser.email };
    //                     axiosPublic.post('/jwt', userInfo)
    //                         .then(res => {
    //                             if (res.data.token) {
    //                                 localStorage.setItem('access-token', res.data.token);
    //                             }
    //                         });
    //                 } else {
    //                     localStorage.removeItem('access-token');
    //                 }
    //                 setLoading(false);
    //             });
    //             return unsubscribe;
    //         })
    //         .catch(error => {
    //             console.error("Error setting persistence:", error);
    //             setLoading(false);
    //         });
    // }, [axiosPublic]);
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }
                })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            
        });
        return() => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        goolgeSignIn,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;