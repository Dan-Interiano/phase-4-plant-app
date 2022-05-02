import React, {useState } from 'react'

export default function ReviewCard({ review, handleDelete, revform, handleChange}) {
  const [trigger, setTrigger] = useState(false)
  
  function handleEditClick(e){
    setTrigger(!trigger)
  }
  
  function handleUpdateSubmission(event) {
    event.preventDefault()
    fetch(`http://localhost:4000/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(),
    }).then((res) => res.json())
      .then((data) => console.log(data))
  }
  return (
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
          <label>Title: <input type="text" name="title" value={review.title} onChange={handleChange} /></label>
          <label>Score: <input type="text" name="score" value={review.score} onChange={handleChange} /></label>
          <label>Comment: <textarea type='text' name="comment" value={review.comment} onChange={handleChange} /></label>
          <button type='submit' id="revform-submit-btn">Submit</button>
        </form>
      </div> : ""}
    </div>
  )
}
