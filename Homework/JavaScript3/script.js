/**
 * Kiểm tra số một số nguyên dương bất kỳ có phải số nguyên tố hay không
 *
 * Số nguyên tố là số chỉ chia hết cho `1` và chính nó
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` cho có phải số nguyên tố hay không
 */
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(13));
/**
 * Tính tổng các số nguyên tố trong khoảng từ 1 đến n
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {number} Tổng các số nguyên tố trong khoảng từ `1` đến `n`
 */
function sumOfPrimes(n) {
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}
console.log(sumOfPrimes(10));
/**
 * Tìm số Fibonacci thứ n
 *
 * Dãy Fibonacci là dãy số bắt đầu bằng 0 và 1, các số tiếp theo bằng tổng 2 số trước nó
 *
 * VD: 0 1 1 2 3 5 8 13 ... (Số thứ 1 là 0, số thứ 2 là 1, số thứ 3 là 2, ...)
 *
 * VD: `n = 5`, kết quả số Fibonacci thứ 5 là `3`
 *
 * @param {number} n Số nguyên dương bất kỳ (n > 0)
 *
 * @return {number} Số Fibonacci thứ `n`
 */
function fibonacci(n) {
    let f = 0,
        a = 0,
        b = 1;

    for(i = 0; i < n; i++){
        f = a;
        a = b;
        b = f + b;
    }

    return f;
}
console.log(fibonacci(8));
/**
 * Tính giai thừa của một số nguyên bất kỳ
 *
 * Giai thừa của một số `n = 1 * 2 * 3 * ... * (n - 1) * n`
 *
 * @param {number} n Số nguyên dương bất kỳ (n >= 0)
 *
 * @return {number} Giai thừa của `n`
 */
function factorial(n) {
    let fac = 1;
    for(i = 1; i <= n; i++){
        fac *= i;
    }

    return fac;
}
console.log(factorial(3));
/**
 * Kiểm tra một số nguyên dương bất kỳ có phải số Strong hay không
 *
 * Số Strong là số có tổng giai thừa các chữ số bằng chính nó
 *
 * VD: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` có phải là số Strong hay không
 */
function isStrong(n) {
    let m = n,
        x = 0.
        y = 0;

    for(i = 10;(m / 10) * 10 >= 1; i *= 10 ){
        y = m % 10;
        x += factorial(y);
        m /= 10;
    }

    if (x == n) return true;
        else return false;
}
console.log(isStrong(145));
