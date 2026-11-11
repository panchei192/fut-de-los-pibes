# FUT de los Pibes

Web con las cartas, los partidos, los votos y la tabla de goleadores.
Está publicada con GitHub Pages y guarda los datos en Firebase (gratis, sin servidor).

## Quién puede hacer qué
- **Cualquiera con el link**: ve las cartas, partidos y goleadores, y vota cuando la votación de un partido está abierta.
- **Solo vos (admin)**: tocás **Admin** arriba a la derecha, entrás con tu Google y podés agregar/editar cartas, crear partidos con goles y asistencias, y abrir/cerrar votaciones.

Cada voto queda atado al celular/navegador que lo hizo: nadie puede pisar el voto de otro.
Si alguien vota haciéndose pasar por otro, como admin podés borrar el partido o editarlo.

## Configurar Firebase (una sola vez, ~5 minutos)
1. Entrá a https://console.firebase.google.com → **Agregar proyecto** (Analytics no hace falta).
2. **Compilación → Firestore Database → Crear base de datos** → modo producción → región `southamerica-east1` (o la que quieras).
3. **Compilación → Authentication → Comenzar**. En *Métodos de acceso* activá **Google** y **Anónimo**.
4. En **Authentication → Configuración → Dominios autorizados** agregá `TU-USUARIO.github.io`.
5. **⚙ Configuración del proyecto → Tus apps → `</>` (Web)** → registrala → copiá el objeto `firebaseConfig` y pegalo en `firebase-config.js`.
6. Subí el cambio, abrí la web, tocá **Admin** y entrá con tu Google. Te muestra tu **UID**: pegalo en `ADMIN_UID` de `firebase-config.js` y en `firestore.rules`.
7. **Firestore Database → Reglas**: pegá todo `firestore.rules` y tocá **Publicar**.
8. Subí `firebase-config.js`, recargá la web, entrá como Admin y tocá **Cargar cartas iniciales**.

## Probarla en tu compu
`npx serve .` y entrá a la dirección que te muestra. Mientras `firebase-config.js` diga `PEGAR...`
funciona en **modo prueba**: todo se guarda solo en tu navegador y podés editar todo.

## Archivos
- `index.html`: toda la web.
- `firebase-config.js`: datos de tu proyecto Firebase y tu UID de admin (no son secretos).
- `firestore.rules`: reglas de seguridad (quién puede escribir qué).
- `datos-iniciales.json`: las cartas con las que arranca.
- `fotos/`: las fotos recortadas.
