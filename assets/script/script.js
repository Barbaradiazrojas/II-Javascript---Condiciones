// Referencia a la imagen
const imagen = document.querySelector(".img_5");

// Variable para controlar el estado del borde
let tieneBorde = false;

// Evento para agregar o quitar el borde al hacer clic en la imagen
imagen.addEventListener("click", () => {
    if (tieneBorde) {
        // Quitar el borde si ya lo tiene
        imagen.style.border = "";
    } else {
        // Agregar el borde si no lo tiene
        imagen.style.border = "2px solid red";
    }
    // Cambiar el estado del borde
    tieneBorde = !tieneBorde;
});

// Funcionalidad para sumar valores y mostrar mensajes
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");

const btnSumar = document.querySelector("#sumar");

btnSumar.addEventListener("click", () => {
    // Validar que los valores sean números
    if (isNaN(num1.value) || num1.value.trim() === "") return alert("El valor del input 1 no es numérico.");
    if (isNaN(num2.value) || num2.value.trim() === "") return alert("El valor del input 2 no es numérico.");
    if (isNaN(num3.value) || num3.value.trim() === "") return alert("El valor del input 3 no es numérico.");

    // Sumar los valores
    const suma = +num1.value + +num2.value + +num3.value;

    // Mostrar mensajes según la suma
    if (suma <= 10) alert(`Tu cantidad de Stickers son: ${suma}`);
    else alert("¡Llevas demasiados stickers!");

    // Limpiar los campos
    num1.value = "";
    num2.value = "";
    num3.value = "";
});

// Funcionalidad para validar contraseñas
const n1 = document.querySelector("#primero");
const n2 = document.querySelector("#segundo");
const n3 = document.querySelector("#tercero");

const btnValidar = document.querySelector(".btn_2");
const msj2 = document.querySelector("#msj2");

btnValidar.addEventListener("click", () => {
    // Convertir valores a números
    const numero1 = Number(n1.value);
    const numero2 = Number(n2.value);
    const numero3 = Number(n3.value);

    // Validar contraseñas
    if (numero1 === 9 && numero2 === 1 && numero3 === 1) {
        msj2.innerHTML = "Contraseña 1 es Correcta";
    } else if (numero1 === 7 && numero2 === 1 && numero3 === 4) {
        msj2.innerHTML = "Contraseña 2 es Correcta";
    } else {
        msj2.innerHTML = "Contraseña Incorrecta";
    }
});
