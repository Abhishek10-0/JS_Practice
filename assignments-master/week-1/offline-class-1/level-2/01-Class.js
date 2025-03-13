
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  speaks() {
    return `${this.name} says ${this.speaks}`
  }
}


let dog = new Animal('Dog', 4, 'bark');
let cat = new Animal('Cat', 4, 'meow');
let bird = new Animal('Bird', 2, 'chirp');  
dog.describe();
cat.describe();
bird.describe();




