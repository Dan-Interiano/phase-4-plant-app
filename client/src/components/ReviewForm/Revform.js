import React from 'react';
import './Revform.css';




export default function Revform({ handleSubmit, form, handleChange }) {
  return (
    <div>
        <div className='revform-container' id='rev-form'>
          <h3>Add Your Review Here!</h3>
                <form onSubmit={handleSubmit}>
                    <label>Title: <input type="text" name="title" value={form.title} onChange={handleChange} /></label>
                    <label>Score: <input type="text" name="score" value={form.score} onChange={handleChange} /></label>
                    <label>Comment: <textarea type='text' name="comment" value={form.comment} onChange={handleChange} /></label>
                    <button type='submit' id="revform-submit-btn">Submit</button>
                </form>
            </div>
    </div>
  )
}
