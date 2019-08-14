class Manager extends Employee{
    constructor(developers) {
        this.developers = developers;
    }

    addDeveloper(newDeveloper) {
        this.developers.push(newDeveloper);
    }

    deleteDeveloper(oldDeveloper) {
        let developer = this.developers.indexOf(oldDeveloper);
        this.developers.splice(developer, 1);
    }
}
