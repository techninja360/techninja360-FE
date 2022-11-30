import Link from 'next/link'
import React from 'react'

const LocationBreadcrum = () => {
  return (
    <div className='relative max-w-[1100px] w-full py-4'>
        <h3 className='text-[#696969]  text-base font-light'>
            <Link href={'/'}>Home</Link> &gt; <Link href={'/'}>USA</Link>  &gt;<Link href={'/'}>  Florida  </Link>&gt;<Link href={'/'}>  Miami </Link><span className='text-[#696969]'> &gt;<Link href={'/'}> 33133 </Link></span>
        </h3>
    </div>
  )
}

export default LocationBreadcrum