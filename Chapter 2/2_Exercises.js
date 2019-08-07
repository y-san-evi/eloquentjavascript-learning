//No hints!
//Looping a triangle
let a = "";
for (let x = 1; x < 7; x++) {
    a += "#";                                        //concatenates a '#' at the end of the string
    console.log(a);
}

//FizzBuzz
for(let x = 1; x <= 100; x++) {
    if (x % 15 === 0){                                //checks for the LCM of 3 and 5, 15, first
        console.log("FizzBuzz");
        continue;
    }
    else if (x % 3 === 0) {                           //all remaining multiples of 3 should be Fizz
        console.log("Fizz");
        continue;
    }
    else if (x % 5 === 0) {                           //and all remaining multiples of 5 should be Buzz
        console.log("Buzz");
        continue;
    }
    console.log(x);
}

//Chessboard
let size = 16;                          //grid size
let polarity = true;                    //For even grid lengths, the pattern reverses each new line
let result = "";
for (let x = 1; x <= size ** 2; x++) {
    if (x > size && x % size === 1){
        if (size % 2 === 0) {
            polarity = !polarity;       //This variable gets the program to flip the character printed every time it starts a new line
        }
            result += '\n';
    }
    if (x % 2 === 0)
        if (polarity)
            result += '#';
        else
            result += ' ';
    else
        if (polarity)
            result += ' ';
        else
            result += '#';
}
console.log(result);