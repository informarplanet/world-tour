
import { Outlet } from 'react-router-dom'
import './App.css'
import Countries from './Components/Countries/Countries'
import Nav from './Components/Nav/Nav'

function App() {
 

  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>   

    </>
  )
}

export default App
