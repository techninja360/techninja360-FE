import React, { useEffect, useState } from 'react'
import { backend_server } from '../../config'
import { useMerchantProfileContext } from '../../context/merchantProfile_context'
import SelectInput from './SelectInput'
import TextInput from './TextInput'

const StepOne = () => {

    const {phoneFormat, step, setStep, formOneVals, setFormOneVals , formOneErrors, setFormOneErrors, formOneValidate } = useMerchantProfileContext()
    const [initial, setInitial] = useState(true)
    const [primContactRO, setPrimContactRO] = useState(true)
    const [secContactRO, setSecContactRO] = useState(true)

    

    const onChange = (e) =>{
        if(e.target.id === 'primPhone' || e.target.id === 'primAltPh' || e.target.id === 'altPhone' || e.target.id === 'altAltPh'){
            setFormOneVals(prevState => ({...prevState, [e.target.id]: phoneFormat(e.target.value)}))
        }
        else{
            setFormOneVals({...formOneVals, [e.target.id]:e.target.value})
        }
    }
    
    const handleFormOne = (e) => {
        e.preventDefault()
        setStep(2)
        // formOneValidate()
    }

    const handlePrimContactEdit = async () => {
        if(primContactRO){
            setPrimContactRO(false)
        }
        else{
            //save edited
            console.log('here')
            let primContactDetails = {
                "title":formOneVals.primSalut,
                "name":{
                    "first_name":formOneVals.primFName,
                    "middle_name":formOneVals.primMName,
                    "last_name":formOneVals.primLName
                },
                "phone_no":{
                    "primary_ph":String(formOneVals.primPhone).replace(/\D/g,''),
                    "alternate_ph":String(formOneVals.primAltPh).replace(/\D/g,'')
                },
                "primary_email": formOneVals.primEmail
            }

            const postMerchData = async () => {
                const merchRes = await fetch(`${backend_server}/api/merchant/register/primary-contact`,{
                    method:'POST',
                    body : JSON.stringify(primContactDetails),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                    },})
                    
                    const merchResData = await merchRes.json()
                    console.log(merchResData)
                    if(merchResData.status === 'ok'){
                        setPrimContactRO(true)
                    }
            }
            let validated = formOneValidate('primContact')
            console.log('validated', validated);
            if(validated){
                postMerchData()
            }
        }

    }
    const handleSecContactEdit = () => {
        if(secContactRO){
            setSecContactRO(false)
        }
        else{
            //save edited
            let altContactDetails = {
                "title":formOneVals.altSalut,
                "name":{
                    "first_name":formOneVals.altFName,
                    "middle_name":formOneVals.altMName,
                    "last_name":formOneVals.altLName
                },
                "phone_no":{
                    "primary_ph":String(formOneVals.altPhone).replace(/\D/g,''),
                    "alternate_ph":String(formOneVals.altAltPh).replace(/\D/g,'')
                },
                "primary_email": formOneVals.altEmail
            }

            const postMerchData = async () => {
                const merchRes = await fetch(`${backend_server}/api/merchant/register/alternate-contact`,{
                    method:'POST',
                    body : JSON.stringify(altContactDetails),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + sessionStorage.getItem('merchToken'),
                    },})
                    
                    const merchResData = await merchRes.json()
                    console.log(merchResData)
                    
                    if(merchResData.status === 'ok'){
                        setSecContactRO(true)
                    }
            }
            let validated = formOneValidate('altContact')
            if(validated){
                postMerchData()
            }
        }

    }
    // useEffect(()=>{
    //     // console.log(formOneErrors)
    //     const areTrue = Object.values(formOneErrors).every(
    //         value => value === false
    //     );
    //     if(areTrue){
    //         if(initial){
    //             console.log('initial loaded')
    //             setInitial(false)
    //         }
    //         else{
    //             console.log('form good');
    //             setStep(2)
    //         }

    //     }
    //     else{
    //         console.log('form bad');
    //     }
    // },[formOneErrors])


  return (
    <div className='w-full mt-16'>
        <form method='POST' className='px-10'>
            
            <h1 className='mb-10'>Please press <span className='font-bold italic'>Edit</span> to add/update the details </h1>
            <div className='relative border border-[#D4D4D4] '>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Primary Contact Details</h1>
                </div>

                <div className='absolute -top-6 right-7 mb-6 bg-white px-2 flex justify-end gap-x-4 '>
                    <div className='py-3 px-5 w-fit bg-blue-500 text-white rounded-sm cursor-pointer' onClick={handlePrimContactEdit}>{primContactRO ? 'Edit' : 'Save'}</div>
                </div>
                <div className='py-7 px-7'>
                    <h3 className='font-semibold text-sm'>PRIMARY CONTACT NAME <span className='text-red-500'>*</span></h3>
                    <div className='mt-2 flex w-full gap-x-4'>
                        <SelectInput id='primSalut' items={[{name:'Mr',value:'Mr'},{name:'Mrs',value:'Mrs'},{name:'Ms',value:'Ms'}]} placeholder='Title' required={true} width='w-1/6' onChange={onChange} value={formOneVals.primSalut} error = {formOneErrors.primSalut} readOnly={primContactRO}/>
                        <TextInput id='primFName' placeholder='First Name' required={true} width='w-1/3' onChange={onChange} value={formOneVals.primFName} error = {formOneErrors.primFName} readOnly={primContactRO}/>
                        <TextInput id='primMName' placeholder='Middle Name' required={true} width='w-1/3' onChange={onChange} value={formOneVals.primMName} error = {formOneErrors.primMName} readOnly={primContactRO}/>
                        <TextInput id='primLName' placeholder='Last Name' required={true} width='w-1/3' onChange={onChange} value={formOneVals.primLName} error = {formOneErrors.primLName} readOnly={primContactRO}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>

                        <TextInput id='primEmail' placeholder='Enter Email Address' required={true} title='CONTACT EMAIL' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={onChange} value={formOneVals.primEmail} error = {formOneErrors.primEmail} readOnly={primContactRO}/>                        
                        <TextInput id='primPhone' placeholder='Enter Phone Number' required={true} title='PRIMARY PHONE' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={onChange} value={formOneVals.primPhone} error = {formOneErrors.primPhone} readOnly={primContactRO}/>                        
                        <TextInput id='primAltPh' placeholder='Enter Phone Number' title='ALTERNATE PHONE' width='w-1/3' onChange={onChange} value={formOneVals.primAltPh} error = {formOneErrors.primAltPh} readOnly={primContactRO}/>
                        
                    </div>

                    
                </div>


            </div>

            <div className='relative border border-[#D4D4D4] mt-14'>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Alternate Contact Details</h1>
                </div>
                <div className='absolute -top-6 right-7 mb-6 bg-white px-2 flex justify-end gap-x-4'>
                    <div className='py-3 px-5 w-fit bg-blue-500 text-white rounded-sm cursor-pointer' onClick={handleSecContactEdit}>{secContactRO ? 'Edit' : 'Save'}</div>
                </div>

                <div className='py-7 px-7'>
                    <h3 className='font-semibold text-sm'>ALTERNATE CONTACT NAME </h3>
                    <div className='mt-2 flex w-full gap-x-4'>
                        <SelectInput id='altSalut' items={[{name:'Mr',value:'Mr'},{name:'Mrs',value:'Mrs'},{name:'Ms',value:'Ms'}]} placeholder='Title' width='w-1/6' onChange={onChange} value={formOneVals.altSalut} readOnly={secContactRO}/>
                        <TextInput id='altFName' placeholder='First Name' width='w-1/3' onChange={onChange} value={formOneVals.altFName} readOnly={secContactRO}/>
                        <TextInput id='altMName' placeholder='Middle Name' width='w-1/3' onChange={onChange} value={formOneVals.altMName} readOnly={secContactRO}/>
                        <TextInput id='altLName' placeholder='Last Name' width='w-1/3' onChange={onChange} value={formOneVals.altLName} readOnly={secContactRO}/>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        
                        <TextInput id='altEmail' placeholder='Enter Email Address' title='CONTACT EMAIL' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={onChange} value={formOneVals.altEmail} error = {formOneErrors.altEmail} readOnly={secContactRO}/>
                        <TextInput id='altPhone' placeholder='Enter Phone Number' title='Alternate PHONE' warning='(For us to contact you and will not be made public)' width='w-1/3' onChange={onChange} value={formOneVals.altPhone} error = {formOneErrors.altPhone} readOnly={secContactRO}/>        
                        <TextInput id='altAltPh' placeholder='Enter Phone Number' title='ALTERNATE PHONE' width='w-1/3' onChange={onChange} value={formOneVals.altAltPh} error = {formOneErrors.altAltPh} readOnly={secContactRO}/>

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