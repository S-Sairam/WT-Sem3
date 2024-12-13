dt = Math.floor(Math.random() * 30) + 1;
mt = Math.floor(Math.random() * 11);
date = new Date(2021, mt, dt);
console.log(date);

date_in = prompt("Enter Date In dd/mm/yyyy format", "1/1/2021");

date_in = new Date(date_in);

if (date_in.getTime() === date.getTime()) console.log("Guess Right");

if (date_in.getTime() > date.getTime())
  console.log("Guess more than generated one ");

if (date_in.getTime() < date.getTime())
  console.log("Guess lower than generated one");
