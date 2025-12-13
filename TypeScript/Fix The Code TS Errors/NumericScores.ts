const scores: (number | string)[] = [95, "100", 87];

const numericScores: number[] = scores.map(n =>
    typeof n === "string" ? Number(n) : n
);

numericScores.push(82);

console.log(numericScores.reduce((a, b) => a + b));

//ah so we have a code and there is an error in the code
//from my perpective l see that we store values score and the type check is an array of numbers 
//but we see a string right 
//again we pushing 82 intgers which is number type which is fine becuase .push is an array method and 82 will be included in the array
//then using reduce to add all the number but the string will not be added meaning we looking at errors
//so its either we convert everything inside into a number or we make the typechecking handle both cenarials 

//ok l will iterate though this and then turn what is a string into a number then the other codes should work