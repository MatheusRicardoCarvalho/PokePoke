import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavBarProps {
  children?: React.ReactNode;
}

export function NavBar({ children }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-2xl font-bold text-pink-700">
              PokéDex
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-pink-700 hover:bg-pink-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</Link>
                <Link to="/favorites" className="text-pink-700 hover:bg-pink-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Favoritos</Link>
                <Link to="/game" className="text-pink-700 hover:bg-pink-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Jogo</Link>
                {children}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-700 hover:text-white hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300"
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-pink-700 hover:bg-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300">Home</Link>
            <Link to="/favorites" className="text-pink-700 hover:bg-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300">Favoritos</Link>
            <Link to="/game" className="text-pink-700 hover:bg-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300">Quem é esse Pokémon?</Link>
            {children}
          </div>
        </div>
      )}
    </nav>
  );
}
