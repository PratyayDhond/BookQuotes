import React from 'react'
import selectedStar from '../../elements/star.gif' 
import notSelectedStar from '../../elements/uncheckStar.png'

const Rating = ({rating,setRating}) => {
    return(
        <>
            <div className='rating'>
            <span>
            <label htmlFor="ratingLabel" className='ratingLabel'>Rate the quote:</label>

            </span>
            <span className='ratingStar'>
                    <img src={rating > 0 ? selectedStar : notSelectedStar} draggable='false' height="40vh" alt="star" onClick={(e) => {if(rating === 1) setRating(rating-1); else setRating(1);}} />
                    <img src={rating > 1 ? selectedStar : notSelectedStar} draggable='false' height="40vh" alt="star" onClick={(e) => {if(rating === 2) setRating(rating-1); else setRating(2);}} />
                    <img src={rating > 2 ? selectedStar : notSelectedStar} draggable='false' height="40vh" alt="star" onClick={(e) => {if(rating === 3) setRating(rating-1); else setRating(3);}} />
                    <img src={rating > 3 ? selectedStar : notSelectedStar} draggable='false' height="40vh" alt="star" onClick={(e) => {if(rating === 4) setRating(rating-1); else setRating(4);}} />
                    <img src={rating > 4 ? selectedStar : notSelectedStar} draggable='false' height="40vh" alt="star" onClick={(e) => {if(rating === 5) setRating(rating-1); else setRating(5);}} />
            </span>
            </div>
        </>
    )
}

export default Rating