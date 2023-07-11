import "./Header.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const { name } = useParams();
  const [timer, setTimer] = useState(0);

  //Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-header">
      <p>
        Nome: <span className="player">{name} </span>
      </p>
      <p>
        Timer: <span className="timer">{timer}</span>
      </p>
    </div>
  );
};

export default Header;
