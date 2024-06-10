// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
 } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_-0Awx6jhOgq09JH1DLRTVzSc2MsS-94",
  authDomain: "vanlife-2e2a1.firebaseapp.com",
  projectId: "vanlife-2e2a1",
  storageBucket: "vanlife-2e2a1.appspot.com",
  messagingSenderId: "226809208206",
  appId: "1:226809208206:web:81717182ce1eb5628558df"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Refactoring the fetching functions below
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    try {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}
catch (error) {
    console.error("Error fetching vans:", error);
    throw error;
}
}

export async function getVan(id) {
    try {
        const docRef = doc(db, "vans", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            return {
                ...snapshot.data(),
                id: snapshot.id
            };
        } else {
            throw new Error("Van not found");
        }
    } catch (error) {
        console.error(`Error fetching van with id ${id}:`, error);
        throw error;
    }
}


export async function getHostVans() {
    try {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans;
} catch (error) {
    console.error("Error fetching host vans:", error);
    throw error;
}
}

export async function loginUser(creds) {
    try {
        const res = await fetch("/api/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(creds)
        });
        const data = await res.json();

        if (!res.ok) {
            throw {
                message: data.message,
                statusText: res.statusText,
                status: res.status
            };
        }

        return data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
}

export async function fetchVanData(vanId) {
    try {
        const docRef = doc(db, "vans", vanId);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
            return { ...snapshot.data(), id: snapshot.id };
        } else {
            console.error("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching document:", error);
        throw error;
    }
}
