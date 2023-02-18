import {NavLink} from "react-router-dom";

import css from './SiteBar.module.css';
import {Genres} from "../Genres/Genres";

const SiteBar = () => {
    return (
        <div className={css.siteBar}>

            <div className={css.dropdown}>
                <NavLink to={'films'} className={css.dropbtn}>
                    <div>Films</div>
                </NavLink>
                <div className={css.dropdownContent}>
                    <Genres/>
                </div>
            </div>

            <NavLink to={'about'}>
                <div className={css.blockNav}>
                    About
                </div>
            </NavLink>

        </div>
    );
};

export {SiteBar};