


//Morning exercise: 99 bottles
for (let i = 99; i > 0; i--) {
    console.log (+ i + " bottles of beer on the wall. Take one down and pass it around")
}



//Print integers multiplied by 3
let t = 0;
while( t <= 20){
    if( t % 2 === 0){
        console.log(t*3)
    } t++
}


//Functions - ex 1

function sumNumbers (x, y, z){
    let sum = x + y + z
    console.log(sum)
}
sumNumbers(4, 6, 5);

// Functions - ex 2

function additionNumbers (a, b, c){
    let addition = a + b + c
    console.log(addition/3)
}
additionNumbers (7, 5, 9);