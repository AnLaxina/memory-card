import "../styles/header.css";

export default function Header({text = "Chicken!", score = 0, bestScore = 0}) {
    return (
        <header>
            <h1>{text}</h1>
            <div className="score-container">
                <p>Score: {score}</p>
                <p>Best score: {bestScore}</p>
            </div>
        </header>
    )
}