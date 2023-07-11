import { useNavigate } from "react-router-dom";

import "./Card.css";
let firstCard = "";
let secoundCard = "";

const Card = ({ name }) => {
  const navigate = useNavigate();
  //Condição para terminar o game.
  const checkEndGame = () => {
    const disableCards = document.querySelectorAll(".disable-card");
    if (disableCards.length === 20) {
      alert(`Parabéns você ganhou o game!`);
      clearInterval();
      navigate("/");
    }
  };

  //Condição para formação de par
  const checkCards = () => {
    const firstCharacter = firstCard.getAttribute("data-character");
    const secoundCharacter = secoundCard.getAttribute("data-character");
    if (firstCharacter === secoundCharacter) {
      firstCard.firstChild.classList.add("disable-card");
      secoundCard.firstChild.classList.add("disable-card");
      firstCard = "";
      secoundCard = "";
      checkEndGame();
    } else {
      setTimeout(() => {
        firstCard.classList.remove("revael-card");
        secoundCard.classList.remove("revael-card");
        firstCard = "";
        secoundCard = "";
      }, 500);
    }
  };

  //Escolha das cartas
  const revealCard = (target) => {
    if (target.target.parentNode.classList.value.includes("revael-card")) {
      return;
    }
    if (firstCard === "") {
      target.target.parentNode.classList.toggle("revael-card");
      firstCard = target.target.parentNode;
    } else if (secoundCard === "") {
      target.target.parentNode.classList.toggle("revael-card");
      secoundCard = target.target.parentNode;
      checkCards();
    }
  };
  return (
    <div className="card" onClick={revealCard} data-character={name.name}>
      <div className="face front">
        <img src={require(`../img/${name.name}.png`)} alt={name.name} />
      </div>
      <div className="face back"></div>
    </div>
  );
};

export default Card;
