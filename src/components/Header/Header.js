import ReactSwitch from "react-switch";
import * as PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

import {useTheme} from "../../hooks";
import {SVGMonth, SVGSun} from "../../images/";
import css from './Header.module.css';

function Button(props) {
    return null;
}

Button.propTypes = {
    onClick: PropTypes.func,
    variant: PropTypes.string
};

const Header = () => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        let nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
    }


    return (
        <div className={css.header}>
            <div className={css.logo}>
                <NavLink to={'films'}>
                    <img
                        src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-hd-21.png"
                        alt="Flixster"/>
                    <h1 className={css.oneLetter}>F</h1>
                    <h1 className={css.twoLetter}>L</h1>
                    <h1 className={css.threeLetter}>I</h1>
                    <h1 className={css.fourLetter}>X</h1>
                    <h1 className={css.fourLetter}>S</h1>
                    <h1 className={css.threeLetter}>T</h1>
                    <h1 className={css.twoLetter}>E</h1>
                    <h1 className={css.oneLetter}>R</h1>
                </NavLink>
            </div>

            <div className={css.switcher}>

                <div className={css.switch}>
                    <ReactSwitch className={css.reactSwitch}
                                 onChange={toggleTheme}
                                 checked={theme === 'dark'}
                                 uncheckedIcon={
                                     <SVGMonth/>
                                 }
                                 checkedIcon={
                                     <SVGSun/>
                                 }
                                 offColor={'#000000'}
                                 onColor={'#ffffff'}
                                 offHandleColor={'#ffffff'}
                                 onHandleColor={'#000000'}
                    />
                </div>

            </div>

            <div className={css.auth}>
                <h3>User Cat</h3>
                <img
                    src="https://w0.peakpx.com/wallpaper/91/939/HD-wallpaper-strong-cat-animal-cat-cute-feline-kitten-new-weight.jpg"
                    alt="cat"/>
            </div>
        </div>
    );
};

export {Header};