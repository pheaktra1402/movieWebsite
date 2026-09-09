import MovieCard from "../components/MovieCard"
import { useState } from "react";
function Home(){
    const[searchQuery, setsearchQuery]= useState("");
    const movies=[
        {id: 1, title: "Masha and the bear", release_date: "2023"},
        {id: 2, title: "Torato", release_date: "2026"},
        {id: 3, title: "Spider man", release_date: "2027"}
    ];
    const handleSearch = (e) =>{
    e.preventDefault()
    alert(searchQuery)
    setsearchQuery("")
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                placeholder="search movie..." className="search-input"
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (movie.title.toLowerCase().startsWith(searchQuery)&&
                <MovieCard movie = {movie} key={movie.id}/>
            ))}
            </div>
        </div>
    );
}
export default Home