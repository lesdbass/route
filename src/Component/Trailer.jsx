import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';

import {button} from 'react-bootstrap';


import {getMovie} from './Data';


const Trailer = () => {
    let params = useParams(); 
    const mv=getMovie(params.idMovie)
    const navigate = useNavigate();

  return (
    <div className='trailer'>
            
            <div>
            <h1>{mv.title}</h1>
              <iframe
                  width="853"
                  height="480"
                  src={mv.trailer}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={mv.title} />  
            </div>
            <div>
                <p className='ptrailer'>{mv.descrip}</p>
                <button className="btn-warning" onClick={() => navigate(-1)} style={{margin : "20px"}}>Go Back</button>
          
             </div>

    </div>
  )
}

export default Trailer