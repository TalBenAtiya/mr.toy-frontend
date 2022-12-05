// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
// import { utilService } from './util-service.js'


export const toyService = {
    query,
    save,
    remove,
    getById,
    sortBy,
}

// const STORAGE_KEY = 'toysDB'
const BASE_URL = 'toy/'

function query(filterBy) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}


function sortBy(type, toys) {
    switch (type) {
        case 'name':
            return toys.sort((toyA, toyB) => toyA.name.localeCompare(toyB.name))
        case 'price': 
            return toys.sort((toyA, toyB) => parseFloat(toyA.price) - parseFloat(toyB.price))
        case 'date':
            return toys.sort((toyA, toyB) => parseFloat(toyA.price) - parseFloat(toyB.price));
        default:
            return toys
    }
}