// Functions 

// exercice 1 

function age(myAge){
    let mumAge = myAge * 2;
    let dadAge = mumAge * 1.2;

    alert('My mum\' age is '+ mumAge + ' and my dad\' age is ' + Math.round(dadAge) );
}

let val = prompt('Enter your age');
alert(age(val));

// exercice 2 

function age1(myAge){
    let mumAge = myAge * 2;
    return mumAge;
}

let val1 = prompt('Enter your age for the second function');
alert(age1(val1));