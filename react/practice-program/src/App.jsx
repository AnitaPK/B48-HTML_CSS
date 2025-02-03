import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Greeting from './components/Greeting'
import imageOne from './assets/image1.jpg'
import Counter from './components/Counter'
import CreateProduct from './components/CreateProduct'

function App() {

  return (
    <>
    <CreateProduct />
    <Counter />
        <h1>Learning REACT</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quis omnis. Cum excepturi dolorem molestiae quo optio officiis! Dignissimos sit quae aperiam voluptas ab cupiditate iure esse? Neque, optio fuga!</p>
        <Button buttonValue="Click Me" />
        <Button buttonValue="Register"/>
        <Button buttonValue="Login"/>
        <Button buttonValue="Submit" />
        <Button buttonValue="Reset" />
        <Greeting name1={{n1:'AKASH',n2:'Gat'}} />
        <Greeting name1={{n1:"Om", n2:"Mohite"}} />
        <img src={imageOne} alt="Image 1 is not showing" className='headerImage ' />
        <img src={imageOne} alt="Image 1 is not showing" className='rounded-circle' />


    </>
    )
}

export default App
