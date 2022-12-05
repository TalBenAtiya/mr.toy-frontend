const INITIAL_STATE = {
    toys: [],
    toy: null,
    filterBy: {},
    isLoading: false,
}



export function toyReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_TOYS':
            return {
                ...state,
                toys: action.toys
            }
        case 'SET_TOY':
            return {
                ...state,
                toy: action.toy
            }

        case 'ADD_TOY':
            return {
                ...state,
                toys: [...state.toys, action.toy]
            }

        case 'REMOVE_TOY':
            return {
                ...state,
                toys: state.toys.filter(toy => toy._id !== action.toyId)
            }

        case 'UPDATE_TOY':
            return {
                ...state,
                toys: state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            }

        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...state.filterBy, ...action.filterBy }
            }

        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }

        case 'ADD_MSG':
            return {
                ...state,
                toy: { ...state.toy, msgs:[...state.toy.msgs, action.msg]}
                }
        default:
            return state;
    }
}