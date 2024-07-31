let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese una frase: ', (frase)=>{
    rl.question('Ingrese la palabra que desea reemplazar: ',(palabraRE)=>{
        rl.question('Ingrese la nueva palabra: ', (nuevaP)=>{
            const nuevaFrase = frase.replace(new RegExp(palabraRE, `g`), nuevaP);
            console.log(nuevaFrase)
        })
    })
})