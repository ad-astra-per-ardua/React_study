function debugging() {
    console.log('Testing.') // Declaring function
}
debugging(); // Calling function.

function printing(parameterA, parameterB = 'Default value.') {
    console.log(parameterA)
    console.log(parameterB)
}
printing('tempA'); // parameterB will replace by default value.
printing('testA', 'testB'); // Can override default value.

function returning(paramA, paramB) {
    return "Rewinding JavaScript By " + paramA + ' On, ' + paramB + '.'
}
console.log(returning('rlatjdals', '4/16'))
