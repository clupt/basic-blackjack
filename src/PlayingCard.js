const BASE_IMAGE = "https://deckofcardsapi.com/static/img/";
// import {getDeck, drawAndShowCard } from "./DeckOfCards";
const CARD_VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const CARD_SUITS = ["C", "H", "S", "D"];


function PlayingCard({ value = "Queen", suit = "clubs" }) {
  return (
    <div>
      <p>
        {value} of {suit}
      </p>
    </div>
  );
}

export default PlayingCard;
