let score = prompt("Enter your score: ");

if (score>=80 && score<=100){
    console.log("Grade is: A");
}
else if(score>=70 && score<79){
    console.log("Grade is: B");
}
else if(score>=60 && score<69){
    console.log("Grade is: C");
}
else if(score>=50 && score<59){
    console.log("Grade is: D");
}
else if(score>0 && score<49){
    console.log("Grade is: F");
}
else{
        console.log("Enter a valid score within 0 - 100");
}
