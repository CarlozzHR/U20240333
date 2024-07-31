let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese su texto: ', (texto)=>{
    const palabras = texto.trim().split(/\s+/);
    const totalDePalabras = palabras.length
    console.log(`El numero de palabras es: ${totalDePalabras}`);
    rl,close()
});