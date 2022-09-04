import React from 'react'
import selectedStar from '../../elements/star-2c2c2c.gif' 
import notSelectedStar from '../../elements/uncheckStar-2c2c2c.png'
import '../Form.css'

const Rating = ({rating,setRating}) => {
    return(
        <>
            <div className='rating'>
                <label htmlFor="ratingLabel" className='ratingLabel'>Rate the quote:</label>
                <div className='ratingStar'>
                        <img className='star' src={rating > 0 ? selectedStar : notSelectedStar} draggable='false'  alt="star" onClick={(e) => {if(rating === 1) setRating(rating-1); else setRating(1);}} />
                        <img className='star' src={rating > 1 ? selectedStar : notSelectedStar} draggable='false'  alt="star" onClick={(e) => {if(rating === 2) setRating(rating-1); else setRating(2);}} />
                        <img className='star' src={rating > 2 ? selectedStar : notSelectedStar} draggable='false'  alt="star" onClick={(e) => {if(rating === 3) setRating(rating-1); else setRating(3);}} />
                        <img className='star' src={rating > 3 ? selectedStar : notSelectedStar} draggable='false'  alt="star" onClick={(e) => {if(rating === 4) setRating(rating-1); else setRating(4);}} />
                        <img className='star' src={rating > 4 ? selectedStar : notSelectedStar} draggable='false'  alt="star" onClick={(e) => {if(rating === 5) setRating(rating-1); else setRating(5);}} />
                </div>
            </div>
        </>
    )
}

export default Rating