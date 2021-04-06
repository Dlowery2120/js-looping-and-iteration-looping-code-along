// Code your solutions in this file


function writeCards(names, event) {
    for (let i = 0; i < names.length; i++)
    return [ `Thank you, ${names[i]}, for the wonderful ${event} gift!` ]
}

writeCards(["Ada", "Brendan", "Ali"], "birthday"); 

let countup = 0;
while (countup < 10) {
  console.log(countup++);
} 

countDown(10); 