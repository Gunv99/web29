/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {
    for (let i = 1; i < 100 ; i += 2){
         console.log(i)  
    }
}

/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {}

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i < n; i++){
        sum += i;
    }
    console.log(sum);
}

/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {
    sum = 0;
    for(i = start; i <= end; i++){
        if (i % 2 != 0) {
            sum += i;
        }
    }

    console.log(sum);
}
sumOfOddNumbers(2, 10);
/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {
    for(i = 1; i <= number; i++){
        if (number % i == 0) {
            console.log(i);
        }
    }
}
divisor(10);

/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
    let num = 0;
    for(i = 0.1; i <= thickness * 1000; i *= 2){
        num++;
    }
    return num;
}
console.log(countFolding(2));
/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {

}
console.log(countYears(3, 25));
function countLegs(){}