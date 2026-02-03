//   Creo un for/loop
// - Inizializzo la variabile con "let" e assegno un valore di 1.
// - Dico che i dev'essere minore o uguale a 100
// - Imposto un incremento (i++)
// - Imposto 4 condizioni per il ciclo (if, else if, else if, else)
// - Utilizzo l'operatore modulo (%) per cercare i multipli di 3 e a fine operazione aggiungo l'operatore logico and (&) per cercare anche i multipli di 5, loggo in console per verificarne l'effettivo funzionamento
// - Nelle condizioni successive voglio stampare Fizz e Buzz ogni qualvolta ci siano rispettivamente multipli di 3 e 5. Faccio esattamente come sopra, utilizzo l'operatore modulo per cercarli.


for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz')
    }
    else if (i % 3 === 0) {
        console.log('Fizz')
    }
    else if (i % 5 === 0) {
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}
