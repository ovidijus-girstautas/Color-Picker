import React from 'react';
import { connect } from "react-redux";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import img from '../images/food.jpg';




class Checkout extends React.Component {

    render() {
        
        const orders = this.props.orders.map((order, i)=>{
            return <li key={i}>{order.title} {order.price} € <span onClick={() => this.props.removeItem(i)}>x</span></li>;
        });

        const total = this.props.orders.reduce((total, order) => {
            return total + order.price
        }, 0);

        return (
            <div className="check-out">
                <h1>Your Orders</h1>

                <CSSTransitionGroup
                    transitionName="list-anim"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>

                    {this.props.orders.length <= 0 ? <img src={img} alt="food"/> : orders}
                </CSSTransitionGroup>

                {this.props.orders.length <= 0 ? null : 
                
                    <div className="clear-order" onClick={() => this.props.clearState()}>
                        <h5>Cancel Order</h5>
                    </div>
                }

                {this.props.orders.length <= 0 ? null :

                    <div className="total">
                        <h5>{total.toFixed(2)} €</h5>
                    </div>
                }
                <div className="clearfix"></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem(i) {
            dispatch({ type: 'REMOVE_ITEM', payload: i })
        },

        clearState() {
            dispatch({ type: 'CLEAR_ORDER'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout); 
