import Navbar from "../components/navbar"
function MainLayout({ children }: {children: React.ReactNode}) {
    
  return (
    <>
      <Navbar>
        {children} 
      </Navbar>  
    </>
  )
}

export default MainLayout
