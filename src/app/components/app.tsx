import React from 'react';
import { useState } from 'react';
import { NedKnap } from './NedKnap';
import { OpKnap } from './OpKnap';

export default function App() {
  const [count, setCount] = useState(0);
  const op = () => setCount(count + 1)
  const ned = () => setCount(count - 1)
  return (
    <div>
      <p>Du har klikket {count} gange på knappen siden start. God gået!</p>
      <OpKnap onClick={op} />
      <NedKnap onClick={ned} />
    </div>
  );
}
