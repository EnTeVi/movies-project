import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filmsAction} from "../../redux";
import {Film} from "../Film/Film";

const Films = () => {
    const [films] = useSelector(state => state.films);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filmsAction.getAll());
    }, [dispatch]);

    return (
        <div>
            {
                films?.map(film => <Film key={film.id} film={film}/>)
            }
        </div>
    );
};

export {Films};