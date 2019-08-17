import './style.css'

export default class Flower {
    constructor (name) {
        this.name = name;
    }
    say() {
        document.write(`${this.name} is illuminate today.`);
    }
}