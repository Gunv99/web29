function usd2vnd(amount) {
    return amount*23000;
}

console.log("44$ chuyển sang mệnh giá vnđ có giá trị là: ", usd2vnd(44));

function findArea(a, b) {
    return a*b;
}
console.log("diện tích hình chữ nhật có chiều dài 5 chiều rộng 10 là: ", findArea(5, 10));

function celsiusToFahrenheit(c) {
    return c * 1.8 + 32;
}
console.log("37 độ C đổi sang độ F có giá trị là: ", celsiusToFahrenheit(37));

function pow(a, b) {
    return a**b;
}
console.log("3 ^ 3 = ", pow(3, 3));

function findAreaOfTriangle(a, b, c) {
  const p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
console.log("diện tích hình tam giác có 3 cạnh lần lượt là 10 17 21 là:", findAreaOfTriangle(10, 17, 21));

