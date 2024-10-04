const LoggedIn = document.querySelectorAll(".logged-in");
const LoggedOut = document.querySelectorAll(".logged-out");

export const checkLogin = (user) => {
  // Modificamos el nav dependiendo si el usuario está logueado o no
  if (user) {
    LoggedIn.forEach((element) => (element.style.display = "block"));
    LoggedOut.forEach((element) => (element.style.display = "none"));
  } else {
    LoggedOut.forEach((element) => (element.style.display = "block"));
    LoggedIn.forEach((element) => (element.style.display = "none"));
  }
};
