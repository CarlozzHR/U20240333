let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese su texto: ',(texto)=>{
    const textoInverso = texto.split('').reverse().join('');
    console.log(`Su texto invertido es: ${textoInverso}`);
    rl.close();
});