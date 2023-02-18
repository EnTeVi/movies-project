import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {filmsAction} from "../../redux";
import css from './Genres.module.css';

const Genres = () => {
    const {genresS} = useSelector(state => state.films);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filmsAction.getByIdGenres())
    }, [dispatch]);

    return (
        <div className={css.genres}>
            {
                genresS.map(genre =>
                    <div
                        className={css.genreName}
                        key={genre.id}
                    >
                        <NavLink to={`films?page=1&with_genres=${genre.id}`}>
                            {genre.name}
                        </NavLink>
                    </div>)
            }
        </div>
    );
};

export {Genres};
