let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese su cadena de texto: ', (cadena)=>{
    const cadenaEnMayusculas = cadena.toUpperCase();
    console.log(cadenaEnMayusculas)
    rl.close();
})