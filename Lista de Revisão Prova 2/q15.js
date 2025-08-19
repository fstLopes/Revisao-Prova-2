const filme = {
    nome:"",
    classificação:""
}
filme.nome = prompt("Qual o nome do filme?")

filme.classificação = prompt("Qual a idade para assistir o filme?")
filme.classificação = Number(filme.classificação)

console.log("Nome do filme é:",filme.nome,"\nClassificação do filme:",filme.classificação)