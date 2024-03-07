let students = [
    {
        name:"Nivea",
        n1:8.5,
        n2:7.5
    },
    {
        name:"Gilberto",
        n1:6.5,
        n2:4.2
    },
    {
        name:"Duda",
        n1:7.5,
        n2:8.6
    },
    {
        name:"Thiago",
        n1:5.5,
        n2:3.2
    },
    {
        name:"Filipe",
        n1:8.5,
        n2:8.7
    }
]

function calculateMedia(n1,n2) {
    return ((n1 + n2) / 2).toFixed(1)
}

for(let position of students) {

    if(calculateMedia(position.n1,position.n2) >= 7) {

        alert(`A média do(a) aluno(a) ${position.name} é: ${calculateMedia(position.n1,position.n2)} \n
        Parabéns, ${position.name}! Você foi aprovado(a) no concurso!`)
        
    } else {
        alert(`A média do(a) aluno(a) ${position.name} é: ${calculateMedia(position.n1,position.n2)} \n
        Não foi dessa vez, ${position.name}! Tente novamente!`)
    }
}