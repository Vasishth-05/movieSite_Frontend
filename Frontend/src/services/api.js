const BASE_URL = 'https://myanimelist.p.rapidapi.com/v2/manga/genres';
const API_KEY = '40facc1415msha33fba24d2edefdp18e919jsnc3b1533c6317';

export const getPopularAnimes = async () => {
    const response = await fetch(`${BASE_URL}/animes/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/animes?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}
