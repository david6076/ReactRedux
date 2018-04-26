// State arg is not application state, only the state
// this reducer is responsible for
export function (state = null, action) {
    switch(action.state) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}

