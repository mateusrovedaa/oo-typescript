export default class Calculator {
    private numberOne: number;
    private numberTwo: number;

    public constructor(numberOne?: number, numberTwo?: number){
        this.numberOne = typeof numberOne !== 'undefined' ? numberOne : 0;
        this.numberTwo = typeof numberTwo !== 'undefined' ? numberTwo : 0;
    }

    public setNumberOne(number: number) {
        this.numberOne = number;
    }

    public setNumberTwo(number: number) {
        this.numberTwo = number;
    }

    public getNumberOne(): number {
        return this.numberOne;
    }

    public getNumberTwo(): number {
        return this.numberTwo;
    }

    public sum(): number {
        return this.numberOne + this.numberTwo;
    }

    public sub(): number {
        return this.numberOne - this.numberTwo;
    }

    public mul(): number {
        return this.numberOne * this.numberTwo;
    }

    public div(): number {
        return this.numberOne / this.numberTwo;
    }
}