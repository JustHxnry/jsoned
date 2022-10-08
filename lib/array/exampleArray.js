const strings = [
    "Foo",
    "bar",
    "lorem",
    "ipsum",
    "dolor",
    "sit"
];

const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
];

const statements = [
    true,
    false,
    undefined,
    ,
    null,
];

const mixed = [
    "foo",
    5,
    true,
    "bar",
    false,
    null,
    9
];

const personExamples = [
    {
        name: "Joe",
        lastName: "Doe",
        id: 1
    },
    {
        name: "Jane",
        lastName: "Doe",
        id: 2
    },
    {
        name: "Joe",
        lastName: "Smith",
        id: 3
    },
    {
        name: "Jack",
        lastName: "Foo",
        id: 4
    }
];

module.exports = {
    strings,
    numbers,
    statements,
    mixed,
    objects: personExamples
};