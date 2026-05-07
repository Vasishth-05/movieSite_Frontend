function MovieCard({movie}){
    return <div className="movieCard">
        <div className="moviePoster">
            <img src={movie.url} alt={movie.title} />
        </div>
        <div className="movieLikeBtn">
            <button className="toggleBtn" onClick={onFavouriteClick}>🤍</button>
        </div>
        <div className="movieOverlay">
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
        </div>
    </div> 
}

function onFavouriteClick(){
    alert("Jai Jagganath")
}

export default MovieCard;