import Calculator from "./entity/Calculator";
import Person from "./entity/Person";
import promptSync from "prompt-sync";

const prompt = promptSync();

const person1 = new Person();
person1.setAge(Number(prompt('What is your age? ')));
person1.setName(String(prompt('What is your name? ')));
person1.setLastName(String(prompt('What is your last name? ')));

console.log("");
console.log("Print person with constructor");
console.log(person1.toString());

const person2 = new Person('Juca', 'Bala', 24);
console.log("");
console.log("Print person with constructor");
console.log(person2.toString());

const calculator = new Calculator();
calculator.setNumberOne(5);
calculator.setNumberTwo(6);
console.log("")
console.log("Print Calculator without constructor");
console.log(`Print sum: ${calculator.sum()}`);
console.log(`Print sub: ${calculator.sub()}`);
console.log(`Print mul: ${calculator.mul()}`);
console.log(`Print div: ${calculator.div()}`);

const calculatorConstructor = new Calculator(2, 5);
console.log("");
console.log("Print Calculator with constructor");
console.log(`Number one: ${calculatorConstructor.getNumberOne()}`);
console.log(`Number two: ${calculatorConstructor.getNumberTwo()}`);
console.log(`Print sum: ${calculatorConstructor.sum()}`);
console.log(`Print sub: ${calculatorConstructor.sub()}`);
console.log(`Print mul: ${calculatorConstructor.mul()}`);
console.log(`Print div: ${calculatorConstructor.div()}`);