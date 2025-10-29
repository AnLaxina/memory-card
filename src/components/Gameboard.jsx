import MemoryCard from "./MemoryCard.jsx";
import _ from "lodash";

import "../styles/gameboard.css";
import {useState} from "react";

export default function Gameboard({onClick}) {

    const POKEMON_NAMES = [
        "Garchomp", "Pikachu", "Charizard",
        "Lucario", "Bulbasaur", "Metagross",
        "Blastoise", "Absol", "Mewtwo",
        "Mew", "Eevee", "Gengar",
        "Blaziken", "Gardevoir", "Flygon", "Arcanine"];

    const [memoryCards, setMemoryCards] = useState(POKEMON_NAMES);

    // Will keep this here in case I want to shuffle the order of MemoryCards
    function shuffleCards() {
        setMemoryCards(_.shuffle(memoryCards));
    }

    function addMemoryCards() {
        return memoryCards.map((name) => <MemoryCard key={name} name={name} onClick={onClick}
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