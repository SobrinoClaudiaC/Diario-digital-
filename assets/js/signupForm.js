const signUpForm = document.querySelector("#signup-form");

console.log(signUpForm);
signUpForm.addEventListener("submit", (e) => {
  // Evitar que se recargue la página
  e.preventDefault();
  console.log("Formulario enviado");

  //Obtener datos del formulario a traves de sus id
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  console.log(email);
  console.log(password);
});
