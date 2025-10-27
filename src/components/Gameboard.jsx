import MemoryCard from "./MemoryCard.jsx";

import "../styles/gameboard.css";

export default function Gameboard() {
    return (
        <main>
            <div className="gameboard">
                <MemoryCard/>
            </div>
        </main>
    )
}