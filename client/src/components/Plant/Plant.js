import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './Plant.css';


export default function Plant() {

    const [flora, setFlora] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/plants/${id}`)
            .then((res) => res.json())
            .then((plant) => {
                console.log(plant)
                setFlora(plant)
            })
    }, [])

  return (
    <div className='flora-container'>
        <div className='flora-details'>
            <img src={flora.image_url} alt={flora.name} className="flora-picture"/>
            <h1>{flora.name}</h1>
            <h3>Species: {flora.species}</h3>
            <p>{flora.bio}</p>
            <h2>How to care for:</h2>
            <h5>Sun Exposure: {flora.sun_exposure}</h5>
            <h5>Soil Type: {flora.soil_type}</h5>
            <h5>Water Cycle: {flora.water_cycle}</h5>
        </div>
        
    </div>
  )
}
