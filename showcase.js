const jsoned = require('@justhxnry/jsoned');

var array = [
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

var array2 = [
    "Im first",
    "My number is 1",
    "Mine is 2"
];

var object = {
    user: "joe123",
    name: "Joe",
    lastName: "Doe",
    id: 1
};

jsoned.version // -> 1.0.0
jsoned.arraySearchFor(array, "Doe", "lastName"); // -> [ { name: 'Joe', lastName: 'Doe', id: 1 }, { name: 'Jane', lastName: 'Doe', id: 2 } ]
jsoned.arrayStartsWith(array, "Jo", "lastName"); // -> [ { name: 'Joe', lastName: 'Doe', id: 1 }, { name: 'Joe', lastName: 'Smith', id: 3 } ]
jsoned.arrayToObject(array2) // -> { '0': 'Im first', '1': 'My number is 1', '2': 'Mine is 2' }
jsoned.findOne(array, 4, "id") // -> { name: 'Jack', lastName: 'Foo', id: 4 }
jsoned.objectToArray(object) // -> { keys: [ 'user', 'name', 'lastName', 'id' ], values: [ 'joe123', 'Joe', 'Doe', 1 ] }
jsoned.objectToPlain(object) // -> user: joe123\nname: Joe\nlastName:Doe\nid: 1
jsoned.reverseArrayOrder(array2) // -> [ 'Mine is 2', 'My number is 1', 'Im first' ]
jsoned.reverseObjectKeys(object) // -> { '1': 'id', joe123: 'user', Joe: 'name', Doe: 'lastName' }
jsoned.exampleArray // -> { strings: [ 'Foo', 'bar', 'lorem', 'ipsum', 'dolor', 'sit' ], numbers: [ 1, 2, 3, 4, 5, 6, 7, 8 ], statements: [ true, false, undefined, <1 empty item>, null ], mixed: [ 'foo', 5, true,  'bar', false, null, 9 ], objects: [ { name: 'Joe', lastName: 'Doe', id: 1 }, { name: 'Jane', lastName: 'Doe', id: 2 }, { name: 'Joe', lastName: 'Smith', id: 3 }, { name: 'Jack', lastName: 'Foo', id: 4 } ] }
jsoned.exampleObject // -> { strings: { firstName: 'Joe', lastName: 'Doe', email: 'joe@example.com' }, numbers: { joe: 23, john: 30, karen: 26 }, statements: { isTrue: true, isntTrue: false, isntDefined: undefined, isNull: null }, mixed: { firstName: 'Joe', lastName: 'Doe', age: 23, isHuman: true, kids: null } }