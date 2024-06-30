"use client";

import { useState } from "react";

const AqshyDeck = [
  {
    Name: "LET THE BLOOD FLOW",
    Text1:
      "The underdog can pick one of the effects below. If there is no underdog, the players roll off and the winner picks the effect.",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
  {
    Name: "WREATHED IN SMOKE",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
  {
    Name: "AQSHY3",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
  {
    Name: "AQSHY4",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
  {
    Name: "AQSHY5",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
  {
    Name: "AQSHY6",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
];

const GhyranDeck = [
  {
    Name: "ALARIELLE'S BLESSING",
    Text1:
      "The underdog can pick one of the effects below. If there is no underdog, the players roll off and the winner picks the effect.",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
  {
    Name: "GRASPING VINES",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
  {
    Name: "THE GRANDFATHER'S BLESSING:",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
  {
    Name: "RECLAIM GHYRAN",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
  {
    Name: "TAKE THE LAND",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
  {
    Name: "LIFESPRING",
    Text1: "Some Flavour Text",
    Text2: "Some Rule Test",
    Text3: "Text3",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1));
}

const TwistDeck = () => {
  const [deck, setDeck] = useState(null);
  const [deckName, setDeckName] = useState("Please Select a Deck");
  const [currentCard, setCurrentCard] = useState(null);
  const [cardsInDeck, setCardsInDeck] = useState([0, 1, 2, 3, 4, 5]);

  const drawCard = () => {
    let tempDeck = [...cardsInDeck];
    const drawnCardArrayValue = getRandomInt(cardsInDeck.length);
    const drawnCardDeckValue = cardsInDeck[drawnCardArrayValue];
    setCurrentCard(deck[drawnCardDeckValue]);
    tempDeck.splice(drawnCardArrayValue, 1);
    setCardsInDeck(tempDeck);
  };

  return (
    <div className="flex-col">
      <div className="m-6">
        <p>Selected Deck: {deckName}</p>
        <button
          onClick={() => {
            setDeck(GhyranDeck);
            setDeckName("Ghyran");
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
          disabled={deckName != "Please Select a Deck"}
        >
          Ghyran
        </button>
        <button
          onClick={() => {
            setDeck(AqshyDeck);
            setDeckName("Aqshy");
          }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
          disabled={deckName != "Please Select a Deck"}
        >
          Aqshy
        </button>
      </div>
      <div className="m-6">
        <button
          onClick={drawCard}
          disabled={cardsInDeck.length === 0 || !deck}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Draw Twist Card
        </button>

        <p>Current Card: {currentCard && currentCard.Name}</p>
        <p>Turn: {6 - cardsInDeck.length}</p>
      </div>
    </div>
  );
};

export default TwistDeck;
