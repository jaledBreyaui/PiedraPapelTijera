"use strict";

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
let resultado = document.querySelector(".display__uno");
let displayPc = document.querySelector(".displayPc__uno");
let displayPlayer = document.querySelector(".displayPlayer__uno");
let botones = document.querySelectorAll("button[name=botones]");
let pcPoints = 0;
let playerPoints = 0;
let again = document.querySelector(".reintentar")
resultado.textContent = "Al mejor de 3!"


let machineOp = function () {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "piedra";
    } if (random === 1) {
        return "papel";
    } if (random === 2) {
        return "tijera";
    }
    ganador();
};

let displayMachineOp = function (pcOP) {
    displayPc.textContent = pcOP.toUpperCase();
};

let ganador = function () {
    displayPoints();
    if (playerPoints === 3) {
        document.querySelector(".caja").style.backgroundColor = "green";
        resultado.textContent = "Ganaste!"
        reboot();
    }

    if (pcPoints === 3) {
        document.querySelector(".caja").style.backgroundColor = "red";
        resultado.textContent = "perdiste";
        reboot();
    }
}

const reboot = function () {
    again.classList.toggle("hidden")
    document.querySelector(".playerOptions").classList.toggle("hidden")
    document.querySelector(".pcOptions").classList.toggle("hidden")
}

again.addEventListener("click", () => {
    reintentar();
    reboot();
})

let reintentar = function () {
    playerPoints = 0;
    pcPoints = 0;
    document.querySelector(".caja").style.backgroundColor = "rgb(89, 89, 237)";
    resultado.textContent = "Al mejor de 3!"
    displayPlayer.textContent = "..."
    displayPc.textContent = "..."
    displayPoints();
}

const displayPoints = function () {
    document.querySelector(".displayPlayer__dos").textContent = playerPoints;
    document.querySelector(".displayPc__dos").textContent = pcPoints;
}


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        let pcOP = machineOp();
        displayMachineOp(pcOP);
        displayPlayer.textContent = boton.value.toUpperCase();
        if (boton.value === "piedra") {
            if (pcOP === "papel") {
                pcPoints++;
            } if (pcOP === "tijera") {
                playerPoints++;
            }
        }
        if (boton.value === "papel") {
            if (pcOP === "tijera") {
                pcPoints++;
            } if (pcOP === "piedra") {
                playerPoints++;
            }
        }
        if (boton.value === "tijera") {
            if (pcOP === "piedra") {
                pcPoints++;
            } if (pcOP === "papel") {
                playerPoints++;
            }
        }
        ganador();
    });
});
