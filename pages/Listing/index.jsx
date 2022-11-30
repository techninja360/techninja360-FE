import React, { useRef, useState } from 'react'
import LocationBreadcrum from '../../components/merchantDetails/LocationBreadcrum'
import Navbar from '../../components/Navbar'
import { useListingContext } from '../../context/listing_context'
import { services } from '../../data/merchantServices'
import Footer from '../../components/Footer'
import StarFill from '../../components/svg/merchantDetails/StarFill'
import StarEmpty from '../../components/svg/merchantDetails/StarEmpty'
import RadioInputListing from '../../components/listing/RadioInputListing'
import SelectInput from '../../components/merchantSignUp/SelectInput'
import CheckboxInput from '../../components/listing/CheckboxInputListing'
import SortBy from '../../components/svg/listing/SortBy'
import SortByDistance from '../../components/svg/listing/SortByDistance'
import SortByRating from '../../components/svg/listing/SortByRating'
import SortByReview from '../../components/svg/listing/SortByReview'
import Heart from '../../components/svg/merchantDetails/Heart'
import XWhite from '../../components/svg/XWhite'
import XWhiteSmall from '../../components/svg/XWhiteSmall'
import SelectInputListing from '../../components/listing/SelectInputListing'
import { listingItems } from '../../data/listingData'


const FilterTitle = ({title}) => {
    return (
        <div className='flex border-b border-[#E6E6E6] items-center justify-between cursor-pointer'>
            <div className='w-full h-9 flex flex-col justify-between'>
                <h1 className='text-lg font-medium w-full'>{title}</h1>
                <div className='w-10 h-[2px] bg-blue-500'></div>
            </div>
        </div>
    )
}


