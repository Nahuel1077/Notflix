  import React, { useState } from 'react';
  import logo from './img/ensigna-svg.svg';

  export default function MovieSearch() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    // Maneja el cambio en el input de búsqueda
    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
  
    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Llamada a la API de TMDb
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${apiKey}`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);  // Guarda los resultados de búsqueda en el estado
        console.log(data);
        
      } catch (error) {
        console.error('Error fetching the movie data:', error);
      }
    };
  
    return (
      <div>
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="search-bar">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Buscar" value={query} id="search-bar" onChange={handleInputChange}></input>
                    <button type="submit">Buscar</button> 
                </form>
            </div>
        </nav>
            <div className="container">
                {movies.length > 0 && movies.map((movie) => ( // Simplificado: Solo muestra películas si hay alguna
                    <div key={movie.id} className="card"> 
                        <div className="card-title">
                            {movie.poster_path ? ( 
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                alt={movie.title} 
                                className="poster-image"
                            />
                            ) : (
                            <div className="no-image">Sin imagen</div>
                            )}
                            <h5>{movie.title}</h5>
                            <p>{movie.overview.length > 200 
                                ? `${movie.overview.slice(0, 270)}...` 
                                : movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
        
    );
  }