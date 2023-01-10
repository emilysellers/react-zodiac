import React from 'react';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import './Main.css';
import background from '../../space.jpeg';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}></main>;
}
