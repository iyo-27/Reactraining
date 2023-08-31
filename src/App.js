import React, {Component, useEffect, useState} from 'react';
import './App.css';

function useTax(t1, t2){
  const [price, setPrice] = useState(1000)
  const [tx1] = useState(t1)
  const [tx2] = useState(t2)

  const tax = ()=>{
    return Math.floor(price * (1.0 + tx1 / 100))
  }

  const reduced = ()=>{
    return Math.floor(price * (1.0 + tx2 / 100))
  }

  return [price, tax, reduced, setPrice]
}

function AlertMessage(props){
  const [price, tax, reduced, setPrice] = useTax(10, 8)

  const DoChange = (e)=>{
    let p = e.target.value
    setPrice(p)
  }

  return <div className='alert alert-primary h5'>
    <h5 className='h5'>通常税率: {tax()}円.</h5>
    <h5 className='h5'>軽減税率: {reduced()}円.</h5>
    <div className='form-group'>
      <label className='form-group-label'>Price</label>
      <input type='number' className='form-control' onChange={DoChange} value={price} />
    </div>
  </div>
}

function App(){

  return (
    <div>
      <h1 className='bg-primary text-white display-4'>React</h1>
      <div className='container'>
        <h4 className='my-3'>Hooks sample</h4>
        <AlertMessage />
      </div>
    </div>
  )
}

export default App;