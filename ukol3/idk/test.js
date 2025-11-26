let text = prompt("zadej text: ");
function delkaTextu(text){
    let delka = 0;

    for (let i = 0; text[i] !== undefined; i++){
        delka++;

    }
    return delka;
}
let spocitejText = delkaTextu(text);
console.log(spocitejText);

function spocitejPocetA(text) {
    let pocet = 0;
    for (let i = 0; text[i] !== undefined; i++) {
      if (text[i] === 'a' || text[i] === 'A') {
        pocet++;  
      }
    }
    return pocet;
}

let pocetA = spocitejPocetA(text);
console.log(pocetA);


const slova = ["ahoj", "světe", "jak", "se", "máš"];

const delkySlov = slova.map(slovo => slovo.length);

console.log(delkySlov); 
