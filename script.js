
let input = 50;
let prime;
for(let i=2; i<=input; i++){
    prime = 1;
    for(j=2;j*j<=i;j++){
        if(i%j == 0){
            prime = 0;
            break;
        }
    }
    if(prime != 0){
        console.log(i+" ");
    }
}