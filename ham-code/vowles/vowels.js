function vowels(input) {
    const vowels = ["a", "e", "i", "u", "o"];
    let vowelCount = 0;
    vowels.forEach(vowel => {
        const vowelArray = input.match(new RegExp(vowel, "g")) || []
        vowelCount += vowelArray.length
    })
    return Math.pow(2, vowelCount);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (input)=> {
    console.log(vowels(input));
});

rl.on("close", () =>process.exit(0));

module.exports = vowels;