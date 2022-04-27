import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom'

import ReviewCard from '../Reviews/ReviewCard';

export default function Update() {
  const { id } = useParams();
  const [review, setReview] = useState([])
  const [updated, setUpdated] = useState({
    comment: undefined,
    score: undefined,
    title: undefined
  })
  useEffect(() => {
    fetch(`http://localhost:4000/reviews/${id}`)
      .then((res) => res.json())
      .then((review) => {
        setReview(review)
      })
  },
    [])
  function handleChange(event) {
    setUpdated({
      ...updated,
      [event.target.name]: event.target.value,
    })
  }
  function handleUpdateSubmission() {
    fetch(`http://localhost:4000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updated),
    }).then((res) => res.json())
      .then((data) => console.log(data))
  }
  return (
    <div>
      <ReviewCard review={review} />
      <div className='revform-container' id='rev-form'>
        <h1>Update Your Review</h1>
        <form onSubmit={handleUpdateSubmission}>
          <label>Title: <input type="text" name="title" value={updated.title} onChange={handleChange} /></label>
          <label>Score: <input type="text" name="score" value={updated.score} onChange={handleChange} /></label>
          <label>Comment: <textarea type='text' name="comment" value={updated.comment} onChange={handleChange} /></label>
          <button type='submit' id="revform-submit-btn">Submit</button>
        </form>
      </div>
      <NavLink to={'/garden'}>Back to Garden</NavLink>
    </div>
  );
}
