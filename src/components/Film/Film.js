import {useDispatch} from "react-redux";
import {filmsAction} from "../../redux";
import {NavLink} from "react-router-dom";

const Film = ({film}) => {
    const {original_title, poster_path, overview} = film;
    const dispatch = useDispatch();

    return (
        <div>
            <NavLink to={'filmId'}>

                <div>{original_title}</div>
                <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={poster_path}/>
                <div>{overview}</div>
                <button onClick={() => dispatch(filmsAction.setSelectedFilm({
                    original_title,
                    poster_path,
                    overview
                }))}>set
                </button>
                <button onClick={() => dispatch(filmsAction.getById({
                    original_title,
                    poster_path,
                    overview
                }))}>set with api
                </button>

            </NavLink>
        </div>
    );
};

export {Film};