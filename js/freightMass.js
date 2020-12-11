function calculateMass(inputArr){
    var total = 0;
    inputArr.forEach(element => {
        total += element.length;
    })
    return total;
}