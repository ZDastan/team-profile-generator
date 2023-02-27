const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");


test('can create new Engineer object', () => {
    const engineer = new Engineer()
    expect(typeof engineer).toBe('object')
})

test('can set id artibute on the engineer object', () => {
    const id = 2
    const engineer = new Engineer(id)
    expect(engineer.id).toBe(id)
})

test('can set name artibute on the engineer object', () => {
    const name = "javad"
    const engineer = new Engineer(2, name)
    expect(engineer.name).toBe(name)
})

test('can set email artibute on the engineer object', () => {
    const email = "javad@test"
    const engineer = new Engineer(2, "javad", email)
    expect(engineer.email).toBe(email)
})

test('can set gitHub artibute on the engineer object', () => {
    const gitHub = "JDastan"
    const engineer = new Engineer(2, "javad", gitHub)
    expect(engineer.gitHub).toBe(gitHub)
})

test('can get id by calling getId()', () => {
    const id = 2
    const engineer = new Engineer(id)
    expect(engineer.getId()).toBe(id)
})

test('can get name by calling getName()', () => {
    const name = "javad"
    const engineer = new Engineer(2, name)
    expect(engineer.getName()).toBe(name)
})

test('can get email by calling getEmail()', () => {
    const email = "javad@test"
    const engineer = new Engineer(2, "javad", email)
    expect(engineer.getEmail()).toBe(email)
})

test('can get gitHub by calling getGitHub()', () => {
    const gitHub = "JDastan"
    const engineer = new Engineer(2, "javad", gitHub)
    expect(engineer.getGitHub()).toBe(gitHub)
})