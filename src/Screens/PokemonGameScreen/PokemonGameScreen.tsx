import React, { useState, useEffect } from 'react';
import { useGeneralContext } from '../../Contexts/GeneralContext/GeneralContext';
import { PokemonInfo } from '../../components/CardPokemon/CardPokemon';

export default function PokemonGameScreen() {
    const { favorites, pokemons, favoritesGameScore, setFavoritesGameScore, allPokemonGameScore, setAllPokemonGameScore } = useGeneralContext();
    const [currentPokemon, setCurrentPokemon] = useState<PokemonInfo | null>(null);
    const [options, setOptions] = useState<PokemonInfo[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [streak, setStreak] = useState<number>(0);
    const [gameMode, setGameMode] = useState<'favorites' | 'all' | null>(null);
    const [isGuessed, setIsGuessed] = useState<boolean>(false);
    const [isRevealing, setIsRevealing] = useState<boolean>(false);

    useEffect(() => {
        if (gameMode) {
            startNewRound();
        }
    }, [gameMode, favorites, pokemons]);

    const startNewRound = () => {
        setIsRevealing(false);
        setIsGuessed(true); // Desabilita os botões durante a transição

        setTimeout(() => {
            const pokemonPool = gameMode === 'favorites' ? favorites : pokemons;
            if (pokemonPool.length < 4) {
                setResult("Você precisa de pelo menos 4 Pokémon para jogar!");
                return;
            }

            const randomPokemon = pokemonPool[Math.floor(Math.random() * pokemonPool.length)];
            setCurrentPokemon(randomPokemon);

            const otherOptions = pokemonPool.filter(p => p.name !== randomPokemon.name);
            const shuffledOptions = otherOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
            shuffledOptions.push(randomPokemon);
            setOptions(shuffledOptions.sort(() => 0.5 - Math.random()));

            setSelectedOption(null);
            setResult(null);
            setIsGuessed(false);
        }, 1000); // Espera 1 segundo antes de mudar para o próximo Pokémon
    };

    const handleGuess = () => {
        const points = 10 + (streak * 5);
        if (selectedOption === currentPokemon?.name) {
            if (gameMode === 'favorites') {
                setFavoritesGameScore(prevScore => prevScore + points);
            } else {
                setAllPokemonGameScore(prevScore => prevScore + points);
            }
            setStreak(prevStreak => prevStreak + 1);
            setResult(`Parabéns! Você acertou! +${points} pontos`);
        } else {
            if (gameMode === 'favorites') {
                setFavoritesGameScore(prevScore => Math.max(0, prevScore - 5));
            } else {
                setAllPokemonGameScore(prevScore => Math.max(0, prevScore - 5));
            }
            setStreak(0);
            setResult(`Ops! Errou. O Pokémon correto era ${currentPokemon?.name}. -5 pontos`);
        }
        setIsGuessed(true);
        setIsRevealing(true);
    };

    const currentScore = gameMode === 'favorites' ? favoritesGameScore : allPokemonGameScore;

    if (!gameMode) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-8">Escolha o modo de jogo</h1>
                <div className="w-full max-w-md space-y-6">
                    <div className="flex flex-col items-center">
                        <button
                            onClick={() => setGameMode('favorites')}
                            className="w-full px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300 text-center"
                        >
                            Jogar com meus favoritos
                        </button>
                        <p className="mt-2 text-center">Pontuação: {favoritesGameScore}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            onClick={() => setGameMode('all')}
                            className="w-full px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 text-center"
                        >
                            Jogar com todos os Pokémon
                        </button>
                        <p className="mt-2 text-center">Pontuação: {allPokemonGameScore}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Quem é esse Pokémon?</h1>
            <p className="text-xl mb-8">Pontuação: {currentScore}</p>
            
            {currentPokemon && (
                <div className="mb-8">
                    <img 
                        src={currentPokemon.imageUrl} 
                        alt="Quem é esse Pokémon?" 
                        className={`w-48 h-48 object-contain transition-all duration-1000 ${isRevealing ? 'filter-none' : 'brightness-0'}`}
                    />
                </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-8">
                {options.map((pokemon) => (
                    <button
                        key={pokemon.name}
                        onClick={() => setSelectedOption(pokemon.name)}
                        disabled={isGuessed}
                        className={`px-4 py-2 rounded ${
                            selectedOption === pokemon.name ? 'bg-blue-500 text-white' : 'bg-white'
                        } ${isGuessed ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {pokemon.name}
                    </button>
                ))}
            </div>

            <div className="space-x-4">
                <button
                    onClick={handleGuess}
                    disabled={!selectedOption || isGuessed}
                    className="px-4 py-2 bg-pink-500 text-white rounded disabled:opacity-50"
                >
                    Tentar
                </button>
                <button
                    onClick={startNewRound}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Novo Pokémon
                </button>
            </div>

            {result && (
                <p className="mt-4 text-xl font-semibold">{result}</p>
            )}

            <p className="mt-2 text-lg">Sequência de acertos: {streak}</p>

            <button
                onClick={() => setGameMode(null)}
                className="mt-8 px-4 py-2 bg-gray-500 text-white rounded"
            >
                Voltar para seleção de modo
            </button>
        </div>
    );
}