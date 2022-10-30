import React from 'react'
import SingleCategory from './SingleCategory'
import {categories} from '../../data/category'

const CategorySection = () => {
  return (
    
    <div className='flex justify-center'>
        <section className='flex flex-wrap justify-center max-w-[1100px] py-16 pb-28 sm:p-10 sm:pb-16'>

            <div className='flex w-full justify-center mb-5'>
                <h1 className='font-bold text-3xl'>
                    Categories
                </h1>
            </div>
            <div>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit provident dolorem corporis molestiae id nulla cum voluptas quidem aut?</p>
            </div>
            
            <div className='flex justify-center w-full mt-10'>
                <div className='flex flex-wrap gap-9 max-w-[1101px] w-full lg:justify-center md:gap-5'>
                {
                    categories.map((category)=>{
                        return(
                            <SingleCategory key={category.name} name={category.name} primSvg={category.primSvg} secSvg={category.secSvg} hoverSvg={category.hoverSvg}/>
                        )
                    })
                }
                </div>
            </div>

            <div className='mt-10'>
                <button className='bg-blue-400 px-6 py-3 font-medium text-white rounded-sm'>View All Categories</button>
            </div>
        </section>
    </div>
  )
}

export default CategorySection