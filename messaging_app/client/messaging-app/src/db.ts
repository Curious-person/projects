import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const saveUserData = async (userId: string, name: string, email: string) => {
    await setDoc(doc(db, "users", userId), {
        name: name,
        email: email,
        createdAt: new Date()
    });
}

export const getUserData = async (userId: string) => {
    const userDoc = await getDoc(doc(db, "users", userId));
    return userDoc.exists() ? userDoc.data() : null;
}