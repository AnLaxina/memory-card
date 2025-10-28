import Header from "./components/Header.jsx";
import Gameboard from "./components/Gameboard.jsx";

import "./styles/reset.css";
import "./styles/app.css";
import "./styles/font.css";
import "./styles/colour.css";
import "./styles/spacing.css";

import {useState} from "react";


function App() {
    const [score, setScore] = useState(0);

    function increaseScore() {
        setScore(score + 1);
    }

    return (
        <>
            <Header text="Pokémon Memory Card Game" score={score}/>
            <Gameboard increaseScore={increaseScore}/>
        </>
    )
}

export default App
