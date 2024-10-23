const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Qual é o nome da galaxia em que o planeta terra orbita?",
        alternativas: [
            {
                texto:"andromeda!",
                afirmacao:"afirmação"
            },
            {
                texto:"via lactea!",
                afirmacao:"afirmação."
                

            }
        
        ]

    },
    {
        enunciado: "Quantas constelações orbitam sobre a galaxia do planeta terra?",
        alternativas: [
            {
                texto:"52.",
                afirmacao:"afirmação"
            },
            {
                texto:"88.",
                afirmacao:"afirmação."
                

            }
        
        ]

    },
    {
        enunciado: "Como tudo se iniciou?.",
        alternativas: [
            {
                texto:"Atavez de um atomo.",
                afirmacao:"afirmação"
            },
            {
                texto:"Atravez e poeira estelares.",
                afirmacao:"afirmação."
                

            }
        
    
        ]


    },
    { 
        enunciado: "Qual e a galaxia mai proxima e nós?.",
        alternativas: [
            {
                texto:"Andromeda.",
                afirmacao:"afirmação"
            },
            {
                texto:"Galaxia do triangulo.",
                afirmacao:"afirmação."
                

            }
        
    
        ]
    }

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
           atual++;
           mostraPergunta();
           const afirmacoes = opcaoSelecionada
        }
 function mostraResultado(){
    caixaPerguntas.textContent = "A teoria mais aceita atualmente é que ele teve início com o Big Bang um atomo super quente e energizao q explodio assim dando inicio a tudo";
    textoResultados.textContent = historiaFinal += afirmacoes + " ";
    caixaAlternativas.textContent = "";
 }       
mostraPergunta();
