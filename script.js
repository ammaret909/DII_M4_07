let score = 79.4;
let grade;
if(score > 80){
    grade = 'A';
}
else if(score >= 75){
    grade = 'B';
}
else if(score >= 70){
    grade = 'C';
}
else if(score >= 65){
    grade = 'D';
}
else if(score >= 60){
    grade = 'f';
}
console.log(grade +' '+ score);