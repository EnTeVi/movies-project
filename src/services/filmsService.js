import {apiService} from "./apiService";
import {urls} from "../configs";

const filmsService = {
    getAll: () => apiService.get(urls.allFilms),
    getById: (id) => apiService.get(`${urls.allFilms}/${id}`)
}

export {
    filmsService
}