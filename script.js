let n = 3;
let count_f=1;
for(let i = 1 ; i <= n ; i++){
    count_f = count_f * i
}
console.log(count_f)

n = 3;
let count_w = 1;
while(n>0){
    count_w *= n;
    n--;
}
console.log(count_w)

console.log(count_w === count_f);