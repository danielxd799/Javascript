// ================================
// ERROR HANDLING V JAVASCRIPTU
// ================================

/* Pomocná funkce pro výpis do UI */
function writeOutput(id, text) {
    document.getElementById(id).textContent = text;
}

// ================================
// Úloha 90 – ReferenceError
// Vytvoř funkci checkReference(), která se pokusí přistoupit k neexistující proměnné.
// Zachyť chybu pomocí try/catch a vypiš err.name a err.message do konzole a UI.
// Tip: použij neexistující proměnnou např. nonExistentVar
// ------------------------------
function runTask90() {
    try {
        console.log(nonExistentVar); 
    } catch (err) {
        console.error(err.name, err.message);
        writeOutput("output90", `${err.name}: ${err.message}`);
    }
}

// ================================
// Úloha 91 – TypeError
// Funkce callFunction(param) očekává parametr typu function.
// Pokud dostane jiný typ, vyhodí TypeError.
// Zachyť chybu try/catch a vypiš err.name a err.message.
// ------------------------------
function runTask91(param) {
    try {
        if (typeof param !== "function") {
            throw new TypeError("Parametr není funkce");
        }
        param();
    } catch (err) {
        console.error(err.name, err.message);
        writeOutput("output91", `${err.name}: ${err.message}`);
    }
}

// ================================
// Úloha 92 – RangeError
// Funkce createArray(size) vytvoří pole délky size.
// Pokud je size mimo rozsah (např. > 10000), vyhodí RangeError.
// Zachyť chybu a zobraz uživatelsky přívětivou zprávu.
// ------------------------------
function runTask92(size) {
    try {
        size = Number(size);
        if (size < 0 || size > 10000) {
            throw new RangeError("Velikost pole je mimo povolený rozsah");
        }
        const arr = new Array(size);
        writeOutput("output92", `Pole vytvořeno, délka: ${arr.length}`);
    } catch (err) {
        console.error(err);
        writeOutput("output92", "Zadaná velikost pole není povolena");
    }
}

// ================================
// Úloha 93 – SyntaxError (eval)
// Funkce evaluateCode(code) použije eval(code).
// Zachyť případnou SyntaxError a vypiš err.message a err.stack.
// ------------------------------
function runTask93(code) {
    try {
        eval(code);
        writeOutput("output93", "Kód byl úspěšně spuštěn");
    } catch (err) {
        if (err instanceof SyntaxError) {
            console.error(err.message);
            console.error(err.stack);
            writeOutput("output93", err.message);
        } else {
            throw err;
        }
    }
}
 

// ================================
// Úloha 94 – URIError
// Funkce decode(uri) volá decodeURIComponent(uri).
// Pokud je neplatný URI string, zachytí URIError a vypíše zprávu.
// ------------------------------
function runTask94(uri) {

}

// ================================
// Úloha 95 – Throw vlastní Error
// Funkce validateAge(age) vrátí chybu, pokud age < 0 nebo není číslo.
// Použij throw new Error("Invalid age").
// Zachyť chybu a zobraz uživateli.
// ------------------------------
function runTask95(age) {

}

// ================================
// Úloha 96 – Chyby v Promise
// Vytvoř Promise, která náhodně buď resolve() nebo reject() s chybou.
// Použij .catch() a .finally(), vypiš výsledky do konzole.
// ------------------------------
function runTask96() {

}

// ================================
// Úloha 97 – Chyby v async/await
// Funkce fetchData(url) – fetch na URL.
// Pokud fetch failne nebo server vrátí HTTP error,
// vyhodit vlastní chybu pomocí throw new Error().
// Zachytit chybu try/catch.
// ------------------------------
async function runTask97(url) {

}

// ================================
// Úloha 98 – Chyby ve Fetch + HTTP statusy
// Funkce getJson(url) – fetch + res.ok check.
// Pokud res.ok === false, vyhodit vlastní error
// s textem `HTTP Error: ${res.status}`.
// ------------------------------
async function runTask98(url) {

}

// ================================
// Úloha 99 – Centralizovaný Error Handler
// Funkce handleError(err) – vypíše console.error(err)
// a zároveň zobrazí text uživateli.
// Připojit handler ke všem předchozím úlohám (volitelné).
// ------------------------------
function handleError(err) {

}

function runTask99() {

}

// ================================
// Bonus:
// - Silent Errors: promise bez catch (NEDOPORUČENO)
// - Eval deprecated: eval používat jen pro demonstraci
// - Logging stacktrace: err.stack jen pro debugging
// ================================
