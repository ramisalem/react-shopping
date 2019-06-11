import React from 'react';
import '../../App.css';
import axios from 'axios';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import Img from 'react-image' ; 


const BASE_URL = 'http://localhost:5000';


export function getProducts() {
    return axios.get(`${BASE_URL}/api/products`)
        .then(response => response.data);
}


export function getCartProducts(cart) {
    return axios.post(`${BASE_URL}/api/products`, { cart })
        .then(response => response.data);
}



class Product extends React.Component {
    state = {
        products: []
    }


    componentDidMount() {
        return axios.get(`${BASE_URL}`)
            .then(response => {
                const products = response.data.products ;
                console.log(typeof products );
                this.setState({ products });

                console.log(products);

            });
    }
    render() {
        return (
                <div  id="product" className="products">
                    <div className="container">

                        <div className="title"><h1>our Products</h1></div>
                        <div className="types">
                             
                            {
                                  
                                this.state.products.map((p, i) => {
                                        console.log(p.src);

                                        let src = p.name.trim();
                                    return (
                                        <div className="apple" key={i}>
                                            <img src={require(`../../../api/uploads/${src}.jpg`)}    alt="apple" title="apple" />
                                            <h3>{p.name}</h3>
                                            <h5> {p.price}/ kg</h5>
                                            <select>
                                                <option disabled>KG</option> <option>0.5</option> <option defaultValue>1</option> <option>1.5</option> <option>2</option>  <option>2.5</option>  <option>3</option>  <option>3.5</option>  <option>4</option>  <option>4.5</option> <option>5</option></select>
                                            <button ><i className="fas fa-cart-plus"></i> Add to chart</button>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="clearfix"></div>
                        <button className="more">More...</button>
                    </div>
                </div>
        );
    }
}

export default Product;
