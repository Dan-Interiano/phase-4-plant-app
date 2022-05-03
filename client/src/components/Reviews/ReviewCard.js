import React, {useState } from 'react'

export default function ReviewCard({ review, handleDelete, setReviews, reviews}) {
  const [trigger, setTrigger] = useState(false);
  const [updated, setUpdated] = useState({
    comment: review.comment,
    title: review.title,
    score: review.score
  })
  function handleFormChange(event){
    setUpdated({
      ...updated,
      [event.target.name]: event.target.value,
    })
  }
  function handleEditClick(){
    setTrigger(!trigger)
  }
  
  function handleUpdateSubmission(event) {
    event.preventDefault()
    fetch(`http://localhost:4000/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updated),
    }).then((res) => {
      if(res.ok){
        const updatedReviewsList = reviews?.filter((singleReview) => {
          return singleReview.id !== review.id 
        });
        setReviews([...updatedReviewsList, updated])
        setTrigger(!trigger)
    }})
  }
  return (
    // each individual review and it's information 
    <div className='review-card' key={review.id}>
      <h4>{review.title}</h4>
      <p className='review-comment'>{review.comment}</p>
      <h3>Rated {review.score} out of 5!</h3>
      <div className='review-buttons-div'>
        <button onClick={() => handleDelete(review.id)}><i class="fa fa-trash"></i></button>
        <button onClick={handleEditClick}>Edit</button>
      </div>
      {/* this is the edit pop-up section controlled by trigger variable  */}
      {trigger ? 
      <div className='revform-container' id='rev-form'>
        <h1>Update Your Review</h1>
        <form onSubmit={(event) => handleUpdateSubmission(event)}>
          <label>Title: <input type="text" name="title" value={updated.title} onChange={handleFormChange} /></label>
          <label>Score: <input type="text" name="score" value={updated.score} onChange={handleFormChange} /></label>
          <label>Comment: <textarea type='text' name="comment" value={updated.comment} onChange={handleFormChange} /></label>
          <button type='submit' id="revform-submit-btn">Submit</button>
        </form>
      </div> : ""}
    </div>
  )
}
