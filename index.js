const generosMusicais = {
    inicio: "Escolha o gênero musical que melhor se encaixa na música que quer adicionar",
    generos: [
        {
            text: "Pop",
            next: "pop"
        },
        {
            text: "Rock",
            next: "Rock"
        },
        {
            text: "Jazz",
            next: "Jazz"
        },
        {
            text: "Funk",
            next: "Funk"
        },
        {
            text: "Sertanejo",
            next: "Sertanejo"
        },
        {
            text: "gospel",
            next: "gospel"
        },
        {
            text: "Musica classica",
            next: "musicaClassica"
        },
        {
            text: "Hip-Hop",
            next: "HipHop"
        },
    ],
    pop: [],
    Rock: [],
    Jazz: [],
    Funk: [],
    Sertanejo: [],
    gospel: [],
    musicaClassica: [],
    HipHop: []

}
console.log (generosMusicais)

let Escolha = generosMusicais

 for (let contador = 0; contador < Escolha.generos.length; contador++) {
    const escolhido = Escolha.generos[contador]
 }

