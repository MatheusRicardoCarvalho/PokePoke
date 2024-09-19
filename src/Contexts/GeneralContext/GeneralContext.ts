import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { PokemonInfo } from "../../components/CardPokemon/CardPokemon";

interface GeneralContextType {
  favorites: PokemonInfo[];
  setFavorites: Dispatch<SetStateAction<PokemonInfo[]>>;
  toggleFavorite: (pokemon: PokemonInfo) => void;
  pokemons: PokemonInfo[];
  setPokemons: Dispatch<SetStateAction<PokemonInfo[]>>;
  favoritesGameScore: number;
  setFavoritesGameScore: Dispatch<SetStateAction<number>>;
  allPokemonGameScore: number;
  setAllPokemonGameScore: Dispatch<SetStateAction<number>>;
}

const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

export const useGeneralContext = () => {
    const context = useContext(GeneralContext);
    if (!context) {
        throw new Error('useGeneralContext must be used within a GeneralProvider');
    }
    return context;
};

export default GeneralContext;