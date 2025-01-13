class Fighter {
    name;
    health;
    attackPower;
    constructor(name,health,attackPower){
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }
    attack(opponent){
        opponent.health -= this.attackPower;
        console.log(`${this.name} attacks ${opponent.name} and deals ${this.attackPower} damage. ${opponent.name} has ${opponent.health} health left.`);
        if(opponent.health <= 0){
            console.log(`${opponent.name} has been defeated!`);
        }
    }
}
class warrior extends Fighter {
    constructor(name,health,attackPower){
        super(name,health,attackPower)
    }
    
    attack(opponent){
        const reducedDamage = this.attackPower * 0.8;
        opponent.health -= reducedDamage
        console.log(`${this.name} attacks ${opponent.name}, dealing ${reducedDamage.toFixed(2)} damage.`);
    }
}

class mage extends Fighter{
constructor(name,health,attackPower){
super(name,health,attackPower)
}
castSpell(opponent){
    const spellDamage = this.attackPower * 2;
    this.health -= 10
    opponent.health -= spellDamage
                                                                            console.log(`${this.name} cast a spells on ${opponent.name},dealing ${spellDamage} damage but losing 10 health`);

}
}