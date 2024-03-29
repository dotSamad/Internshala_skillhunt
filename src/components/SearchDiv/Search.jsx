import React from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
const Search = () => {
  return (
    <div className='searchdiv grid gap-10 bg-greyIsh rounded-[10px] p-[2rem]'>
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-2 shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className='text-[25px] icon' />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className='text-[25px] icon' />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Company...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className='text-[25px] icon' />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Location...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <button className="bg-blueColor h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">Search</button>

        </div>
      </form>

      <div className="secdiv flex items-center gap-10 justify-center">
        <div className="singlesearch flex items-center gap-2 py-2">
          <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singlesearch flex items-center gap-2 py-2">
          <label htmlFor="type" className='text-[#808080] font-semibold'>Type</label>
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Full Time</option>
            <option value="">Part Time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
          </select>
        </div>

        <div className="singlesearch flex items-center gap-2 py-2">
          <label htmlFor="Leven" className='text-[#808080] font-semibold'>Sort by</label>
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Fresher</option>
            <option value="">Intermediate</option>
            <option value="">Senior</option>
            <option value="">Experienced</option>
          </select>
        </div>
        <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
      </div>
    </div>
  )
}

export default Search
