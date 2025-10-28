import "../styles/memorycard.css";
import {useEffect, useState} from "react";

export default function MemoryCard({name = "Pokémon Name", setScore = () => console.log("Clicked!")}) {

    const [spriteUrl, setSpriteUrl] = useState("/vite.svg");

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
        <div className="memory-card" onClick={setScore}>
            <img alt={`${name}, Pokemon`} src={spriteUrl}/>
            {name}
        </div>
    )
}