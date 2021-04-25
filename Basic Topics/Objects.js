function Emi(){
    emi = this.price / 12
    return emi
}

function Cars(model, price, seats){
    this.model = model;
    this.price = price;
    this.seats = seats;
    this.emi = Emi;
}
var car1 = new Cars(2013, 1200000, 6) 
console.log(car1.emi())

with (car1){
    console.log('Model : ' + model);
    console.log('Price : ' + price);
    console.log('Seats : ' + seats);
}
