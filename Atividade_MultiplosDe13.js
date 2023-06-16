function multiplos13(num1,num2){

    let maior =0;
    let menor = 0;
    let soma =0;

    if(num1>num2)
    {
        maior = num1
        menor = num2
    }
    else{
        maior = num2
        menor=num1
    }

    for(menor; menor <= maior;menor++){

        
if(menor % 13 !== 0){

soma = soma+menor

}}
    return soma
}

console.log(multiplos13(200, 100));