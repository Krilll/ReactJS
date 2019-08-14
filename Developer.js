class Developer extends Employee{
    constructor(manager) {
        this.manager = manager;
    }
    changeManager(newManager) {
        this.manager = newManager;
    }
}
