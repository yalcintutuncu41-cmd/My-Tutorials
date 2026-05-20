//Nesne oluşturma örneği

const car = {
    brand: "fiat",
    year: "2008",
    color: "grey",
    door: 4,
    myFunction: function () {
        return this.brand + " " + this.color;
    },
    function2() {
        return this.color + " Kapı sayisi:" + this.door;
    }

};

//Nesne özelliği çağırma

car.brand;
car["year"];

let age = 25;
age = 26;

const userName = "Ali";
console.log(userName);  