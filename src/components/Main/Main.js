import React from 'react';
import { zodiac } from '../../data.js';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import background from '../../space.jpeg';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((sign) => (
        <ZodiacCard key={sign.id} {...sign} />
      ))}
    </main>
  );
}
