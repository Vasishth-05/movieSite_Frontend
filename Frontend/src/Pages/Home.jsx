import { useState } from "react";
import MovieCard from "../Components/MovieCard"

function Home(){

    const [searchQuery,setSearchQuery] = useState("");

    const movies = [
        {id:1,title:"Avengers:Doomsday",releaseDate:"2026"},
        {id:2,title:"John Wick",releaseDate:"2017"},
        {id:3,title:"Mahavtar Parshuram",releaseDate:"2027"},
        {id:4,title:"Harry Potter",releaseDate:"2010"},
        {id:5,title:"Varanasi",releaseDate:"2028"}
    ]

    const handleSearch = (e) => {
        e.preventDefault;
        alert(searchQuery);
        setSearchQuery("");
    }

    return <div className="home">

        <form onSubmit={handleSearch} className="serchForm">
            <input type="text" className="searchInput" placeholder="Search for Movies here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="searchBtn">Search</button>
        </form>

        <div className="movieGrid">
            {movies.map((movie) => 
            movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>

    </div>
}

export default Home;