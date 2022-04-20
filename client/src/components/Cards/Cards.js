import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

export default function Cards({ data }) {
  return (
    <div className='card-container'>
        {data?.map((plant) => {
          return (
            <div key={plant.id} className="card">
              <img src={plant.image_url} className="plant-picture" alt={plant.name}/>
              <h2 className='card-title'>{plant.name}</h2>
              <NavLink to={`/plants/${plant.id}`} className="plant-btn">Learn More</NavLink>
            </div>
          )
        })}
    </div>
  )
}
