import React, { useState, useEffect } from "react";
import Cards from '../components/cards'
import MoreInfo from '../components/moreInfo'

const home = () => {
    const [items, setItems] = useState([])
    const [limit, setLimit] = useState(8)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
            setItems(data)
        })
    }, [limit])

    // functions

    function plus() {
      if(limit < 20){
        setLimit(limit + 1)
      }
      else{
        console.log("max");
      }
    }
    function minus() {
      if(limit > 1){
        setLimit(limit - 1)
      }else console.log("min");
    }



    // functions end..


  return (
    <div>
      <div className="pagination">
          <button className="prev" onClick={plus}>+</button>
          <h1>{limit}</h1>
          <button className="next" onClick={minus}>-</button>
        </div>
        <div className="cards-container">
        {items.length === 0 ? (
          <div className="loading">Loading...</div>
        ) : (
          items.map((item) => <Cards p={item} key={item.id} />)
        )}

        

        </div>
    </div>
  );
};

export default home;
