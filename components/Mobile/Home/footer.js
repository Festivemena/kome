import FooterOption from "./footeroption";
import { BsPlusCircle, BsPlusCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { useState } from 'react';
import { FaHamburger } from "react-icons/fa";
import { BiPlus, BiMenu, BiPlusCircle } from "react-icons/bi";
import Link from "next/link";
import MyModal from "./dialog";
import { useRouter } from "next/router";
import { AiFillCloseCircle } from 'react-icons/ai';


const style = {
  navContainer: `flex bg-[#FFFFFF] h-12 justify-between`,
}

function Footer(initialSelectedIcon='world') {
  const[selected, setSelected]=useState(initialSelectedIcon)
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
<div className={style.navContainer}>
<div>
      
    </div>
      <div className="justify-center items-center">
        <MyModal/>
      </div>
   
   <FooterOption 
        Icon={selected === 'notifications' ? FaBell : FaBell}
        text=''
        isActive={Boolean(selected === 'notificattions')}
        setSelected={setSelected}
        redirect={'/communities'}
      /> </div>
   )
  }

export default Footer