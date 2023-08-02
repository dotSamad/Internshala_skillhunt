import React from 'react';

// import simple from '../../assets/simple.png'
import simple2 from '../../assets/simple2.png'
import simple3 from '../../assets/simple3.png'
import simple4 from '../../assets/simple4.png'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[2rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>The Value that holds us true and to account</h1>
      <div className="grid gap-[10rem] grid-cols-3" items-center>
        
        <div className="singlegrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgdiv p-[4px] rounded-[0.8rem] bg-[#fff] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple2} alt="" className='w-[70%]'/>
            </div>
            <span className='font-semibold text-text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className="text-[15px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            Creating the best of You with decency!
            </p>
        </div>

        <div className="singlegrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgdiv p-[4px] rounded-[0.8rem] bg-[#fff] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple4} alt="" className='w-[70%]'/>
            </div>
            <span className='font-semibold text-text-textColor text-[18px]'>
              Trusted
            </span>
          </div>
          <p className="text-[15px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
            Trusted by a yhousands of users.</p>
        </div>
       
        <div className="singlegrid rounded-[10px] hover:bg-[#f3f2aa] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgdiv p-[4px] rounded-[0.8rem] bg-[#fff] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple3} alt="" className='w-[70%]'/>
            </div>
            <span className='font-semibold text-text-textColor text-[18px]'>
              Goal Oriented
            </span>
          </div>
          <p className="text-[15px] text-textColor opacity-[0.7] py-[1rem] font-semibold">
           Focus on you is our priority.
           </p>
        </div>

      </div>
    </div>
  )
}

export default Value
