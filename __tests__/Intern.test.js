const Intern = require("../lib/intern");
const Employee = require("../lib/Employee");


test('can create new Intern object', () => {
    const intern = new Intern()
    expect(typeof intern).toBe('object')
})

test('can set id artibute on the intern object', () => {
    const id = 3
    const intern = new Intern(id)
    expect(intern.id).toBe(id)
})

test('can set name artibute on the intern object', () => {
    const name = "alp"
    const intern = new Intern(3, name)
    expect(intern.name).toBe(name)
})

test('can set email artibute on the intern object', () => {
    const email = "alp@test"
    const intern = new Intern(3, "alp", 'alp@test', 'ADastan')
    expect(intern.email).toBe(email)
})

test('can set school artibute on the intern object', () => {
    const school = "ADastan"
    const intern = new Intern(3, "alp", 'alp@test', 'ADastan')
    expect(intern.school).toBe(school)
})

test('can get id by calling getId()', () => {
    const id = 3
    const intern = new Intern(id)
    expect(intern.getId()).toBe(id)
})

test('can get name by calling getName()', () => {
    const name = "alp"
    const intern = new Intern(3, name)
    expect(intern.getName()).toBe(name)
})

test('can get email by calling getEmail()', () => {
    const email = "alp@test"
    const intern = new Intern(3, "alp", 'alp@test', 'ADastan')
    expect(intern.getEmail()).toBe(email)
})

test('can get school by calling getSchool()', () => {
    const school = "ADastan"
    const intern = new Intern(3, "alp", 'alp@test', 'ADastan')
    expect(intern.getSchool()).toBe(school)
})