import React, {Component, useState} from 'react';
import './App.css';

function AlertMessage(){
  return <div className='alert alert-primary h5 text-primary'>
    This is Alert message!
  </div>
}

function CardMessage(){
  return <div className='card p-3 border-primary text-center'>
    This is Card message!
  </div>
}

function App(){
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)
  const clickFunc = () => {
    setCount(count + 1)
  }
  const changeFlag = (e) => {
    setFlag(e.target.checked)
  }

  return (
    <div>
      <h1 className='bg-primary text-white display-4'>React</h1>
      <div className='container'>
        <h4 className='my-3'>Hooks sample</h4>
        <AlertMessage />
        <CardMessage />
      </div>
    </div>
  )
}

export default App;
