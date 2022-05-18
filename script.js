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


console.log('sum salary is :'+sum+' sum age :'+age);