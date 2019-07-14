let choice = process.argv[2]; //first input after: node [file name]
let choice2 = process.argv[3]; //second input after: node [file name] [input 1]

if ((choice.toLowerCase() == 'rock'.toLowerCase()) && (choice2.toLowerCase() == 'paper'.toLowerCase())) {
    console.log('Player 2 Wins!');
    //Player 1: rock Player 2: paper
} else if (choice.toLowerCase() != undefined && choice2 == undefined) {
    console.log('You need to make 2 inputs! Find a friend!');
    //Player 1: [has an input] Player 2: [no input]
    //choice2 = Math.random() > .5 ? 'rock' : 'paper';
    console.log(choice2);
} else if ((choice.toLowerCase() == 'scissors'.toLowerCase()) && (choice2.toLowerCase() == 'paper'.toLowerCase())) {
    console.log('Player 1 Wins!');
    //Player 1: scissors Player 2: paper
} else if ((choice2.toLowerCase() == 'rock'.toLowerCase()) && (choice.toLowerCase() == 'paper'.toLowerCase())) {
    console.log('Player 1 Wins!');
    //Player 1: paper Player 2: rock
} else if ((choice2.toLowerCase() == 'scissors'.toLowerCase()) && (choice.toLowerCase() == 'paper'.toLowerCase())) {
    console.log('Player 2 Wins!');
    //Player 1: paper Player 2: scissors
} else if (choice.toLowerCase() == choice2.toLowerCase()) {
    console.log('Tie!');
    //Player 1 and 2: [same input]
} else if ((choice.toLowerCase() == 'scissors'.toLowerCase()) && (choice2.toLowerCase() == 'rock'.toLowerCase())) {
    console.log('Player 2 Wins!');
    //Player 1: scissors Player 2: paper
} else if ((choice.toLowerCase() == 'rock'.toLowerCase()) && (choice2.toLowerCase() == 'scissors'.toLowerCase())) {
    console.log('Player 1 Wins!');
    //Player 1: rock Player 2: scissors
}


function random() {
    let number = Math.random();
    let timesTen = number * 10;
    let final = Math.floor(timesTen);
    console.log(final);

}

random();
