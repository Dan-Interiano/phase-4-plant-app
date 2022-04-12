import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import "./Garden.css"

export default function Garden() {
  const [plants, setPlants] = useState([]);
  const [revform, setRevForm] = useState({
    manga_id: id,
    comment: undefined,
    score: undefined,
    title: undefined
})

  useEffect(() => {
    fetch("http://localhost:4000/plants")
    .then((res) => res.json())
    .then((fetchedPlants) => {
      console.log(fetchedPlants)
      setPlants(fetchedPlants)})
  }, [])
  
  return (
    <div className='g-container'>
      <h1 className='g-title'>Here is the Garden</h1>
      <Cards data={plants} />
    </div>
  )
}
