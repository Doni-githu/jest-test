const data = ['Doniyor', 1, 'Doniyorov', 2]


function Reversed(array) {
    const result = []
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }

    return result
}


function SecondReversed(array) {
    return array.map((_, index, array) => array[array.length - index - 1])
}

function ThriedReversed(array) {
    let tmp = [...array]
    return tmp.map(array.pop, array)
}

module.exports = {
    Reversed
}