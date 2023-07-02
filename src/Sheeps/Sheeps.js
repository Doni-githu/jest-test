function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? true : false
}
const countSheep = num => {
    let i = 0;
    let result = []

    while (i < num) {
        i++

        result.push(`${i} sheep`)
    }


    return result.join('...')
}
function findNeedle(array) {
    let found = array.map((c, idx) => {
        if (c === 'needle') {
            return `found the needle at position ${idx}`
        }
    })

    const result = found.filter(c => c)

    return result[0]
}

function sorted(array) {
    let result = array.every(item => Number.isInteger(item))
    if (result) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    const tmp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = tmp
                }
            }
        }
        return array
    }
    throw new Error('Error Write with right type number')

}
let array = [5, 6, 2, 10]

function FilterWithObject(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            sum += j
            if (array[j + 1].age < array[j].age) {
                const tmp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
        }
    }

    console.log(sum)

    return array
}



let data = [
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
    {
        fullname: 'Doniyor Doniyorov',
        age: 15
    },
    {
        fullname: 'Fotima Doniyorova',
        age: 10
    },
]


data.sort((a, b) => {
    return a.fullname.localeCompare(b.fullname)
})

console.log(FilterWithObject(data))


console.log(data)

module.exports = {
    countSheep,
    isLeapYear,
    sorted
}