import { useState } from 'react';
import { Generation } from '../../apis/requests/pokeApiRequests';

interface OptionsProps {
  onGenerationChange: (generation: Generation) => void;
}

export default function Options({ onGenerationChange }: OptionsProps) {
  const [selectedGeneration, setSelectedGeneration] = useState<Generation>(3); // Valor padrão da geração

  const handleGenerationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGeneration = parseInt(event.target.value) as Generation;
    setSelectedGeneration(newGeneration);
    onGenerationChange(newGeneration);
  };

  return (
    <div className="p-4">
      <label htmlFor="generation-select" className="block text-lg font-semibold mb-2">Select Generation:</label>
      <select
        id="generation-select"
        value={selectedGeneration}
        onChange={handleGenerationChange}
        className="border border-gray-300 rounded-md p-2"
      >
        <option value={1}>Generation 1</option>
        <option value={2}>Generation 2</option>
        <option value={3}>Generation 3</option>
        <option value={4}>Generation 4</option>
        <option value={5}>Generation 5</option>
        <option value={6}>Generation 6</option>
        <option value={7}>Generation 7</option>
      </select>
    </div>
  );
}
