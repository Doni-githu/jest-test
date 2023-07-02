function mapArray(arr){
    return arr
        .filter(c => Number.isInteger(c))
        .map(String)
}

module.exports = mapArray