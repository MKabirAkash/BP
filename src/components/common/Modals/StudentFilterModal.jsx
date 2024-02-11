import React from 'react'

function StudentFilterModal() {
  return (
    <div className='modal_css bg-white shadow-5 xs:w-4/5 md:w-1/2 rounded-xl'>
      <p className='w-full border-b border-web_clr py-3 text-start'><span className='pl-3'>Filter Option</span></p>
      <section className='p-5 flex flex-wrap gap-x-4 gap-y-3 justify-between w-full text-start'>
          <div className='xs:w-full lg:w-[48%]'>
          <label htmlFor="">Course</label> <br />
          <input type="text" name="" id="" placeholder='Select Option' className='border-web_clr rounded-lg w-full'/>
          </div>

          <div className='xs:w-full lg:w-[48%]'>
          <label htmlFor="">Course</label> <br />
          <input type="text" name="" id="" placeholder='Select Option' className='border-web_clr rounded-lg w-full' />
          </div>

          <div className='xs:w-full lg:w-[48%]'>
          <label htmlFor="">Course</label> <br />
          <input type="text" name="" id="" placeholder='Select Option' className='border-web_clr rounded-lg w-full'/>
          </div>

          <div className='xs:w-full lg:w-[48%]'>
          <label htmlFor="">Course</label> <br />
          <input type="text" name="" id="" placeholder='Select Option' className='border-web_clr rounded-lg w-full' />
          </div>

          <div className='xs:w-full lg:w-[48%]'>
          <label htmlFor="">Course</label> <br />
          <input type="text" name="" id="" placeholder='Select Option' className='border-web_clr rounded-lg w-full'/>
          </div>

          <div className='xs:w-full lg:w-[48%]'>
          <label htmlFor="">Course</label> <br />
          <input type="text" name="" id="" placeholder='Select Option' className='border-web_clr rounded-lg w-full' />
          </div>

          <div className='xs:w-full lg:w-[48%]'>
          <label htmlFor="">Course</label> <br />
          <input type="text" name="" id="" placeholder='Select Option' className='border-web_clr rounded-lg w-full'/>
          </div>
      </section>
      <div className='flex flex-wrap justify-end gap-x-4 py-6 px-5'>
        <span className='bg-web_clr py-1.5 px-5 rounded-lg text-white'>Reset</span>
        <span className='bg-web_clr py-1.5 px-5 rounded-lg text-white'>Apply</span>
      </div>

    </div>
  )
}

export default StudentFilterModal