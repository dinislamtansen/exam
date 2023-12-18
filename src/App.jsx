import { Form, Route,Routes } from 'react-router-dom'


import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Card from './Card'


import AddToCartPage from './AddToCartPage'
import MyForm from './MyForm'


function App () {

 


  return (
   <>
<Navbar/>
<Routes>
  <Route  path='/'  element= {<Home/>}/>
  <Route  path='/*'  element= {<Home/>}/>
 
  <Route  path="/product/:id"  element= {<AddToCartPage/>}/>
  

  <Route  path='/card'  element= {<Card/>}/>
  <Route path='/contact' element={<MyForm/>}/>
  
  
</Routes>

   </>
  )
}

export default App 