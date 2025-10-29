import MemoryCard from "./MemoryCard.jsx";
import _ from "lodash";

import "../styles/gameboard.css";
import {useState} from "react";

export default function Gameboard({increaseScore, resetScore, addHistory}) {

    const POKEMON_NAMES = [
        "Garchomp", "Pikachu", "Charizard",
        "Lucario", "Squirtle", "Metagross",
        "Gible", "Gabite", "Mewtwo",
        "Mew", "Eevee", "Chimchar"];

    const [memoryCards, setMemoryCards] = useState(POKEMON_NAMES);

    // Will keep this here in case I want to shuffle the order of MemoryCards
    function shuffleCards() {
        setMemoryCards(_.shuffle(memoryCards));
    }

    function addMemoryCards() {
        return memoryCards.map((name) => <MemoryCard key={name} name={name} increaseScore={increaseScore}
                                                     resetScore={resetScore} addHistory={addHistory}
                                                     shuffleCards={shuffleCards}/>);
    }

    return (
        <main>
            <div className="gameboard">
                {addMemoryCards()}
            </div>
        </main>
    )
}