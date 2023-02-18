import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import Pagination from '@mui/material/Pagination';

import {filmsAction} from "../../redux";
import {Film} from "../Film/Film";
import css from './Films.module.css';

const Films = () => {
    const {films, error, loading, total_pages} = useSelector(state => state.films);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1', with_genres: ''});
    let with_genresId = query.get('with_genres');

    useEffect(() => {
        dispatch(filmsAction.getAll({
            page: query.get('page'),
            with_genres: query.get('with_genres')
        }));
    }, [dispatch, query]);

    return (
        <div>
            <div>
                {
                    error && JSON.stringify(error)
                }
            </div>
            <div style={{position: "absolute", color: "white"}}>
                {
                    loading && <h1>Loading...</h1>
                }
            </div>


            <div className={css.filmsContainer}>
                {
                   films.map(film => <Film key={film.id} film={film}/>)
                }
            </div>

            <div className={css.pagination}>
                <Pagination
                    className={css.buttonPag}
                    count={total_pages}
                    page={parseInt(query.get("page"))}
                    shape="rounded"
                    size="large"
                    color="secondary"
                    onChange={
                    (_, num) =>
                        setQuery(query =>
                            ({page: num, with_genres: with_genresId}))}
                />
            </div>

        </div>
    );
};

export {Films};

