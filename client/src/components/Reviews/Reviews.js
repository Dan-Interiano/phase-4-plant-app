import React, { useState } from 'react';
import './Reviews.css'
import Select from 'react-select'


export default function Reviews({ flora}) {
  const [search, setSearch] = useState('All');

  const options = [
    {value: 'All', label: 'All'},
    {value: 5, label: 5},
    {value: 4, label: 4},
    {value: 3, label: 3},
    {value: 2, label: 2},
    {value: 1, label: 1},
  ]

  const fiteredReviews = flora?.reviews?.filter((review) => {
    if (search === "All") return true;

    return review.score === search;

  });
  return (
    <div className='r-div'>
        <h2>Reviews</h2>
        <Select options={options} className="rev-select" onChange={(e) => setSearch(e.value)}/>
          <div className='rev-container'>
          {fiteredReviews?.map((review) => {
            return (
              <div className='review-card' key={review.id}>
                <h1 className='rev-name'>{review.manga?.title}</h1>
                <h4>{review.title}</h4>
                <p className='review-comment'>{review.comment}</p>
                <h3>Rated {review.score} out of 5!</h3>
                
              </div>
            )
          })}
        </div>
      </div>
  )
}
