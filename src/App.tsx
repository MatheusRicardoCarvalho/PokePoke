import { useState, useLayoutEffect } from 'react';
import { CardPokemon, PokemonInfo } from './components/CardPokemon/CardPokemon';
import { getByGeneration, Generation } from './apis/requests/pokeApiRequests';
import { NavBar } from './components/NavBar/NavBar';
import Options from './components/Options/Options';

function App() {
  const [pokemons, setPokemons] = useState<PokemonInfo[]>([]);
  const [generation, setGeneration] = useState<Generation>(3); // Geração inicial

  useLayoutEffect(() => {
    setupPokemon();
  }, [generation]); // Dependência da geração

  async function setupPokemon() {
    try {
      const newPokemons: PokemonInfo[] = await getByGeneration(generation);
      setPokemons(newPokemons);
    } catch (error) {
      console.error("Erro ao obter pokemons:", error);
    }
  }

  const handleGenerationChange = (newGeneration: Generation) => {
    setGeneration(newGeneration);
  };

  return (
    <>
      <NavBar />
      <Options onGenerationChange={handleGenerationChange} />
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
