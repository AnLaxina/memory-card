import MemoryCard from "./MemoryCard.jsx";

import "../styles/gameboard.css";

export default function Gameboard({increaseScore, resetScore, addHistory}) {

    const POKEMON_NAMES = [
        "Garchomp", "Pikachu", "Charizard",
        "Lucario", "Squirtle", "Metagross",
        "Gible", "Gabite", "Mewtwo",
        "Mew", "Eevee", "Chimchar"];

    // Will keep this here in case I want to shuffle the order of MemoryCards
    // function getRandomIndex(numberOfMemoryCards = 12) {
    //     return Math.floor(Math.random() * numberOfMemoryCards);
    // }

    function addMemoryCards() {
        return POKEMON_NAMES.map((name) => <MemoryCard key={name} name={name} increaseScore={increaseScore}
                                                       resetScore={resetScore} addHistory={addHistory}/>);
    }

    return (
        <main>
            <div className="gameboard">
                {addMemoryCards()}
            </div>
        </main>
    )
}