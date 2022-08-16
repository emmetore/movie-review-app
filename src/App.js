import './App.css';
import MovieList from './components/MovieList';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import React from 'react';
import Stars from './components/stars';
import Movie from './components/movie';
import DataArray from './data/dummyData'
import apImg from './images/ap.png'




function App() {
  const data = DataArray;
  
  return (
    <div className='App'>
      {
        data.map((dataObj, i) => (
          <MovieList 
          key={i} 
          value={dataObj} 
          title={dataObj.title}
          director={dataObj.director}
          year={dataObj.year}
          image={dataObj.image}
          reviews={dataObj.reviews}
          />
         ))
      }
      
      
      
    </div>

  );
}

export default App;
