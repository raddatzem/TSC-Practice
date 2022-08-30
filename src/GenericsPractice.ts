import { TypeOfExpression } from "typescript";

function returnKeys<T>(argument: T){
    console.log(Object.keys(argument))
    return argument;
}
returnKeys({
    abc: 'def'
})

interface Person <T> {
    name: string,
    age: number,
    special: T
}

const John: Person<string> = {
    special: 'this is my special property',
    name: 'John',
    age: 20
}

class Observable<T extends Person<string>>{
    subscribe(arg: T){
        console.log(`Subscribed to ${arg.name}`)
    }
}
new Observable<typeof John>().subscribe(John)