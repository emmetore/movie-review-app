import React from "react";
import Movie from "./movie";


function MovieList(props) {

        return (
          <div className="movie-list-container">
            <div className="Movie">
              <Movie 
                image={props.image}
                title={props.title}
                director={props.director}
                year={props.year}
                reviews={props.reviews}/>
            </div>
            
          </div>
        );
  

      
}


export default MovieList



