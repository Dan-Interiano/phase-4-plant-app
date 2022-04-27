import React from 'react'
import { NavLink } from 'react-router-dom'
export default function ReviewCard({ review, handleDelete }) {
  return (
        <div className='review-card' key={review.id}>
              <h1 className='rev-name'>{review.manga?.title}</h1>
              <h4>{review.title}</h4>
              <p className='review-comment'>{review.comment}</p>
              <h3>Rated {review.score} out of 5!</h3>
              <div className='review-buttons-div'>
                <button onClick={() => handleDelete(review.id)}><i class="fa fa-trash"></i></button>
                <NavLink to={`/reviews/${review.id}`}>Edit</NavLink>
              </div>
            </div>
  )
}
