const initialState = {
    nav:[
    {nav: 'Home', url: '/'},
    {nav: 'Quiz', url: '/quiz'},
    {nav: 'Log-In', url: '/log-in'},
    { nav: 'Statistics', url: '/statistics'}
    ],
    active: ''
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ACTIVE_NAV':
            return {...state, active: action.payload};

        default: return state;
    }
};


export default reducer;