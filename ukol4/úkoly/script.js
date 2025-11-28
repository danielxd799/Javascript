/* ============================================
   🔵 ÚKOLY 31–40: Funkce, události a práce s DOM
   ============================================ */

/* 31) Po kliknutí na tlačítko zobraz alert „Ahoj světe!“.
      - Vytvoř funkci, která zobrazí alert.
      - Použij událost onclick nebo addEventListener.
*/
// Úkol 31: Alert
document.getElementById('btn31').addEventListener('click', function() {
    alert("Ahoj světe!");
});

/* 32) Po kliknutí na tlačítko změň text vybraného HTML elementu.
      - Napiš funkci, která změní .textContent nebo .innerText.
      - Vyzkoušej použití arrow funkce.
*/
document.getElementById('btn32').addEventListener('click', () => {
    document.getElementById('text32').textContent = "Text byl změněn!";
});

/* 33) Vypiš do <div> aktuální čas, který se bude každou sekundu aktualizovat.
      - Použij setInterval a vlastní funkci pro získání času.
      - Funkce by měla vracet formátovaný čas (HH:MM:SS).
*/
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();  
    document.getElementById('clock33').textContent = time;
}

setInterval(updateTime, 1000);

/* 34) Po kliknutí na tlačítko změň barvu pozadí celé stránky.
      - Vytvoř funkci s parametrem (barva).
      - Vyzkoušej nastavit hodnotu přes document.body.style.
*/
let colorChange = false;
document.getElementById('btn34').addEventListener('click', function() {
    if(colorChange){
        document.body.style.backgroundColor = "";
        colorChange = false;
    } else {
        document.body.style.backgroundColor = "lightblue"
        colorChange = true;
    }
});


/* 35) Po najetí myší na obrázek ho zvětši.
      - Použij eventy mouseover a mouseout.
      - Změnu proveď pomocí třídy v CSS nebo style.width v JS.
*/
const img35 = document.getElementById('img35');

img35.addEventListener('mouseover', () => {
    img35.style.width = "300px"; 
});

img35.addEventListener('mouseout', () => {
    img35.style.width = "150px";  
});


/* 36) Po odeslání formuláře vypiš hodnoty inputů do konzole.
      - Zakázat přirozené odeslání formuláře pomocí event.preventDefault().
      - Použij funkci, která načte hodnoty inputů.
*/

/* 37) Vytvoř jednoduché „počítadlo kliknutí“.
      - Po každém kliknutí zvýší číslo o 1 a zobraz ho v HTML.
      - Proměnná se musí nacházet ve správném scope.
*/

/* 38) Po kliknutí na tlačítko skryj nebo zobraz text.
      - Můžeš použít classList.toggle().
      - Zvaž použití anonymní nebo arrow funkce.
*/

/* 39) Validuj formulář – zkontroluj, jestli je vyplněné jméno a e-mail.
      - Pokud není validní, zobraz chybovou hlášku.
      - Použij jednoduchou podmínku a funkci validateForm().
*/

/* 40) Pomocí slideru (input type="range") měň velikost písma textu.
      - Po změně hodnoty aktualizuj style.fontSize.
      - Hodnota ze slideru bude vstupním parametrem funkce.
*/


/* =====================================================
   Práce s formuláři a uživatelskými daty – obecné úkoly
   ===================================================== */

/* - Nauč se načíst hodnoty z inputů pomocí .value.
   - Vytvoř funkci, která validuje hodnoty podle podmínek.
   - Dynamicky aktualizuj HTML podle vstupních dat
     (např. okamžitý výpočet ceny, filtrování seznamu apod.).
*/


/* ================================================
   🟣 ÚKOLY 41–50: Pokročilejší logika a práce s daty
   ================================================ */

/* 41) Generuj náhodné heslo z písmen, číslic a symbolů.
      - Funkce přijme délku jako parametr.
      - Použij Math.random a vlastní pole znaků.
*/

/* 42) Spočítej faktoriál zadaného čísla.
      - Vytvoř klasickou funkci nebo arrow funkci.
      - Vyzkoušej rekurzi nebo cyklus.
*/

/* 43) Zjisti, zda je text palindrom („kajak“, „oko“).
      - Vytvoř funkci, která vrací true/false.
      - Odstraň mezery a porovnej text pozpátku.
*/

/* 44) Vytvoř jednoduché stopky – Start / Stop / Reset.
      - Použij setInterval a clearInterval.
      - Funkce musí správně pracovat s proměnnými ve scope.
*/

/* 45) Simuluj hod kostkou (1–6).
      - Funkce vrací náhodné číslo 1–6.
      - Výsledek vypiš do HTML.
*/

/* 46) Najdi nejčastější hodnotu v poli (moda).
      - Vytvoř funkci, která přijme pole jako parametr.
      - Použij objektový „počítací“ slovník (frequency map).
*/

/* 47) Vytvoř funkci, která formátuje datum do českého formátu
      (DD.MM.YYYY).
      - Funkce dostane objekt Date a vrací string.
*/

/* 48) Zjisti, kolik dní zbývá do konce roku.
      - Spočítej rozdíl mezi dnešním datem a 31.12.
      - Vrátí celé číslo (Math.floor).
*/

/* 49) Vytvoř jednoduchý to-do list:
      - Přidávání úkolů
      - Odstraňování úkolů
      - Každá operace musí být funkce.
*/

/* 50) Ulož a načti data z localStorage (např. skóre nebo jméno).
      - Použij localStorage.setItem a localStorage.getItem.
      - Zobraz načtená data v HTML.
*/
