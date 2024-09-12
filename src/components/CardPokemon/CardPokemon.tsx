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
    const firstType = type.split(',')[0];
    return (
        <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className={`h-32 ${typeGradient(firstType)} flex items-center justify-center`}>
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="w-24 h-24 object-contain filter drop-shadow-lg transform hover:scale-110 transition-transform duration-200"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColorText(firstType)} ${typeColorBg(firstType)}`}>
                        {type}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <button className={`${typeColorBg(firstType)} text-gray-700 font-bold py-2 px-4 rounded-full hover:opacity-60 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${typeColorRing(firstType)}`}>
                        Ver Detalhes
                    </button>
                    <div className={`w-8 h-8 ${typeColor(firstType)} rounded-full flex items-center justify-center`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

function typeColor(type: string): string {
    const colors: { [key: string]: string } = {
        normal: 'bg-gray-400',
        fire: 'bg-red-500',
        water: 'bg-blue-500',
        grass: 'bg-green-500',
        flying: 'bg-indigo-400',
        fighting: 'bg-red-700',
        poison: 'bg-purple-500',
        electric: 'bg-yellow-400',
        ground: 'bg-yellow-600',
        rock: 'bg-yellow-800',
        psychic: 'bg-pink-500',
        ice: 'bg-blue-200',
        bug: 'bg-lime-500',
        ghost: 'bg-purple-700',
        steel: 'bg-gray-500',
        dragon: 'bg-indigo-600',
        dark: 'bg-gray-800',
        fairy: 'bg-pink-300'
    };
    return colors[type.toLowerCase()] || 'bg-gray-400';
}

function typeColorText(type: string): string {
    const colors: { [key: string]: string } = {
        normal: 'text-gray-700',
        fire: 'text-red-600',
        water: 'text-blue-600',
        grass: 'text-green-600',
        flying: 'text-indigo-600',
        fighting: 'text-red-800',
        poison: 'text-purple-600',
        electric: 'text-yellow-500',
        ground: 'text-yellow-700',
        rock: 'text-yellow-900',
        psychic: 'text-pink-600',
        ice: 'text-blue-400',
        bug: 'text-lime-600',
        ghost: 'text-purple-800',
        steel: 'text-gray-600',
        dragon: 'text-indigo-700',
        dark: 'text-gray-900',
        fairy: 'text-pink-400'
    };
    return colors[type.toLowerCase()] || 'text-gray-700';
}

function typeColorBg(type: string): string {
    const colors: { [key: string]: string } = {
        normal: 'bg-gray-200',
        fire: 'bg-red-100',
        water: 'bg-blue-100',
        grass: 'bg-green-100',
        flying: 'bg-indigo-100',
        fighting: 'bg-red-200',
        poison: 'bg-purple-100',
        electric: 'bg-yellow-100',
        ground: 'bg-yellow-200',
        rock: 'bg-yellow-300',
        psychic: 'bg-pink-100',
        ice: 'bg-blue-50',
        bug: 'bg-lime-100',
        ghost: 'bg-purple-200',
        steel: 'bg-gray-300',
        dragon: 'bg-indigo-200',
        dark: 'bg-gray-700',
        fairy: 'bg-pink-50'
    };
    return colors[type.toLowerCase()] || 'bg-gray-200';
}

function typeColorRing(type: string): string {
    const colors: { [key: string]: string } = {
        normal: 'focus:ring-gray-400',
        fire: 'focus:ring-red-500',
        water: 'focus:ring-blue-500',
        grass: 'focus:ring-green-500',
        flying: 'focus:ring-indigo-400',
        fighting: 'focus:ring-red-700',
        poison: 'focus:ring-purple-500',
        electric: 'focus:ring-yellow-400',
        ground: 'focus:ring-yellow-600',
        rock: 'focus:ring-yellow-800',
        psychic: 'focus:ring-pink-500',
        ice: 'focus:ring-blue-200',
        bug: 'focus:ring-lime-500',
        ghost: 'focus:ring-purple-700',
        steel: 'focus:ring-gray-500',
        dragon: 'focus:ring-indigo-600',
        dark: 'focus:ring-gray-800',
        fairy: 'focus:ring-pink-300'
    };
    return colors[type.toLowerCase()] || 'focus:ring-gray-400';
}

function typeGradient(type: string): string {
    const gradients: { [key: string]: string } = {
        normal: 'bg-gradient-to-br from-gray-300 to-gray-200',
        fire: 'bg-gradient-to-br from-red-400 to-yellow-400',
        water: 'bg-gradient-to-br from-blue-400 to-cyan-300',
        grass: 'bg-gradient-to-br from-green-400 to-lime-300',
        flying: 'bg-gradient-to-br from-indigo-400 to-blue-300',
        fighting: 'bg-gradient-to-br from-red-700 to-red-500',
        poison: 'bg-gradient-to-br from-purple-500 to-pink-400',
        electric: 'bg-gradient-to-br from-yellow-400 to-yellow-200',
        ground: 'bg-gradient-to-br from-yellow-600 to-yellow-400',
        rock: 'bg-gradient-to-br from-yellow-800 to-yellow-600',
        psychic: 'bg-gradient-to-br from-pink-500 to-pink-300',
        ice: 'bg-gradient-to-br from-blue-200 to-blue-100',
        bug: 'bg-gradient-to-br from-lime-500 to-green-400',
        ghost: 'bg-gradient-to-br from-purple-700 to-purple-500',
        steel: 'bg-gradient-to-br from-gray-500 to-gray-400',
        dragon: 'bg-gradient-to-br from-indigo-600 to-purple-500',
        dark: 'bg-gradient-to-br from-gray-800 to-gray-700',
        fairy: 'bg-gradient-to-br from-pink-300 to-pink-200'
    };
    return gradients[type.toLowerCase()] || 'bg-gradient-to-br from-gray-300 to-gray-200';
}
