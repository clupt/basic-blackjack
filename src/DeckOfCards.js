import axios from "axios";

async function getDeck (){
  const resp = await axios.get(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  )
  const deck = resp.data.deck_id;
  drawAndShowCard(deck);
}

async function drawAndShowCard(deck){
  const resp = await axios.get(
    `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`
  )
  const card1 = resp.data.cards[0];
  console.log("card1=", card1);
  const card2 = resp.data.cards[1];
  console.log("card2=", card2);
  return [card1, card2];
}



export { getDeck, drawAndShowCard };
