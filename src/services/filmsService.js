import {apiService} from "./apiService";
import {urls} from "../configs";

const filmsService = {
    getAll: (page = 1, with_genres='') => apiService.get(urls.allFilms, {params:{page, with_genres}}),
    getById: (id) => apiService.get(`${urls.movie}/${id}`),
    search: (name) => apiService.get(`${urls.search}/${name}`),
    genres: () => apiService.get(urls.genres)
}

export {
    filmsService
}