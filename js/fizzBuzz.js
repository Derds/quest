const argumentValue = process.argv[2];
const numberValue = Number(argumentValue);

let output = '';

if(numberValue % 3 === 0){
    output += 'Java';
}
if(numberValue % 5 === 0){
    output += 'Script';
}
if(output === ''){
    output = String(numberValue);
}

console.log(output)