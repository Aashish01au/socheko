import React from 'react'


import Productdata from '../Data/ProductData'
import { useParams } from 'react-router-dom'

function Details() {
    let {did}=useParams()
    let data=Productdata.find((a)=>a.id==did)
  return (
    <>
    <div className="container py-3">
        <div className="row">
            <h1>Details</h1>
            <div className="col-lg-4">
                <img src={data.thumbnail} className='w-100' alt="" />
            </div>
            <div className="col-lg-8">
                <h2>{data.title}</h2>
                <h4>Deails={data.description}</h4>
                <p>Brand={data.brand}</p>
                <p>Price=${data.price}</p>
                <p>Discount={data.discountPercentage}%</p>
                <p>Rating={data.rating}*</p>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Details