const a: string = "Hello"
console.log(a)
interface myFunctionProps{
    name: string,
    age: number
}

function myFunction(props: myFunctionProps){
    let x = props.age
    return x
}
console.log(myFunction({age: 23, name: "Emily"}))