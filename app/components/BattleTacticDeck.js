"use client";

import { useState } from "react";

const BTDeck = [
  {
    Name: "BT1",
    Text1:
      "The underdog can pick one of the effects below. If there is no underdog, the players roll off and the winner picks the effect.",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT2",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT3",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT4",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT5",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT6",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT7",
    Text1:
      "The underdog can pick one of the effects below. If there is no underdog, the players roll off and the winner picks the effect.",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT8",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT9",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT10",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT11",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
  {
    Name: "BT12",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Text",
    Text3: "Text3",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1));
}

const BattleTacticDeck = () => {
  const [cardsInHand, setCardsInHand] = useState([]);
  const [cardsInDeck, setCardsInDeck] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);
  const [discardDeck, setDiscardDeck] = useState([]);

  const drawCard = () => {
    let tempDeck = [...cardsInDeck];
    const drawnCardArrayValue = getRandomInt(cardsInDeck.length);
    const drawnCardDeckValue = cardsInDeck[drawnCardArrayValue];
    setCardsInHand((cardsInHand) => [
      ...cardsInHand,
      BTDeck[drawnCardDeckValue],
    ]);
    tempDeck.splice(drawnCardArrayValue, 1);
    setCardsInDeck(tempDeck);
  };

  const discardCard = (cardToDiscard) => {
    setCardsInHand(cardsInHand.filter((card) => card != cardToDiscard));
    setDiscardDeck([...discardDeck, cardToDiscard]);
  };

  return (
    <div className="flex-col border-white border-2 rounded p-1 w-[50%]">
      <div className="m-6"></div>
      <div className="m-6">
        <button
          onClick={drawCard}
          disabled={cardsInDeck.length === 0 || cardsInHand.length > 2}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Draw BT Card
        </button>
        <p>Cards left in Deck: {cardsInDeck.length}</p>
        {cardsInHand.map((card) => (
          <div className="flex" key={card.Name}>
            <p>{card.Name}</p>
            <button
              onClick={() => discardCard(card)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
            >
              Discard Card
            </button>
          </div>
        ))}
        <p>Discard Pile: </p>
        {discardDeck.map((card) => (
          <div key={card.Name}>
            <p>{card.Name}</p>
          </div>
        ))}

        {/* <p>Current Hand: {currentCard && currentCard.Name}</p> */}
      </div>
    </div>
  );
};

export default BattleTacticDeck;
