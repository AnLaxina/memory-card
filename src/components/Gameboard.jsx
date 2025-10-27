import MemoryCard from "./MemoryCard.jsx";

import "../styles/gameboard.css";

export default function Gameboard() {

    function addMemoryCards(numberOfMemoryCards) {
        const memoryCards = [];
        for (let i = 0; i < numberOfMemoryCards; i++) {
            memoryCards.push(<MemoryCard/>);
        }
        return memoryCards.map((item, index) => <MemoryCard key={`Chicken` + index}/>);
    }


    return (
        <main>
            <div className="gameboard">
                {addMemoryCards(12)}
            </div>
        </main>
    )
}