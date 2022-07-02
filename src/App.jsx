import {useLocation, Route, Routes } from 'react-router-dom'
import {Home} from '../src/pages/Home'


function App() {

  const location = useLocation()

  return (
    <div>
      
      <Routes location={location} keys={location.pathname}>    
            <Route path='/' element={<Home/>}/>
            
        </Routes>
    
      
    </div>
  )
}

export default App
