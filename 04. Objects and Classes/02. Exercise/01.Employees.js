function employees (namesList) {

    class Employee {
        constructor(name, personalNumber){
            this.name = name,
            this.personalNumber = personalNumber
        }
    }

    let employees = [];

    for (let i = 0; i < namesList.length; i++) {
        employees.push(new Employee(namesList[i], namesList[i].length));
    }

    for (employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}