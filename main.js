'use strict';

/* 
LOGICA:
Un ciclo for che per ogni iterazione confonta il numero attuale con il risultato dell'operatore "modulo"
rispettivamente per entrambe le cifre 3 e 5 (operatore logico AND), poi con 3 e con 5 prese singolarmente, per valutare
in quale caso ci troviamo e quindi cosa stampiamo in console. 
Se nessun confronto restituisce un numero multiplo né di 3 né di 5, allora stampiamo il numero stesso.
*/

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}