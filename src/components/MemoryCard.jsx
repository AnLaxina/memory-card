import "../styles/memorycard.css";

export default function MemoryCard({name = "Pokémon Name"}) {
    // This is just a placeholder for now, will delete the style once I get the PokeAPI working
    const bigLogo = {
        width: "64px",
        height: "64px"
    }

    async function getImage(pokemonName = "pikachu") {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
            const data = await response.json();
            return data["sprites"]["front_default"];
        } catch (error) {
            console.error("Can't fetch the image! Error: ", error)
        }
    }

    return (
        <div className="memory-card" onClick={() => getImage()}>
            <img alt="Vite Logo" src="/vite.svg" style={bigLogo}/>
            {name}
        </div>
    )
}