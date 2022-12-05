import { httpService } from './http.service.js'

export const userService = {
    login,
    signup,
    getLoggedinUser,
    logout,
}

const storageKey = 'loginTokken'
const BASE_URL = 'auth/'

function login(credentials) {
    return httpService.post(BASE_URL + 'login', credentials)
        .then(user => {
            sessionStorage.setItem(storageKey, JSON.stringify(user))
            return user
        })
}

async function logout() {
    sessionStorage.removeItem(storageKey)
    return await httpService.post(BASE_URL +'logout')
}

function signup(credentials) {
    return httpService.post(BASE_URL + 'signup', credentials)
}

function getLoggedinUser() {
    const user = sessionStorage.getItem(storageKey)
    return JSON.parse(user)
}