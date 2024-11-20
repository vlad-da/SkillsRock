//Можно так

// function deepClone(obj) {
//     return JSON.parse(JSON.stringify(obj))
// }

//можно так
function deepClone(obj) {
    return structuredClone(obj);
}


const original = {
    name: 'John',
    address: {
    city: 'New York',
    country: 'USA', 
    },
    arr: {
        name: {
            name: {
                name: 'Ivqan'
            }
        }
    }  
};

const copy = deepClone(original);
copy.address.city = 'Los Angeles';
console.log(original.address.city); // New York (оригинальный объект не должен измениться)
console.log(copy.address.city);

copy.arr.name.name.name = 'Vlad';
console.log(original.arr.name.name.name);
console.log(copy.arr.name.name.name);

