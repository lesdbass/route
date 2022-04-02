import './App.css';
import React,{useState} from 'react';
import MovieList  from './Component/MovieList';
import Search from './Component/Search';
import {Movie} from './Component/Data';
import AddMovie from './Component/AddMovie';
import { Routes,Route} from 'react-router-dom'
import Trailer from './Component/Trailer'

function App() {

  // useEffect(() => {
  //   // Update the document title using the browser API
    
  // });

  const [mtemp , setMtemp]=useState(Movie);  
  
  function searchMovie(src,searby) {
    
    //setMtemp(...Movie)
        //console.log(...Movie)
    //console.log(...mtemp)
    if (searby==="titlesrc")
    {
      setMtemp(Movie.filter(x => x.title.includes(src)))
     // myArray.filter(function (str) { return str.includes(PATTERN); });
    }
    else
    {
      
      setMtemp(Movie.filter(x => x.rating >= src))
      
    }

  }


  function addNewMovie (newM) {
      setMtemp(oldArray => [...oldArray, newM])
  }

  


  return (
    <>
        
        <Routes>
                    {/* <Route index path="/" element={<App/>} /> */}
          <Route path="/" element={
                        <>
                            <h1>Checkpoint Hooks</h1>
       
                            <Search searchMovie={searchMovie}/>
                            <AddMovie addNewMovie={addNewMovie} />
                            <div className="App">
                               <MovieList movieData={mtemp}/>
                          </div>
                        </>

                      } />
                    <Route path="/trailer/:idMovie" element={<Trailer/>} />
            </Routes>  
    </>
  );
}


export default App;
