import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : (movie.url || "https://via.placeholder.com/500x750?text=No+Poster");

    const releaseYear = movie.release_date ? movie.release_date.split("-")[0] : movie.release_date;

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={posterUrl} alt={movie.title} />
                <div className="movie-overlay">
                    <button
                        className={`favorite-btn ${favorite ? "active" : ""}`}
                        onClick={onFavoriteClick}
                        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{releaseYear}</p>
            </div>
        </div>
    );
}

export default MovieCard;