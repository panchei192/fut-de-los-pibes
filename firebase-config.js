// Pegá acá la configuración de tu app web de Firebase
// (Consola de Firebase → ⚙ Configuración del proyecto → Tus apps → SDK config).
// Estos datos NO son secretos: lo que protege la web son las reglas de firestore.rules.
// Mientras diga PEGAR..., la web funciona en "modo prueba" (solo guarda en tu navegador).
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDh55b6LDd2L6pJ63yh6LesyCXMZl2l-7M",
  authDomain: "fifa-en-la-point.firebaseapp.com",
  projectId: "fifa-en-la-point",
  storageBucket: "fifa-en-la-point.firebasestorage.app",
  messagingSenderId: "468554119630",
  appId: "1:468554119630:web:e28abac639733e052d939f"
};

// Tu UID de administrador. La web te lo muestra la primera vez que tocás "Admin"
// y entrás con tu cuenta de Google. Pegalo acá y también en firestore.rules.
export const ADMIN_UID = "PEGAR_TU_UID";
