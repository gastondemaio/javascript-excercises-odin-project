console.log(23 + 97);
console.log(15 + 18 + 87 + 51 + 28 + 91);
console.log((4 + 6 + 9) / 77);
       
let a = 10;
console.log(a);

a = 15;

let b = 7 * a;

console.log(b);

const max = 57;
const actual = max - 13;
const porcentage = actual / max;
console.log(porcentage);

const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);

const single = 'single quotes';
const double = "double quotes";
const backtick = `backtick`

const one = "Hello, ";
const two = "how are you?"
const joined = `${one}${two}`

let text = "ABCDEFGH"
let length = text.length;
console.log(length)

let char = text.charAt(0)
console.log(char)

let charb = text.charCodeAt(0);
console.log(charb)

let charc = text.codePointAt(0);
console.log(charc)

const ins = "UTNGaston"
let letter = ins.at(2)
console.log(letter)

let letterb = ins[2];
console.log(letterb)

let letterc = ins.at(-5)
console.log(letterc)


function add7(number){
    return number + 7
}

let result = add7(15)
console.log(result);

function multiply(num1, num2){
    return num1 * num2
}

let result2 = multiply(2, 3)
console.log(result2)

function capitalize(string){
    if(string == "abcd"){
        return "Abcd"
    }else if(string == "ABCD"){
        return "Abcd"
    }else if(string == "aBcD"){
        return "Abcd"
    }
}

let result3 = capitalize("aBcD")
console.log(result3)

function lastLetter(string2){
    return string2.charAt(string2.length - 1)
}

let result4 = lastLetter("francohermoso")
console.log(result4)