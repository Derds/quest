function scan(freightItems) {
    let contrabandIndexes = [];
  
    freightItems.forEach((el, idx) => {
      if (el == 'contraband') {
        contrabandIndexes.push(idx);
      }
    });
    return contrabandIndexes;
  }
  