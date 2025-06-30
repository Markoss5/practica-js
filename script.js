
    let letra;
    let palabraArray = [];
    let CANT_VIDAS = 5;

    let palabra = "Banfield";

    console.log()

    function MostrarLetras(){}
    let contenido

    palabraArrayOutput = palabra.split("");
        palabraArrayOutput.fill("_ ")
    console.log(palabraArrayOutput)


    function IngresarLetra() {
    let inputLetra = document.getElementById("letra").value;

    if (inputLetra === "") {
        alert("Por favor, ingresa una letra.");
    } else {
        letra = inputLetra;
    }
    }


    function ValidarLetra(){

    for(i = 0; i<palabra.length; i++){
        //for recorre palabra
        //por cada letra en palabra
        //validar si la letra que ingresaste en input coincide con la letra de palabra
        //si coincide, reemplazar ---- por la letra
        //sino, preguntar nueva letra
        if (palabra.indexOf(letra) -1)
        {
            console.log(palabra.indexOf(letra));
        }
    }
    // function MostrarAhorcado(){

    // }

    // function MostrarVidas(){

    // }