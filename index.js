const history = {
    event: "Escolha um gênero para adicionar uma música",
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
            next: "funk",
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
    pop: {
        event: "Escreva a música que deseja colocar",
        musicas: [],
    },
    rock: {
        event: "Escreva a música que deseja colocar",
        musicas: [],
    },
    jazz: {
        event: "Escreva a música que deseja colocar",
        musicas: [],
    },
    funk: {
        event: "Escreva a música que deseja colocar",
        musicas: [],
    },
    sertanejo: {
        event: "Escreva a música que deseja colocar",
        musicas: [],
    },
    gospel: {
        event: "Escreva a música que deseja colocar",
        musicas: [],
    },
    musicaClassica: {
        event: "Escreva a música que deseja colocar",
        musicas: [],
    },

};

let escolhas = history;

const opcoesElement = document.getElementById("option")
const eventElement = document.getElementById("event")

function showMusic() {
    if (escolhas.event) {
        eventElement.innerHTML = escolhas.event;
    }
    else {
        eventElement.innerHTML = escolhas.musicas;
    }
}

function showOpcoes() {
    opcoesElement.innerHTML = "";

    if (!escolhas || !escolhas.generos) {
        return;
      }

    for (let contador = 0; contador < escolhas.generos.length; contador++) {
        const genres = escolhas.generos[contador];

        const generoElement = document.createElement("button");
        generoElement.classList.add("btn");
        generoElement.innerHTML = genres.text;

        generoElement.addEventListener("click", () => {
            escolhas = history[genres.next];

            showOpcoes();
            showMusic();
        });

       opcoesElement.appendChild(generoElement);
    }
};

showOpcoes();
showMusic();

