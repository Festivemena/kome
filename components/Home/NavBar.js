import NavBarOption from "./NavBarOption";
import { useState } from 'react'
import { RiHome7Line, RiHome7Fill, RiLogoutCircleFill, RiLogoutCircleLine,RiDownloadCloudLine, RiDownloadCloudFill, RiAdvertisementFill, RiAdvertisementLine, RiDownloadCloud2Fill, RiDownloadCloud2Line, RiCommunityFill, RiCommunityLine } from 'react-icons/ri'
import { BiHash, BiHelpCircle, BiWorld } from 'react-icons/bi'
import { MdOutlineHelpOutl, MdOutlineHelp} from 'react-icons/md'
import {GrGroup} from 'react-icons/gr'
import { FiBell, FiGlobe, FiMoreHorizontal, FiSettings } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import {IoIosPeople} from 'react-icons/io'
import { BsChat, BsChatDots, BsChatDotsFill, BsGlobe, BsHash } from "react-icons/bs";
import { CgGlobe } from "react-icons/cg";



const style = {
    navContainer: `flex plrb-2 justify-between`,
  }

  function NavBar(initialSelectedIcon='World') {
    const[selected, setSelected]=useState(initialSelectedIcon)
    return (
  <div className={style.navContainer}>
     <NavBarOption
          Icon={selected === 'World' ? BiWorld : FiGlobe}
          // text='World'
          isActive={Boolean(selected === 'World')}
          setSelected={setSelected}
          redirect={'/'}
        />
      <NavBarOption
          Icon={selected === 'Happenings' ? BsHash : BiHash}
          // text='Happenings'
          isActive={Boolean(selected === 'Happenings')}
          setSelected={setSelected}
          // redirect={'/happening'}
        />
     <NavBarOption
          Icon={selected === 'Communities' ? GrGroup : GrGroup}
          // text='Communities'
          isActive={Boolean(selected === 'Communities')}
          setSelected={setSelected}
          // redirect={'/communities'}
        />
      <NavBarOption
          Icon={selected === 'Chat' ? BsChatDotsFill : BsChat}
          // text='Chat'
          isActive={Boolean(selected === 'Chat')}
          setSelected={setSelected}
          // redirect={'/chat'}
        />
    </div>  
     )
    }

    export default NavBar 