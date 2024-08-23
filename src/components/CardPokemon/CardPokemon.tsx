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
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white p-6 relative">
            <div className="absolute top-0 right-0 m-2 bg-red-500 w-4 h-4 rounded-full"></div>
            <div className="text-center">
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="mx-auto w-20 h-20 object-cover mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
                <p className="text-sm text-gray-600 mb-4">{type}</p>
                <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">
                    Ver Mais...
                </button>
            </div>
            <div className="absolute bottom-0 left-0 m-2 text-gray text-2xl font-bold opacity-10">
                POKEPOKE
            </div>
        </div>
    );
}
