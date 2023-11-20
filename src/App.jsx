import { Route,Routes } from 'react-router-dom'

import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Card from './Card'

import Contact from './Contact'
import Productdetails from './Productdetails'



function App () {


  return (
   <>
<Navbar/>
<Routes>
  <Route  path='/'  element= {<Home/>}/>
  <Route  path='/*'  element= {<Home/>}/>
 
  <Route  path="/product/:id"  element= {<Productdetails/>}/>
  <Route  path='/contact'  element= {<Contact/>}/>

  <Route  path='/card'  element= {<Card/>}/>
  
  
</Routes>

   </>
  )
}

export default App 