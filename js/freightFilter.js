function scanAndFilter(freightItems, forbiddenString) {
    let filteredItems = freightItems.filter(item => item != forbiddenString );
    return filteredItems;
}