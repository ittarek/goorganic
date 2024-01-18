
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import SecondPage from './Components/SecondPage'

function App() {


  return (
    <>
    <Header></Header>
<Outlet/>
    
    </>
  )
}

export default App
