
import {Nav} from '../component/Nav'
import { Presentation } from '../component/Presentation'



export const Home = () => {
  return (
    < >
      <div className='grid lg:h-screen lg:w-screen'>
        <Nav/>
        <Presentation /> 
       </div>
    </>
  )
}