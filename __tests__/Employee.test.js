const Employee = require("../lib/Employee");

test('can create new Employee object', () => {
    const employee = new Employee()
    expect(typeof employee).toBe('object')
})

test('can set id artibute on the employee object', () => {
    const id = 1
    const employee = new Employee(id)
    expect(employee.id).toBe(id)
})

test('can set name artibute on the employee object', () => {
    const name = "zehra"
    const employee = new Employee(1, name)
    expect(employee.name).toBe(name)
})

test('can set email artibute on the employee object', () => {
    const email = "zehra@test"
    const employee = new Employee(1, "zehra", email)
    expect(employee.email).toBe(email)
})

test('can get id by calling getId()', () => {
    const id = 1
    const employee = new Employee(id)
    expect(employee.getId()).toBe(id)
})

test('can get name by calling getName()', () => {
    const name = "zehra"
    const employee = new Employee(1, name)
    expect(employee.getName()).toBe(name)
})

test('can get email by calling getEmail()', () => {
    const email = "zehra@test"
    const employee = new Employee(1, "zehra", email)
    expect(employee.getEmail()).toBe(email)
})

test('can get role by calling getRole()', () => {
    const role = "Employee"
    const employee = new Employee(1, "zehra", "zehra@test")
    expect(employee.getRole()).toBe(role)
})
