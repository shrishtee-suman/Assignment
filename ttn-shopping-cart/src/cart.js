import React from 'react';
import './style.css';
import { Button } from "react-bootstrap";

class Cart extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        return(
            <ul className='my-cart'>
                <li className='item-name'><b>{this.props.product.name}</b></li>
                <li>${this.props.product.price}</li>
                <li>
                    <Button bsStyle= "danger"
                        onClick={this.props.onDecCartQtyHandler}
                        disabled={this.props.product.quantity===0}>-
                    </Button>
                </li>
                <li>No of items : {this.props.product.quantity}</li>
                <li>


                        <Button bsStyle="success"
                                onClick={this.props.onIncCartQtyHandler}
                                disabled={this.props.product.availableQty===0}>+
                        </Button>

                </li>
                <li>Total - Rs.{this.props.product.price * this.props.product.quantity }</li>
                <li>

                    <Button bsStyle="danger" onClick={this.props.onDeleteCartItemHandler}>x</Button>
                </li>
            </ul>
        )


    }
}


export default Cart;
