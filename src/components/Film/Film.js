import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import {filmsAction} from "../../redux";
import css from './Film.module.css';
import {urls} from "../../configs";

const Film = ({film}) => {
    const {original_title, poster_path, id} = film;

    const dispatch = useDispatch();

    let link = `/film-details?id=${id}`;

    return (
        <div className={css.boxFilms}>
            <NavLink
                to={link}
                onClick={() => dispatch(filmsAction.removeFilm({id}))}
            >
                <div>
                    <img src={urls.posterFilm + poster_path} alt={original_title}/>
                    <div className={css.title}>{original_title}</div>
                </div>
            </NavLink>
        </div>
    );
};

export {Film};
