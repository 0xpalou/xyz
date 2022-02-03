


function Home() {
  const signature = {
    "right": "-18%",
    "bottom": "18%",
  }

  return (
    <div id="Home" className="px-40">
      <div className="relative inline-block">
        <h1 className="font-script text-16xl inline-block" >palou</h1>
        <p className="font-script text-4xl absolute inline-block" style={signature}>just a kid tryna build something</p>
      </div>
      <p className="w-6/12 italic font-extralight p-2 rounded-md shadow-inner" style={{'min-width': '480px'}}>
        The goal of this project is to prove that all one reasonably needs to be traditionally successful is will, perspective, and an internet connection.
      </p>
      <p className="upcoming">
        Upcoming: secrets
      </p>
    </div>
  )
}

export default Home
