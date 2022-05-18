let employee = [5]
employee[0] = {
    'name' : 'a',
    'age' : 68,
    'salary' : 75900,
}
employee[1] = {
    'name' : 'b',
    'age' : 35,
    'salary' : 55400,
}
employee[2] = {
    'name' : 'c',
    'age' : 51,
    'salary' : 81000,
}
employee[3] = {
    'name' : 'd',
    'age' : 76,
    'salary' : 111000,
}
employee[4] = {
    'name' : 'e',
    'age' : 22,
    'salary' : 20500,
}
let sum=0;
for(let i=0 ; i<5 ; i++){
    sum = sum + employee[i].salary
}

let age = 0;
for(let i=0 ; i<5 ; i++){
    age = age + employee[i].age
}
age = age / employee.length;

let money = 0;
let taxSum = 0;
for(let i=0 ; i<5 ; i++){
    money = 12 * employee[i].salary

    let tax;
if(money < 150000){
    tax = 0;
}
else if(money <= 300000){
    tax = (money - 150000) * 0.05;
}
else if(money <= 500000){
    tax = (money - 300000) * 0.1 + 7500;
}
else if(money <= 750000){
    tax = (money - 500000) * 0.15 + 27500;
}
else if(money <= 1000000){
    tax = (money - 750000) * 0.20 + 65000;
}
else if(money <= 2000000){
    tax = (money - 1000000) * 0.25 + 115000;
}
else if(money <= 5000000){
    tax = (money - 2000000) * 0.30 + 365000;
}
else if(money >= 5000001){
    tax = (money - 5000000) * 0.35 + 1265000;
}
taxSum = taxSum +tax
}
let ats = 0;
ats = taxSum / 5

console.log('sum salary is :'+sum+' sum age :'+age+' sum tax is :'+ats);