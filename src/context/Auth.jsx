import React, { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithPopup
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

// Context Create karna
const AuthContext = createContext();

// Custom hook banayein taake har file mein useContext call na karna pare
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign Up Function
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login Function
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Google Login Function
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Logout Function
    const logoutUser = () => {
        return signOut(auth);
    };

    // Track Auth State (Firebase state listener)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe; // Cleanup listener on unmount
    }, []);

    const value = {
        currentUser,
        registerUser,
        loginUser,
        loginWithGoogle,
        logoutUser,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};