import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase.config'; 
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential.user);
            });
    };

    const logout = () => {
        return signOut(auth).then(() => {
            setCurrentUser(null);
        });
    };

    const updateUserProfile = (profile) => {
        return updateProfile(currentUser, profile).then(() => {
            setCurrentUser({ ...currentUser, ...profile });
        });
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, updateUserProfile }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
