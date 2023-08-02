import React from 'react';

import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const footer = () => {
  return (
    <div className='footer p-[3rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'>

      <div>
        <div className="logodiv">
          <h1 className="logo text-[35px] text-white pb-[1.5rem]">
            <strong>Skill</strong>Hunt
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, excepturi.
        </p>
      </div>

      <div className='grid'>
        <span className='divtitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className="grid gap-2">
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">About</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">News</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">Features</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">FAQs</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divtitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Resources
        </span>
        <div className="grid gap-2">
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">Account</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">Support</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">Feedback</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">Contact</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divtitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>
        <div className="grid gap-2">
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">Events</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">Promo</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">Req Demo</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">Careers</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divtitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact Info
        </span>
        <div>
          <small className='text-[14px] text-white'>
            skill.hunt@hotmails.com
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default footer
