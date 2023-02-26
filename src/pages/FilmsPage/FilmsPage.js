import {Films} from "../../components";
import {Outlet} from "react-router-dom";

const FilmsPage = () => {
    return (
        <div>
            <Outlet/>
            <Films/>
        </div>
    );
};

export {FilmsPage};