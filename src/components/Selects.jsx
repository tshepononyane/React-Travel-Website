import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import durban from '../assets/durban.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import capetown from '../assets/capetown.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={BoraBora} text='Bora Bora' />
    <SelectsCard bg={durban} text='Durban' />
    <SelectsCard bg={Maldives} text='Antigua' />
    <SelectsCard bg={Maldives2} text='Cozumel' />
    <SelectsCard bg={Maldives3} text='Jamaica' />
    <SelectsCard bg={capetown} text='Cape Town' />
    
        
    </div>
  )
}

export default Selects