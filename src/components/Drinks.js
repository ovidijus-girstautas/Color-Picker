import React from 'react';
import { connect } from "react-redux";

class Drinks extends React.Component {
    render() {


        const drinks = this.props.drinks.map((drink, i) => {
            return (
                <div key={i} className="drinks">
                    <h3>{drink.title}</h3>
                    <p>{drink.description}</p>
                    <h4>{drink.price} €</h4>
                    <button onClick={() => this.props.addDrink(drink)}>Add to Cart</button>
                </div>
            )
        })

        return (
            <div className="drinks-page">
                <h1>Drinks Menu</h1>
                <div className="drinks-menu">
                    {drinks}
                </div>   
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        drinks: state.drinks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDrink(drinks) {
            dispatch({ type: 'ADD_DRINK', payload: drinks })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks); 
