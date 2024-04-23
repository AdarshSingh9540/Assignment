// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {


  return (
    <div className='bg-black'>
    <Navbar/>
    <Header/>
    <Cards/>
    </div>
  )
}

export default App
