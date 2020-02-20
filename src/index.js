module.exports = function toReadable (number) {
    const a = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    }

    const b = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }

    const c = {
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen"
    }

    const arr = number.toString().split('');
    let str = '';

    if (arr.length === 1) {
        str = str + a[`${arr[0]}`];
    } else if (number % 100 > 10 && number % 100 < 20) {
            if (arr.length === 3) {
                str = str + a[`${arr[0]}`] + ' ' + 'hundred' + ' ' + c[`${arr[2]}`];
            } else if (arr.length === 2) {
                str = str + c[`${arr[1]}`];
            }
    } else if (number % 100 < 10 && number % 100 > 0) {
        if (arr.length === 3) {
            str = str + a[`${arr[0]}`] + ' ' + 'hundred' + ' ' + a[`${arr[2]}`];
        } else if (arr.length === 2) {
            str = str + a[`${arr[1]}`];
        }
    } else if (number % 100 === 0) {
        str = str + a[`${arr[0]}`] + ' ' + 'hundred';
    } else {
        if (number % 10 === 0) {
                if (arr.length === 3) {
                    str = str + a[`${arr[0]}`] + ' ' + 'hundred' + ' ' + b[`${arr[1]}`];
                } else if (arr.length === 2) {
                    str = str + b[`${arr[0]}`];
                }
        } else if (number % 10 > 0) {
                if (arr.length === 3) {
                    str = str + a[`${arr[0]}`] + ' ' + 'hundred' + ' ' + b[`${arr[1]}`] + ' ' + a[`${arr[2]}`];
                } else if (arr.length === 2) {
                    str = str + b[`${arr[0]}`] + ' ' + a[`${arr[1]}`];
                }
        }
    }
    console.log(str);
    return str;
}
