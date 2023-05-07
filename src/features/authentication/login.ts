import { signInWithPopup } from "firebase/auth";
import { firebaseAuth, googleAuthProvider } from "../firebase/firebase";

export const login = () => {
    signInWithPopup(firebaseAuth, googleAuthProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
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
}