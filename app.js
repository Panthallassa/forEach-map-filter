const numbers = [1,48,6,34,7,965];
const names = ['rick', 'andrea', 'don', 'joe'];

const keysValues = [
    {name: 'Rick'},
    {name: 'Andrea'},
    {name: 'Don'},
    {name: 'Joe'}
];

const firstLast = [
    {name: 'Rick', last:'Morton'},
    {name: 'Andrea', last:'Vasco', isCatOwner: true},
    {name: 'Don', last:'Boni'},
    {name: 'Joe', last:'Grieser', isCatOwner: true}
];

const titles = [
    {title: 'instructor'}
];


// forEach:


function doubleValues(arr) {
    let doubledValues = [];

    arr.forEach(function(num) {
        let double = num * 2;
        doubledValues.push(double);
    });
    return doubledValues;
}

function onlyEvenValues(arr) {
    let evenValues = [];

    arr.forEach(function(num) {
        if (num % 2 === 0) {
            evenValues.push(num);
        }
    });
    return evenValues;
}

function showFirstAndLast(arr) {
    let result = [];

    arr.forEach(function(str) {
        if(str.length > 0) {
            const firstAndLast = str.charAt(0) + str.charAt(str.length - 1);

            result.push(firstAndLast);
        }
    });
    return result;
}

function addKeyAndValue(keysValues, titles) {
    keysValues.forEach((obj) => {
        Object.assign(obj, titles[0]);
    });
    return keysValues;
}

function vowelCount(str) {
    const vowels = "aeiou";
    const lowercase = str.toLowerCase();
    result = {};
    
    for (let char of lowercase) {
        if (vowels.includes(char)) {
            result[char] = (result[char] || 0) + 1;
        }
    }
    return result;
}


// map:


function doubleValuesWithMap(arr) {
    const doubles = arr.map(function(num) {
        return num * 2;
    })
    return doubles;
}

function valTimesIndex(arr) {
    const timesIndex = arr.map(function(num, index) {
        return num * index;
    });
    return timesIndex;
}

function extractKey(arr) {
    const values = arr.map(function(obj) {
        return Object.values(obj)[0];
    });
    return values;
}

function extractFullName(arr) {
    const fullNames = arr.map(function(obj) {
        return Object.values(obj).join(' ');
    });
    return fullNames;
}


//  find


function filterByValue(arr, key) {
    return arr.filter(function(obj) {
        return obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== undefined ? obj : null;
    });
}

function find(arr, val) {
    return arr.filter(function(element) {
        return element === val;
    });
}

function findInObj(arr, val) {
    return arr.filter(function(obj) {
        return Object.values(obj).includes(values);
    });
}

function removeVowels(str) {
    const moreVowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const result = str.split('').filter(char => !moreVowels.has(char)).join('');
    return result;
}

function doubleOddNumbers(arr) {
    const doubledOddNumbers = arr
        .filter(num => num % 2 !== 0)
        .map(oddNum => oddNum * 2);

    return doubledOddNumbers;
}