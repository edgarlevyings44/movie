import BackImage from '../assets/pexels-pixabay-235985.jpg'
function BackgroundImage({ children }: {children: React.ReactNode}) {
    
  return (
    <>
        <div className="hero min-h-screen" style={{backgroundImage: `url(${BackImage})`}}>
            {children}
        </div>
    </>
  )
}

export default BackgroundImage