const Listing = () => {
    const {filters, setFilters} = useListingContext()

    const [subMenu, setSubMenu] = useState(0)
   const [flatMax, setFlatMax] = useState('')
   const [hourlyMax, setHourlyMax] = useState('')

   const [sortedBy, setSortedBy] = useState('')

   const clearFilters = () => {
    setFilters({filterAvailability : 'all',
    filterReviews : '',
    filterSupport : '',
    filterPricing : {
        flat:false,
        flatMax:'',
        hourly:false,
        hourlyMax:'',
        custom:false
    },
    filterPlan : '',
    filterUsage : '',
    filterYearsInBusiness : '',
    filterEmployeeStrength : 'all',
    filterPayment : '',})
   }


    const handleSorted = (e)=> {
        setSortedBy(e.target.id)
    }

    const handleCheck = (id,vals)=>{
        setFilters(prevState => ({...prevState, [id]: vals}))
    }

    const handleRaio = (e)=>{
        setFilters(prevState => ({...prevState, [e.target.name]:e.target.value}))
    }

    const handleSelect = (e)=> {
        setFilters(prevState => ({...prevState, [e.target.id]:e.target.value}))
    }

    const handleReviews = (star) => {
        setFilters(prevState => ({...prevState, filterReviews:star}))
    }

    const handlePrice = (id, vals)=>{
        if(id === 'filterPricingFlat'){
            if(vals === undefined || vals === null || vals === ''){
                if(filters.filterPricing.flat === true){
                    setFilters(prevState => ({...prevState, 'filterPricing':{...prevState.filterPricing, flat:false, flatMax:'' }}))
                }
                else{
                    setFilters(prevState => ({...prevState, 'filterPricing':{...prevState.filterPricing, flat:true }}))
                }
            }
            else{
                console.log('here')
                setFilters(prevState => ({...prevState, 'filterPricing':{...prevState.filterPricing, flat:true, flatMax:vals }}))
            }
        }
        else if(id === 'filterPricingHourly'){
            if(vals === undefined || vals === null || vals === ''){
                if(filters.filterPricing.hourly === true){
                    setFilters(prevState => ({...prevState, 'filterPricing':{...prevState.filterPricing, hourly:false, hourlyMax:'' }}))
                }
                else{
                    setFilters(prevState => ({...prevState, 'filterPricing':{...prevState.filterPricing,hourly:true }}))
                }
            }
            else{
                setFilters(prevState => ({...prevState, 'filterPricing':{...prevState.filterPricing, hourly:true, hourlyMax:vals }}))
            }
        }
        else if(id === 'filterPricingCustom'){
            setFilters(prevState => ({...prevState, 'filterPricing':{...prevState.filterPricing,custom:!prevState.filterPricing.custom }}))
        }
    }

  return (
    <>
        <Navbar/>
        <div className='flex bg-[#F3FAFC] justify-center w-full'>
            <LocationBreadcrum/>
        </div>
        <div className='flex justify-center pb-20 w-full relative'>
            <div className=' max-w-[1100px] w-full'>
                
                <div className='flex justify-between bg-[#00AEEF] px-5'>
                    {
                        services.map((service,index)=>{
                            return (
                                /* onClick={()=>setSubMenu(subMenu === 0 || subMenu !== service.mainCategory ? service.mainCategory : 0)} */
                                /* onMouseOver={()=>setSubMenu(service.mainCategory)} onMouseOut={()=>setSubMenu(0)} */
                                <div className='relative w-auto py-4' key={index} onMouseOver={()=>setSubMenu(service.mainCategory)} onMouseOut={()=>setSubMenu(0)} >
                                    <h2 className='text-white cursor-pointer'>{service.mainCategory}</h2>
                                    {
                                        subMenu === service.mainCategory &&
                                        
                                        <div className={`absolute top-14 ${ index>3 ? '-right-5' : '-left-5' } z-10 flex flex-wrap gap-x-8 w-max max-w-[600px] px-8 py-7 bg-white drop-shadow-md rounded-b-md`}>
                                            {
                                                service.subCategories.map((subCategory,subCategoryIndex)=>{
                                                    return(
                                                        <>

                                                        <div key={subCategoryIndex} className='w-max max-w-[250px] '>
                                                            {subCategory.subCategoryName && <h2 className='font-medium text-[15px] mb-[18px] text-[#454444]'>{subCategory.subCategoryName}</h2>}
                                                            {
                                                                subCategory.subCategoryServices.map((subCategoryService, subCategoryServiceIndex)=>{
                                                                    return (
                                                                        <h5 key={subCategoryServiceIndex} className='font-normal text-sm text-[#6F6F6F] mb-3'>{subCategoryService}</h5>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        {/* {subCategoryIndex % 2 === 0 && <div className='w-full'></div>} */}
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex items-start'>
                    <div className='flex flex-wrap gap-y-6 w-1/4 h-fit bg-[#FAFAFA] border border-[#DEDEDE] p-5'>
                        
                        <div className='w-full'>
                            <FilterTitle title={'Availability'}/>
                            <div className='mt-3'>
                                <RadioInputListing 
                                    id={'filterAvailability'} 
                                    items={[{name:'Show All', value:'all'},{name:'Show Online', value:'online'},{name:'24/7 Support', value:'support247'},{name:'By Appointment', value:'appt'},]}
                                    width='w-full'
                                    onChange={handleRaio} 
                                    value={filters.filterAvailability}
                                    />
                            </div>
                        </div>
                        
                        <div className='w-full'>
                            <FilterTitle title={'Customer Reviews'}/>
                            <div className='flex items-center justify-between gap-x-2 mt-3'>
                                <div className='flex items-center gap-x-2 '>
                                    <div id='filterReviews' className='flex gap-x-1'>
                                        <div onClick={()=>handleReviews(1)}>
                                            {filters.filterReviews > 0 ? <StarFill/> : <StarEmpty/>}
                                        </div>
                                        <div onClick={()=>handleReviews(2)}>
                                            {filters.filterReviews > 1 ? <StarFill/> : <StarEmpty/>}
                                        </div>
                                        <div onClick={()=>handleReviews(3)}>
                                            {filters.filterReviews > 2 ? <StarFill/> : <StarEmpty/>}
                                        </div>
                                        <div onClick={()=>handleReviews(4)}>
                                            {filters.filterReviews > 3 ? <StarFill/> : <StarEmpty/>}
                                        </div>
                                        <div onClick={()=>handleReviews(5)}>
                                            {filters.filterReviews > 4 ? <StarFill/> : <StarEmpty/>}
                                        </div>
                                    </div>
                                    <p className='font-normal text-sm text-[#605F5F]'>& Up</p>
                                </div>
                                <div className='relative h-5 w-5 bg-red-500 rounded-full ml-5 flex justify-center items-center text-white cursor-pointer' onClick={()=>handleReviews('')}><XWhiteSmall/></div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <FilterTitle title={'Support type'}/>
                            <div className=' mt-3'>
                            <CheckboxInput
                                    id={'filterSupport'} 
                                    items={[{name:'Remote Support ', value:'remote'},{name:'Local Instore Support', value:'instore'},{name:'House Call', value:'housecall'},{name:'Pickup & Drop', value:'pickup'},]}
                                    width='w-full'
                                    onChange={handleCheck}
                                    value = {filters.filterSupport}
                                    />
                            </div>
                        </div>

                        <div className='w-full'>
                            <FilterTitle title={'Pricing'}/>
                            <div className=' mt-3'>
                            
                            <div className={`mt-0 flex flex-wrap gap-y-1 w-full gap-x-12`}>
                                <div className='flex gap-x-3 w-full'>
                                    <div className='flex  gap-x-3 w-1/2'  onChange={e=>handlePrice('filterPricingFlat')}>
                                        <input type="checkbox" id={'filterPricingFlat'} name={'filterPricing'} checked={filters.filterPricing.flat}/>
                                        <label htmlFor={'filterPricingFlat'} className='font-normal text-sm text-[#605F5F]'>Flat Fee</label>
                                    </div>
                                    
                                    <div className='flex  gap-x-3 w-1/2'>
                                        <input onChange={(e)=>setFlatMax(e.target.value)} value={flatMax} className={`placeholder-[#B0B0B0] py-px px-5 h-fit mt-0 w-full font-normal text-[10px] bg-[#fff] border border-[#DBDBDB] rounded-sm`} placeholder={'Max'} type="text" id={'filterMaxFlat'}/>
                                        <button className='font-normal text-[10px] bg-[#0079E9] text-white px-2 py-px rounded-sm' onClick={()=>handlePrice('filterPricingFlat',flatMax)}>Go</button>
                                    </div>
                                </div>
                                <div className='flex gap-x-3 w-full'>
                                    <div className='flex  gap-x-3 w-1/2' onChange={e=>handlePrice('filterPricingHourly')}>
                                        <input type="checkbox" id={'filterPricingHourly'} name={'filterPricing'} checked={filters.filterPricing.hourly}/>
                                        <label htmlFor={'filterPricingHourly'} className='font-normal text-sm text-[#605F5F]'>Hourly Fee</label>
                                    </div>
                                    <div className='flex  gap-x-3 w-1/2'>
                                        <input onChange={(e)=>setHourlyMax(e.target.value)} value={hourlyMax} className={`placeholder-[#B0B0B0] py-px px-5 h-fit mt-0 w-full font-normal text-[10px] bg-[#fff] border border-[#DBDBDB] rounded-sm`} placeholder={'Max'} type="text" id={'filterMaxHourly'}/>
                                        <button className='font-normal text-[10px] bg-[#0079E9] text-white px-2 py-px rounded-sm' onClick={()=>handlePrice('filterPricingHourly',hourlyMax)}>Go</button>
                                    </div>
                                </div>
                                <div className='flex gap-x-3 w-full' onChange={e=>handlePrice('filterPricingCustom')}>
                                    <input type="checkbox" id={'filterPricingCustom'} name={'filterPricing'} checked={filters.filterPricing.custom}/>
                                    <label htmlFor={'filterPricingCustom'} className='font-normal text-sm text-[#605F5F]'>Custom Price</label>
                                </div>
                            </div> 
                            </div>
                        </div>
                        
                        <div className='w-full'>
                            <FilterTitle title={'Plan Type'}/>
                            <div className=' mt-3'>
                            <CheckboxInput
                                    id={'filterPlan'} 
                                    items={[{name:'One Time', value:'onetime'},{name:'Monthly', value:'monthly'},{name:'Yearly unlimited', value:'yearly'},]}
                                    width='w-full'
                                    onChange={handleCheck}
                                    value = {filters.filterPlan}
                                    />
                            </div>
                        </div>
                        
                        <div className='w-full'>
                            <FilterTitle title={'Usage Type'}/>
                            <div className=' mt-3'>
                            <CheckboxInput
                                    id={'filterUsage'} 
                                    items={[{name:'Personal Use', value:'personal'},{name:'Commercial Use', value:'commercial'},]}
                                    width='w-full'
                                    onChange={handleCheck}
                                    value = {filters.filterUsage}
                                    />
                            </div>
                        </div>

                        <div className='w-full'>
                            <FilterTitle title={'Years in Business'}/>
                            <div className='flex items-center gap-x-4 mt-3'>
                                <SelectInputListing
                                        id={'filterYearsInBusiness'} 
                                        items={[{name:'1',value:1},{name:'2',value:2},{name:'3',value:3},{name:'4',value:4},{name:'5',value:5},{name:'6',value:6},{name:'7',value:7},{name:'8',value:8},{name:'9',value:9},{name:'10',value:10},{name:'11',value:11},{name:'12',value:12},{name:'13',value:13},{name:'14',value:14},{name:'15',value:15},{name:'16',value:16},{name:'17',value:17},{name:'18',value:18},{name:'19',value:19},{name:'20+',value:20},]}
                                        width='w-1/2'
                                        onChange={handleSelect} 
                                        value={filters.filterYearsInBusiness}
                                        />
                                <h4 className='font-normal text-[15px] text-[#605F5F]'>Years</h4>
                            </div>
                        </div>
                        
                        <div className='w-full'>
                            <FilterTitle title={'Employee Strength'}/>
                            <div className='mt-3'>
                                <RadioInputListing 
                                    id={'filterEmployeeStrength'} 
                                    items={[{name:'Show All', value:'all'},{name:'Solo', value:'1'},{name:'2 - 5', value:'5'},{name:'6 - 10', value:'10'},{name:'11 - 20', value:'20'},{name:'20+', value:'21'}]}
                                    width='w-full'
                                    onChange={handleRaio} 
                                    value={filters.filterEmployeeStrength}
                                    />
                            </div>
                        </div>
                        
                        <div className='w-full'>
                            <FilterTitle title={'Payment Method'}/>
                            <div className=' mt-3'>
                            <CheckboxInput
                                    id={'filterPayment'} 
                                    items={[{name:'Credit/ Debit Card ', value:'creditDebit'},{name:'PayPal', value:'paypal'},{name:'Apple Pay', value:'applepay'},{name:'Google Pay', value:'googlepay'},{name:'Cash', value:'cash'},{name:'Crypto Currency', value:'crypto'},]}
                                    width='w-full'
                                    onChange={handleCheck}
                                    value = {filters.filterPayment}
                                    />
                            </div>
                        </div>

                        <div>
                            <button className='bg-red-500 py-2 px-4 rounded-sm font-normal text-base text-white' onClick={clearFilters}>
                                Clear Filters
                            </button>
                        </div>

                    </div>
                    <div className='p-[30px] w-3/4'>
                        <div className='flex items-center gap-x-5'>
                            {/* <button className='flex items-center gap-x-2 bg-[#F6F6F6] border border-[#E7E7E7] py-2 px-4 rounded-sm font-normal text-sm text-[#454444]'>
                                <SortBy/>
                                Sort By
                            </button> */}
                            <button id='sortByDistance' className='flex items-center gap-x-2 bg-[#F6F6F6] border border-[#E7E7E7] py-2 px-4 pr-3 rounded-sm font-normal text-sm text-[#707070]' onClick={e=>handleSorted(e)}>
                                <SortByDistance/>
                                Distance
                                {sortedBy === 'sortByDistance' && <div className='relative h-5 w-5 bg-red-500 rounded-full ml-5 flex justify-center items-center text-white cursor-pointer' onClick={()=>setSortedBy('')}><XWhiteSmall/></div>}
                            </button>
                            <button id='sortByRating' className='flex items-center gap-x-2 bg-[#F6F6F6] border border-[#E7E7E7] py-2 px-4 pr-3 rounded-sm font-normal text-sm text-[#707070]' onClick={e=>handleSorted(e)}>
                                <SortByRating/>
                                Rating
                                {sortedBy === 'sortByRating' && <div className='relative h-5 w-5 bg-red-500 rounded-full ml-5 flex justify-center items-center text-white cursor-pointer' onClick={()=>setSortedBy('')}><XWhiteSmall/></div>}
                            </button>
                            <button id='sortByReview' className='flex items-center gap-x-2 bg-[#F6F6F6] border border-[#E7E7E7] py-2 px-4 pr-3 rounded-sm font-normal text-sm text-[#707070]' onClick={e=>handleSorted(e)}>
                                <SortByReview/>
                                No. of Reviews
                                {sortedBy === 'sortByReview' && <div className='relative h-5 w-5 bg-red-500 rounded-full ml-5 flex justify-center items-center text-white cursor-pointer' onClick={()=>setSortedBy('')}><XWhiteSmall/></div>}
                            </button>
                            <button id='sortByRelevence' className='flex items-center gap-x-2 bg-[#F6F6F6] border border-[#E7E7E7] py-2 px-4 pr-3 rounded-sm font-normal text-sm text-[#707070]' onClick={e=>handleSorted(e)}>
                                Relavance
                                {sortedBy === 'sortByRelevence' && <div className='relative h-5 w-5 bg-red-500 rounded-full ml-5 flex justify-center items-center text-white cursor-pointer' onClick={()=>setSortedBy('')}><XWhiteSmall/></div>}
                            </button>
                        </div>

                        <div className='flex flex-wrap gap-y-[26px] mt-7'>
                            
                            <div className='relative border border-[#E4E4E4] rounded-sm '>
                                <div className='absolute -top-4 left-3 px-2 py-1 bg-[#F9F9F9] rounded-md w-fit border border-[#E4E4E4]'>
                                    <p className='font-light text-xs w-fit'>Sponsored</p>
                                </div>
                                <div className='flex items-center gap-x-6 bg-[#F9F9F9] border-b border-b-[#E4E4E4]'>
                                    <div className='flex justify-center items-center m-3 mt-4 mr-0 w-[20%] min-w-[196px] h-[90px] bg-white border border-[#EFEFEF] rounded-sm'>
                                        <img src="./assets/images/listing/logo1.png" alt="" className='object-contain h-[95%] w-[95%] rounded-t-sm' />
                                    </div>
                                    <div className='w-[65%]'>
                                        <p className='font-normal text-sm text-[#797979]'>
                                        247PCRepair is about your computers health! We remotely provide instant top-notch solutions to computer hardware and software related problems received...
                                        </p>
                                    </div>
                                    <div className='flex justify-center items-center m-3 ml-0 w-[15%] min-w-[120px] h-[90px] '>
                                        <img src="./assets/images/listing/cert1.png" alt="" className='object-contain h-[95%] w-[95%] rounded-t-sm' />
                                    </div>
                                </div>
                                <div className='flex h-[50px] px-7 justify-between items-center'>
                                    <div className='flex'>
                                        <h4 className='font-medium text-sm text-[#404040]'>Distance&nbsp;&nbsp;:</h4>
                                        <p  className='font-normal text-sm text-[#707070]'>&nbsp;&nbsp;Remote Support</p>
                                    </div>
                                    <div className='flex'>
                                        <h4 className='font-medium text-sm text-[#404040]'>Price&nbsp;&nbsp;:</h4>
                                        <p  className='flex items-center font-normal text-sm text-[#707070]'>&nbsp;&nbsp;$21</p>
                                    </div>
                                    <div className='flex'>
                                        <h4 className='font-medium text-sm text-[#404040]'>Rating&nbsp;&nbsp;:</h4>
                                        <p  className='flex items-center font-normal text-sm text-[#707070]'>&nbsp;&nbsp;4.9&nbsp;<StarFill/>&nbsp;&nbsp;(7895)</p>
                                    </div>
                                    {/* <div className='flex'>
                                        <h4 className='font-medium text-sm text-[#404040]'><Heart/></h4>
                                        <p  className='flex items-center font-normal text-sm text-[#707070]'>&nbsp;&nbsp;Like</p>
                                    </div> */}
                                </div>
                            </div>
                            
                            <div className='relative border border-[#E4E4E4] rounded-sm '>
                                <div className='absolute -top-4 right-3 px-2 py-1 bg-[#F9F9F9] rounded-md w-fit border border-[#E4E4E4]'>
                                    <p className='font-light text-xs w-fit'>Sponsored</p>
                                </div>
                                <div className='flex items-center gap-x-6 bg-[#F9F9F9] border-b border-b-[#E4E4E4]'>
                                    <div className='flex justify-center items-center m-3 mt-4 mr-0 w-[20%] min-w-[196px] h-[90px] bg-white border border-[#EFEFEF] rounded-sm'>
                                        <img src="./assets/images/listing/logo2.png" alt="" className='object-contain h-[95%] w-[95%] rounded-t-sm' />
                                    </div>
                                    <div className='w-[65%]'>
                                        <p className='font-normal text-sm text-[#797979]'>
                                        247PCRepair is about your computers health! We remotely provide instant top-notch solutions to computer hardware and software related problems received...
                                        </p>
                                    </div>
                                    <div className='flex justify-center items-center m-3 ml-0 w-[15%] min-w-[120px] h-[90px] '>
                                        <img src="./assets/images/listing/cert2.png" alt="" className='object-contain h-[95%] w-[95%] rounded-t-sm' />
                                    </div>
                                </div>
                                <div className='flex h-[50px] px-7 justify-between items-center'>
                                    <div className='flex'>
                                        <h4 className='font-medium text-sm text-[#404040]'>Distance&nbsp;&nbsp;:</h4>
                                        <p  className='font-normal text-sm text-[#707070]'>&nbsp;&nbsp;Remote Support</p>
                                    </div>
                                    <div className='flex'>
                                        <h4 className='font-medium text-sm text-[#404040]'>Price&nbsp;&nbsp;:</h4>
                                        <p  className='flex items-center font-normal text-sm text-[#707070]'>&nbsp;&nbsp;$21</p>
                                    </div>
                                    <div className='flex'>
                                        <h4 className='font-medium text-sm text-[#404040]'>Rating&nbsp;&nbsp;:</h4>
                                        <p  className='flex items-center font-normal text-sm text-[#707070]'>&nbsp;&nbsp;4.9&nbsp;<StarFill/>&nbsp;&nbsp;(7895)</p>
                                    </div>
                                </div>
                            </div>
                            
                            {
                                listingItems.map((item,index)=> {
                                    return(
                                        <div className='border border-[#E4E4E4] rounded-sm '>
                                            <div className='flex items-center gap-x-6 bg-[#F9F9F9] border-b border-b-[#E4E4E4]'>
                                                <div className='flex justify-center items-center m-3 mr-0 w-[20%] min-w-[196px] h-[90px] bg-white border border-[#EFEFEF] rounded-sm'>
                                                    <img src={item.logo} alt="" className='object-contain h-[95%] w-[95%] rounded-t-sm' />
                                                </div>
                                                <div className='w-[65%]'>
                                                    <p className='font-normal text-sm text-[#797979]'>
                                                    {item.desc}
                                                    </p>
                                                </div>
                                                <div className='flex justify-center items-center m-3 ml-0 w-[15%] min-w-[120px] h-[90px] '>
                                                    <img src={item.certLogo} alt="" className='object-contain h-[95%] w-[95%] rounded-t-sm' />
                                                </div>
                                            </div>
                                            <div className='flex h-[50px] px-7 justify-between items-center'>
                                                <div className='flex'>
                                                    <h4 className='font-medium text-sm text-[#404040]'>Distance&nbsp;&nbsp;:</h4>
                                                    <p  className='font-normal text-sm text-[#707070]'>&nbsp;&nbsp;{item.distance}</p>
                                                </div>
                                                <div className='flex'>
                                                    <h4 className='font-medium text-sm text-[#404040]'>{item.priceType}&nbsp;&nbsp;</h4>
                                                    {item.price && <p  className='flex items-center font-normal text-sm text-[#707070]'>:&nbsp;&nbsp;${item.price}</p>}
                                                </div>
                                                <div className='flex'>
                                                    <h4 className='font-medium text-sm text-[#404040]'>Rating&nbsp;&nbsp;:</h4>
                                                    <p  className='flex items-center font-normal text-sm text-[#707070]'>&nbsp;&nbsp;{item.rating}&nbsp;<StarFill/>&nbsp;&nbsp;({item.ratingCount})</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Listing