const a: string = "Hello"
console.log(a)
interface myFunctionProps{
    name: string,
    age: number,
    job?: job,

}
type job = "Engineer" | "Programmer"

function myFunction(props: myFunctionProps){
    let x = props.age
    return x
}
console.log(myFunction({
    age: 23, 
    name: "Emily", 
    job: "Engineer"
}))


///how to check if fields are filled out within an object (use in)

function isPerson(potentialPerson: any): boolean {
    if ('firstName' in potentialPerson &&
        'lastName' in potentialPerson){
            return true
        }else {
            return false
        }
}

