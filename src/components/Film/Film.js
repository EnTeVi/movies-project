const Film = ({film}) => {
    const {original_title, poster_path, overview} = film;

    return (
        <div>
            <div>{original_title}</div>
            <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={poster_path}/>
            <div>{overview}</div>
        </div>
    );
};

export {Film};