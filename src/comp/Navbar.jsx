import React from 'react'
import Catdata from '../Data/Catdata'
import {Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Details from './Details'


function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-success"  data-bs-theme="dark">
  <div className="container">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {Catdata.slice(0,5).map((a)=>(
            <li className="nav-item" key={a}>
            <Link className="nav-link active" aria-current="page" to={`/cat/${a}`}>{a}</Link>
          </li>
        ))}
        
      
      </ul>
    
    </div>
  </div>
</nav>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cat/:cid' element={<Category/>}/>
  <Route path='/details/:did' element={<Details/>}/>
 
</Routes>

    </>
  )
}

export default Navbar