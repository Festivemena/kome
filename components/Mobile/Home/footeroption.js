
const style = {
    wrapper: `w-min flex justify  justify-between items-center rounded-[100px] p-4 cursor-pointer hover:bg-gray-200 transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-xl text-black mr-4`,
    textGeneral: `font-small`,
    textActive: `font-medium`,
  }
  function FooterOption({text, Icon, isActive, setSelected, redirect}) {
    return (
      <div
        className={style.wrapper}
        onClick={() => {
         setSelected(text)
        }}
      >
        <div className={style.iconContainer}>
          <Icon />
        </div>
        <div className={`${isActive ? style.textActive : style.textGeneral}`}>
          {text}
        </div>
      </div>
    )
  }
  
  export default FooterOption
  