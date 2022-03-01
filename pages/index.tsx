// Next/React
import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'

// Data
import {words, getWord} from '../words';
console.log(getWord());

// Custom Components
import Header from '../components/Header';
import GameGrid from "../components/GameGrid";
import GameKeyboard from "../components/GameKeyboard";

const Home: NextPage = () => {

  // Create user word
  const [word, updateWord] = useState([]);

  const handleAddLetter = (letter) => {
    if (word.length < 5) {
      return updateWord([...word, letter])
    }
  }
  const handleDeleteLetter = () => {
    updateWord(word => {
      if (word.length > 0) {
        return word.slice(0, word.length-1);
      }
    })
  }


  return (
    <div className="App flex flex-col justify-between h-screen w-full max-w-md m-auto bg-black text-slate-300">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <Header />
      <GameGrid />
      <GameKeyboard handleAddLetter={handleAddLetter} handleDeleteLetter={handleDeleteLetter}/>
    </div>
  )
}

export default Home
