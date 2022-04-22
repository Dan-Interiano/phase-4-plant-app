import React from 'react';
import './Revform.css';




export default function Revform({ submit, form, change }) {
  return (
    <div>
        <div className='revform-container' id='rev-form'>
          <h3>Add Your Review Here!</h3>
                <form onSubmit={submit}>
                    <label>Title: <input type="text" name="title" value={form.title} onChange={change} /></label>
                    <label>Score: <input type="text" name="score" value={form.score} onChange={change} /></label>
                    <label>Comment: <textarea type='text' name="comment" value={form.comment} onChange={change} /></label>
                    <button type='submit' id="revform-submit-btn">Submit</button>
                </form>
            </div>
    </div>
  )
}
