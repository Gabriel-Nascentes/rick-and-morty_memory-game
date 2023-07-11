import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../img/logo.png";
import "./Home.css";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/game/${name}`);
  };

  //Número mínimo de caracteres(2).
  const getSetName = (e) => {
    let player = e.target.value;
    if (player.length > 2) {
      setName(player);
      document.getElementById("player").removeAttribute("disabled");
    } else {
      document.getElementById("player").setAttribute("disabled", "");
    }
  };

  return (
    <div className="container-home">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-header">
          <img src={logo} alt="" />
          <h1>Memory Game</h1>
        </div>
        <input
          type="text"
          name="login-name"
          id="login-name"
          placeholder="Nome"
          autoComplete="off"
          onChange={getSetName}
        />
        <button type="submit" disabled id="player">
          Play
        </button>
      </form>
    </div>
  );
};

export default Home;
