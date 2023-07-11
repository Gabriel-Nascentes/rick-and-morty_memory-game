import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";

import "./Game.css";

const Game = () => {
  //Objeto para identificar as cartas.
  const characters = [
    { name: "beth", id: 1 },
    { name: "jerry", id: 2 },
    { name: "jessica", id: 3 },
    { name: "morty", id: 4 },
    { name: "pessoa-passaro", id: 5 },
    { name: "pickle-rick", id: 6 },
    { name: "rick", id: 7 },
    { name: "summer", id: 8 },
    { name: "meeseeks", id: 9 },
    { name: "scroopy", id: 10 },
    { name: "beth", id: 11 },
    { name: "jerry", id: 12 },
    { name: "jessica", id: 13 },
    { name: "morty", id: 14 },
    { name: "pessoa-passaro", id: 15 },
    { name: "pickle-rick", id: 16 },
    { name: "rick", id: 17 },
    { name: "summer", id: 18 },
    { name: "meeseeks", id: 19 },
    { name: "scroopy", id: 20 },
  ];

  //Embaralhamento das cartas.
  const shuffledArray = characters
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="container-game">
      <Header></Header>
      <div className="cards">
        {shuffledArray.map((name) => (
          <Card key={name.id} name={name}></Card>
        ))}
      </div>
    </div>
  );
};

export default Game;
