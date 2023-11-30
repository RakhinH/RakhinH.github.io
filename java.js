const myName = "Rakhin";

let text = 'my name is ${myName}';

let myBool = false;

if(myBool == false){//if statement
    console.log("true");
}

/*
this
is
a
multi 
comment
line
*/

//++ adds 1

//-- takesaway 1

let newNum = 0;

while(newNum < 5){
    newNum++;

    console.log(newNum);
}

for(let i = 0; i < 10; i++){
    console.log(i);
}

alert("hello");//sends message to the user w/o usingthe console

let colour = prompt("fav colour?");

let answer = confirm("Do u like dogs?");

function Test(num1, num2){
    return num1+num2
}

let num = Math.floor(Math.random() * 10);

console.log(num);

function(){
    alert("Hi");
}

for(let image of images){
    image.style.height = "300px";

    image,addEventListener("click", Click("080"))
}