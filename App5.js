let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese su cadena aqui: ', (cadena)=>{
    parseInt(rl.question('Donde quiere que inicie su subcadena? ', (inicio)=>{
        parseInt(rl.question('Que longitud desea? ', (longitud)=>{
            const subcadena = cadena.substring(inicio, inicio + longitud);
            console.log(`La subcadena es: ${subcadena}`);
            rl.close();
        }))
    }))
})