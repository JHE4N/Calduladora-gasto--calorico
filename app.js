//peso, altura, idade, sexo
/*
Fórmula para homens: TMB = fator da taxa de atividade x {66 + [(13,7 x Peso(kg)) + ( 5 x Altura(cm)) – (6,8 x Idade(anos))]}
Fórmula para mulheres: TMB = fator da taxa de atividade x {655 + [(9,6 x Peso(kg)) + (1,8 x Altura(cm)) – (4,7 x Idade(anos))]}
*/
let genero = document.getElementsByClassName("genero");
let tmb = NaN
if(sexo == 'M'){
    tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade)
} else {
    tmb = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)
}
console.log(tmb)