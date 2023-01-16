function reverseString(str){
    if(!str || str.length < 2 || typeof str != 'string'){
        return "Wrong input type"
    }

    const backwards = []
    const totalItems = str.length - 1

    for (let i = totalItems; i >= 0; i--){
        backwards.push(str[i])
    }

    return backwards.join('')
}

function reverseString2(str){
    return str.split('').reverse().join('')
}

