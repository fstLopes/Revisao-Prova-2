const pessoa =
{
nome: "Luiz Felipe",
peso: "82",
altura: "1.84",
temperatura: ""
}
pessoa.peso = Number(pessoa.peso)
pessoa.altura = Number(pessoa.altura)

pessoa.temperatura = prompt("Qual a temperatura ?")
pessoa.temperatura = Number(pessoa.temperatura)

if(pessoa.temperatura >= 37.5)
{
    console.log("",pessoa.nome,"esta com febre")
}
else{
    console.log("Nao esta com febre")
}
