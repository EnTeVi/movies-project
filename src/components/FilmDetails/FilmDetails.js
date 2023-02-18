import {useDispatch, useSelector} from "react-redux";
import {Rating} from "@mui/material";
import {NavLink, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import ReactPlayer from "react-player";

import css from './FilmDetails.module.css';
import {filmsAction} from "../../redux";
import {urls} from "../../configs";

const FilmDetails = () => {
    const {selectedFilm, error, loading} = useSelector(state => state.films);
    const [id, setId] = useSearchParams();

    let fId = id.get("id");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filmsAction.getById(fId))
    }, [dispatch, fId]);

    const oneDecimalPlace = (prop) => {
        let fet = prop * 10;
        let red = Math.round(fet);
        return red / 10;
    }

    if (!selectedFilm) {
        return (loading && <h1 style={{color: 'white'}}>Loading...</h1>);
    }

    return (
        <div className={css.blockFilm}>

            {
                error && JSON.stringify(error)
            }
            {
                loading && <h1>Loading...</h1>
            }


            <div className={css.boxInfo}>

                <div className={css.infoPoster}>
                    <img src={urls.posterFilm + selectedFilm.poster_path}
                         alt={selectedFilm.original_title}
                    />
                </div>

                <div className={css.information}>

                    <div>
                        <h1>{selectedFilm.original_title.toUpperCase()}</h1>
                    </div>
                    <div className={css.infoBox}>
                        <p className={css.pTitle}>Motto: </p>
                        <p>{selectedFilm.tagline}</p>
                    </div>
                    <div className={css.infoBox}>
                        <p className={css.pTitle}>Premiere: </p>
                        <p>{selectedFilm.release_date}</p>
                    </div>
                    <div className={css.infoBox}>
                        <p className={css.pTitle}>Ganre: </p>
                        <div className={css.boxBadge}>
                            {
                                selectedFilm.genres.map(genr =>
                                    <p className={css.badge}
                                       key={genr.id}>
                                        <NavLink
                                            to={`/films?page=1&with_genres=${genr.id}`}
                                        >
                                            {genr.name}
                                        </NavLink>
                                    </p>)
                            }
                        </div>
                    </div>
                    <div className={css.infoBox}>
                        <p className={css.pTitle}>Budget: </p>
                        <p>{selectedFilm.budget}$</p>
                    </div>
                    <div className={css.infoBox}>
                        <p className={css.pTitle}>Income: </p>
                        <p>{selectedFilm.revenue}$</p>
                    </div>
                    <div className={css.infoBox}>
                        <p className={css.pTitle}>Country: </p>
                        {
                            selectedFilm.production_countries.map(country =>
                                <p key={country.id}>
                                    {country.name}
                                </p>)
                        }
                    </div>
                    <div className={css.infoBox}>
                        <p className={css.pTitle}>Time: </p>
                        <p>{selectedFilm.runtime} min.</p>
                    </div>

                </div>

                <div className={css.infoRating}>
                    <h2>Rating: {oneDecimalPlace(selectedFilm.vote_average)}</h2>
                </div>
            </div>

            <div className={css.overview}>
                <h2>Overview</h2>
                <p>{selectedFilm && selectedFilm.overview}</p>
            </div>

            <div>
                <div className={css.videoPlayer}>
                    <ReactPlayer url={'https://www.youtube.com/watch?v=graxkD8NzEw'}
                                 width={'100%'}
                                 height={'500px'}
                    />
                </div>
            </div>

            <div className={css.ratingBox}>
                <Rating
                    name="read-only"
                    readOnly
                    defaultValue={0}
                    precision={.1}
                    size="large"
                    max={10}
                    value={selectedFilm.vote_average}
                />
                <div>
                    <h2>Rating: {oneDecimalPlace(selectedFilm.vote_average)}</h2>
                </div>
            </div>

            <div>
                <h2>Reviews</h2>
            </div>

        </div>
    );
};

export {FilmDetails};