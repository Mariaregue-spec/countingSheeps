function countSheep (list){
let sheep = 0;
for (let index = 0; index < list.length; index++){  
if (list[index] === true){
sheep ++;
}
}
if(sheep > 0) {
console.log("There are " + sheep + "sheep in total");
}
if (sheep === 0) {
    console.log("Ups!!! Wolfs eaten Sheeps");
}
}
countSheep([ true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true ]);
countSheep( [ false, false, false ])
countSheep([])
countSheep([true, true, false, false])