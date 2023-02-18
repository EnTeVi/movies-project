import css from './Footer.module.css';
import imagesLogo from '../../images/cat.png'

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.boxText}>
                <img src={imagesLogo} alt=""/>
                <h3>© 2023, Flixster.com — your favorite movies in English online</h3>
            </div>

            <div className={css.boxNone}>

            </div>

            <div className={css.boxAuthor}>

            </div>
        </div>
    );
};

export {Footer};