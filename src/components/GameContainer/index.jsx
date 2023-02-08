import React, { useEffect, useState } from "react";
import ShuffleItems from "../ShuffleLetter";
import VoidItem from "../VoidItem";
var word = "BONJOUR";
word = word.toUpperCase();
console.log("word", word);
const wordArray = word.split("");
const _wordArray = word.split("");
const shuffledArray = wordArray.sort(() => Math.random() - 0.5);

console.log("wordArray", wordArray);
console.log("_wordArray", _wordArray);

const GameContainer = () => {
  const [letters, setLetters] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState([]);

  const [shuffledLetters, setShuffledLettters] = useState(shuffledArray);

  const [finished, setFinished] = useState({
    status: false,
    won: false,
  });

  const checkIfFinished = () => {
    if (selectedLetter.length === word.length) {
      const _word = selectedLetter.join("");
      if (_word === word) {
        setFinished({
          status: true,
          won: true,
        });
      } else {
        setFinished({
          status: true,
          won: false,
        });
      }
    }
  };
  useEffect(() => {
    checkIfFinished();
  }, [selectedLetter]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <VoidItem letters={selectedLetter} word={_wordArray} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-5">
          {finished.status && finished.won && (
            <h1 className="text-center text-success">VOUS AVEZ GAGNEZ !!!</h1>
          )}
          {finished.status && !finished.won && (
            <div className="text-center">
              <h1 className="text-center  text-danger">VOUS AVEZ PERDU !!!</h1>
              <span className="text-center  text-danger">
                La bonne réponse est :{" "}
                <span className="text-success"> {word}</span>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <ShuffleItems
          setLetters={setLetters}
          letters={letters}
          selectedLetter={selectedLetter}
          setSelectedLetter={setSelectedLetter}
          shuffled={shuffledLetters}
          setShuffled={setShuffledLettters}
        />
      </div>
    </div>
  );
};

export default GameContainer;
