const API_KEY = import.meta.env.VITE_TMDB_API_KEY || "4e44d9029b1270a757cddc766a1bcb63";
const BASE_URL = "https://api.themoviedb.org/3";
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};
