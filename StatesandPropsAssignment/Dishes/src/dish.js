import React, { Component } from 'react';
class Dish extends Component {


    render() {
        return (
            <div>

                <div onClick={this.displayInfo} >
                    {this.props.DishObject.name}
                </div>
            </div>
        );
    }

    displayInfo = () => {
        console.log(this.props.DishObject.name);
        console.log(this.props.DishObject.price);
        console.log(this.props.DishObject.quantity);

    };
}

export default Dish;
