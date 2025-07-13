import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Home from './Home'
import About from './About'
import Pages from './Pages'
import Product from './Product'
import Farming from './Farming'
import News from './News'
import Contact from './Contact'
import Footer from './footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
        <Home/>
        <About/>
        <Product/>
        <Farming/>
        <News/>
        <Contact/>
        <Footer/>
      </div>  
       
  )
}

export default App
