let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese su palabra: ', (palabra)=>{
    const esPalindromo = (str) =>{
        const real = str.toLowerCase();
        const palabraInvertida = real.split('').reverse().join('');
        return real === palabraInvertida
    }
    console.log(esPalindromo(palabra)? "La palabra es un palindromo":"La palabra no es un palindromo");
    rl.close();
})