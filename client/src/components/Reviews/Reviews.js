import React, { useState, useEffect } from 'react';
import './Reviews.css'
import Select from 'react-select'


export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState('All');


  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((res) => res.json())
      .then((fetchedReviews) => {
        setReviews(fetchedReviews)
      })

  }, [])
  const options = [
    {value: 'All', label: 'All'},
    {value: 5, label: 5},
    {value: 4, label: 4},
    {value: 3, label: 3},
    {value: 2, label: 2},
    {value: 1, label: 1},
  ]

  const fiteredReviews = reviews.filter((review) => {
    if (search === "All") return true;

    return review.score === search;

  });
  return (
    <div className='r-div'>
        <h2>Reviews</h2>
        <Select options={options} className="rev-select" onChange={(e) => setSearch(e.value)}/>
          <div className='rev-container'>
          {fiteredReviews.map((review) => {
            return (
              <div className='review-card' key={review.id}>
                <h1 className='rev-name'>{review.manga?.title}</h1>
                <h4>{review.title}</h4>
                <p>{review.comment}</p>
                <h5>Rated {review.score} out of 5!</h5>
                <h6>Created at: {review.created_at}</h6>
              </div>
            )
          })}
        </div>
      </div>
  )
}
