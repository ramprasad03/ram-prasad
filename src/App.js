import React, { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data.value));
  }, []);

  return (
    <div>
      <h1>Chuck Norris Joke Generator</h1>
      <p>{joke}</p>
    </div>
  );
}

export default App;