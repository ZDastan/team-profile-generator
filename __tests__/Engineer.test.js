const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");


test('can create new Engineer object', () => {
    const engineer = new Engineer()
    expect(typeof engineer).toBe('object')
})

test('can set id artibute on the engineer object', () => {
    const id = 1
    const engineer = new Engineer(id)
    expect(engineer.id).toBe(id)
})

test('can set name artibute on the engineer object', () => {
    const name = "zehra"
    const engineer = new Engineer(1, name)
    expect(engineer.name).toBe(name)
})

test('can set email artibute on the engineer object', () => {
    const email = "zehra@test"
    const engineer = new Engineer(1, "zehra", email)
    expect(engineer.email).toBe(email)
})

test('can set gitHub artibute on the engineer object', () => {
    const gitHub = "ZDastan"
    const engineer = new Engineer(1, "zehra", gitHub)
    expect(engineer.gitHub).toBe(gitHub)
})

test('can get id by calling getId()', () => {
    const id = 1
    const engineer = new Engineer(id)
    expect(engineer.getId()).toBe(id)
})

test('can get name by calling getName()', () => {
    const name = "zehra"
    const engineer = new Engineer(1, name)
    expect(engineer.getName()).toBe(name)
})

test('can get email by calling getEmail()', () => {
    const email = "zehra@test"
    const engineer = new Engineer(1, "zehra", email)
    expect(engineer.getEmail()).toBe(email)
})

test('can get gitHub by calling getGitHub()', () => {
    const gitHub = "ZDastan"
    const engineer = new Engineer(1, "zehra", gitHub)
    expect(engineer.getGitHub()).toBe(gitHub)
})