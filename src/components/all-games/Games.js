'use client'
import { useState, useEffect } from 'react';
import React from 'react'

import { BASE_URL } from '@/constants/urls'
import { GamesContainer } from './style';
import { GamesContent } from './style';


function Games() {

    const endpoint = "games";
    const [games, setGames] = useState([]);

    useEffect(() => {
        async function fetchGames() {
            try {
                const response = await fetch(BASE_URL + endpoint, {
                    method: 'GET',
                    headers: {
                      'X-RapidAPI-Key': '29a2272d32mshaa92755dabce5efp1f46ecjsn7140b207a438',
                      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                  });
        
                  if (!response.ok) {
                    throw new Error('Falha na solicitação: ' + response.status);
                  }
                const data = await response.json();
                setGames(data)
        
            } catch (error) {
                console.error("Ocorreu um erro", error);
            }
        }
        
        fetchGames()
    }, [])


  return (
    <GamesContainer>
        <GamesContent>
            <ul>
                {games.map(game =>(
                    <li>
                        <img src={game.thumbnail}/>
                        <p>{game.title}</p>
                    </li>
                ))}
            </ul>
            
        </GamesContent>
    </GamesContainer>
  )
}

export default Games