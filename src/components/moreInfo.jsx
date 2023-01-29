import React from "react";

const moreInfo = ({sakura}) => {
  return (
    <div>
      <div className="more">
        <img
          className="more-img" src={sakura.image}
          width="300px"
          alt=""
        />
        <div className="more-title">
          <div className="title">
            {sakura.title}
          </div>
          <br /> 
          <div className="description">
            {sakura.description}
          </div>
          <br />
          <div className="category">
            <span>Category: </span>
            {sakura.category}
          </div>
          <br />
          <div className="price">
            <span>price: $</span>
            {sakura.price}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default moreInfo;
