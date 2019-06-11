import React from 'react';
import '../../App.css'; 
function Slider() {
  return (   
    <header>
        <div className="nav">
            <div className="container">
                <h2> fruit <span>market</span></h2>
                <ul>
                    <li>Home</li>
                    <li>category</li>
                    <li>offers</li>
                    <li>cart</li>
                    <li>contact us</li>
                </ul>
            </div>
        </div>
        <div className="slider">
            <div className="text">
                <h1>from the farm to the house</h1>
                <button> shop now</button>
            </div>
        </div>
    </header>
  );
}

export default Slider  ;
