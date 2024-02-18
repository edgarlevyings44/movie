import BackgroundImage from '../assets/back.jpg'
function HomeHero() {
    
  return (
    <>
        <div className="hero min-h-screen" style={{backgroundImage: `url(${BackgroundImage})`}}>
          <h1 className="text-white">Homepage</h1>
        </div>
    </>
  )
}

export default HomeHero
