import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import FavoritesScreen from './Screens/FavoriteScreen/FavoriteScreen';
import PokemonGameScreen from './Screens/PokemonGameScreen/PokemonGameScreen';
import { GeneralProvider } from './Contexts/GeneralContext/GeneralProvider';

function App() {
  return (
    <GeneralProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
          <Route path="/game" element={<PokemonGameScreen />} />
        </Routes>
      </Router>
    </GeneralProvider>
  );
}

export default App;