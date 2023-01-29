import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import logo from "../assets/react.svg";
import About from "../pages/about";
import Home from "../pages/home";
import SiglePage from '../components/siglePage'
import Purchased from "../pages/purchased";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const header = () => {
  let [h, setH] = useState("grey");
  let [a, setA] = useState("black");
  let [p, setP] = useState("black");
  const location = useLocation();
  
  if(location.pathname === "/about"){
    a = "grey"
    h = "black"
    p = "black"
  }
  if(location.pathname === "/"){
    a = "black"
    h = "grey"
    p = "black"
  }else{
    a = "grey"
    h = "black"
    p = "black"
  }
  if(location.pathname === "/purchased"){
    a = "black"
    h = "black"
    p = "grey"
  }

  // functions end

  // return...

  return (
    <div>
      <header id="header">

        {/* logo */}

        <Link to={"/"} className="links">
          <div className="logo">
            <img src={logo} width="60px" alt="" />
            尺乇卂匚ㄒ
          </div>
        </Link>

        {/* logo  */}

        {/* pages */}

        <div className="pages">
          <Link
            to={"/"}
            style={{ color: h }}
            className="links p"
            id="h"
          >
            Home
          </Link>

          <Link
            to={"/about"}
            style={{ color: a }}
            className="links p"
            id="a"
          >
            About
          </Link>

          <Link
            to={"/purchased"}
            style={{ color: p }}
            className="links p"
            id="p"
          >
            Purchased
          </Link>
        </div>

        {/* pages */}

      </header>
      {/* header end */}

       {/* routes */}

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/purchased" element={<Purchased />} />
        <Route path="/about/:id" element={<SiglePage />} />
      </Routes>

      {/* routes */}
    </div>
  );
};

export default header;
