import "../styles/header.css";

export default function Header({text = "Chicken!"}) {
    return (
        <header>
            <h1>{text}</h1>
        </header>
    )
}