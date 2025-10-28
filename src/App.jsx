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
    // This is for keeping track of the clicked memory cards, if it's clicked and it already in the set, then restart score
    const [history, setHistory] = useState(new Set());

    function addHistory(event) {
        const name = event.target.textContent;
        setHistory(prev => new Set(prev.add(name)))
    }

    function resetScore(event) {
        const name = event.target.textContent;
        if (history.has(name)) {
            setScore(0);
        }
    }

    function increaseScore(event) {
        const name = event.target.textContent;
        if (!history.has(name)) {
            setScore(score + 1);
        }
    }

    return (
        <>
            <Header text="Pokémon Memory Card Game" score={score}/>
            <Gameboard increaseScore={increaseScore} resetScore={resetScore} addHistory={addHistory}/>
        </>
    )
}

export default App
