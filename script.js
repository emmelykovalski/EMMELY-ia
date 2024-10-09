const caixaPrincipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector(".caixa-Perguntas");
const caixaAlternativa = document.querySelector(".caixa-Alternativas");
const caixaResultados= document.querySelector(".caixa-Resultados");
const textoResultados = document.querySelector(".texto-Resultados");


const Perguntas = [
{
    enunciado :"Assim que saiu da escola Gabriel se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, o chat também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de Gabriel?",
 

    alternativas: [
        "isso é assustador!",
        "isso é maravilhoso!",
    ]




},

{
    enunciado: "Com a descoberta desta tecnologia uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre IA. No fim de uma aula ela pede que Gabriel escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude Gabriel toma?",

alternativas : [
"Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
"Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."

]


},

{
    enunciado: "quastas constelações existem na via láctea?",

    alternativas: [
        "45 constelações",
    "67 constelações.",
    "81 constelações."
]

},



{
    enunciado: "Como é chamada a galaxia em que o planeta terra está localizado?",

    alternativas:[
    "Via láctea.",
     "Andromeda."

    ]
}


];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
perguntaAtual = Perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraAlternativas();
}

function mostraAlternativas() {
for(const alternativas of perguntaAtual.alternativas){
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativas;
botaoAlternativas.appendChild(botaoAlternativas);
}

}

mostraPergunta();

