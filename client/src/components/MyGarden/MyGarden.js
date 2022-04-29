import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import './MyGarden.css';


export default function MyGarden() {
  const [adopted, setAdopted] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/adopteds")
      .then((res) => res.json())
      .then((fetchedAdopteds) => {
        setAdopted(fetchedAdopteds)
      })

  }, [])
  
  return (
    <div>
        <h1 className='my-garden-title'>Your Garden Is Here</h1>
        <div className='plant-garden-container'>
          <Cards data={adopted} />
        </div>
    </div>
  )
}
