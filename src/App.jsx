
import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  
const pokemonList = [
  {
    name: "Bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

  const checkForPikachu = (index) => {
    const selectedPokemon = pokemonList[index];
    if (selectedPokemon.name === "Pikachu") {
      alert("Pika Pikachu !!!");
    }
  };

  const previousClick = () => {
    if (pokemonIndex > 0) {
    setPokemonIndex(pokemonIndex - 1);
    checkForPikachu(pokemonIndex - 1);
    }
  }
  const nextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
    setPokemonIndex(pokemonIndex + 1);
    checkForPikachu(pokemonIndex + 1);
    }
  }

  useEffect(() => {
    alert("Hello pokemon trainer :)");
  }, []); // Le tableau vide assure que l'alerte ne s'ouvre qu'au démarrage

console.log(pokemonIndex);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <NavBar 
        pokemonList={pokemonList} 
        setPokemonIndex={(index) => { 
            setPokemonIndex(index);
            checkForPikachu(index);
        }}
        />
    </div>
  );
}

export default App;
