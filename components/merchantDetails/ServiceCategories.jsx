import React, { useState } from 'react'
import SelectedCategory from '../svg/merchantDetails/SelectedCategory'

const ServiceCategories = ({icon, selectedIcon, categoryName, selected, setSelected, setSelectedCategory, index}) => {
    
    const [hover, setHover] = useState(false)
    const handleClick = () => {
      setSelected(index)
      setSelectedCategory(categoryName)
    }
  return (
    <div className={`relative flex justify-start items-center pl-5 gap-x-4 cursor-pointer ${selected===index ?'bg-blue-500 text-white border-l-4 border-l-[#00498D]' :''}  py-3 font-normal text-lg`} onClick={handleClick}>
        <div>
            {selected === index ? selectedIcon : icon}
        </div>
        <div>
            <h3>{categoryName}</h3>
        </div>
        {selected === index && <div className='absolute -right-[1px]'><SelectedCategory/></div>}
    </div>
  )
}

export default ServiceCategories