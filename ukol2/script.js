/*****************************************************************/
// Uloha: Spočítej součet dvou čísel zadaných uživatelem
// Požádej uživatele o dvě čísla pomocí `prompt()` a vypiš jejich součet do konzole.
 
// zde bude tvoje řešení
/*
let cislo1 = prompt("Zadej prvni cislo: ");
let cislo2 = prompt("Zadej druhe cislo: ");
let num1 = Number(cislo1);
let num2 = Number(cislo2);
console.log(num1 + num2);

 
/*****************************************************************/
// Uloha: Zjisti, zda je číslo sudé nebo liché
/* 
    Požádej uživatele o číslo a zjisti, zda je sudé nebo liché.
    Výsledek zapiš do konzole.
*/
 
// zde bude tvoje řešení
/*
let cislo = prompt("zadej cislo: ");
let num = Number(cislo);
if((num%2) == 0){
    console.log("cislo je sude");
}else {
    console.log("Cislo je liche");
}
 
/*****************************************************************/
// Uloha: Převod stupňů Celsia na Fahrenheity
/*
    Požádej uživatele o teplotu ve stupních Celsia a převeď ji na Fahrenheity.
    Vzorec: `F = C * 9/5 + 32`
*/
 
// zde bude tvoje řešení
/*
function mojeCislo(){
    let stupne = document.getElementById("cislo").value;
    let C = Number(stupne);
    console.log(C * 9/5 + 32);
} 
 
/*****************************************************************/
// Úloha: Zjisti, zda je číslo kladné, záporné nebo nula
/*
    Požádej uživatele o číslo. Do konzole vypiš zda:
    - číslo je kladné, záporné či je nula
*/
 
// zde bude tvoje řešení
/*
function mojeCislo(){
    let cislo = document.getElementById("cislo").value;
    let num = Number(cislo);
    if(num > 0){
        console.log("Kladné");
    }else if(num < 0){
        console.log("Záporné");
    }else{
        console.log("Nula");
    }
}
 
/*****************************************************************/
// Úloha: Zjisti, zda zadané slovo obsahuje písmeno „a“
/**
* Požádej uživatele o slovo. Pomocí .include() zjisti,
* zda slovo obsahuje písmeno "a". Vypiš do konzole
*/
 
// zde bude tvoje řešení
/*
function mojeSlovo(){
    let slovo = document.getElementById("slovo").value;
    if(slovo.includes("a")){
        console.log("Obsahuje A");
    }else{
        console.log("neobsahuje A");
    }
} 
 
/*****************************************************************/
// Uloha: Analyzátor textu
/**
* Požádej uživatele o slovo. Zjisti kolik kterých písmen obsahuje.
* Použij .include() nad zadaným slovem. Vypiš do konzole.
*/
/* 
function mojeSlovo() {
    let slovo = document.getElementById("slovo").value.toLowerCase();
    let abcd = 'aábcčdďeěfghiíjklmnoópqrřsštťuůúvwxyzž';
    let pismenaP = {};

    for (let i = 0; i < abcd.length; i++) {
        let pismeno = abcd[i];
        let pocet = slovo.split(pismeno).length - 1;

        if (pocet > 0) {
            pismenaP[pismeno] = pocet;
        }
    }

    console.log(pismenaP);
}

/*****************************************************************/
// 6️ Zjisti, zda zadané číslo je prvočíslo
/**
* Požádej uživatele o číslo. Pomocí ternárního operátoru zjisti,
* zda je číslo prvočíslo či nikoliv.
*/
 
// zde bude tvoje řešení


 
/*****************************************************************/
// Příklady na práci se **scope (zastínění proměnné)**
/*
let x = 10; // globální scope
 
function prikladScope() {
    let x = 5; // lokální scope – zastínění globální x
    console.log("Lokální x: " + x); // 5
}
 
prikladScope();
console.log("Globální x: " + x); // 10
 
/****************************************************************
// Příklad **redeclaration proměnné**
 
var a = 5;
var a = 10; // var umožňuje redeklaraci
console.log(a); // 10
 
// let b = 5;
// let b = 10; // chybové, let neumožňuje redeklaraci
 
/****************************************************************
// # 🔹 Rozdíl mezi `==` a `===`
console.log(5 == "5");  // true -> porovnává hodnotu, typ ignoruje
console.log(5 === "5"); // false -> porovnává hodnotu i typ 
*/