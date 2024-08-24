
const date = new Date('February 20, 2012 03:12:00')

function formatDate(date){
    const opciones = { hour: '2-digit', minute: '2-digit', year:'numeric', month:'short', day:'numeric', hour12: 'true'}
    return date.toLocaleString('en-US', opciones)
}

console.log(formatDate(date))