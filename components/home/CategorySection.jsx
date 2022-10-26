import React from 'react'
import SingleCategory from './SingleCategory'
import {categories} from '../../data/category'

const CategorySection = () => {
  return (
    
    <section className='flex flex-wrap justify-center p-16 pb-28'>
        <div>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit provident dolorem corporis molestiae id nulla cum voluptas quidem aut?</p>
        </div>
        
        <div className='flex justify-center w-full mt-10'>
            <div className='flex flex-wrap gap-9 w-[1101px]'>
            {
                categories.map((category)=>{
                    return(
                        <SingleCategory key={category.name} name={category.name} primSvg={category.primSvg} secSvg={category.secSvg}/>
                    )
                })
            }
            </div>
        </div>

        <div className='mt-10'>
            <button className='bg-blue-400 px-6 py-3 font-medium text-white rounded-sm'>View All Categories</button>
        </div>
    </section>
  )
}

export default CategorySection