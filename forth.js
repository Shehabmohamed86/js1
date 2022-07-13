const magicSqare = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
for (let row of magicSqare){
  let sum = 0;
  for(let num of row){
    sum += num
  }
  console.log(`${row} summed to ${sum}`)
}
const first = ['mohamed', 'baraa', 'juwayria', 'kayan', 'lara'];
const last = ['shehab', 'shehab','shehab','shehab','elsoudany']; 
for (let i = 0 ; i < first.length; i++){
  console.log(first[i],last[i]);
}
const movieRating = {
  mohamed : 1,
  baraa   : 2,
  juwayria: 3,
  kayan   : 4,
  lara    : 5
};
for (let mov of Object.keys(movieRating)){
  console.log(mov,movieRating[mov]);
}
  let tot = 0;
  const rat = Object.values(movieRating);
 
  for (let r of rat){
    tot += r;
  }

let avg = tot / rat.length;
console.log(avg);


const mohamedEarning = {
  mon : 250,
  tues: 210,
  wed : 300,
  thur: 270,
  fri : 210,
  sut : 180,
  sun :350
};
for (let days in mohamedEarning){

  console.log(days);
  console.log(mohamedEarning[days]);
}
let tota = 0;
for (let days in mohamedEarning){
   
  tota += mohamedEarning[days];
}
console.log(`total of moahmedearning : ${tota}`);

