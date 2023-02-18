import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

import {filmsAction} from "../../redux";
import lop from '../../images/lop.png';
import css from './Search.module.css';

const Search = () => {
    const {searchQ} = useSelector(state => state.films);
    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        dispatch(filmsAction.getByIdSearch(value));
    }, [dispatch, value]);

    const filteredFilms = searchQ.filter(film => {
        return film.title.toLowerCase().includes(value.toLowerCase());
    })

    const itemClickHendler = (e) => {
        setValue(e.target.textContent);
        setIsOpen(!isOpen);
        setValue('');
    }

    const inputClickHendler = () => {
        setIsOpen(true);
    }

    return (
        <div className={css.search}>

            <div className={css.form}>
                <form className={css.search_form}>
                    <input
                        type="text"
                        className={css.search_input}
                        placeholder={'Search...'}
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        onClick={inputClickHendler}
                    />
                    <img src={lop}/>
                    <ul className={css.autocomplete}>
                        {value && isOpen ?
                            filteredFilms.map(search => {
                                return (
                                    <li
                                        className={css.autocomplete_item}
                                        key={search.id}
                                        onClick={itemClickHendler}
                                    >
                                        <NavLink
                                            to={`/film-details?id=${search.id}`}
                                            onClick={() => dispatch(filmsAction.removeSearch(search.id))}
                                        >
                                            <div>{search.title}</div>
                                        </NavLink>
                                    </li>
                                )
                            })
                            : null
                        }
                    </ul>
                </form>
            </div>

        </div>
    );
};

export {Search};
