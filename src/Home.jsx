


function Home() {
  const signature = {
    "right": "-18%",
    "bottom": "18%",
  }

  return (
    <div id="Home" className="px-40">
      <div className="relative inline-block">
        <h1 className="font-script text-16xl inline-block" >palou</h1>
        <p className="font-script text-4xl absolute inline-block" style={signature}>
          <a href="https://mirror.xyz/palou.eth" class="hover:underline hover:text-primary">hitchhiking across the internet</a>
        </p>
      </div>
      <p className="w-6/12 italic font-extralight p-2 rounded-md shadow-inner" style={{'min-width': '480px'}}>
        Welcome to my corner of the internet! This is where all the artifcats and creations from my journey will live.
      </p>
      <p className="upcoming">
        Upcoming: love letters
      </p>
    </div>
  )
}

export default Home
