let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese su mensaje: ', (mensaje)=>{
    const numCaracteres = mensaje.length
    console.log(`Sus caracteres son: ${numCaracteres}`);
    let.close();
});