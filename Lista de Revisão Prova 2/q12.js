const boneco = {

    nome: "Chuck",
    preço: "9.99",
    estoque: ""
}

boneco.estoque = prompt("Quantos bonecos há no estoque?")
boneco.estoque = Number(boneco.estoque)

if(boneco.estoque > 0)
{
    console.log("Há bonecos Chuck no estoque disponiveis por 9,99")
}