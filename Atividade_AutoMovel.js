 
function calculo (Tempo,Velocidade){

    let distancia_Perc = Velocidade * Tempo;
    let total = distancia_Perc / 12;
    return total.toFixed(3)

}

console.log(calculo(10,85))