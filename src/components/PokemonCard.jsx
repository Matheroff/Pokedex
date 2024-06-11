function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
        <figure className="card">
          {pokemon.imgSrc ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
            <p>???</p>
          )}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      );
    }

  const pokemonList = [
    {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  export default PokemonCard;