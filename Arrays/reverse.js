// create a function that reverses a string:
// 'Hi My name is Edet' should be:
// 'tedE si eman yM iH'

function reverse(str) {
    if(!str || str.length < 2 || typeof str != 'string'){
        return "Wrong format"
    }

    const backwards = []
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i--){
        backwards.push(str[i])
    }
    return backwards

}

reverse('Hi My name is Edet')