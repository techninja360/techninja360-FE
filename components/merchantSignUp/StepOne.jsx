import React, { useState } from 'react'
import { useMerchantSignUpContext } from '../../context/merchantSignUp_context'
import SelectInput from './SelectInput'
import TextInput from './TextInput'

const StepOne = () => {

    const {step, setStep, primSalut, setPrimSalut,primFName, setPrimFName,primMName, setPrimMName,primLName, setPrimLName,primEmail, setPrimEmail,primPhone, setPrimPhone,primAltPh, setPrimAltPh,altSalut, setAltSalut,altFName, setAltFName,altMName, setAltMName,altLName, setAltLName,altEmail, setAltEmail,altPhone, setAltPhone,altAltPh, setAltAltPh} = useMerchantSignUpContext()
    const [error, setError] = useState({
        primFName : false, 
        primMName : false, 
        primLName : false, 
        primEmail : false, 
        primPhone : false, 
        primAltPh : false,

        altFName : false, 
        altMName : false, 
        altLName : false, 
        altEmail : false, 
        altPhone : false, 
        altAltPh : false,
    })
    
    const handleFormOne = (e) => {
        
        e.preventDefault()
        if(validateForm()){
            setStep(2)
        }
    }

    const validateForm = () => {
        if(primFName === '' || primFName === null || primFName === undefined){
            setError({...error, primFName:'Field is empty'})
            return false
        }
        if(primMName === '' || primMName === null || primMName === undefined){
            setError({...error, primMName:'Field is empty'})
            return false
        }
        if(primLName === '' || primLName === null || primLName === undefined){
            setError({...error, primLName:'Field is empty'})
            return false
        }
        if(primEmail === '' || primEmail === null || primEmail === undefined || !primEmail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            setError({...error, primEmail:'email is empty or invalid'})
            return false
        }
        if(primPhone === '' || primPhone === null || primPhone === undefined || isNaN(primPhone) || primPhone.length !== 10 ){
            setError({...error, primPhone:'Phone number invalid'})
            return false
        }
        if(primAltPh !== '' || primAltPh !== null || primAltPh !== undefined){
            if(isNaN(primPhone) || primPhone.length !== 10 ){
                setError({...error, primAltPh:'Phone number invalid'})
                return false
            }
        }
        
        if(altAltPh !== '' || altAltPh !== null || altAltPh !== undefined){
            if(isNaN(altPhone) || altPhone.length !== 10 ){
                setError({...error, altAltPh:'Phone number invalid'})
                return false
            }
        }
        if(altPhone !== '' || altPhone !== null || altPhone !== undefined){
            if(isNaN(altPhone) || altPhone.length !== 10 ){
                setError({...error, altPhone:'Phone number invalid'})
                return false
            }
        }
        if(altEmail !== '' || altEmail !== null || altEmail !== undefined){
            if(!altEmail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                setError({...error, altEmail:'email invalid'})
                return false
            }
        }

        console.log(error);
        console.log('in final validate')
        return true

    }
  return (
    <div className='w-full mt-16'>
        <form method='POST' className='px-10'>
            
            <div className='relative border border-[#D4D4D4] '>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Primary Contact Details</h1>
                </div>

                <div className='py-7 px-7'>
                    <h3 className='font-semibold text-sm'>PRIMARY CONTACT NAME <span className='text-red-500'>*</span></h3>
                    <div className='mt-2 flex w-full gap-x-4'>
                        <SelectInput id='primSalut' items={[{name:'Mr',value:'Mr'}]} placeholder='Mr' required={true} width='w-1/6' />
                        <TextInput id='primFName' placeholder='First Name' required={true} width='w-1/3' onChange={setPrimFName} value={primFName} error = {error.primFName}/>
                        <TextInput id='primMName' placeholder='Middle Name' required={true} width='w-1/3' onChange={setPrimMName} value={primMName} error = {error.primMName}/>
                        <TextInput id='primLName' placeholder='Last Name' required={true} width='w-1/3' onChange={setPrimLName} value={primLName} error = {error.primLName}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>

                        <TextInput id='primEmail' placeholder='Enter Email Address' required={true} title='PRIMARY CONTACT EMAIL' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={setPrimEmail} value={primEmail} error = {error.primEmail}/>                        
                        <TextInput id='primPhone' placeholder='Enter Phone Number' required={true} title='PRIMARY PERSON PHONE' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={setPrimPhone} value={primPhone} error = {error.primPhone}/>                        
                        <TextInput id='primAltPh' placeholder='Enter Phone Number' title='ALTERNATE PERSON PHONE' width='w-1/3' onChange={setPrimAltPh} value={primAltPh} error = {error.primAltPh}/>
                        
                    </div>

                </div>

            </div>

            <div className='relative border border-[#D4D4D4] mt-14'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Alternate Contact Details</h1>
                </div>

                <div className='py-7 px-7'>
                    <h3 className='font-semibold text-sm'>ALTERNATE CONTACT NAME </h3>
                    <div className='mt-2 flex w-full gap-x-4'>
                        <SelectInput id='altSalut' items={[{name:'Mr',value:'Mr'}]} placeholder='Mr' width='w-1/6' />
                        <TextInput id='altFName' placeholder='First Name' width='w-1/3' onChange={setAltFName} value={altFName}/>
                        <TextInput id='altMName' placeholder='Middle Name' width='w-1/3' onChange={setAltMName} value={altMName}/>
                        <TextInput id='altLName' placeholder='Last Name' width='w-1/3' onChange={setAltLName} value={altLName}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        
                        <TextInput id='altEmail' placeholder='Enter Email Address' required={true} title='Alternate CONTACT EMAIL' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={setAltEmail} value={altEmail} error = {error.altEmail}/>
                        <TextInput id='altPhone' placeholder='Enter Phone Number' required={true} title='Alternate PERSON PHONE' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={setAltPhone} value={altPhone} error = {error.altPhone}/>        
                        <TextInput id='altAltPh' placeholder='Enter Phone Number' title='ALTERNATE PERSON PHONE' width='w-1/3' onChange={setAltAltPh} value={altAltPh} error = {error.altAltPh}/>

                    </div>

                </div>

            </div>

            <div className='w-full flex justify-end mt-8'>
                <button onClick={(e)=>handleFormOne(e)}  type='submit' className='py-3 px-8 bg-blue-500 text-white font-semibold text-base rounded-sm'>Next Step</button>
            </div>
        </form>

    </div>
  )
}

export default StepOne