// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0;
  while(i < gifts.length){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++
  }
  return gifts;
}

wrapGifts(gifts)

function writeCards()