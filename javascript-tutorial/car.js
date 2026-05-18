// Sınıf tanımlama
class Car {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }

    drive() {
        document.write(this.brand + " gidiyor");
    }
}

const car1 = new Car("red", "BMW");
const car2 = new Car("black", "Mercedes");

document.write(car1.color);
document.write("<br>");
document.write(car2.brand);
document.write("<br>");

car1.drive();