import React from 'react'
import { BsArrowLeftShort, BsBraces, BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Image from 'next/image';
import BG from '../../assets/img.png'
import BQ from '../../assets/Ellipse.png'
import { BsPencilFill } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Example from './dropDown';
import { RiUserFollowFill } from 'react-icons/ri';

const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1  mt-2 top-0 flex items-center`,
    primary: `text-[#212427] outline-none font-bold`,
    secondary: `text-[#212427] justify-center  flex text-[10px]`,
    backButton: `text-3xl cursor-pointer flex  px-[30px] absolute text-white justify-start justify-between w-full rounded-full`,
    coverPhotoContainer: `flex items-center justify-center w-full h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 px-3`, 
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `text-center items-center justify-center -pt-[8]  px-3`,
    nav: `flex mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
    about:`font-hairline`,
    follows: `text-[#9597A1] text-[12px]`
  }

const image = 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/site/18907/products/cIkAZXNyRZimRw4uqXVX_gDvYTtwQsC33KZqCtbpB_image.jpg'

const ProfileHeader = () => {
    const router = useRouter()
  return (
    <div className={style.wrapper}>
      <div className='relative h-full w-full jusitfy-center items-center'>
       <div className='relative pb-2 h-full justify-center items-center'>
         <div className='flex flex-col'>
           <div className='relative flex flex-col '>
             <div className='flex flex-col items-center'>
               <Image src={BG} width={1500} alt='bg' height={450} className='w-full h-[15vh] relative shadow-lg object-cover' />
               <div  className={style.backButton}>
          <BsArrowLeftShort onClick={() => router.push('/')} />
          <BsThreeDotsVertical/>
          </div>
               <div className='-mt-10 w-28 h-28 rounded-full object-cover'>
               <Image
               className='rounded-full '
               src={BQ} alt='pp' height={70} width={70}
               />
               </div>
                 <div className={style.details}>
       
       <div className={style.primary}> Suya Sailor </div>
       <div>
         <div className= {style.secondary} >Music Lover, Student of Pharmacy, University of Ibadan.</div> 
       </div>
       <div className={style.follows}>3.8k <span className='text-gray-500'>following</span> 10.6k <span className='text-gray-500'>followers</span></div>
       <div className=' w-full items-center justify-center text-center flex '>
         <div className='bg-[#0EAD69] rounded-[32px] h-[28px] pt-[6px] text-[12px] items-center justify-center w-[91px]'>Follow</div>
       </div>
               </div>
                     
             </div>
           </div>
         </div>
        

      </div>
      </div>
      </div>     
        
  )
}

export default ProfileHeader