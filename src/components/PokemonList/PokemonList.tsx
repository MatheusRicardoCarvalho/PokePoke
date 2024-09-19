import { PokemonInfo, CardPokemon } from "../CardPokemon/CardPokemon";


export default function PokemonList({ pokemonList, favorites, toggleFavorite }: { pokemonList: PokemonInfo[] 
     favorites: PokemonInfo[] , toggleFavorite: (pokemon: PokemonInfo) => void}){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {pokemonList.map((pokemon, index) => (
            <CardPokemon 
              key={index} 
              pokemon={pokemon} 
              isFavorite={favorites.some(fav => fav.name === pokemon.name)}
              onFavoriteToggle={() => toggleFavorite(pokemon)}
            />
          ))}
        </div>
      );
} 