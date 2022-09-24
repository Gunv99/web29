function add(a, b) {
    return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
console.log("1 + 2 =",add(1, 2));
console.log("1 - 2 =",sub(1, 2));
console.log("1 * 2 =",mul(1, 2));
console.log("1 / 2 =",div(1, 2));

function calcAge(yearOfBirth) {
    const currentYear = 2022;
    return currentYear - yearOfBirth;
}
console.log("tuổi :", calcAge(1999));
/**
 * Tính chu vi hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Chu vi hình chữ nhật
 */
function findPerimeterOfRectangle(length, breadth) {
    const findPerimeterOfRectangle = (length + breadth)*2;
    return findPerimeterOfRectangle;
}
console.log("chu vi hình chữ nhật là :", findPerimeterOfRectangle(15, 20));

/**
 * Tính diện tích hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Diện tích hình chữ nhật
 */
function findAreaOfRectangle(length, breadth) {
    const findAreaOfRectangle = length* breadth;
    return findAreaOfRectangle;
}
console.log("diện tính hình chữ nhật là:", findAreaOfRectangle(15, 20));
/**
 * Tìm đường kính hình tròn
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Đường kính hình tròn
 */
function findDiameterOfCircle(r) {
    return r*2;
}
console.log("đường kính hình tròn là:", findPerimeterOfRectangle(5));
/**
 * Tìm chu vi hình tròn
 *
 * Quy ước PI = 3.14
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Chu vi hình tròn
 */
function findCircumferenceOfCircle(r) {
    return 2*3.14*r
}
console.log(
  "chu vi hình tròn có bán kính 20 là:",
  findCircumferenceOfCircle(20)
);
/**
 * Tìm diện tích hình tròn
 *
 * Quy ước PI = 3.14
 *
 * Bình phương sử dụng toán tử ** hoặc Math.pow()
 *
 * @param {number} r Bán kính hình tròn
 *
 * @return {number} Diện tích hình tròn
 */
function findAreaOfCircle(r) {
    return 3.14*r*r;
}
console.log("diện tích hình tròn có bán kính 20 là:", findAreaOfCircle(20));

/**
 * Tính diện tích hình tam giác theo công thức Heron
 *
 * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {number} Diện tích hình tam giác
 */
function findAreaOfTriangle(a, b, c) {
    const p = (a+b+c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}
console.log(
  "diện tích hình tam giác có 3 cạnh lần lượt là 5 10 15 là:",
  findAreaOfTriangle(5, 10, 14));
/**
 * Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
 *
 * Tham khảo công thức chuyển đổi trên google
 *
 * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
 *
 * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
 */
function celsiusToFahrenheit(temp) {}
