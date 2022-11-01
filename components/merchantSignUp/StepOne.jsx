import React from 'react'

const StepOne = () => {
  return (
    <div className='w-full mt-16'>
        <form action="" className='px-10'>
            
            <div className='relative border border-[#D4D4D4] '>
                <div>
                    <h1 className=' absolute px-2 bg-white -top-4 left-7 font-semibold text-xl text-blue-500'>Primary Contact Details</h1>
                </div>

                <div className='py-7 px-7'>
                    <h3 className='font-semibold text-sm'>PRIMARY CONTACT NAME <span className='text-red-500'>*</span></h3>
                    <div className='mt-2 flex w-full gap-x-4'>
                        <select placeholder='Mr' className='py-3 px-4 font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' id="nameTitle" name="title">
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                        </select>
                        <div><input className='py-3 px-4 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="text" placeholder='First Name'/></div>
                        <div><input className='py-3 px-4 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="text" placeholder='Middle Name'/></div>
                        <div><input className='py-3 px-4 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="text" placeholder='Last Name'/></div>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <div className='flex flex-wrap w-1/3'>
                            <h3 className='font-semibold text-sm'>Gender <span className='text-red-500'>*</span></h3>
                            <select className='py-3 w-full mt-2 px-4 font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' id="gender" name="title">
                                <option value="" disabled selected>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap w-1/3'>
                            <h3 className='font-semibold text-sm'>PRIMARY CONTACT EMAIL <span className='text-red-500'>*</span></h3>
                            <input className='py-3 px-4 mt-2 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="email" placeholder='Enter Email Address'/>
                            <p className='font-normal text-[10px] italic text-[#6A6A6A] mt-2'>(For us to contact you and will not be made public)</p>
                        </div>
                        <div className='flex flex-wrap w-1/3'>
                            <h3 className='font-semibold text-sm'>PRIMARY PERSON PHONE <span className='text-red-500'>*</span></h3>                            
                            <input className='py-3 px-4 w-full mt-2 font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="text" placeholder='Enter Phone Number'/>
                            <p className='font-normal text-[10px] italic text-[#6A6A6A] mt-2'>(For us to contact you and will not be made public)</p>
                        </div>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                    <div className='flex flex-wrap w-1/3'>
                            <h3 className='font-semibold text-sm'>ALTERNATE PERSON PHONE</h3>
                            <input className='py-3 px-4 mt-2 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="email" placeholder='Enter Phone Number'/>
                        </div>
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
                        <select placeholder='Mr' className='py-3 px-4 font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' id="nameTitle" name="title">
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                        </select>
                        <div><input className='py-3 px-4 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="text" placeholder='First Name'/></div>
                        <div><input className='py-3 px-4 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="text" placeholder='Middle Name'/></div>
                        <div><input className='py-3 px-4 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="text" placeholder='Last Name'/></div>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                        <div className='flex flex-wrap w-1/3'>
                            <h3 className='font-semibold text-sm'>Gender </h3>
                            <select className='py-3 w-full mt-2 px-4 font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' id="gender" name="title">
                                <option value="" disabled selected>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap w-1/3'>
                            <h3 className='font-semibold text-sm'>ALTERNATE CONTACT EMAIL </h3>
                            <input className='py-3 px-4 mt-2 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="email" placeholder='Enter Email Address'/>
                            <p className='font-normal text-[10px] italic text-[#6A6A6A] mt-2'>(For us to contact you and will not be made public)</p>
                        </div>
                        <div className='flex flex-wrap w-1/3'>
                            <h3 className='font-semibold text-sm'>ALTERNATE PERSON PHONE </h3>                            
                            <input className='py-3 px-4 w-full mt-2 font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="text" placeholder='Enter Phone Number'/>
                            <p className='font-normal text-[10px] italic text-[#6A6A6A] mt-2'>(For us to contact you and will not be made public)</p>
                        </div>
                    </div>

                    <div className='mt-7 flex w-full gap-x-4 items-start'>
                    <div className='flex flex-wrap w-1/3'>
                            <h3 className='font-semibold text-sm'>ALTERNATE PERSON PHONE</h3>
                            <input className='py-3 px-4 mt-2 w-full font-normal text-base bg-[#F9F9F9] border border-[#E9E9E9] rounded-md' type="email" placeholder='Enter Phone Number'/>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full flex justify-end mt-8'>
                <button type="submit" className='py-3 px-8 bg-blue-500 text-white font-semibold text-base rounded-sm'>Next Step</button>
            </div>
        </form>

    </div>
  )
}

export default StepOne