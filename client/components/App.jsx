import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NewTrip from './pages/NewTrip'
import UpcomingTrip from './pages/UpcomingTrip'
import PackingList from './pages/PackingList'
import ChosenCampground from './pages/ChosenCampground'
import PastTripsBar from './pages/PastTripsBar'
import PastTripsPage from './pages/PastTripsPage'
import axios from 'axios';
import { useState, useEffect } from 'react';


const App = () => {

  const [user, setUser] = useState(null);
  

//this function is grabbing the login information for logging in succesfully
  useEffect(()=>{
    const getUser = ()=>{
    axios.get(`${process.env.REACT_APP_CLIENT_URL}auth/login/success`)
    .then((response)=>{
      if(response.status===200){
        return response.data
      }else{
        throw new Error("auth failed")
      }
    }).then((resObj)=>{
      setUser(resObj.user)
      localStorage.setItem('user', JSON.stringify(resObj.user));
    })
    .catch((err)=>{
      console.error('couldnt get the user to the state', err)
    })
  };
    getUser();
  }, []);


  return (
<BrowserRouter>
<Routes>
{user ? (
  <Route path="/" element={<Home user={user} />} />
) : (
<Route path="/" element={<Login />} />
)}
<Route path="/new-trip" element={<NewTrip />} />

<Route path="/chosen-campground" element={<ChosenCampground user={user} />} />

<Route path="/upcoming-trip" element={<UpcomingTrip user={user} />} />
<Route path="/packing-list" element={<PackingList user={user} />} />
<Route path="/past-trips-page" element={<PastTripsPage user={user} />} />

</Routes>
</BrowserRouter>

  )
}






export default App;