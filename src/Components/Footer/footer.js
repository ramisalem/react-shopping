import React from 'react';
import '../../App.css'; 
function Footer() {
  return (   
    <div className="footer">
    <div className="container">
         <h1> fruit <span>market</span></h1>
        <div className="soial">
            <a href="/"> <i className="fab fa-facebook-square"></i></a>
               <a href="/"> <i className="fab fa-twitter-square"></i></a>
               <a href="/"> <i className="fab fa-instagram"></i></a>
               <a href="/"> <i className="fab fa-linkedin"></i></a>
               <a href="/"> <i className="fab fa-youtube-square"></i></a>
        </div>
        <p> copyright © 2019. all rights reserved. designed by <a  href="https://www.facebook.com/zakariamagdi" target="_blank">zakaria magdy </a></p>
        </div>
    </div>
  );
}

export default Footer ;
