document.getElementById("btn").addEventListener("click", () => {
    alert("Klikl jsi na tlačítko!");
});

document.getElementById("name").addEventListener("change", (e) => {
    console.log("Zadal jsi:", e.target.value);
});
