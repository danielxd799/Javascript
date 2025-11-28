let product = 1; 
let num;
do {
    num = parseInt(prompt("Zadej hodnotu (pro ukončení zadej 0): "), 10);
    
    if (num !== 0) {
        product *= num; 
    }
} while (num !== 0);

console.log(product);