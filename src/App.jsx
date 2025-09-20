import Landing from './pages/Landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Services from './pages/ServicesPage'
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
