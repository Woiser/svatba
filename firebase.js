import { initializeApp } from "https://gstatic.com";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from "https://gstatic.com";

const firebaseConfig = {
  apiKey: "AIzaSyDn0V7WhLLIlp0l2tviG1EoYnrAX2dpkFU",
  authDomain: "svatba-ed782.firebaseapp.com",
  projectId: "svatba-ed782",
  storageBucket: "svatba-ed782.firebasestorage.app",
  messagingSenderId: "789305181707",
  appId: "1:789305181707:web:c83e960f07161e7d2ae90e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Tady to dáváme do objektu window!
window.ulozSkore = async function(jmeno, body, text) {
    const kratkyText = text.substring(0, 30);
    try {
        await addDoc(collection(db, "zebricek"), {
            jmeno: jmeno,
            skore: Number(body),
            vzkaz: kratkyText,
            datum: new Date()
        });
        console.log("Skóre úspěšně uloženo!");
        return true;
    } catch (chyba) {
        console.error("Chyba při ukládání:", chyba);
        return false;
    }
}

window.nactiNejlepsiSkore = async function() {
    try {
        const q = query(collection(db, "zebricek"), orderBy("skore", "desc"), limit(10));
        const querySnapshot = await getDocs(q);
        let listRekordu = [];
        querySnapshot.forEach((doc) => {
            listRekordu.push(doc.data());
        });
        return listRekordu;
    } catch (chyba) {
        console.error("Chyba při načítání:", chyba);
        return [];
    }
}

console.log("Firebase plně nastartována!");
