const imagen = document.querySelector(".img_5");
let tieneBorde = false;
imagen.addEventListener("click", () => {
    if (tieneBorde) {
        
        imagen.style.border = "";
    } else {
        imagen.style.border = "2px solid red";
    }
    tieneBorde = !tieneBorde;
});
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");

const btnSumar = document.querySelector("#sumar");

btnSumar.addEventListener("click", () => {
    if (isNaN(num1.value) || num1.value.trim() === "") return alert("El valor del input 1 no es numérico.");
    if (isNaN(num2.value) || num2.value.trim() === "") return alert("El valor del input 2 no es numérico.");
    if (isNaN(num3.value) || num3.value.trim() === "") return alert("El valor del input 3 no es numérico.");

    const suma = +num1.value + +num2.value + +num3.value;

    if (suma <= 10) alert(`Tu cantidad de Stickers son: ${suma}`);
    else alert("¡Llevas demasiados stickers!");

    num1.value = "";
    num2.value = "";
    num3.value = "";
});

const n1 = document.querySelector("#primero");
const n2 = document.querySelector("#segundo");
const n3 = document.querySelector("#tercero");

const btnValidar = document.querySelector(".btn_2");
const msj2 = document.querySelector("#msj2");

btnValidar.addEventListener("click", () => {
    const numero1 = Number(n1.value);
    const numero2 = Number(n2.value);
    const numero3 = Number(n3.value);

    if (numero1 === 9 && numero2 === 1 && numero3 === 1) {
        msj2.innerHTML = "Contraseña 1 es Correcta";
    } else if (numero1 === 7 && numero2 === 1 && numero3 === 4) {
        msj2.innerHTML = "Contraseña 2 es Correcta";
    } else {
        msj2.innerHTML = "Contraseña Incorrecta";
    }
});
