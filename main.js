// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main =document.querySelector('main')


function printKadaHeading (parentElement, kataNumber){
    const kata1Heading = document.createElement('h1')
    kata1Heading.append('Kata' + kataNumber)
    parentElement.append(kata1Heading)
}

function printObject (parentElement, object){
    const stringiedObject =JSON.stringify(object)
    parentElement.append(stringiedObject)
}




printKadaHeading(main, 1)
const active = users.filter(user => user.isActive === true)
printObject(main, active)
console.log(JSON.stringify(active))

printKadaHeading(main, 2)
const email = users.map(user => user.email)
printObject(main, email)
console.log (JSON.stringify(email))

printKadaHeading(main, 3)
const ovation = users.some(user => user.company === "OVATION")
printObject(main, ovation)
console.log(JSON.stringify(ovation))

printKadaHeading(main, 4)
const age = users.find(user => user.age > 38)
printObject(main, age)
console.log(JSON.stringify(age))


printKadaHeading(main, 5)
const first = users.filter(user => user.age > 38).find(user => user.isActive === true)
printObject(main, first)
console.log(JSON.stringify(first))

printKadaHeading(main, 6)
const zenco = users.filter(user => user.company === "ZENCO").map(user => user.balance)
printObject(main, zenco)
console.log(JSON.stringify(zenco))

printKadaHeading(main, 7)
const fugiatage = users.filter(user => user.tags.includes("fugiat")).map(user => user.age)
printObject(main, fugiatage)
console.log(JSON.stringify(fugiatage))