import { useState, useCallback, useEffect } from "react";
import { PokemonInfo } from "../../components/CardPokemon/CardPokemon";
import GeneralContext from "./GeneralContext";

export const GeneralProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<PokemonInfo[]>(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [pokemons, setPokemons] = useState<PokemonInfo[]>([]);
  const [favoritesGameScore, setFavoritesGameScore] = useState<number>(() => {
    const savedScore = localStorage.getItem("favoritesGameScore");
    return savedScore ? parseInt(savedScore) : 0;
  });
  const [allPokemonGameScore, setAllPokemonGameScore] = useState<number>(() => {
    const savedScore = localStorage.getItem("allPokemonGameScore");
    return savedScore ? parseInt(savedScore) : 0;
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("favoritesGameScore", favoritesGameScore.toString());
  }, [favoritesGameScore]);

  useEffect(() => {
    localStorage.setItem("allPokemonGameScore", allPokemonGameScore.toString());
  }, [allPokemonGameScore]);

  const toggleFavorite = useCallback((pokemon: PokemonInfo) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.name === pokemon.name);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.name !== pokemon.name);
      } else {
        return [...prevFavorites, pokemon];
      }
    });
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        favorites,
        setFavorites,
        toggleFavorite,
        pokemons,
        setPokemons,
        favoritesGameScore,
        setFavoritesGameScore,
        allPokemonGameScore,
        setAllPokemonGameScore,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
