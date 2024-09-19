import React from 'react';

interface PageButtonProps {
  number: number | React.ReactNode;
  onClick: () => void;
  isActive: boolean;
  disabled?: boolean;
}

export default function PageButton({ number, onClick, isActive, disabled = false }: PageButtonProps) {
  return (
    <li className="mx-1">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-3 py-1 border rounded ${
          isActive
            ? 'bg-blue-500 text-white'
            : disabled
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-blue-500 hover:bg-blue-100'
        }`}
      >
        {number}
      </button>
    </li>
  );
}
