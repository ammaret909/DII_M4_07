
let input = 11;
let prime = true;
for(let i=2; i*i<=input; i++){
    if(input % i  == 0){
        prime = false;
        break
    }
}
console.log(prime);