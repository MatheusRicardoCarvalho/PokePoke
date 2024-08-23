import { useEffect, useLayoutEffect, useState } from 'react';
import { CardPokemon, PokemonInfo } from './components/CardPokemon/CardPokemon';
import { getFirstGenerationPokemons } from './apis/requests/pokeApiRequests';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  const [pokemons, setPokemons] = useState<PokemonInfo[]>([]);

  useLayoutEffect(() => {
    setupPokemon();
  }, []);

  async function setupPokemon() {
    const newPokemons: PokemonInfo[] = await getFirstGenerationPokemons();
    setPokemons(newPokemons);
  }

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {pokemons.length > 0
          ? pokemons.map((pokemon, index) => (
              <CardPokemon key={index} pokemon={pokemon} />
            ))
          : null}
      </div>
    </>
  );
}

export default App;
