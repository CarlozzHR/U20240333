let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese una frase: ', (frase)=>{
    function capitalizarF(frase){
        let palabras = frase.split('');
        for (let i=0;i<palabras.length;i++){
            palabras[i]=palabras[i].charAt(0).toUpperCase()+
            palabras[i].slice(1).toLowerCase();
        }
        let fraseCapita = palabras.join('');
        return fraseCapita
    }
    console.log(capitalizarF(frase))
    rl.close();
});