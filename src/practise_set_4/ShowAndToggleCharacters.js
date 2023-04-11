import { useState } from 'react';
import { ShowCharacters } from './ShowCharacters';

export function ShowAndToggleCharacters({ heroes, villains }) {
  const [characters, setCharacters] = useState();
  return (
    <div>
      <button
        onClick={() => {
          setCharacters(heroes);
        }}
      >
        Show Heros
      </button>
      <button
        onClick={() => {
          setCharacters(villains);
        }}
      >
        Show Villans
      </button>
      <ShowCharacters characters={characters} />
    </div>
  );
}
