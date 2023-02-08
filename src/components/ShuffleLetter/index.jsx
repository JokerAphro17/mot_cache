import React, { useState } from "react";
import { LetterContainer } from "../LetterContainer";

const ShuffleItems = ({
  selectedLetter,
  setSelectedLetter,
  shuffled,
  setShuffled,
}) => {
  const addSelectedLetter = (letter) => {
    setSelectedLetter([...selectedLetter, letter]);
  };

  console.log("selectedLetter", selectedLetter);

  const removeSelectedLetter = (letter) => {
    const index = shuffled.indexOf(letter);

    if (index > -1) {
      shuffled.splice(index, 1);
    }
    setShuffled([...shuffled]);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      {shuffled.map((letter, index) => (
        <LetterContainer
          key={index}
          letter={letter}
          removeSelectedLetter={removeSelectedLetter}
          addSelectedLetter={addSelectedLetter}
        />
      ))}
    </div>
  );
};

export default ShuffleItems;
