import { Education } from '../component/Education'
import {Nav} from '../component/Nav'
import { Proyect } from '../component/Proyect'
import { Contact } from '../component/Contact'
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