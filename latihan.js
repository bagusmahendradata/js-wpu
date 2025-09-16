let save=''

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10-1-i; j++){
        save += ' '
    }
    
    for(let k =0; k < 2*i+1;k++){
        save += '*'
    }
    save +='\n'
}

for(let i = 10; i > 0; i--){
    for(let j = 10; j > 0 +i; j--){
        save += ' '
    }
    
    for(let k =0; k < 2*i-1;k++){
        save += '*'
    }
    save +='\n'
}
console.log(save)