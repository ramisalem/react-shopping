import React from 'react';
import '../../App.css';
import fre from '../../assets/images/fruits/fre.jpg';
import del from '../../assets/images/fruits/del.jpg';
//import healthy from '../../assets/images/fruits/';
import healthy from '../../assets/images/fruits/healthy.png';



function Features() {
    return (
        <div className="features">
            <div className="container">
                <h2 className="title">features</h2>
                <div>
                    <h3>fresh</h3>
                    <img src={fre} alt=" dsfdf" />
                </div>
                <div><h3>delicious</h3>
                    <img src={del}  alt="del" /></div>
                 <div><h3>healthy</h3>
                    <img  src={healthy} alt="healthy " /></div>
            </div>
        </div>

    );
}

export default Features;
