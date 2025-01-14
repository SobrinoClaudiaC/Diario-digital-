import { setupTasks } from "./setupTasks.js";

const LoggedIn = document.querySelectorAll(".logged-in");
const LoggedOut = document.querySelectorAll(".logged-out");
const mainContainer = document.querySelector("#main-container");
const inicioContainer = document.querySelector("#inicio-container");
const saludo = document.querySelector("#saludo");

export const checkLogin = (user) => {
  // Modificamos el nav dependiendo si el usuario está logueado o no
  if (user) {
    LoggedIn.forEach((element) => (element.style.display = "block"));
    LoggedOut.forEach((element) => (element.style.display = "none"));
    // Mostramos el main container
    mainContainer.style.display = "block";
    saludo.textContent = `Bienvenidx ${user.email}!`;
    // Ocultamos el inicio container
    inicioContainer.style.display = "none";
    mensaje.textContent = "";

    // Cargamos las tareas
    setupTasks(user);
  } else {
    LoggedOut.forEach((element) => (element.style.display = "block"));
    LoggedIn.forEach((element) => (element.style.display = "none"));
    // Ocultamos el main container
    mainContainer.style.display = "none";
    saludo.textContent = "";
    // Mostramos el inicio container
    inicioContainer.style.display = "block";
    mensaje.textContent = "";
  }
};
