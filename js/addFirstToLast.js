function addFirstToLast(arrayofthings)
{
    var len = arrayofthings.length;
    if (arrayofthings== '')
    {
        return ""
    }
    if (len === 1)
    {
        return arrayofthings[0] + arrayofthings[0]
    }
    if (arrayofthings.length > 1) {
    return arrayofthings[0] + arrayofthings[len-1];
    }
    
}

console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));
