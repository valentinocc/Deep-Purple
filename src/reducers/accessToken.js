const accessTokenReducerDefaultState = "";

export default (state = accessTokenReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return action.token;
        default:
            return state;
    }
};