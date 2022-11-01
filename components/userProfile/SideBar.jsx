import React from 'react'
import { tabs } from '../../data/userProfileTabs'
import SingleTab from './SingleTab'

const SideBar = () => {
  return (
    <div className='flex h-fit bg-[#F6F6F6] w-full border border-[#DFDFDF] rounded-sm flex-wrap'>
        {
            tabs.map((tab)=>{
                return <SingleTab key={tab.name} name={tab.name} primSvg={tab.primSvg} hoverSvg={tab.hoverSvg}/>
            })
        }
    </div>
  )
}

export default SideBar