import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MailLayout} from "./layouts";
import {AboutPage, FilmsPage, NotFoundPage, FilmDetailsPage} from "./pages";

const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path={'/'} element={<MailLayout/>}>
                    <Route index element={<Navigate to={'films'}/>}/>

                    <Route path={'films'} element={<FilmsPage/>}/>
                    <Route path={'/film-details?/:id'} element={<FilmDetailsPage/>}/>

                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};
