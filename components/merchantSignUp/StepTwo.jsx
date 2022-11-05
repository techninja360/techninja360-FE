import React, { useEffect, useRef, useState } from 'react'
// import dynamic from "next/dynamic"
import Certifications from './Certifications'
import SelectInput from './SelectInput'
import TextInput from './TextInput'
import UploadImageInput from './UploadImageInput'
import { timeZones } from '../../data/timeZones'
import XWhite from '../svg/XWhite'
import RadioInput from './RadioInput'
import { useMerchantSignUpContext } from '../../context/merchantSignUp_context'

// const StepTwoMap = dynamic(() => import("./StepTwoMap"), { ssr:false })

const StepTwo = () => {
    const {step, setStep} = useMerchantSignUpContext()
    const handleFormTwo = (e) => {
        e.preventDefault()
        setStep(3)
    }
    
    const goPrevious = (e) => {
        e.preventDefault()
        setStep(1)
    }

    const [certifications, setCertifications] = useState([0])
    console.log(certifications)
    const addCertificate=()=>{
        setCertifications([...certifications,parseInt(certifications.pop())+1])
    }

  return (
    <div className='w-full mt-16'>
        <form className='px-10'>
            

{/************************************************************Business Details************************************************************/}
            <div className='relative border border-[#D4D4D4] '>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Business Details</h1>
                </div>

                <div className='py-7 px-7'>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <UploadImageInput id='small_logo' title='UPLOAD LOGO' placeholder='Upload Image here' warning='Logo should be smaller size not more then 40kb*' width='w-1/2'/>   
                        <UploadImageInput id='large_logo' title='UPLOAD LOGO FOR MERCHANT LANDING PAGE' placeholder='Upload Image here' warning='Logo should be bigger size more then 250kb*' width='w-1/2'/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        
                        <TextInput id='businessName' title='Business Name' placeholder='Enter Business Name' width='w-1/3' required={true} />
                        <TextInput id='webAddress' title='Website Address' placeholder='Enter Website Addess' width='w-1/3' required={true} />
                        
                        <div className={`flex flex-wrap w-1/3 relative`}>
                            <h3 className='font-semibold text-sm uppercase'>Toll Free Number</h3>
                            <div className='mt-2 flex w-full gap-x-4'>
                                <div className='w-1/3'>
                                    <select placeholder='800' className='py-3 px-4 font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' id="tollFreePreFix" name="title">
                                        <option value="800">800</option>
                                        <option value="1800">1800</option>
                                        <option value="1860">1860</option>
                                    </select>
                                </div>
                                <TextInput id={'tollFreeStart'} width='1/3' placeholder='123' />
                                <TextInput id={'tollFreeEnd'} width='1/3' placeholder='5678' />
                            </div>                            
                        </div>

                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <TextInput id='workNumber' title='Work Number' placeholder='(123)-456-7890' width='w-1/3' required={true} />
                        <SelectInput id='yearsInBusiness' title='Years in business' items={[{name:'<1',value:0},{name:'1-5',value:5},{name:'5-10',value:10},{name:'10+',value:15}]} placeholder='Select Years' width='w-1/3' />
                        <SelectInput id='employeeStrength' title='Employee strength' items={[{name:'Solo',value:1},{name:'1-5',value:5},{name:'5-10',value:10},{name:'10+',value:15}]} placeholder='Solo' width='w-1/3' />
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start flex-wrap'>
                        <h3 className='font-semibold text-sm uppercase'>Description <span className='text-red-500'>*</span></h3>
                        <textarea id="Description" placeholder='Describe About Yourself' className='py-3 px-4 mt-2 w-full h-36 font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md'></textarea>
                    </div>
                
                </div>

            </div>


{/************************************************************Certificates and Accrediations************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Certificates and Accrediations</h1>
                </div>
                <div className='py-7 px-7'>
                    
                    {
                        certifications.map((cert,index)=>{
                            return <Certifications key={index} id={cert}/>
                        })
                    }
                    
                    <div className='mt-6'>
                        <div className='py-3 px-5 w-fit bg-blue-500 text-white rounded-sm' onClick={()=>addCertificate()}>Add New</div>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start flex-wrap'>
                        <SelectInput id='listingCertificate' title='Choose Which Certificate Yiu wants to add in Listing Page' items={
                            certifications.map((cert)=>{
                                return {name:  `certificate ${cert+1}`, value : `cert${cert}`}
                            })
                        }
                         placeholder='1 certificate' width='w-1/2'/>
                    </div>
                </div>
            </div>


{/************************************************************Business Location************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Business Location</h1>
                </div>
                <div className='py-7 px-7'>
                    
                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <RadioInput id='addressType' items={[{value:'remoteAdd',name:'Remote support'},{value:'inHouseAdd',name:'In House call'},{value:'pickAdd',name:'Pick up and drop'}]} required={true} title='What type of business address you have ?' width='w-3/5' />
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <TextInput id='streetName' placeholder='Enter Street Address' title='street' required={true} width='w-3/4' />
                        <TextInput id='cityName' placeholder='Enter City Name' title='City' required={true} width='w-1/4' />
                    </div>
                    
                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <SelectInput id='stateName' items={[]} placeholder='Select State' required={true} title='state' width='w-1/3'/>
                        <SelectInput id='countryName' items={[]} placeholder='Select Country' required={true} title='Country' width='w-1/3'/>
                        <TextInput id='zipCodeName' placeholder='Enter Zip Code' title='zip code' required={true} width='w-1/3' />
                    </div>
                    
                    
                    {/* <StepTwoMap/> */}
                    
                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <div className={`flex flex-wrap w-1/3 relative`}>
                            <h3 className='font-semibold text-sm uppercase'>Service Radius<span className='text-red-500'>*</span></h3>
                            <div className='w-full flex items-center justify-between mt-2'>
                            
                                <div className='flex w-full items-center gap-x-4'>
                                    <SelectInput id='serviceRadStart' items={[{name:'01',value:1},{name:'02',value:2},{name:'03',value:3}]} placeholder='01' width={'w-1/2'} />
                                    <p>Miles</p>
                                </div>
                                <div className='flex w-full items-center gap-x-4'>

                                    <SelectInput id='serviceRadEnd' items={[{name:'10',value:10},{name:'20',value:20},{name:'25+',value:50}]} placeholder='10' width={'w-1/2'} />
                                    <p>Miles</p>
                                </div>
                            </div>
                        </div>

                        <TextInput id='zipCoverd' placeholder='Enter Covered Area' required={true} title='Zip Codes Covered' width='w-1/3'/>
                    </div>

                </div>

            </div>

{/************************************************************Business Hours************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Business Hours</h1>
                </div>
                <div className='py-7 px-7'>
                    
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <div className={`flex flex-wrap w-1/2 relative`}>
                            <h3 className='font-semibold text-sm uppercase'>Service Radius<span className='text-red-500'>*</span></h3>
                            <div className='w-full flex items-center justify-between mt-2 gap-x-4'>
                                <SelectInput id='businessHours' items={[{name:'All Days', value:'allDays'},{name:'Mon-Fri', value:'MonFri'},{name:'Sat-Sun', value:'SatSun'},]} placeholder='All Days' required={true} width='w-1/2' />
                                <TextInput id='startBusinessHours' placeholder='01' required={true} width='w-1/4' />-
                                <TextInput id='endBusinessHours' placeholder='12' required={true} width='w-1/4' />
                            </div>
                        </div>

                        <SelectInput id='timezone' items={timeZones} placeholder='Pick Timezone' required={true} title='Time Zone' width='w-1/2'/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <div className={`flex flex-wrap w-1/2 relative`}>
                            <div className='w-full flex items-center justify-between gap-x-4'>
                                <SelectInput id='businessHours2' items={[{name:'All Days', value:'allDays'},{name:'Mon-Fri', value:'MonFri'},{name:'Sat-Sun', value:'SatSun'},]} placeholder='All Days' width='w-1/2' />
                                <TextInput id='startBusinessHours2' placeholder='01' required={true} width='w-1/4' />-
                                <TextInput id='endBusinessHour2' placeholder='12' required={true} width='w-1/4' />
                            </div>
                        </div>

                        <div className={`flex flex-wrap w-1/2 relative items-center gap-x-16`}>
                            <div className='p-3 bg-red-500 rounded-sm cursor-pointer'><XWhite/></div>
                            <div>
                                <input type="checkbox" id="service247" name="service247" value="Bike"/><label htmlFor="service247" className='font-semibold text-sm ml-3'> 24 X 7 Hours Service</label>
                            </div>
                        </div>
                    </div>

                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <div className='text-white px-5 py-3 bg-blue-500 font-semibold text-base rounded-sm cursor-pointer'>Add New</div>
                    </div>

                </div>
            </div>


{/************************************************************Other information************************************************************/}
            <div className='relative border border-[#D4D4D4] mt-12'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Other information</h1>
                </div>

                <div className='py-7 px-7'>
                
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='remoteSupport' title='Remote Support' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                        <RadioInput id='inStoreService' title='In Store Service' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                        <RadioInput id='houseCall' title='House Call' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                    </div>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='pickUpDrop' title='Pick Up & Drop' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                        <RadioInput id='residentialService' title='Residential Service' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                        <RadioInput id='businessService' title='Business Service' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                    </div>

                    <h1 className='font-semibold text-2xl mt-14'>Payment Method</h1>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='creditDebitCardPayment' title='Credit/ Debit Card' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                        <RadioInput id='paypalPayment' title='Paypal' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                        <RadioInput id='applePayPayment' title='Apple Pay' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                    </div>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='googlePayPayment' title='Google Pay' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                        <RadioInput id='cashPayment' title='Cash' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                        <RadioInput id='cryptoCurrencyPayment' title='Crypto Currency' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                    </div>

                    <h1 className='font-semibold text-2xl mt-14'>Plan Type</h1>
                    <div className='mt-7 flex w-full gap-x-10 items-start'>
                        <RadioInput id='oneTimePlan' title='One Time' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                        <RadioInput id='monthlyPlan' title='Monthly' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                        <RadioInput id='yearlyPlan' title='Yearly' items={[{value:'yes',name:'Yes'},{value:'no',name:'No'}]}  width='w-1/3' />
                    </div>
                
                </div>
            </div>

            <div className='w-full flex justify-end mt-8 gap-x-6'>
                <button onClick={(e)=>goPrevious(e)} className='py-3 px-8 bg-red-500 text-white font-semibold text-base rounded-sm'>Previous Step</button>
                <button onClick={(e)=>handleFormTwo(e)} className='py-3 px-8 bg-blue-500 text-white font-semibold text-base rounded-sm'>Next Step</button>
            </div>
        </form>
    </div>
  )
}

export default StepTwo