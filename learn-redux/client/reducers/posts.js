function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            // return the updated state
            const i = action.index;
            return [
                ...state.slice(0,i), // before the one we are updating
                {...state[i], likes:state[i].likes + 1},
                ...state.slice(i+1), // after the one we are updating
            ]
            break;
    
        default:
            return state;
    }    
}

export default posts;