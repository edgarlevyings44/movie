import BackgroundImage from '../assets/pexels-pixabay-235985.jpg'
function HomeHero() {
    
  return (
    <>
        <div className="hero min-h-screen" style={{backgroundImage: `url(${BackgroundImage})`}}>
          <h1 className="text-yellow-400 ">Homepage</h1>
        </div>
    </>
  )
}

export default HomeHero
