import { userService } from "../../services/user.service.js"


export function setLoggedInUser() {
    return (dispatch, getState) => {
        const user = userService.getLoggedinUser()
        dispatch({ type: 'SET_USER', user })
    }
}

export function login(credentials) {
    return (dispatch, getState) => {
        return userService.login(credentials)
            .then((user) => {
                if (user) dispatch({ type: 'SET_USER', user })
                else return user
            })
    }
}

export function logout() {
    return (dispatch, getState) => {
        userService.logout().then(() => {
            dispatch({ type: 'SET_USER', user: null })
        })
    }
}

export function signup(user) {
    return (dispatch, getState) => {
        return userService.signup(user)
            .then(user => {
                dispatch({ type: 'SET_USER', user })
                return user
            })
            .catch(err => alert('Username is already taken'))
    }
}