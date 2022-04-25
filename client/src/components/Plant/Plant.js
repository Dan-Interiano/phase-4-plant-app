import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Revform from '../ReviewForm/Revform';
import Reviews from '../Reviews/Reviews';
import './Plant.css';


export default function Plant() {
  const [flora, setFlora] = useState([]);
  const [reviews, setReviews] = useState([])
  const { id } = useParams();
  const [revform, setRevForm] = useState({
    plant_id: id,
    comment: undefined,
    score: undefined,
    title: undefined
  }) 
  useEffect(() => {
    fetch(`http://localhost:4000/plants/${id}`)
      .then((res) => res.json())
      .then((plant) => {
        setReviews(plant.reviews)
        setFlora(plant)
      })
  },
    [])
  
  function handleChange(event) {
    setRevForm({
      ...revform,
      [event.target.name]: event.target.value,
    })
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(revform),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews([...reviews, data])
        setRevForm({
          plant_id: id,
          comment: "",
          score: "",
          title: ""
        })
      })
  }
  return (
    <div className='flora-container'>
      <div className='flora-details'>
        <img src={flora.image_url} alt={flora.name} className="flora-picture" />
        <h1>{flora.name}</h1>
        <h3>Species: {flora.species}</h3>
        <p>{flora.bio}</p>
        <h2>How to care for:</h2>
        <h5>Sun Exposure: {flora.sun_exposure}</h5>
        <h5>Soil Type: {flora.soil_type}</h5>
        <h5>Water Cycle: {flora.water_cycle}</h5>
      </div>
      <Revform submit={handleSubmit} change={handleChange} form={revform} />
      <Reviews reviews={reviews} setReviews={setReviews} />
    </div>
  )
}
