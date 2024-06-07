const chooseGenres = {
    generos: [
        {
            text: "Pop",
            next: "pop",
        },
        {
            text: "Rock",
            next: "rock",
        },
        {
            text: "Jazz",
            next: "jazz",
        },
        {
            text: "Funk",
            next:"funk",
        },
        {
            text: "Sertanejo",
            next: "sertanejo",
        },
        {
            text: "Gospel",
            next: "gospel",
        },
        {
            text: "Musica Classica",
            next: "musicaClassica",
        },
        {
            text: "Hip-Hop",
            next: "hipHop",
        },
    ],
    pop: [],
    rock: [],
    jazz: [],
    funk: [],
    sertanejo: [],
    gospel: [],
    musicaClassica: [],
    hipHop: [],

};

let Escolhas = chooseGenres;

const generoEscolha = prompt ("Escolha um dos gêneros abaixo")

for (let contador = 0; contador < Escolhas.generos.length; contador ++) {
    const choosenGender = Escolhas.generos.text;
}


console.log(chooseGenres.generos.length);

