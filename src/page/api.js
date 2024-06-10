// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    documentId
 } from "firebase/firestore/lite"


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
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}
export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}