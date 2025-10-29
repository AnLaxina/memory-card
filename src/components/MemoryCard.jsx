import "../styles/memorycard.css";
import {useEffect, useState} from "react";

export default function MemoryCard({
                                       name = "Pokémon Name",
                                       onClick = (event) => console.log(`You clicked ${event.target}!`),
                                       shuffleCards = () => console.log("Shuffle time!")
                                   }) {

    const [spriteUrl, setSpriteUrl] = useState("/pokeball.svg");

    useEffect(() => {
        async function getImage(pokemonName = "pikachu") {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
                const data = await response.json();
                setSpriteUrl(data["sprites"]["front_default"])

            } catch (error) {
                console.error("Can't fetch the image! Error: ", error)
            }
        }

        getImage(name);
    }, [name])

    return (
        <div className="memory-card" onClick={(event) => {
            onClick(event);
            shuffleCards();
        }}>
            <img alt={`${name}, Pokemon`} src={spriteUrl}/>
            {name}
        </div>
    )
}