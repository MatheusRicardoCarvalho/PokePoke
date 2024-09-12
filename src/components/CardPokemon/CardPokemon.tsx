import { useState } from "react";

export type PokemonInfo = {
    name: string;
    imageUrl: string;
    type: string;
}

export interface Props {
    pokemon: PokemonInfo;
}

export function CardPokemon(props: Props) {
    const { name, imageUrl, type } = props.pokemon;

    return (
        <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className={`h-32 ${typeGradient(type)} flex items-center justify-center`}>
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-24 h-24 object-contain filter drop-shadow-lg transform hover:scale-110 transition-transform duration-200"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColorText(type)} ${typeColorBg(type)}`}>
                        {type}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <button className={`${typeColorBg(type)} text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${typeColorRing(type)}`}>
                        Ver Detalhes
                    </button>
                    <div className={`w-8 h-8 ${typeColor(type)} rounded-full flex items-center justify-center`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* Funções auxiliares para definir cores baseadas no tipo do Pokémon */
function typeColor(type: string) {
    switch (type.toLowerCase()) {
        case 'fire':
            return 'bg-red-500';
        case 'water':
            return 'bg-blue-500';
        case 'grass':
            return 'bg-green-500';
        case 'electric':
            return 'bg-yellow-500';
        default:
            return 'bg-gray-400';
    }
}

function typeColorText(type: string) {
    switch (type.toLowerCase()) {
        case 'fire':
            return 'text-red-500';
        case 'water':
            return 'text-blue-500';
        case 'grass':
            return 'text-green-500';
        case 'electric':
            return 'text-yellow-500';
        default:
            return 'text-gray-500';
    }
}

function typeColorBg(type: string) {
    switch (type.toLowerCase()) {
        case 'fire':
            return 'red-500';
        case 'water':
            return 'blue-500';
        case 'grass':
            return 'green-500';
        case 'electric':
            return 'yellow-500';
        default:
            return 'gray-500';
    }
}

function typeColorRing(type: string) {
    switch (type.toLowerCase()) {
        case 'fire':
            return 'focus:ring-red-500';
        case 'water':
            return 'focus:ring-blue-500';
        case 'grass':
            return 'focus:ring-green-500';
        case 'electric':
            return 'focus:ring-yellow-500';
        default:
            return 'focus:ring-gray-500';
    }
}

function typeGradient(type: string) {
    switch (type.toLowerCase()) {
        case 'fire':
            return 'bg-gradient-to-br from-red-400 to-yellow-400';
        case 'water':
            return 'bg-gradient-to-br from-blue-400 to-cyan-300';
        case 'grass':
            return 'bg-gradient-to-br from-green-400 to-lime-300';
        case 'electric':
            return 'bg-gradient-to-br from-yellow-300 to-yellow-200';
        default:
            return 'bg-gradient-to-br from-gray-300 to-gray-200';
    }
}
