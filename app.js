const isPalindrom = (number) => {

    if (number < 10) {
        return true
    }

    let arr = `${number}`.split("").reverse()
    let arr2 = `${number}`.split("")
    let res = []

    for (let i = 0; i < arr2.length; i++) {
        if (arr[i] === arr2[i]) {
            res.push(true)
        }
        else {
            res.push(false);
        }
    }

    if (res.includes(false)) {
        return false
    }
    else {
        return true
    }


}

// isPolindrom test

// console.log(isPalindrom(121));
// console.log(isPalindrom(1231));
// console.log(isPalindrom(1));
// console.log(isPalindrom(1431));
// console.log(isPalindrom(121234561));
// console.log(isPalindrom(12876541));
// console.log(isPalindrom(123454321));


const nextNumber = (...numbers) => {
    let nextNum = numbers[1] - numbers[0]
    return numbers[numbers.length - 1] + nextNum
}

// nextNumber test

// console.log(nextNumber(10,20,30,40));
// console.log(nextNumber(1,3));


const sumOfObject = (obj) => {
    let res = 0
    for (let i in obj) {
        if (obj[i] !== true && obj[i] !== false && obj[i] !== null) {
            res += +obj[i]
        }

    }
    return res
}

// nextNumber test

// console.log(sumOfObject({ a: 4, b: 5, c: true, d: "1", e: null}));

const doubleNumber = (number) => {
    let arr = `${number}`.split("")
    let res = ""
    for (let i of arr) {
        if (!res.includes(i)) {
            res += i
        }
    }
    return +res
}

// double test

// console.log(doubleNumber(123412345));
// console.log(doubleNumber(1231));

const lastQuestion = (str) => {
    while (str.endsWith('?')) {
        str = str.slice(0, -1);
    }
    return str;
}
console.log(lastQuestion(`?se?l?ect????`));
 