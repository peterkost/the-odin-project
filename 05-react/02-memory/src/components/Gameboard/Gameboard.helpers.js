import { DECK_SIZE, DISPLAYED_CARDS } from "./Gameboard.constants";
import { fetchIds, fetchGalleryItem } from "./Gameboard.api";

const buildDeck = async () => {
  const allIds = await fetchIds();
  const deckIds = allIds.sort(() => 0.5 - Math.random()).slice(0, DECK_SIZE);
  const deck = await Promise.all(deckIds.map((id) => fetchGalleryItem(id)));
  return deck;
};

const getHand = (deck, count = DISPLAYED_CARDS) => {
  const shuffled = deck.sort(() => 0.5 - Math.random()).slice(0, count);
  return shuffled;
};

export { buildDeck, getHand };
