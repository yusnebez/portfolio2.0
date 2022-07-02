import React from 'react'
import {AnimatePresence} from 'framer-motion'
import {useLocation, Route, Routes } from 'react-router-dom'
import {Home} from '../pages/Home'
import {Presentation} from './Presentation'

export const AnimationRoutes = () => {

    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} keys={location.pathname}>    
            <Route path='/' element={<Home/>}/>
            <Route path='/presentation' element={<Presentation/>}/>
        </Routes>
    </AnimatePresence>
  )
}