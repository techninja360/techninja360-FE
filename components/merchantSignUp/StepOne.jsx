import React, { useEffect, useState } from 'react'
import { useMerchantSignUpContext } from '../../context/merchantSignUp_context'
import SelectInput from './SelectInput'
import TextInput from './TextInput'

const StepOne = () => {

    const {step, setStep, formOneVals, setFormOneVals , formOneErrors, setFormOneErrors, formOneValidate } = useMerchantSignUpContext()
    const [initial, setInitial] = useState(true)

    const onChange = (e) =>{
        setFormOneVals({...formOneVals, [e.target.id]:e.target.value})
    }
    
    const handleFormOne = (e) => {
        e.preventDefault()
        formOneValidate()
    }

    useEffect(()=>{
        console.log(formOneErrors)
        const areTrue = Object.values(formOneErrors).every(
            value => value === false
        );
        if(areTrue){
            if(initial){
                console.log('initial loaded')
                setInitial(false)
            }
            else{
                console.log('form good');
                setStep(2)
            }

        }
        else{
            console.log('form bad');
        }
    },[formOneErrors])


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
                        <SelectInput id='primSalut' items={[{name:'Mr',value:'Mr'},{name:'Mrs',value:'Mrs'},{name:'Ms',value:'Ms'}]} placeholder='Mr' required={true} width='w-1/6' onChange={onChange} value={formOneVals.primSalut} error = {formOneErrors.primSalut} />
                        <TextInput id='primFName' placeholder='First Name' required={true} width='w-1/3' onChange={onChange} value={formOneVals.primFName} error = {formOneErrors.primFName}/>
                        <TextInput id='primMName' placeholder='Middle Name' required={true} width='w-1/3' onChange={onChange} value={formOneVals.primMName} error = {formOneErrors.primMName}/>
                        <TextInput id='primLName' placeholder='Last Name' required={true} width='w-1/3' onChange={onChange} value={formOneVals.primLName} error = {formOneErrors.primLName}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>

                        <TextInput id='primEmail' placeholder='Enter Email Address' required={true} title='PRIMARY CONTACT EMAIL' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={onChange} value={formOneVals.primEmail} error = {formOneErrors.primEmail}/>                        
                        <TextInput id='primPhone' placeholder='Enter Phone Number' required={true} title='PRIMARY PERSON PHONE' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={onChange} value={formOneVals.primPhone} error = {formOneErrors.primPhone}/>                        
                        <TextInput id='primAltPh' placeholder='Enter Phone Number' title='ALTERNATE PERSON PHONE' width='w-1/3' onChange={onChange} value={formOneVals.primAltPh} error = {formOneErrors.primAltPh}/>
                        
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
                        <SelectInput id='altSalut' items={[{name:'Mr',value:'Mr'},{name:'Mrs',value:'Mrs'},{name:'Ms',value:'Ms'}]} placeholder='Mr' width='w-1/6' onChange={onChange} value={formOneVals.altSalut} />
                        <TextInput id='altFName' placeholder='First Name' width='w-1/3' onChange={onChange} value={formOneVals.altFName}/>
                        <TextInput id='altMName' placeholder='Middle Name' width='w-1/3' onChange={onChange} value={formOneVals.altMName}/>
                        <TextInput id='altLName' placeholder='Last Name' width='w-1/3' onChange={onChange} value={formOneVals.altLName}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        
                        <TextInput id='altEmail' placeholder='Enter Email Address' title='Alternate CONTACT EMAIL' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={onChange} value={formOneVals.altEmail} error = {formOneErrors.altEmail}/>
                        <TextInput id='altPhone' placeholder='Enter Phone Number' title='Alternate PERSON PHONE' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={onChange} value={formOneVals.altPhone} error = {formOneErrors.altPhone}/>        
                        <TextInput id='altAltPh' placeholder='Enter Phone Number' title='ALTERNATE PERSON PHONE' width='w-1/3' onChange={onChange} value={formOneVals.altAltPh} error = {formOneErrors.altAltPh}/>

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