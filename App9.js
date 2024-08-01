let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese su palabra: ', (palabra)=>{
    const vocal = 'aeiouAEIOU';

    let contador = 0;
    for(let i=0; i<palabra.length; i++){
        if(vocal.includes(palabra[i])){
            contador++;
        }
    }
    console.log(`El numero de vocales es: ${contador}`)
    rl.close();
})