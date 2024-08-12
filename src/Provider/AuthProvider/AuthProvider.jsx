/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const googleUser = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const updateProfileUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth).finally(() => {
            setLoading(false);
            setUser(null);
            setIsAdmin(false);
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // Check if the user is an admin
                const adminEmails = ["tanvir0046@gmail.com"]; // Replace with actual admin emails
                if (adminEmails.includes(currentUser.email)) {
                    setIsAdmin(true);
                } else {
                    await logOut(); // Log out non-admin users
                }
            } else {
                setIsAdmin(false);
            }

            setLoading(false);
        });

        return () => {
            unsubscribe(); // Call the function, not just reference it
        };
    }, []);

    const authInfo = {
        user,
        loading,
        isAdmin,
        createUser,
        updateProfileUser,
        googleUser,
        signInUser,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
