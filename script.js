
let input = 6;
let f1 = 0;
let f2 = 1;
let count_for = 1;
for(let i=2; i<input; i++){
    f2 = f1;
    f1 = count_for;
    count_for = f2 + f1;
}
console.log(count_for);

input = 6;
f1 = 0;
f2 = 1;
let count_while = 1;
let i = 2;
while(i<input){
    f2 = f1;
    f1 = count_while;
    count_while = f2 + f1;
    i++;
}
console.log(count_while);
console.log(count_for===count_while);