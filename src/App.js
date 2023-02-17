import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MailLayout} from "./layouts";
import {AboutPage, FilmsPage, NotFoundPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MailLayout/>}>
                <Route index element={<Navigate to={'films'}/>}/>
                
                <Route path={'films'} element={<FilmsPage/>}>
                    <Route path={':filmId'}/>
                </Route>

                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};
