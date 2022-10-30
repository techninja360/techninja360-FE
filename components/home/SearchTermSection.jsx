import React from 'react'

const chipsData = ['Computer repair near me', 'Lorem ipsum','Mobile screen repair','Harddisk upgrade','Mobile screen repair','Printer Setup','Video Doorbell Installation','Remote computer repairing','Printer Setup','Harddisk upgrade','Lorem ipsum dolor','Slow computer fixing','Lorem ips','Computer repair near me','Lorem ipsum','Mobile screen repair','Harddisk upgrade','Lorem ipsum dolor','Printer Setup','Lorem ipsum dolor','Slow computer fixing','Lorem ips','Computer repair near me','Lorem ipsum','Mobile screen repair','Harddisk upgrade','Lorem ipsum dolor','Printer Setup']

const SearchChip = ({text})=>{
    return(
        <div className='bg-yellow-500 w-fit px-4 py-1 rounded-sm'>
            <p className='text-white font-normal text-sm'>{text}</p>
        </div>
    )
}

const SearchTermSection = () => {
  return (
    <section className='bg-[#f6f6f6] py-14'>
        <div>
            <h1 className='text-center font-bold text-3xl'>Popular Search Terms</h1>
        </div>
        <div className='px-32 flex gap-4 flex-wrap mt-5 md:px-16 sm:px-5'>
            {
                chipsData.map((chip,i)=>{
                    return(
                        <SearchChip key={i} text={chip}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default SearchTermSection