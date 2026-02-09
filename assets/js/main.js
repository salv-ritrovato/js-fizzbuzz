// Ciclo for per ciclare tutti i numeri che vanno da 1 a 100
// SE ci sono multipli di 3 e 5, FizzBuzz
// ALTRIMENTI se ci sono multipli di 3, Fizz
// ALTRIMENTI se ci sono multipli di 5, Buzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}