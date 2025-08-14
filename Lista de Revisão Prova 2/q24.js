const poke1 =
{
    id: "6",
    nome: "Charizard",
    tipo: "Fogo",
    poder: "",
    hp: 20
}
poke1.hp = Number(poke1.hp)
poke1.poder = Number(poke1.poder)
poke1.poder = (Math.random() * 10)
poke1.poder = Math.floor(poke1.poder) + 1

const poke2 =
{
    id: "658",
    nome: "Greninja",
    tipo: "Água",
    poder: "",
    hp: 20
}
poke2.hp = Number(poke2.hp)
poke2.poder = Number(poke2.poder)
poke2.poder = (Math.random() * 10)
poke2.poder = Math.floor(poke2.poder) + 1

for (turnos = 0; poke1.hp > 0 && poke2.hp > 0; turnos++) {

    console.log("Hp do ", poke1.nome , " esta em: ", poke1.hp)
    console.log("Hp do ", poke2.nome , " esta em: ", poke2.hp)

    poke1.hp = poke1.hp - (poke2.poder + 3)
    poke2.hp = poke2.hp - poke1.poder

    if (poke1.hp <= 0) 
    {
        console.log("O ", poke2.nome, " saiu vencedor da batalha")
        break;
    }

    if (poke2.hp <= 0) 
    {
        console.log("O ", poke1.nome, " saiu vencedor da batalha")
        break;
    }

}