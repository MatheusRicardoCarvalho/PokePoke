import { useState, useLayoutEffect, useCallback } from 'react';
import { CardPokemon, PokemonInfo } from '../../components/CardPokemon/CardPokemon';
import { getByGeneration, Generation } from '../../apis/requests/pokeApiRequests';
import Options from '../../components/Options/Options';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import { useGeneralContext } from '../../Contexts/GeneralContext/GeneralContext';

const HomeScreen = () => {
  const [generation, setGeneration] = useState<Generation>(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const { favorites, toggleFavorite, pokemons, setPokemons } = useGeneralContext();

  const pokemonsPerPage = 12;

  const setupPokemon = useCallback(async () => {
    try {
      const newPokemons: PokemonInfo[] = await getByGeneration(generation);
      setPokemons(newPokemons);
      setCurrentPage(1);
    } catch (error) {
      console.error("Erro ao obter pokemons:", error);
    }
  }, [generation]);

  useLayoutEffect(() => {
    setupPokemon();
  }, [setupPokemon]);

  const handleGenerationChange = (newGeneration: Generation) => {
    setGeneration(newGeneration);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Options onGenerationChange={handleGenerationChange} />
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {currentPokemons.map((pokemon, index) => (
          <CardPokemon 
            key={index} 
            pokemon={pokemon} 
            isFavorite={favorites.some(fav => fav.name === pokemon.name)}
            onFavoriteToggle={() => toggleFavorite(pokemon)}
          />
        ))}
      </div>
      <Pagination 
        pokemonsPerPage={pokemonsPerPage} 
        totalPokemons={filteredPokemons.length} 
        paginate={paginate} 
        currentPage={currentPage} 
      />
    </div>
  );
};

export default HomeScreen;