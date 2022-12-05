export const utilService = {
    makeId,
    getRandomIntInc,
    getLabelAvgPrice,
}

function makeId(length = 4) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function getRandomIntInc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getLabelAvgPrice(label, toys) {
    const currToys = toys.filter(toy => toy.labels.includes(label))
    if (!currToys || currToys.length <= 0) return 0
    const priceArr = currToys.map(toy => +toy.price)
    const avg = getArrayAvg(priceArr)
    return avg
}

function getArrayAvg(array) {
    const sum = array.reduce((sum, a) => sum + a, 0);
    return sum / array.length
}