import { useGeneralContext } from '../../Contexts/GeneralContext/GeneralContext';
import { CardPokemon } from '../../components/CardPokemon/CardPokemon';

const FavoritesScreen = () => {
	const { favorites, toggleFavorite } = useGeneralContext();

	return (
		<>
			<h2 className="text-2xl font-bold text-center my-4">Pokémon Favoritos</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
				{favorites.map((pokemon, index) => (
					<CardPokemon 
						key={index} 
						pokemon={pokemon} 
						isFavorite={true} 
						onFavoriteToggle={() => toggleFavorite(pokemon)} 
					/>
				))}
			</div>
		</>
	);
};

export default FavoritesScreen;
