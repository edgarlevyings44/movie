import Navbar from "../components/navbar"
import BackgroundImage from "../components/backgroundImage"
function MainLayout({ children }: {children: React.ReactNode}) {
    
  return (
    <>
      <BackgroundImage>
        <Navbar />
        {children}
      </BackgroundImage>    
    </>
  )
}

export default MainLayout
