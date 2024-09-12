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
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white p-6 relative hover:shadow-xl transition-shadow duration-300">
            {/* Badge no canto superior direito */}
            <div className={`absolute top-0 right-0 m-2 w-4 h-4 rounded-full ${typeColor(type)}`}></div>
            
            {/* Imagem do Pokémon */}
            <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <img 
                        src={imageUrl} 
                        alt={name} 
                        className="mx-auto w-20 h-20 object-cover"
                    />
                </div>
                
                {/* Nome e Tipo */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
                <p className={`text-sm font-semibold ${typeColorText(type)} mb-4`}>{type}</p>

                {/* Botão "Ver Mais" */}
                <button className={`bg-${typeColorBg(type)} text-white font-semibold py-2 px-4 rounded-full hover:bg-${typeColorHoverBg(type)} transition duration-300`}>
                    Ver Mais...
                </button>
            </div>
            
            {/* Marca d'água no fundo */}
            <div className="absolute bottom-0 left-0 m-2 text-gray-400 text-2xl font-bold opacity-10">
                POKEPOKE
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

function typeColorHoverBg(type: string) {
    switch (type.toLowerCase()) {
        case 'fire':
            return 'red-600';
        case 'water':
            return 'blue-600';
        case 'grass':
            return 'green-600';
        case 'electric':
            return 'yellow-600';
        default:
            return 'gray-600';
    }
}
