import React from 'react';

export default class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product._id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state.quantity);
		if (this.props.product.available_quantity < qty) {
			cart[id] = this.props.product.available_quantity; 
		} else {
			cart[id] = qty
		}
		localStorage.setItem('cart', JSON.stringify(cart));
    }
    updateState(newCurrency) {
        this.setState({
            quantity: newCurrency.value
        });
    }

	render(){
        const { product } = this.props;
        let src = product.name.trim();
		return (
		    // <div className="card" style={{ marginBottom: "10px"}}>
			//   <div className="card-body">
			//     <h4 className="card-title">{product.name}</h4>
			//     <p className="card-text">{product.description}</p>
			//     <h5 className="card-text"><small>price: </small>${product.price}</h5>
			//     <span className="card-text"><small>Available Quantity: </small>{product.available_quantity}</span>
			    
			//     { product.available_quantity > 0 ?
			//     	<div>
			//     		<button className="btn btn-sm btn-warning float-right" onClick={this.addToCart}>Add to cart</button>
			//     		<input type="number" value={this.state.quantity} name="quantity" onChange={this.handleInputChange} className="float-right" style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
			//     	</div> : 
			//     	<p className="text-danger"> product is out of stock </p>
			//  	}

			//   </div>
            // </div>
            
            <div className="apple">
                
            <img     src={require(`../../../api/uploads/${src}.jpg`)}    alt="apple" title="apple" />
            <h3>{product.name}</h3>
            <h5> {product.price}/ kg</h5>
            {/* <ReactSelect
                value={this.state.quantity}
                onChange={this.updateState}>
            </ReactSelect> */}
            <select>
                <option disabled>KG</option> <option>0.5</option> <option defaultValue>1</option> <option>1.5</option> <option>2</option>  <option>2.5</option>  <option>3</option>  <option>3.5</option>  <option>4</option>  <option>4.5</option> <option>5</option></select>
            <button onClick={this.addToCart}  ><i className="fas fa-cart-plus"></i> Add to chart</button>
            </div>
		)
	}
}
