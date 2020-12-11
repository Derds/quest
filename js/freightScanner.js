function scan(inputArr){
    var count = 0
    inputArr.forEach(element => {
        if (element === 'contraband') {
            count++;
        }
    });
    return count;
}