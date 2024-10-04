import {
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

import { auth } from "./firebase.js";

const googleButton = document.querySelector("#google-btn");

googleButton.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  //Forzamos la selección de cuenta
  provider.setCustomParameters({
    prompt: "select-acount",
  });

  try {
    const credentials = await signInWithPopup(auth, provider);
  } catch (error) {}
});
