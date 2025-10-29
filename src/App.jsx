import Header from "./components/Header.jsx";
import Gameboard from "./components/Gameboard.jsx";

import "./styles/reset.css";
import "./styles/app.css";
import "./styles/font.css";
import "./styles/colour.css";
import "./styles/spacing.css";

import {useEffect, useState} from "react";


function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    // This is for keeping track of the clicked memory cards, if it's clicked and it already in the set, then restart score
    const [history, setHistory] = useState(new Set());

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
        }
    }, [score]);

    function onClick(event) {
        const name = event.target.textContent;
        increaseScore(name);
        addHistory(name);
        resetScore(name);
    }

    function addHistory(name) {
        setHistory(prev => new Set(prev.add(name)))
    }

    function resetScore(name) {
        if (history.has(name)) {
            setScore(0);
            setHistory(new Set());
        }
    }

    function increaseScore(name) {
        if (!history.has(name)) {
            setScore(score + 1);
        }
    }

    return (
        <>
            <Header text="Pokémon Memory Card Game" score={score} bestScore={bestScore}/>
            <Gameboard onClick={onClick}/>
        </>
    )
}

export default App
