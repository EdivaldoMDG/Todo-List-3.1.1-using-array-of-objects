const List =  require('./importfunc');
const listFunctions = new List([]);
listFunctions.addItem({ id: "id3", name: "Capitan America", job: "superHero" });
listFunctions.addItem({ id: "id4", name: "Spider-man", job: "Pro footballer" });



console.log(listFunctions.fetchItems());

listFunctions.removeItem("id4");
console.log(listFunctions.fetchItems());

listFunctions.updatedItem("id3", { job : "soldier" });
console.log(listFunctions.fetchItems());
