import {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initAuth from '../Firebase/firebase.init';

initAuth();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const signInUserBygoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        signOut(auth, () => {
            setUser({});
        })
        .finally(setLoading(false));
    };

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser();
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    return {
        user,
        setUser,
        signInUserBygoogle,
        error,
        setError,
        loading,
        setLoading,
        logOut
    }
}

export default useFirebase;