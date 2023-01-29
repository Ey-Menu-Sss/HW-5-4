import { React, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const cards = ({ p }) => {
    // styles
    
    const [color, setColor] = useState("blue")
    const [bg, setBg] = useState("white")


    // styles end.. 

  const [pur, setPur] = useState("Purchase");
  function purchase() {
    setPur("Purchased");
    setColor("white")
    setBg("blue")
  }

  // purachse end..
  const [length, setLenght] = useState(p.title.split(" "));
  return (
    <div>
      <div className="card">
        <div className="div-img">
          <img
            className="img"
            src={p.image}
            width="224px"
            height="320px"
            alt="product"
          />
        </div>
        <br />
        <div className="title">
          {length[0]}
          {length[1]}
          {length[2]}
        </div>
        <br />
        <div className="raitings">
          <div className="price">
            <span>$</span>
            {p.price}
          </div>
          <div className="rate">⭐{p.rating.rate}</div>
        </div>
        <br />
        <div className="btns">
          <button style={{color: color, backgroundColor: bg}} className="purchase" onClick={purchase}>
            {pur}
          </button>
          <Link to={`/about/${p.id}`}>
            <button className="more-info">More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cards;
