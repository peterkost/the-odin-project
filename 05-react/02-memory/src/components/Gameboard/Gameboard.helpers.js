import { DISPLAYED_CARDS } from "./Gameboard.constants";

const fetchAllCards = () => {
  const allCards = [
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
    { title: "SAMPLE TEXT", id: crypto.randomUUID() },
  ];
  return allCards;
};

const getRandomCards = (count = DISPLAYED_CARDS) => {
  const allCards = fetchAllCards();
  const shuffled = allCards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export { getRandomCards };
