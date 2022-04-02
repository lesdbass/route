import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Rating } from 'react-simple-star-rating'
import { Link,Outlet } from 'react-router-dom'




const MovieCard = props => {

    const [rating , setRating] = useState(props.rating);

        
    // Catch Rating value
    const handleRating = (rate : number) => 
    {
        setRating(rate)
    }

  return (
    <>
        <div className="MovieCard" key={props.id}>

        <div><img className='imgMovie' src={props.posterURL} alt={props.title} /> </div>
            <div style={{width: "65%"}}>
                <h1 className='h1t'>{props.title}</h1>
                <Rating onClick={handleRating} ratingValue={rating} readonly="false" />
                <p className="ptext">{props.description}</p>
                <Link to={`/trailer/${props.id}`} ><button type="button" className='btn-danger'>Trailer</button></Link> 
                

                {/* <Link to={`/trailer/${props}`}  >Trailer</Link>  */}
            </div>
            {/* <Outlet /> */}
            
        </div>
           
    </>
  )
}

MovieCard.propTypes = {}

export default MovieCard