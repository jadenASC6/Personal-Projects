function deriv() {
    let pow = process.argv[3];
    let coeff = process.argv[2];
    let deriva = `${coeff*pow}x^${pow - 1}`;
    if (process.argv[2] && process.argv[3]) {
        return deriva;
    } else if (process.argv[2] && !process.argv[3]) {
        return 'You need to input the exponent!';
    } else if (!process.argv[2]) {
        return 'There\'s nothing to derive!';
    }
}

console.log(deriv());