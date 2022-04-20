import React from 'react'
import "./Plantform.css";

export default function Plantform({ form, change, submit }) {
    

  return (
    <div className='pf-container'>
      <h2>Add your new favorite Plant here!</h2>
        <form onSubmit={submit} className="plant-form">
            <label>
                Name: <input type="text" name="name" value={form.name} onChange={change} required/>
            </label>
            <label>
                Species: <input type="text" name="species" value={form.species} onChange={change} required/>
            </label>
            <label>
                Sun Exposure: <input type="text" name="sun_exposure" value={form.sun_exposure} onChange={change} required/>
            </label>
            <label>
                Soil Type: <input type="text" name="soil_type" value={form.soil_type} onChange={change} required/>
            </label>
            <label>
                Water Cycle: <input type="text" name="water_cycle" value={form.water_cycle} onChange={change} required/>
            </label>
            <label>
                Image URL: <input type="text" name="image_url" value={form.image_url} onChange={change} required/>
            </label>
            <label>
                Bio: <textarea type="text" name="bio" value={form.bio} onChange={change} required/>
            </label>
            
            <button type='submit' className='submit-btn'>Submit</button>
        </form>
    </div>
  )
}
