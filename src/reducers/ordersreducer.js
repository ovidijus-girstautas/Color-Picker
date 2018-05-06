

const ordersReducer = (state = [], action) => {
    switch (action.type){

        case 'ADD_PIZZA' :
        return [...state, action.payload];

        case 'ADD_DRINK' : 
        return [...state, action.payload];

        case 'REMOVE_ITEM': {
            const orders = state.filter((item, i) => {
                return i !== action.payload
            })
            return orders
        }

        case 'CLEAR_ORDER' : return [];

        default : return state;
    }
};

export default ordersReducer;