// Načteme Firebase přímo z internetu (CDN)
import { initializeApp } from "https://gstatic.com";

// Vaše unikátní konfigurace svatba-ed782
const firebaseConfig = {
  apiKey: "AIzaSyDn0V7WhLLIlp0l2tviG1EoYnrAX2dpkFU",
  authDomain: "://firebaseapp.com",
  projectId: "svatba-ed782",
  storageBucket: "svatba-ed782.firebasestorage.app",
  messagingSenderId: "789305181707",
  appId: "1:789305181707:web:c83e960f07161e7d2ae90e"
};

// Spustíme a inicializujeme Firebase
const app = initializeApp(firebaseConfig);

// Vypíšeme do konzole zprávu, abychom viděli, že to funguje
console.log("Firebase byla úspěšně připojena k vaší svatební hře!");