import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home.jsx'

function App() {
  return (
    <div id="App">
      <div className="flex flex-row flex-nowrap w-screen h-screen relative">
        <div className="overflow-y-scroll flex-1 h-full">
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Home />}/>
          </Routes>
        </div>
        <div id="Navbar" className="h-full flex flex-col justify-center">
          {
          //<div className="nav-item">
          //  Home
          //</div>
          }
          <a className="nav-item" href="https://mirror.xyz/palou.eth">
            Journal
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;
