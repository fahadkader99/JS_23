// Break & Continue

// Break

/*
for(let i = 1; i<=10; i++){
    if(i == 5){
    }
    break;     
    console.log(i);
}
*/

// continue;

for (let i = 1; i <= 10; i++) {
    if (i == 2 || i == 4 || i == 8) {
        continue;
    }
    console.log(i);
}