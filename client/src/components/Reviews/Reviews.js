import React, { useState } from 'react';
import './Reviews.css'
import Select from 'react-select'
import ReviewCard from './ReviewCard';


export default function Reviews({ reviews, setReviews, revform, handleChange }) {
  const [search, setSearch] = useState('All');

  const options = [
    { value: 'All', label: 'All' },
    { value: 5, label: 5 },
    { value: 4, label: 4 },
    { value: 3, label: 3 },
    { value: 2, label: 2 },
    { value: 1, label: 1 },
  ]
  const filteredReviews = reviews?.filter((review) => {
    if (search === "All") return true;
    return review.score === search;
  });
  function handleDelete(id){
    fetch(`http://localhost:4000/reviews/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
      const updatedReviewsList = reviews?.filter((review) => {
        return review.id !== id
      });
      setReviews(updatedReviewsList)
      }
    });
  }
  
  return (
    <div className='r-div'>
      <h2>Reviews</h2>
      <Select options={options} className="rev-select" onChange={(e) => setSearch(e.value)} />
      <div className='rev-container'>
        {filteredReviews?.map((review) => {
          return (
            <ReviewCard review={review} 
            handleDelete={handleDelete} 
            setReviews={setReviews}
            reviews={reviews}
            handleChange={handleChange}
            />
          )
        })}
      </div>
      
    </div>
  )
}
