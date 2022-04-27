import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import Garden from '../Garden/Garden';

export default function Update() {
  const { id } = useParams();
  const [updated, setUpdated] = useState({
    comment: undefined,
    score: undefined,
    title: undefined
  })
  function handleChange(event) {
    setUpdated({
      ...updated,
      [event.target.name]: event.target.value,
    })
  }
  function handleUpdateSubmission(){
    fetch(`http://localhost:4000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updated),
    })
  }
  return  (
    <div>
        <div className='revform-container' id='rev-form'>
          <h1>Update Your Review</h1> 
                <form onSubmit={handleUpdateSubmission}>
                    <label>Title: <input type="text" name="title" value={updated.title} onChange={handleChange} /></label>
                    <label>Score: <input type="text" name="score" value={updated.score} onChange={handleChange} /></label>
                    <label>Comment: <textarea type='text' name="comment" value={updated.comment} onChange={handleChange} /></label>
                    <button type='submit' id="revform-submit-btn">Submit</button>
                </form>
            </div>
    </div>
  );
}
