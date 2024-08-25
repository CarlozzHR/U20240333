const fecha1 = new Date('2024-08-25')
const mostrarF1 = fecha1.getDay()

const fecha2 = new Date('2005-05-07')

const diferenciaMs = fecha1 - fecha2

const diferenciaDias = diferenciaMs / (1000 * 60 * 60 * 24)

console.log(`La diferencia entre dias es: ${diferenciaDias}`)