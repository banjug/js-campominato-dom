/*
// ------------------------------------------------------------
PRIMA PARTE----------------------------------------------------
1. far selezionare la difficoltà -> promt/pulsanti
    1.1 a seconda della difficoltà generare la griglia (facile 10x10, medio 9x9, difficile 7x7) -> if con tre funzioni di generazione degli elementi
2. selezionata la difficoltà generare la griglia
    2.1 selezionare il contenitore della griglia
    2.2 generare il singolo div
    2.3 applicare le classi di stilizzazione e inserire il numero relativo al quadrato a seconda della difficoltà (1-100 / 1-81 / 1-49)
    2.4 generare il numero corretto di quadrati all'interno della griglia a seconda della difficoltà
    (tutto questo sta in una funzione - la posso richiamare al click o inserendo la difficoltà nel prompt)
3. al clic del giocatore cambiare il colore del singolo quadratino -> aggiungere classe active che cambia lo sfondo con addEventListener

// ------------------------------------------------------------
SECONDA PARTE--------------------------------------------------
1.generare 16 numeri casuali che vanno a rappresentare le bombe
    1.1 controllare che i numeri non siano duplicati
2.marchiare le celle con uno dei numeri generati come bomba
3.se clicco su una bomba imposto un diverso colore
4.contare il numero di click corretti prima di cliccare una bomba (punteggio)
5.il gioco finisce se clicco su una bomba o se scelgo tutte le caselle senza bomba
6.quando clicco su una bomba mostrare tutte le caselle contententi una bomba

*/

// ------------------------------------------------------------
// versione con pulsanti---------------------------------------

// seleziona container griglia
const gridContainer = document.getElementById('container');

const easyBtn = document.getElementById("btnEasy");
const mediumBtn = document.getElementById("btnMedium");
const hardBtn = document.getElementById("btnHard");
let difficultyNum = '';
let points = 0;

easyBtn.addEventListener('click', 
    function() {
        difficultyNum = 100;
        points = 0;

        gridContainer.innerHTML = "";

        gridDifficulty(difficultyNum, "squareEasy")

        squareClickAdd('[class^="square"]', 'active')

    }
);

mediumBtn.addEventListener('click', 
    function() {
        difficultyNum = 81;
        points = 0;

        gridContainer.innerHTML = "";

        gridDifficulty(difficultyNum, "squareMedium") 

        squareClickAdd('[class^="square"]', 'active')
        
    }
    
);

hardBtn.addEventListener('click', 
    function() {
        difficultyNum = 49;
        points = 0;

        gridContainer.innerHTML = "";

        gridDifficulty(difficultyNum, "squareHard")

        squareClickAdd('[class^="square"]', 'active')
    }
);



// ------------------------------------------------------------
// funzioni----------------------------------------------------

// genera il quadrato
function squareGenerator(x, y) {
    let gridSquare = document.createElement(x);
    gridSquare.classList.add(y);
    return gridSquare
}

// genera la griglia di quadrati a seconda della difficoltà
function gridDifficulty(x, y) {
    for (let i = 0; i < x; i++) {
        let newElem = squareGenerator("div", y);
        gridContainer.appendChild(newElem);
    }
}

// al click cambia lo sfondo dei quadrati e aggiunge il numero all'interno
function squareClickAdd(x, y) {
    let squareClick = document.querySelectorAll(x);    
        console.log(squareClick);
        
        // genera le bombe
        let bombArray = [];
        while (bombArray.length < 16) {
            let bombNum = Math.floor(Math.random() * difficultyNum) + 1;
            if (bombArray.includes(bombNum) == false) {
                bombArray.push(bombNum);
            }
        }

        for (let i = 0; i < squareClick.length; i++) {
            squareClick[i].addEventListener ('click', 
                function() {
                    squareClick[i].classList.add(y);
                    if (bombArray.includes(i)) {
                        // se clicco su una bomba 
                        squareClick[i].innerText = "X";
                        squareClick[i].classList.add("bomb")
                    } else {
                        // se clicco su una casella libera
                        squareClick[i].innerText = i + 1;
                        points++;
                        console.log(points);
                    }
                }
            );
        }
}

