let game = [
    [45,32,87,54],
    [12,34,56,78],
    [90,12,34,56],
    [11,22,33,44]
];
let total = 0;

for(let i = 0; i < game.length; i++){
  let row = game[i];
  for (let j = 0; j < row.length; j++){
   total += row[j];
  }

}
console.log(total);