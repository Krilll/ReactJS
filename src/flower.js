import './style.css'

export default class Flower {
    constructor (name) {
        this.name = name;
    }
    say() {
        document.write (`${this.name} is illuminate today.`);
    }
    click() {
        let html = '<button id = "button">Today ?</button>';
        document.body.insertAdjacentHTML ("beforeEnd", html);

        document.getElementById ('button').onclick = () => {
            let now = new Date ();
            document.write (now.toDateString ());
        };
    }
}