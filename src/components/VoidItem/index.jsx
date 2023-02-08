import React from "react";
import { LetterContainer } from "../LetterContainer";

const VoidItem = ({ letters, word }) => {
  console.table("letters", letters, "word", word);
  return (
    <div className="d-flex justify-content-center mt-5">
      {word.map((letter, index) => (
        <LetterContainer key={index} letter={letters[index] || ""} />
      ))}
    </div>
  );
};

export default VoidItem;
