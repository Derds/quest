function mutate(inputArr){
    let outputArr = inputArr.map(item => item.toUpperCase());
    return outputArr;
}
const cargo = ['apples', 'ray guns', 'oranges'];

const mutatedCargo = mutate(cargo);
console.log(mutatedCargo);