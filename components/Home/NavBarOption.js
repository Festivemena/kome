import { useRouter } from "next/router"

const style = {
    wrapper: `w-min flex items-center rounded-[100px] p-1 cursor-pointer hover:bg-white transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-[12px] text-center items-center justify-center mr-1`,
    capsuleN: `rounded-lg `,
    capsuleA:  `rounded-xl w-12  p-1 bg-[#0EAD69]`,
    textGeneral: `font-medium`,
    textActive: `font-bold`,
  }
  function NavBarOption({text, Icon, isActive, setSelected, redirect}) {
    const router= useRouter()
    return (
      <div
        className={style.wrapper}
        onClick={() => {
         setSelected(text)
         if (redirect) {
          router.push(redirect)
        }
      
        }}
      >
        
        <div className={style.iconContainer}>
        <div className={`${isActive ? style.textActive : style.textGeneral}`}>
          <Icon />
        </div>
       
        <div className={`${isActive ? style.textActive : style.textGeneral}`}>
          {text}
        </div>
      </div>
      </div>
    )
  }
  
  export default NavBarOption
  