import {NavLink} from "react-router-dom";

const SiteBar = () => {
    return (
        <div>
            <NavLink to={'films'}>Фільми</NavLink>
        </div>
    );
};

export {SiteBar};