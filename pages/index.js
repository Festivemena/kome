import Mobile from '../components/Mobile/Home/Mobile'

const style = {
  wrapper: `flex justify-center  h-full w-full select-none bg-black text-white`,
  content: `max-w-[1400px] flex justify-between`, 
  mobile: `flex justify-center h-full w-full md:hidden select-none bg-white text-black` 
}

export default function Home() {
  return (
  
  <div className={style.mobile}>

      <Mobile />
      
    </div>  

  )
}
