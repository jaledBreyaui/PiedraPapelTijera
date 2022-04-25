"use strict";

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
let resultado = document.querySelector(".display");
let displayPc = document.querySelector(".displayPc");
let displayPlayer = document.querySelector(".displayPlayer");

piedra.addEventListener("click", () => {
    displayPlayer.textContent = piedra.value.toUpperCase();
    let pcOP = machineOp()
    if (pcOP === "piedra") {
        resultado.textContent = "Empate!"
    } if (pcOP === "papel") {
        resultado.textContent = "Perdiste!"
    } if (pcOP === "tijera") {
        resultado.textContent = "Ganaste!"
    }
    displayMachineOp(pcOP);
});

papel.addEventListener("click", () => {
    displayPlayer.textContent = papel.value.toUpperCase();
    let pcOP = machineOp()
    if (pcOP === "papel") {
        resultado.textContent = "Empate!"
    } if (pcOP === "tijera") {
        resultado.textContent = "Perdiste!"
    } if (pcOP === "piedra") {
        resultado.textContent = "Ganaste!"
    }
    displayMachineOp(pcOP);
});

tijera.addEventListener("click", () => {
    displayPlayer.textContent = (tijera.value).toUpperCase();
    let pcOP = machineOp()
    if (pcOP === "tijera") {
        resultado.textContent = "Empate!"
    } if (pcOP === "piedra") {
        resultado.textContent = "Perdiste!"
    } if (pcOP === "papel") {
        resultado.textContent = "Ganaste!"
    }
    displayMachineOp(pcOP);
});


let machineOp = function () {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "piedra";
    } if (random === 1) {
        return "papel";
    } if (random === 2) {
        return "tijera";
    }
};

let displayMachineOp = function (pcOP) {
    displayPc.textContent = pcOP.toUpperCase();
};
