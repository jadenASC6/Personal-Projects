// make a program that calculates tax and 0.0625
// food card: 20
// 20-(input*1.0625)
// if value of this equation is less than 0 you cant buy

let foodCard = 20;
let price = 1.0625 * process.argv[2];
let total = process.argv[2];

if ((foodCard -= price) >= 0) {
    console.log('Go for it you can afford it!');
} else if ((foodCard -= price) < 0) {
    console.log('Bruh you broke, do not buy');
}