import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import Plantform from '../PlantForm/Plantform';
import "./Garden.css"

export default function Garden() {
  const [plants, setPlants] = useState([]);
  const [formData, setFormData] = useState({
    name: " ",
    species: " ",
    sun_exposure: " ",
    soil_type: " ",
    water_cycle: " ",
    image_url: " ",
    bio: " "
  });
  
  useEffect(() => {
    fetch("http://localhost:4000/plants")
      .then((res) => res.json())
      .then((fetchedPlants) => {
        setPlants(fetchedPlants)
      })
  }, [])
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:4000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((newPlant) => {
      console.log(newPlant)
      setPlants([
        ...plants,
        newPlant
      ])
    setFormData({
      name: "",
      species: "",
      sun_exposure: "",
      soil_type: "",
      water_cycle: "",
      immage_url: "",
      bio: ""
    })})
  }
  return (
    <div className='g-container'>
      <h1 className='g-title'>Here is the Garden</h1>
      <Cards data={plants} />
      <Plantform form={formData} change={handleChange} submit={handleSubmit}/>
    </div>
  )
}
