// exercice 1

for(let i = 0; i<=15; i++){
    if(i%2 == 0){
        console.log(i + ' is even');
    }else{
        console.log(i + ' is odd');
    }

}

// exercice 2

var names = ['john', 'sarah', 23, 'Rudolf', 34];
let val;

for(let i = 0; i<names.length; i++)

{
    if(typeof(names[i]) != 'string'){
        continue;

    }else if (typeof(names[i]) == 'string'){
       val = names[i];
       if(val.charAt(0) == val.charAt(0).toUpperCase()){
           console.log(val);

       } 
    }else{
        console.log(val.charAt(0).toUpperCase()+ val.substring(1,val.length ) );
    }

}

for(i = 0; i < names.length; i++){
    if(typeof(names[i]) != 'string'){
        continue;
    }else if (typeof(names[i]) == 'string'){
        if(names[i].charAt(0) == names[i].charAt(0).toUpperCase()){
            console.log(names[i]);
        }else{
            console.log(names[i].charAt(0).toUpperCase() + names[i].substring(1, names[i].length));
        }
    }
}