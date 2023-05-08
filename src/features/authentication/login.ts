import { User, signInAnonymously, signInWithPopup, signOut } from "firebase/auth";
import { firebaseAuth, googleAuthProvider } from "../firebase/firebase";

export const logOut = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        signOut(firebaseAuth)
            .then(() => resolve())
            .catch(err => reject(err));
    })
}

export const loginWithGoogle = (): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
        signInWithPopup(firebaseAuth, googleAuthProvider)
            .then((result) => {
                const user = result.user;
                resolve(user);
            }).catch((error) => {
                reject(error);
                /*
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                */
            });
    });
}

export const loginAsGuest = (): Promise<User> => {
    return new Promise<User>((resolve, reject) => {
        signInAnonymously(firebaseAuth)
            .then((userCred) => resolve(userCred.user))
            .catch(error => reject(error));
    });
};