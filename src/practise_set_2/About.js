import { useState } from 'react';

export function About({ heading, name, learning }) {
  const [showContent, setShowContent] = useState(false);
  const handleClick = () => {
    setShowContent((showContent) => !showContent);
  };
  return (
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={handleClick}>Know More</button>
      {showContent && <p>{learning}</p>}
    </div>
  );
}
