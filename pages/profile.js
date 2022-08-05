import Footer from '../components/Mobile/Home/footer'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'

const style = {
  wrapper: `flex-col justify-center h-full w-full select-none bg-[#FFFFFF] text-white`,
  content: ` flex justify-between`,
  mainContent: ` border-r border-l border-[#38444d]`,
}

const profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.mainContent}>
          <ProfileHeader />
          <ProfileTweets />
         
        </div>
      </div>
    </div>
  )
}

export default profile
