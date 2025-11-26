let uzivatel = {
   id : "id1",
   Username : "Uzivatel",
   Passwd : "tajneheslo1",
   Active : true,
   Count : 23
}
let hejs = Object.hejs(uzivatel);
console.log(uzivatel.id);
console.log(uzivatel.Active);
console.log(uzivatel.Count);
