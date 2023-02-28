const Manager = require("../lib/manager");
const Employee = require("../lib/Employee");


test('can create new Manager object', () => {
    const manager = new Manager()
    expect(typeof manager).toBe('object')
})

test('can set id artibute on the manager object', () => {
    const id = 4
    const manager = new Manager(id)
    expect(manager.id).toBe(id)
})

test('can set name artibute on the manager object', () => {
    const name = "arshan"
    const manager = new Manager(4, name)
    expect(manager.name).toBe(name)
})

test('can set email artibute on the manager object', () => {
    const email = "arshan@test"
    const manager = new Manager(4, "arshan", 'arshan@test', 'ASDastan')
    expect(manager.email).toBe(email)
})

test('can set officeNumber artibute on the manager object', () => {
    const officeNumber = "ASDastan"
    const manager = new Manager(4, "arshan", 'arshan@test', 'ASDastan')
    expect(manager.officeNumber).toBe(officeNumber)
})

test('can get id by calling getId()', () => {
    const id = 4
    const manager = new Manager(id)
    expect(manager.getId()).toBe(id)
})

test('can get name by calling getName()', () => {
    const name = "arshan"
    const manager = new Manager(4, name)
    expect(manager.getName()).toBe(name)
})

test('can get email by calling getEmail()', () => {
    const email = "arshan@test"
    const manager = new Manager(4, "arshan", 'arshan@test', 'ASDastan')
    expect(manager.getEmail()).toBe(email)
})

test('can get officeNumber by calling getSchool()', () => {
    const officeNumber = "ASDastan"
    const manager = new Manager(4, "arshan", 'arshan@test', 'ASDastan')
    expect(manager.getOfficeNumber()).toBe(officeNumber)
})