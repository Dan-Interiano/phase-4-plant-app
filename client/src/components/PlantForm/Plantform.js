import React from 'react'
import "./Plantform.css";

export default function Plantform({ form, handleChange, handleSubmit }) {
    

  return (
    <div className='form-container'>
      <h2>Add your new favorite manga here!</h2>
        <form onSubmit={handleSubmit} className="manga-form">
            <label>
                Name: <input type="text" name="name" value={form.name} onChange={handleChange} required/>
            </label>
            <label>
                Species: <input type="text" name="species" value={form.species} onChange={handleChange} required/>
            </label>
            <label>
                Sun Exposure: <input type="text" name="sun_exposure" value={form.sun_exposure} onChange={handleChange} required/>
            </label>
            <label>
                Soil Type: <input type="text" name="soil_type" value={form.soil_type} onChange={handleChange} required/>
            </label>
            <label>
                Water Cycle: <input type="text" name="water_cycle" value={form.water_cycle} onChange={handleChange} required/>
            </label>
            <label>
                Bio: <input type="text" name="bio" value={form.bio} onChange={handleChange} required/>
            </label>
            <label>
                Image URL: <input type="text" name="image_url" value={form.image_url} onChange={handleChange} required/>
            </label>
            <button type='submit' className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}
