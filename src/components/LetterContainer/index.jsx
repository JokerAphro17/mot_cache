import React from "react";
import "./index.css";

export const LetterContainer = ({
  addSelectedLetter,
  letter,
  removeSelectedLetter,
}) => {
  return (
    <div
      className="card m-2"
      style={{ cursor: "pointer" }}
      onClick={() => {
        addSelectedLetter && addSelectedLetter(letter);
        removeSelectedLetter && removeSelectedLetter(letter);
      }}
    >
      <div className="card-body letter-container">
        {letter && (
          <h1 className="card-title" id={`letter-`}>
            {letter}
          </h1>
        )}
      </div>
    </div>
  );
};
