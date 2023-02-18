import {apiService} from "./apiService";
import {urls} from "../configs";

const filmsService = {
    getAll: () => apiService.get(urls.allFilms)
}

export {
    filmsService
}