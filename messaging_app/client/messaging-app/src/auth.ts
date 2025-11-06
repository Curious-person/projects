import { useMutation } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { saveUserData } from "./db";
import { auth } from "./firebase";

// TODO: configure react query for auth state management
interface AuthCredentials {
    email: string;
    password: string;
}

// sign up function
export async function registerUser({ email, password }: AuthCredentials) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await saveUserData(userCredential.user.uid, "New User", email);
        return userCredential.user;
    } catch (error: any) {
        console.error(error.message || "Error registering user");
        throw new Error(error.message || "Error registering user");
    }
}

export async function loginUser({ email, password }: AuthCredentials) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        console.error(error.message || "Error logging in user");
        throw new Error(error.message || "Error logging in user");
    }
}

// log out function
export async function logoutUser() {
    try {
        await signOut(auth);
    } catch (error: any) {
        throw new Error(error.message || "Failed to log out");
    }
}

export default function useAuth() {
    const {
        mutate: registerUserMutate,
        isPending: isRegistering,
        error: registerError,
    } = useMutation({
        mutationFn: registerUser,
    });

    const {
        mutate: loginUserMutate,
        isPending: isLoggingIn,
        error: loginError,
    } = useMutation({
        mutationFn: loginUser,
    });

    const {
        mutate: logoutUserMutate,
        isPending: isLoggingOut,
        error: logoutError,
    } = useMutation({
        mutationFn: logoutUser,
    });

    return {
        registerUserMutate,
        isRegistering,
        registerError,
        loginUserMutate,
        isLoggingIn,
        loginError,
        logoutUserMutate,
        isLoggingOut,
        logoutError,
    };
}