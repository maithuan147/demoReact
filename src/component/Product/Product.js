import React, {Component} from 'react';
import './Product.css';

const PRODUCTS = [
    {category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'},
    {category: 'Electronics', price: 9.99, stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: 99.99, stocked: true, name: 'iPod Touch'},
    {category: 'Sporting Goods', price: 399.99, stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: 199.99, stocked: true, name: 'Nexus 7'}
];  

class Product extends Component{
    render(){
        return(
            <FilterProduct products={PRODUCTS}></FilterProduct>
        )
    }
}

class FilterProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            isChecked: false,
            inputText: "",
            optionStocked: 'all'
        }
        this.handeChecked = this.handeChecked.bind(this);
        this.handeInput = this.handeInput.bind(this);
        this.optionStocked = this.optionStocked.bind(this);
    }
    handeChecked(isChecked){
        this.setState({
            isChecked: isChecked
        })
    }
    handeInput(inputText){
        this.setState({
            inputText: inputText
        })
    }
    optionStocked(optionStocked){
        this.setState({
            optionStocked: optionStocked
        })    }
    render(){
        return(
            <div className="Product">
                <SearchBar 
                    isChecked={this.state.isChecked}
                    inputText={this.state.inputText}
                    onHandeChecked = {this.handeChecked}
                    onHandeInput = {this.handeInput}
                    onOptionStocked = {this.optionStocked}
                />
                <ProductTable 
                    products={this.props.products} 
                    isChecked={this.state.isChecked}
                    inputText={this.state.inputText}
                    optionStocked={this.state.optionStocked}
                />
            </div>
        )
    }
}

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.handeCheckeds = this.handeCheckeds.bind(this);
        this.handeInputs = this.handeInputs.bind(this);
        this.optionStocked = this.optionStocked.bind(this);
    }
    handeCheckeds(e){
        this.props.onHandeChecked(e.target.checked)
    }
    handeInputs(e){
        this.props.onHandeInput(e.target.value)
    }
    optionStocked(e){
        this.props.onOptionStocked(e.target.value)
    }
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." value={this.props.inputText} onChange={this.handeInputs} />
          <select name="optionStocked" onChange={this.optionStocked}>
                <option value="all">All</option>
                <option value="50+">50$+</option>
                <option value="50-">50$-</option>
          </select>
          <p>
            <input type="checkbox" checked={this.props.isChecked} onChange={this.handeCheckeds} />
            Only show products in stock
          </p>
        </form>
      );
    }
  }

class ProductTable extends Component{
    render(){
        let rows = [];
        let isMessNoProduct = false;
        this.props.products.map((product,index) => {
            if (product.name.toLowerCase().indexOf(this.props.inputText) === -1) {
                return true;
            }

            if(product.price >= 50 && this.props.optionStocked === '50-'){
                return true;
            }else if(product.price < 50 && this.props.optionStocked === '50+'){
                return true;
            }

            if (product.stocked === false && this.props.isChecked) {
                return true;
            }
            // if (this.props.optionStocked !== `all`) {
            //     return true;
            // }
            return rows.push(
                <ProductRow product={product} key={index}></ProductRow>
              );
        })
        return(
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>{rows.length > 0 ? rows : isMessNoProduct = true}</tbody>
                </table>
                {isMessNoProduct ? <p style={{ color: 'red' }}>No Product</p> : ''}
            </div>
            
        )
    }
}

class ProductRow extends Component{
    render(){
        return(
        <tr className={this.props.product.stocked ? "stocked" : "instocked"}>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.price}$</td>
            <td>{this.props.product.category}</td>
            <td>{this.props.product.stocked ? "Stocked" : "InStocked"}</td>
        </tr>
        )
    }
}

export default Product;