import Navbar from "../components/navbar"
import Footer from "../components/footer"
function MainLayout({ children }: {children: React.ReactNode}) {
    
  return (
    <>
     <Navbar>
     {children}
     <Footer />
     </Navbar>

    </>
  )
}

export default MainLayout
