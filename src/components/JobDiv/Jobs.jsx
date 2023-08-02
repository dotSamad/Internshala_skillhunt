import React from 'react';
import { BiTimeFive } from 'react-icons/bi';

import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'loremipsum',
    company: 'Google Inc.'
  },
  {
    id: 2,
    image: logo6,
    title: 'SDE-1',
    time: 'Now',
    location: 'India',
    desc: 'lorem ipsum doket',
    company: 'YouTube'
  },
  {
    id: 3,
    image: logo2,
    title: 'Project Manager',
    time: 'Now',
    location: 'Australia',
    desc: 'lorem ipsum doket',
    company: 'Snapchat Inc.'
  },
  {
    id: 4,
    image: logo3,
    title: 'Data Scintest',
    time: 'Now',
    location: 'USA',
    desc: 'lorem ipsum doket',
    company: 'IBM'
  },
  {
    id: 5,
    image: logo4,
    title: 'Data Analyst',
    time: 'Now',
    location: 'Europe',
    desc: 'lorem ipsum doket',
    company: 'Microsoft'
  },
  {
    id: 6,
    image: logo5,
    title: 'Backend Developer',
    time: 'Now',
    location: 'India',
    desc: 'lorem ipsum doket',
    company: 'LinkedIn'
  }

]

const Jobs = () => {
  return (
    <div>
      <div className="jobcontainer flex gap-10 justify-center flex-wrap items-center py-5">

        {
          Data.map(({ id, image, title, time, location, desc, company }) => {
            return (

              <div key={id} className="group group/item singlejob w-[300px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                <span className='flex justify-between inems-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{time}
                  </span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>

                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">{desc}</p>

                <div className="company flex items-center gap-2">
                  <img src={image} alt="Company logo" className='w-[10%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor goup-hover:text-white'>
                  Apply Now
                </button>
              </div>
            )
          })}

      </div>
    </div>
  )
}

export default Jobs
