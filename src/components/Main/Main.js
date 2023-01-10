import React from 'react';
import './Main.css';
import background from '../../space.jpeg';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}></main>;
}
