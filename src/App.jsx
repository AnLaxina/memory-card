import Header from "./components/Header.jsx";
import Gameboard from "./components/Gameboard.jsx";

import "./styles/reset.css";
import "./styles/app.css";
import "./styles/font.css";
import "./styles/colour.css";
import "./styles/spacing.css";


function App() {
    return (
        <>
            <Header text="Pokémon Memory Card Game"/>
            <Gameboard/>
        </>
    )
}

export default App
