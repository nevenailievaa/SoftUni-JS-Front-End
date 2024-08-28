function cats (list) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    for (let i = 0; i < list.length; i++) {
        let [currentName, currentAge] = list[i].split(' ');

        let currentCat = new Cat (currentName, currentAge);
        currentCat.meow();
    }
}