import {motion} from 'framer-motion'

import {AiOutlineDown} from 'react-icons/ai'

export const Presentation = () => {
    
  return (
    
    <motion.div className="grid lg:h-screen lg:grid-cols-2 bg-cover lg:grid-rows-2 bg-[#191919]"  id='presentation'
  
    >
        <div  className='col-start-1 row-start-1 lg:row-start-2'>
            <div className='ml-4 text-2xl font-bold text-white mt-28 lg:mt-30 md:mt-24 lg:text-4xl md:ml-32 lg:ml-40 '
                >
                Desarrollador Full Stack 
                <p className='pt-5 mr-8 text-xl font-light text-white'>
                    Autodidacta, apasionado por la 
                    informática y la programación. Especializado en el 
                    stack MERN
                </p>
                <form action='mailto:yusnebez@gmail.com'>
                <button type='submit' className='px-3 py-1 mt-5 text-xl bg-[#6A98F0] hover:scale-110  rounded-sm
                '>Hiring me</button>
                </form>
            </div>
        </div>
        <div className='col-start-1 row-start-1'>
            <div className='lg:mt-80 mt-16 md:mt-8 lg:text-4xl  font-bold text-[#6A98F0] lg:ml-40 md:ml-32 pb-2 text-2xl ml-4'
              >
                Zebensui Herrera
            </div>
        </div>
        <div className='hidden text-center lg:grid lg:row-start-5 md:col-span-2'>
            <div className='mt-24 ml-4 text-lg text-[#191919] md:text-white'
               >
                Scroll
            </div>
        </div>
        
        <div className='hidden col-start-2 row-start-6 lg:grid'>
            <button className='py-12 mb-1 ml-[0.4rem] border-l-2 border-white'></button>
            <AiOutlineDown className='mb-2 mr-2 text-white' />
        </div>
        
        
    </motion.div>
  )
}

