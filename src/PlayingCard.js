// const CARDS = ['https://deckofcardsapi.com/static/img/9H.png'];
import {getDeck, drawAndShowCard } from "./DeckOfCards";
let cards;

async function cardsGetter(){
  const res = await getDeck();
  cards = res;
}
console.log("cards=", cards);
cardsGetter();

function PlayingCard() {
  // const deck = getDeck();
  return (
    <div>
      <p>{ cards ? cards[0].suit : 'Nope'}</p>
    </div>
  )
}

export default PlayingCard