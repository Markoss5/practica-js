const palabra = "Banfield";
let palabraOculta = Array(palabra.length).fill("_");
let CANT_VIDAS = 5;

function MostrarLetras() {
  let contenido = document.getElementById("palabra");
  contenido.textContent = palabraOculta.join(" ");
}

function MostrarVidas() {
  let vidas = document.getElementById("vidas");
  vidas.textContent = "Vidas restantes: " + CANT_VIDAS;
}

function IngresarLetra() {
  let inputLetra = document.getElementById("letra").value.toLowerCase();

  if (inputLetra === "" || inputLetra.length > 1) {
    alert("Por favor, ingresa una letra válida.");
  } else {
    ValidarLetra(inputLetra);
  }

  document.getElementById("letra").value = "";
}

function ValidarLetra(letra) {
  let letraEncontrada = false;

  palabra.split("").forEach((letraPalabra, index) => {
    if (letraPalabra.toLowerCase() === letra) {
      palabraOculta[index] = letraPalabra;
      letraEncontrada = true;
    }
  });
  if (!letraEncontrada) {
    CANT_VIDAS--;
  }
  if (CANT_VIDAS <= 0) {
    alert("¡Perdiste! La palabra era: " + palabra);
    return;
  }
  if (!palabraOculta.includes("_")) {
    alert("¡Felicidades! Has adivinado la palabra: " + palabra);
    return;
  }
  MostrarLetras();
  MostrarVidas();
}

MostrarLetras();
MostrarVidas();
