import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
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

                console.log(data)

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

    const formatDate = (date) => {
        return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR });
    };


    return (
        <GamesContainer>
            <Filters>
                <div className='inputs'>
                        <label htmlFor="search-input">Buscar:</label>
                        <input type="text" id="search-input" value={searchTerm} onChange={handleSearchChange} />
                </div>

                <div className='selects'>
                  <label htmlFor="sort-select">Filtrar por:</label>
                        <select id="sort-select" value={sortBy} onChange={handleSortChange}>
                            <option value="alphabetical">Ordem alfabética</option>
                            <option value="release-date">Data de lançamento</option>
                            <option value="popularity">Popularidade</option>
                            <option value="relevance">Relevancia</option>
                        </select>

                        <label htmlFor="platform-select">Plataforma:</label>
                        <select id="platform-select" value={platform} onChange={handlePlatformChange}>
                            <option value="browser">Navegador</option>
                            <option value="pc">PC</option>
                        </select>

                        <label htmlFor="category-select">Categoria:</label>
                        <select id="category-select" value={category} onChange={handleCategoryChange}>
                            <option value="mmorpg">MMORPG</option>
                            <option value="mmo">MMO</option>
                            <option value="strategy">Strategy</option>
                            <option value="shooter">Shooter</option>
                        </select>
                  </div>
              </Filters>
            <GamesContent>
                <ul>
                    {filteredGames.map(game => (
                        <li key={game.id}>
                            <div className='card'>
                                <img src={game.thumbnail} alt={game.title}/>
                                
                                <div className='card-body'>
                                    <h1>{game.title}</h1>
                                    <a>{game.platform}</a>
                                    <a>{formatDate(game.release_date)}</a>
                                    <a>{game.short_description}</a>
                                </div>
                            </div>
                            <h1 className='game-title'><a target='_blank' href={game.game_url}>{game.title}</a></h1>
                        </li>
                    ))}
                </ul>
            </GamesContent>
        </GamesContainer>
    );
}

export default Games;