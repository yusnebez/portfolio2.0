import {Link as Links} from 'react-scroll'
import {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {BsLinkedin , BsGithub,} from 'react-icons/bs'
 
export const Nav = () => {
  
  const [nav, setNav] = useState(false) 
  const handleClick = () => console.log(setNav(!nav))
  
  return (
    <div className='fixed z-10 text-white '>
      <ul className='text-center hidden  list-none  z-5 md:grid bg-[#151515] h-screen lg:h-[1000px] content-start w-[90px]'>
        <li className='mt-5 text-lg'>Zebensui<b className='text-[#6A98F0] text-lg'>.</b></li>
        <li className='pt-3 text-lg'>Full Stack</li>
        <li className='pt-3 pb-3 text-lg lg:mt-52 md:mt-16 hover:text-[#6A98F0]'><Links activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Sobre Mi</Links></li>
        <li className='pt-3 pb-3 text-lg  hover:text-[#6A98F0]'><Links activeClass="active"
          to="proyect"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Proyectos</Links></li>
        <li className='pt-3 pb-3 text-lg  hover:text-[#6A98F0]'><Links activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Contactar</Links></li> 
        <li className='pt-3 mt-20 ml-6 hover:text-[#6A98F0]'><a href="https://www.linkedin.com/in/zebensuiherrera/"><BsLinkedin className='text-4xl'/></a></li>
        <li className='pt-3 mt-5 ml-6 hover:text-[#6A98F0]'><a href="https://www.github.com/yusnebez/"><BsGithub className='text-4xl' /></a></li>
        <li className='mt-12 mr-1 text-xs'><a href="https://www.linkedin.com/in/zebensuiherrera/"> © Zebensui 2022</a></li>
      </ul>
      <div className='md:hidden' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
      </div> 
      <ul onClickCapture={handleClick} className={!nav ? 'hidden' : 'w-[410px] mt-3 font-bold bg-[#191919] text-xl text-center md:hidden'}>
      
     
        <li className='w-full border-zinc-300 hover:text-[#D72323]'><Links activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Education</Links></li>
        <li className='w-full hover:text-[#D72323]'><Links activeClass="active"
          to="proyect"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Proyect</Links></li>
        <li className='w-full hover:text-[#D72323]'><Links activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Contact</Links></li>
      </ul>
      </div>
    
  )
}

