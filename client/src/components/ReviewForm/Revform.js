import React from 'react';
import './Revform.css';




export default function Revform({ handleSubmit, revform, handleChange }) {
  return (
    <div>
        <div className='revform-container' id='rev-form'>
          <h3>Add Your Review Here!</h3>
                <form onSubmit={handleSubmit}>
                    <label>Title: <input type="text" name="title" value={revform} onChange={handleChange} /></label>
                    <label>Score: <input type="text" name="score" value={revform} onChange={handleChange} /></label>
                    <label>Comment: <textarea type='text' name="comment" value={revform} onChange={handleChange} /></label>
                    <button type='submit'>Submit</button>
                </form>
            </div>
    </div>
  )
}
