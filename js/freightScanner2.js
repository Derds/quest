function scan(inputArr){
    var findContraband = []
    inputArr.forEach(element => {
        if (element === 'contraband') {
            findContraband.add(element.id);
        }
    });
    return findContraband;
}