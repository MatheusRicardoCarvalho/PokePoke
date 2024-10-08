import { PokemonInfo } from "../../components/CardPokemon/CardPokemon";
import poke_api from "../poke_api/pokeClient";


export async function getUniquePokemon(pokmonName: string): Promise<PokemonInfo> {
    try {
        const response = await poke_api.get(`/pokemon/${pokmonName}`);
        const data = response.data;

        const pokemonInfo: PokemonInfo = {
            name: data.name,
            imageUrl: data.sprites.front_default,
            type: data.types.map((typeInfo: any) => typeInfo.type.name).join(", ")
        };

        return pokemonInfo;
    } catch (error) {
        throw new Error("Erro ao obter pokemon: " + error);
    }
}
export type Generation = 1 | 2 | 3 | 4 | 5 | 6 | 7


export async function getByGeneration(generation: Generation): Promise<PokemonInfo[]> {
      const pokemonPromises: Promise<PokemonInfo>[] = [];
      const gene = {1: 151, 2: 251, 3: 386, 4: 493, 5: 649, 6: 721, 7: 809}
      for (let i = 1; i <= gene[generation]; i++) {
          pokemonPromises.push(getUniquePokemon(''+i));
      }
  
      try {
          const firstGenerationPokemons = await Promise.all(pokemonPromises);
          return firstGenerationPokemons;
      } catch (error) {
          throw new Error("Erro ao obter a primeira geração de pokemons: " + error);
      }
  }
