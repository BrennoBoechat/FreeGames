import React, { useState, useEffect } from 'react';
import { BASE_URL } from '@/constants/urls';
import { GamesContainer, GamesContent, Filters } from './style';

function Games() {
    const endpoint = "games";
    const [games, setGames] = useState([]);
    const [sortBy, setSortBy] = useState('release-date');
    const [platform, setPlatform] = useState('browser');
    const [category, setCategory] = useState('mmorpg');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchGames() {
            try {
                const response = await fetch(`${BASE_URL}${endpoint}?platform=${platform}&category=${category}&sort-by=${sortBy}`, {
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
                setGames(data);
            } catch (error) {
                console.error("Ocorreu um erro", error);
            }
        }

        fetchGames();
    }, [platform, category, sortBy]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handlePlatformChange = (e) => {
        setPlatform(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <GamesContainer>
            <GamesContent>
              <Filters>
                <div className='inputs'>
                        <label htmlFor="search-input">Buscar:</label>
                        <input type="text" id="search-input" value={searchTerm} onChange={handleSearchChange} />
                </div>

                <div className='selects'>
                  <label htmlFor="sort-select">Sort by:</label>
                        <select id="sort-select" value={sortBy} onChange={handleSortChange}>
                            <option value="alphabetical">Alphabetical</option>
                            <option value="release-date">Release Date</option>
                            <option value="popularity">Popularity</option>
                            <option value="relevance">Relevance</option>
                        </select>

                        <label htmlFor="platform-select">Platform:</label>
                        <select id="platform-select" value={platform} onChange={handlePlatformChange}>
                            <option value="browser">Browser</option>
                            <option value="pc">PC</option>
                        </select>

                        <label htmlFor="category-select">Category:</label>
                        <select id="category-select" value={category} onChange={handleCategoryChange}>
                            <option value="mmorpg">MMORPG</option>
                            <option value="mmo">MMO</option>
                            <option value="strategy">Strategy</option>
                            <option value="shooter">Shooter</option>
                        </select>
                  </div>

              </Filters>

                <ul>
                    {filteredGames.map(game => (
                        <li key={game.id}>
                            <img src={game.thumbnail} alt={game.title} width={450} />
                            <a>{game.title}</a>
                        </li>
                    ))}
                </ul>
            </GamesContent>
        </GamesContainer>
    );
}

export default Games;