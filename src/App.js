import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MailLayout} from "./layouts";
import {AboutPage, FilmsPage, NotFoundPage, FilmDetailsPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MailLayout/>}>
                <Route index element={<Navigate to={'films'}/>}/>

                <Route path={'films'} element={<FilmsPage/>}>
                    <Route path={':filmId'} element={<FilmDetailsPage/>}/>
                </Route>

                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};
