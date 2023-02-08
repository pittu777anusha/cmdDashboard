import React from 'react'
import {BrowserRouter,Routes,Route,Navigate,Outlet} from "react-router-dom";
import DashBoard from '../components/DashBoard';
import LandingPage from '../components/LandingPage';
function Navs() {
    const ProtectedRoute=()=>{
        if(true){
            return <Outlet/>
        }
        else{
            return <Navigate to='/'/>
        }
    }
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={<LandingPage/>}/>
        <Route element={<ProtectedRoute/>}>
            <Route path='/dashboard' element={<DashBoard/>}/>

        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default  Navs;