'use strict';

/* 
LOGICA:
Sappiamo che discriminiamo se un numero è multiplo di un altro confrontando il resto tra i due numeri
(se il resto è 0, abbiamo un multiplo), usando l'operatore "modulo".
Quindi creaiamo un ciclo for che per ogni iterazione fa il confronto tra la cifra zero ed il risultato tra il numero
dell'iterazione attuale confronto (tramite modulo) rispettivamente con i casi delle cifre 3 e 5 
(con l'uso dell'operatore logico AND), poi con 3 e con 5 prese singolarmente, per valutare in quale caso ci 
troviamo e quindi cosa stampiamo in console. 
Se nessun confronto restituisce un numero multiplo né di 3 né di 5, allora stampiamo il numero stesso.
*/

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}