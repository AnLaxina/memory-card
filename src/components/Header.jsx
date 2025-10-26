import "../styles/header.css";

export default function Header({text = "Chicken!"}) {
    return (
        <header>
            <h1>{text}</h1>
            <div className="score-container">
                <p>Score: 0</p>
                <p>Best score: 0</p>
            </div>
        </header>
    )
}