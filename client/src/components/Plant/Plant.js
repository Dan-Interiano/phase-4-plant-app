import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
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
        console.log(plant)
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
  function handleAdoption(){
    let plant_id = id 
    fetch("http://localhost:4000/adopteds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({plant_id}),
    }).then((res) => res.json())
    .then((data) => console.log(data))
  }

  const filteredUsers = flora?.users?.reduce((acc, current) => {
    const x = acc.find(item => item.username === current.username);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  console.log(filteredUsers)
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
        <NavLink to="/adopteds"><button className='adopt-button' onClick={handleAdoption}><h1>Adopt Me</h1></button></NavLink>
        <h4>Adopted by Users like {filteredUsers?.map((user) => (
          <h4>{user.username}</h4>
        ))}</h4>
      </div>
      <Revform submit={handleSubmit} change={handleChange} form={revform} />
      <Reviews reviews={reviews} setReviews={setReviews} revform={revform} 
      handleChange={handleChange}/>
      
    </div>
  )
}
