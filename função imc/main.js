let altura=parseFloat(prompt("infome sua altura"))
let peso= parseFloat(prompt("informe seu peso"))
let valor
valor=imc(altura, peso)
let r
r=valor.toFixed(2)
document.write(`seu imc é de ${r}`)


function imc (altura,peso){
    let resultado
    resultado=(peso/(altura*altura))
    return resultado
}