class Duck {
    constructor(type){
        this.type = type;

    }
    quack = () => console.log("kwa kwa");
    swim = () => console.log("płynę ...");
    print = () => console.log(this.type);
    fly = () => console.log("Kaczka ${this.type} leci");
};

const theDuck = new Duck("zwykła");
theDuck.quack();
theDuck.swim();
theDuck.print();

class WildDuck extends Duck{
    constructor(type){
        super(type);
    };
    print = () => this.type = "dzika";
};

const dzikiDuck = new WildDuck("jakaś tam");
dzikiDuck.quack();
dzikiDuck.swim();
dzikiDuck.print();
dzikiDuck.fly();
