let names = ["Ada", "Brendan", "Ali"]


function writeCards(array, occasion){
  for(let i = 0; i < array.length; i++){
    console.log(`Thank you ${array[i]}, for the wonderful ${occasion} gift!`)
  }
  
  return array;
}

writeCards(names, "birthday")