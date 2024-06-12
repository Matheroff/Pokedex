


function NavBar({pokemonIndex, pokemonList, previousClick, nextClick}) {

    return (
        <div>
            {pokemonIndex > 0 && <button onClick={previousClick}>Précédent</button>}
            {pokemonIndex < pokemonList.length - 1 && (
            <button onClick={nextClick}>Suivant</button>
        )}
        </div>
    );
}

export default NavBar;