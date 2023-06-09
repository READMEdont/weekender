import { Link } from 'react-router-dom'

import React, { useState, useEffect } from 'react';
import CampGroundsList from '../CampgroundsList';
import axios from 'axios';



import NewTripInput from './NewTripInput';


const NewTrip = ()=>{

  const logout = () =>{
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/logout`, "_self");
  }
  //set state here to be what the state is inside NewTripInput to grab the input data
  const [chosenUSASTATE, setUSASTATE] = useState('')
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');
  const [ campgroundData, setCampgroundData ] = useState('');

  //a function that we will pass into NewTripInput to set the state here to the values in child
  const updateNewTripState = (USstate, start, end)=>{
    setUSASTATE(USstate);
    setStartDate(start);
    setEndDate(end);
  }


  const getAllCampgrounds = ()=>{
    return axios.get(`/campgrounds/searchByState?state=${chosenUSASTATE}`)
    .then((response)=>{
      setCampgroundData(response.data.RECDATA)
    })
  }
  

return(

  <div className="newTripPage">
     <div className="topBar" style={{position: 'fixed', top: 0, left: 0, right: 0,backgroundColor:'rgb(56, 125, 125)', zIndex:1, marginBottom: "30px"}}>
<h1 className="weekendertext">
<Link to="/" style={{textDecoration: 'none', color: 'white'}}>WEEKENDER </Link></h1>
  <h1 className='welcome'> WHERE YA HEADED?</h1>
  <button className='logoutButton' onClick={(logout)}>Log Out</button>
</div>
   <hr />
   <div style={{marginTop: '80px'}}>
   <NewTripInput updateNewTripState={updateNewTripState} />
   
   <hr />
   </div>
   <button onClick={getAllCampgrounds} style={{backgroundColor: 'green', color: 'white', width: '6rem', height: '3rem', fontSize: '1.5rem', borderRadius: '1.4rem'}} >Search</button>
  <div className='more'>
  
   <CampGroundsList startDate={startDate} endDate={endDate} campgroundData={campgroundData}/>
   </div>
   </div>
 )

};

export default NewTrip