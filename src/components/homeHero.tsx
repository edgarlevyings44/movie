import Background from "../assets/movie-background-collage_23-2149876028.jpg"

function HomeHero() {

    return (
        <>
          <div className="hero min-h-screen" style={{backgroundImage: `url(${Background})`}}>
            <h1 className="text-white">Homepage</h1>
          </div> 
        </>
    )
}

export default HomeHero