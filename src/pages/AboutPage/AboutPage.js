import image from '../../images/cats-dogs.jpg';

const AboutPage = () => {
    return (
        <div>
            <img src={image} style={{width:'100%', height: '100%'}} alt="about cats on cimena"/>
        </div>
    );
};

export {AboutPage};