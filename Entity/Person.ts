export default class Person {
    private name: string;
    private lastName: string;
    private age: number;

    public constructor(name?: string, lastName?: string, age?: number){
        this.name = typeof name !== 'undefined' ? name : '';
        this.lastName = typeof lastName !== 'undefined' ? lastName : '';
        this.age = typeof age !== 'undefined' ? age : 0;
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string){
        this.name = name;
    }

    public getLastName(): string{
        return this.lastName;
    }

    public setLastName(lastName: string){
        this.lastName = lastName;
    }

    public getAge(): number{
        return this.age;
    }

    public setAge(age: number){
        this.age = age;
    }

    public toString(): string{
        return `Name: ${this.name} Last Name: ${this.lastName} Age: ${this.age}`
    }
}