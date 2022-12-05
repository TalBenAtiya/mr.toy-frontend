import { toyService } from '../../services/toy.service'

export function loadToys() {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_LOADING', isLoading: true })
        const { filterBy } = getState().toyModule
        toyService.query(filterBy)
            .then(toys => {
                dispatch({ type: 'SET_TOYS', toys })
            })
            .catch(err => {
                console.log('err:', err)
            })
            .finally(() => dispatch({ type: 'SET_LOADING', isLoading: false })
            )
    }
}

export function getToy(toyId) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_LOADING', isLoading: true })
        toyService.getById(toyId)
            .then(toy => {
                dispatch({ type: 'SET_TOY', toy })
            })
            .catch(err => {
                console.log('err:', err)
            })
            .finally(() => dispatch({ type: 'SET_LOADING', isLoading: false })
            )
    }
}

export function updateToy(toy) {
    return (dispatch, getState) => {
        return toyService.save(toy)
            .then(toy => {
                dispatch({ type: 'UPDATE_TOY', toy })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

export function removeToy(toyId) {
    return (dispatch, getState) => {
        toyService.remove(toyId)
            .then(() => {
                dispatch({ type: 'REMOVE_TOY', toyId })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}

export function setToys(toys) {
    return (dispatch) => {
        dispatch({ type: 'SET_TOYS', toys })
    }
}

export function setToy(toy) {
    return (dispatch) => {
        dispatch({ type: 'SET_TOY', toy })
    }
}

export function addToyMsg(msg) {
    return (dispatch) => {
        dispatch({ type: 'ADD_MSG', msg })
}

}