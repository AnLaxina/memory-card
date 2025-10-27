import "../styles/memorycard.css";

export default function MemoryCard({name = "Pokémon Name"}) {
    // This is just a placeholder for now, will delete the style once I get the PokeAPI working
    const bigLogo = {
        width: "64px",
        height: "64px"
    }
    return (
        <div className="memory-card">
            <img alt="Vite Logo" src="/vite.svg" style={bigLogo}/>
            {name}
        </div>
    )
}