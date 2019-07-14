function hypo() {
    return  Math.sqrt(Math.pow(process.argv[3], 2) + Math.pow(process.argv[4], 2));
}

function leg() {
    return  Math.sqrt(Math.pow(process.argv[4], 2) - Math.pow(process.argv[3], 2));
}

if (`${process.argv[2]}`.toLowerCase() == 'hypotenuse') {
    console.log(hypo());
} else if (`${process.argv[2]}`.toLowerCase() == 'leg') {
    console.log(leg());
} else if (`${process.argv[2]}`.toLowerCase() == 'help') {
    console.log(
        'User first input must specify whether you are looking for the hypotenuse or the leg. User second input is one leg of the triangle. If you chose hypotenuse user third input is the second leg of the triangle. If you chose leg user third input is the hypotenuse of the triangle.');
} else {
    console.log('Run the program again with \"Help" as your first input.')
}