let nomeHeroi= prompt("Digte o seu nome Heroi: "); 
let quantidadeXp = prompt("Digite sua quantidade de XP:");
let quantidadeXp_num = Number(quantidadeXp);
let classificaçaoHeroi;


if ( quantidadeXp_num>0 && quantidadeXp <=1000) {
    classificaçaoHeroi = "Ferro";
}
else if (quantidadeXp_num>=1001 && quantidadeXp<=2000  ) {
    classificaçaoHeroi = "Broze";
}
else if (quantidadeXp_num>=2001 && quantidadeXp<=5000) {
    classificaçaoHeroi = "Prata";
}
else if (quantidadeXp_num>=5001 && quantidadeXp<=7000 ) {
    classificaçaoHeroi = "Ouro";
}
else if ( quantidadeXp_num>=7001 && quantidadeXp<=8000) {
    classificaçaoHeroi = "Platina";
}
else if ( quantidadeXp_num>=8001 && quantidadeXp<=9000) {
    classificaçaoHeroi = "Ascendente";
} 
else if ( quantidadeXp_num>=9001 && quantidadeXp<=10000) {
    classificaçaoHeroi = "Imortal";
} 
else{
    classificaçaoHeroi = "Radiante";
}

if (classificaçaoHeroi) {
    console.log("O Herói "+ nomeHeroi + "está no nível "+classificaçaoHeroi);
}

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"