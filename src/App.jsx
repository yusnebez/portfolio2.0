import {useLocation, Route, Routes } from 'react-router-dom'
import {Home} from '../src/pages/Home'
import {Presentation} from '../src/component/Presentation'

function App() {

  const location = useLocation()

  return (
    <div>
      
      <Routes location={location} keys={location.pathname}>    
            <Route path='/' element={<Home/>}/>
            <Route path='/presentation' element={<Presentation/>}/>
        </Routes>
    
      
    </div>
  )
}

export default App
