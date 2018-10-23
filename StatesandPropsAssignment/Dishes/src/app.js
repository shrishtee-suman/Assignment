import React, { Component } from 'react';
import Dish from "./dish";
import './style.css';

class App extends Component {

    state = {
        existingDishes: {
            A: { name: 'Noodles', price: 'Price ' + 25 , quantity:'Quantity'  + 1},
            B: { name: 'Coke', price: 'Price ' + 35 , quantity:'Quantity' + 1},
            C: { name: 'Wafers',  price: 'Price ' + 20 , quantity:'Quantity' + 1}
        },
        newdishCounter: 0

    };
    createDish = () => {
        this.state.newdishCounter += 1;
        let newDishObjectName = 'newDish' + this.state.newdishCounter;
        this.state.existingDishes[newDishObjectName] = { name: 'Chocolates', price: 'Price ' + 120 , quantity:'Quantity' + 1};
        this.setState({})
    };

    render() {


        return (

            <div className='container'>
                <h1>Menu</h1>
                <div className="App">

                    {this.state.existingDishes && Object.keys(this.state.existingDishes).map(function (detail, id) {
                        return <Dish key={id} DishObject={this.state.existingDishes[detail]} />;
                    }.bind(this))}
                </div>
                <button onClick={() => { this.createDish('newDish') }}>Add Dish</button>

            </div>
        );

    }
}

export default App;
