


function Home() {
  const signature = {
    "right": "-18%",
    "bottom": "18%",
  }

  return (
    <div id="Home" className="px-40 flex flex-wrap justify-between">
      <div className="" style={{'width': '500px'}}>
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
      <div className="flex flex-col justify-center items-stretch gap-6 relative" style={{width: '420px'}}>
        <h2 className="whitespace-nowrap text-4xl">The Dropout Journal</h2>
        <a className="border border-paper rounded-md cursor-pointer activatable relative overflow-hidden" href="https://mirror.xyz/palou.eth/uDv0QlnBPbe9omRjbGRClINrKhKwKtr5vdRACZnO2VY">
          <img className="w-full fit-scale" src="https://images.mirror-media.xyz/publication-images/FXGD-aks7ngY0Fy-Et7UM.png?height=742&width=1484" />
          <div class="px-3 py-2">
            <h3 className="text-2xl">Why I Left School</h3>
            <div className="flex gap-2 my-2">
              <img style={{ width: '24px', height: '24px', 'border-radius': '24px'}} src="https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2F-XtCikqvG7uQIJ7ttaTkT.png%3Fheight%3D190%26width%3D190&w=1920&q=75" />
              <a href="https://etherscan.io/address/0x38A8f75c83273885c26Cd1c0e82B08a89d1a38b9">palou.eth</a>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Home
