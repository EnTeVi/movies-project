import {useSelector} from "react-redux";

const FilmDetails = () => {
    const {selectedFilm} = useSelector(state => state.films);

    return (
        <div>
            FilmDetails
            {selectedFilm && selectedFilm.original_title}
        </div>
    );
};

export {FilmDetails};