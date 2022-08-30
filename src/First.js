const a = "Hello";
console.log(a);
function myFunction(props) {
    let x = props.age;
    return x;
}
console.log(myFunction({
    age: 23,
    name: "Emily",
    job: "Engineer"
}));
///how to check if fields are filled out within an object (use in)
function isPerson(potentialPerson) {
    if ('firstName' in potentialPerson &&
        'lastName' in potentialPerson) {
        return true;
    }
    else {
        return false;
    }
}
