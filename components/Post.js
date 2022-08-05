import React from 'react'
import {BsFillPatchCheckFill, BsChatDotsFill, BsCash, BsCashStack} from 'react-icons/bs'
import {FaDollarSign, FaRegComment, FaRetweet} from 'react-icons/fa'
import { AiOutlineHeart, AiTwotoneFire } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { FiShare } from 'react-icons/fi'
import { format } from 'timeago.js'
import { IoMdPlanet } from 'react-icons/io'
import Image from 'next/image'
import pp from '../assets/ellipse 49.png'
import immm from '../assets/rectangle 894.png'

const style = {
    wrapper: `flex p-3 border-b  border-[#38444d]`,
    profileImage: `rounded-full h-[30px] w-[30px] object-cover`,
    postMain: `flex-1 px-4`,
    headerDetails: `flex text-black items-center`,
    name: `font-bold pl-2 mr-1`,
    verified: `text-[0.8rem] text-[#0047CC]`,
    handleAndTimeAgo: `text-[#8899a6] ml-1 justify-right`,
    message: `text-[12px] text-black`,
    tags: `text-blue-400`,
    imgpost:`w-32 pl-8 h-32`,
    image: `rounded-3xl`,
    footer: `flex justify-between w-full items-center px-1 mr-28 pt-2 text-[#8899a6]`,
    footerIcon: `rounded-full text-lg justify p-1`,
  }

const Post = ({
    displayName,
    avatar,
    text,
    image,
    timeStamp,
}) => {
  const router = useRouter()
  return (
    <div className={style.wrapper}>
    <div>
      
      <div className={style.postMain}>
      
        <div onClick={() => router.push('/profile')}>
          <span className={style.headerDetails}>
          <Image
        src={pp}
        alt={displayName}
        className={ style.profileImage }
      />
            <span className={style.name}>{displayName}</span>
            { (
              <span className={style.verified}>
                <BsFillPatchCheckFill />
              </span>
            )}
            <span className={style.handleAndTimeAgo}>
             • {format(new Date(timeStamp).getTime())}
            </span>
          </span>
          <div>
          <div className={style.message}>{text}</div>
          {/* <div>{tags}</div> */}
          </div>
          <div className='items-center justify-center pl-12 pt-3 w-full'>
          <Image
        src={immm}
        alt={displayName}
        className={ style.imgpost }
      />
          </div>
        </div>
        <div > <div className={style.footer}>
          <div
            className={`${style.footerIcon}  hover:text-red-400`}
          >
             <div className='flex flex-row'>
            <AiOutlineHeart />
            <div className='text-[10px] pl-1'>1,250</div>
            </div>
            </div>
          <div
            className={`${style.footerIcon}  hover:text-[#1d9bf0]`}
          >
             <div className='flex flex-row'>
            <FaRegComment />
            <div className='text-[10px] pl-1'>1,250</div>
            </div>
            </div>
          <div
            className={`${style.footerIcon} hover:text-red-800`}
          >
            <div className='flex flex-row'>
            <IoMdPlanet />
            <div className='text-[10px] pl-1'>1,250</div>
            </div>
            </div>
          <div
            className={`${style.footerIcon} flex-col hover:text-green-600`}
          >
            <div className='flex text-center flex-row'>
            <BsCashStack />
            <div className='text-[10px] pl-1'>1,250</div>
            </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
    </div>
  )
}

export default Post