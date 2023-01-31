const initialState = {
    isLoading: false,
    isError: false,
    arr: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST_EXPRESSIONS': {
            return{
                ...state,
                isLoading: true,
                isError: false,
            };
        }
        case 'RECEIVE_EXPRESSIONS': {
            const {
                expressions,
            } = action;
            return {
                ...state,
                isLoading: false,
                arr: expressions,
            };
        }
        case 'ERROR_RECEIVE_STUDENTS': {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }
        default: return state
    }
}