import React, { Component } from 'react';
import './style.css';
export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: '',
            itemList: [],
        };
    }

onInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
}

addItem = e => {
    const { detail, itemList } = this.state;
    const arr = `${detail}`.replace(/'/ig, "").split("-");
    const itemName = arr[0];
    const itemPrice = arr[1];
   // const total = null;
    itemList.push({
        name: itemName,
        price: itemPrice,
        quantity: 0,
      //  total:total,
    
    });

    this.setState({
        itemList,
        detail: ''
    });
}

deleteItem = index => {
    const { itemList } = this.state;
    itemList.splice(index, 1);
    this.setState({ itemList });
};

increasequantity = index => {
    const{ itemList } = this.state;
    itemList[index].quantity++;
    this.setState({itemList});
}

decreasequantity = index => {
    const{ itemList } = this.state;
    itemList[index].quantity--;
    this.setState({itemList});
}

render() {
        const { detail, itemList } = this.state;
           let totalPrice = 0;
            const itemMarkUp = itemList.map((item, index) => {
            if(item.quantity && item.price){
            totalPrice += (item.quantity * item.price);
            }
            return (
                <li key={`item-${index}`}>
                {item.name} :: ({item.quantity} * {item.price} )= {item.price*item.quantity}                  
                    <input type="button" value="delete item"
                    onClick={(e) => this.deleteItem(index)} />
                     <input type="button" value="+"
                    onClick={() => this.increasequantity(index)} />
                     <input type="button" value="-"
                    onClick={() => this.decreasequantity(index)} />
                                      
                    
            </li>   
            );
            });
            console.log(totalPrice);

        return (

            <div className="container">
                <h1>My Cart</h1>
                    <form>
                        <div className="col-sm-10">
                            <input name="detail" className="form-control" value={detail}
                               type="text" onChange={(e) => this.onInputChange(e)} />
                            <input type="button" value="Add Item"  
                                onClick={(e) => this.addItem(e)} disabled={!detail} />
                        </div>
                        <ul>
                            {itemMarkUp}
                        </ul>
                    </form>
                    <footer>
                    Total:{totalPrice}
                    </footer>
            </div>

    );
    }
}