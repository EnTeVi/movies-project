import imgcat from '../../images/63371318021853-pib-cp-001.webp';

const NotFoundPage = () => {
    return (
        <div style={{width: '100%'}}>
            <h1 style={{width: '30%', color: 'white', position: 'absolute', marginLeft: '25%'}}>Oops... no such page exists</h1>
            <img src={imgcat} alt="f" style={{width: '100%'}}/>
        </div>
    );
};

export {NotFoundPage};