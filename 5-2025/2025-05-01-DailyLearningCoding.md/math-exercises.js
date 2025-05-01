// 1. Write a function to calculate the area of a rectangle
// Formula: Area = a * b
function tinhDienTichHinhChuNhat(a, b) {
    if (a <= 0 || b <= 0) return -1;
    return a * b;
}
console.log(tinhDienTichHinhChuNhat(6, 7)); // Area = 42

// 2. Write a function to calculate the perimeter of a rectangle
// Formula: Perimeter = (a + b) * 2
function tinhChuViHinhChuNhat(a, b) {
    if (a <= 0 || b <= 0) return -1;
    return (a + b) * 2;
}
console.log(tinhChuViHinhChuNhat(2, 1)); // Perimeter = 6

// 3. Write a function to calculate the area of a circle
// Formula: Area = π * r * r
function tinhDienTichHinhTron(r) {
    if (r <= 0) return -1;
    return Math.PI * r * r;
}
console.log(tinhDienTichHinhTron(2)); // Area ≈ 12.566