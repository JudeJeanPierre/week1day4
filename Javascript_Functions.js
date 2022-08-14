


// Ex. 1
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}
console.log(maxOfTwoNumbers(3, 9));


// Ex. 2

function maxOfThree (f, g, h){
    if (f > g && f > h){
        return f;
    }
        else if (g > f && g > h){
            return g;
        } else {
    return h;
    }

}
console.log('The largest number is:'+' '+maxOfThree(7, 5, 8));

// Ex. 3

function isCharAVowel(char){
    if (char==="a" || 
        char==="e" || 
        char==="i" || 
        char==="o" ||
        char==="u"){
        return "True";
    } else {
        return "False";
    }
    
} 
console.log(isCharAVowel("e"));
Ref.: www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php


// Ex. 4

 let sumArray = [4, 7, 9, 6];
 let sum = sumArray.reduce(function(a,b){
    return a + b;
    }, 0);
   
console.log("The sum of the array is: " + sum);

// Ex. 5

let multiplyArray = [7, 5, 3];
 let prod = 1, i;
 for (i = 0; i < multiplyArray.length; i += 1){
    prod *= multiplyArray[i];
 }
    
console.log("The product of the array is: " + prod);
// Ref.: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-12.php


//Ex. 6

const numArgs = (a, b, c, d)=>{
    return numArgs()
}
console.log(numArgs.length);

Ex. 7
function reverseString(str) {
    const arrayString = str.split("");
    const reverseArray = arrayString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
    }
console.log(reverseString("Jude"));
// Ref.: https://flexiple.com/javascript/reverse-string-javascript/
            
// OR (other way)

function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));


// Ex. 8
 
function longestStringInArray(str){
    let longestString = str.split(" ");
    longestString.sort(function (a,b){
         return b.length - a.length; 
     })
     return ('The longest string is: ' + longestString[0] + ',' + ' with ' + longestString[0].length + ' characters');
}
console.log(longestStringInArray(str = "PerScholas is the best place for software engineering training "));

// Ref.: Finding longest string in array - javascript - Stack Overflow
https://stackoverflow.com


Ex. 9

function stringsLongerThan(str, filter){
    let longerThan = str.split(" ");
    longerThan.sort(function (a,filter){
         return a.length > filter; 
     })
     return ('The strings longer than the number: ' + longerThan[0]);
}
// Let filter = 5
console.log(stringsLongerThan(str = "PerScholas is the best ", 5));

// OR with numbers

let numbersLargerThan = (arr, num) => {
  return arr.reduce((acc, curr)=>{ 
    if(curr > num){
      return acc.concat(curr) 
    }else{
      return acc
    }
  }, [])   
}
  
console.log(numbersLargerThan( [65, 16, 0, 6, 64, 1, 68], 16))
