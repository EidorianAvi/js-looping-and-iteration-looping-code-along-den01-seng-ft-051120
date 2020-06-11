let names = ["Ada", "Brendan", "Ali"]


function writeCards(array, occasion){
  let output =[];
  for(let i = 0; i < array.length; i++){
    output.push(`Thank you ${array[i]}, for the wonderful ${occasion} gift!`)
  }
  
  return output;
}

writeCards(names, "birthday")