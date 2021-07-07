class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`${this.name}`);
    }
    showStats(){
        this.sayName();
        console.log(`${this.speed}`);
        console.log(`${this.strength}`);
        console.log(`${health}`);
    }
    drinkSake(){
        this.health += 10;
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisedom(){
        this.drinkSake();
        console.log('You cannot become what you need to be by remaining what you are')
    }
}
const newSensei = new Sensei('Master Ziglar');
const newNinja = new Ninja('Natan', 10);
newNinja.sayName();
newSensei.speakWisedom();
newSensei.showStats();

// newNinja.sayName();
// newNinja.showStats();
// newNinja.drinkSake();