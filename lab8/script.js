// nội dung thông báo
// alert("hello world")

// hiển thị trong của sổ console
console.log(" Hiển thị gì đó trong cửa sổ console")

// chuỗi - string
"đây là 1 chuỗi";
'đây cũng là 1 chuỗi';

// số - number
1;
1.5;
-10;
Infinity;
-Infinity;
NaN;  // số k tính được

// logic - boolean ( đúng -sai)
true;
false;

// giá trị đặc biệt
null;
undefined;

// keyword name = value;
// keyword: let, const, var
// name: chỉ bắt đầu bằng ký tự, không chứa ký tự đặc biệt
// value: string, number, boolean, null, undefined

// giá trị có thể thay đổi
let ten = "Nguyễn";
let tuoi = 22;
console.log(ten);

// giá trị không thể thay đổi
const name = "Việt"

// từ đầu tiên viết thường, các từ tiếp theo trong têm biến viết hoa chữ cái đầu mỗi từ
// homNayNang

// hằng số ( giá trị mà mình có thể xác định từ đầu chương trình, và không bao giờ thay đổi) thì viết hoa nối các từ bằng dấu gạch dưới

const NGAY_SINH = "1990/04/04"

// số học 
// so sánh
// gán
// logic

x = 1;
y = 2;

console.log(x + y);
console.log(typeof x);

// function các câu lệch đc đặt trong 1 khối mã và gán cho 1 tên biến
// cho phép tái sử dụng mã nhiều nơi, nhiều lần

// cú pháp khai báo hàm
function funcName(ten) {
    console.log("hello" , ten ,",rất vui được làm quen");
}
funcName("nam");
funcName("viet");
// biểu thức hàm
const tambiet = function() {
    console.log("Goodbye");
}
tambiet();

function cong(a, b){
    console.log(a + b);
}
cong(1, 4)