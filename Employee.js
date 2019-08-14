class Employee extends Human{
    constructor(salary, department) {
        this.salary = salary;
        this.department = department;
    }
    displayInfo() {
        return super.displayInfo() + 'salary:' + this.salary + 'department' + this.department;
    }
}
