const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    allFilms: '/discover/movie',
    movie: '/movie',
    search: '/search/movie?query=',
    genres: '/genre/movie/list?with_genres=',
    posterFilm: 'https://image.tmdb.org/t/p/w500/'
};

export {
    baseURL,
    urls
}
