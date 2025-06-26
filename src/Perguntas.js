export const basico = [
  {
    question: "O que é um loop 'for' em programação?",
    options: [
      "Uma condição lógica",
      "Uma estrutura de repetição",
      "Um tipo de variável",
      "Uma função matemática",
    ],
    answer: "Uma estrutura de repetição",
    explanation:
      "O loop 'for' permite executar um bloco de código várias vezes, geralmente com uma variável de controle.",
  },
  {
    question: "Qual destes não é um tipo de dado primitivo em JavaScript?",
    options: ["String", "Boolean", "Function", "Number"],
    answer: "Function",
    explanation:
      "Function é um tipo de objeto em JavaScript, enquanto String, Boolean e Number são tipos primitivos.",
  },
  {
    question: "O que significa 'if' em programação?",
    options: [
      "Definir uma variável",
      "Executar um loop",
      "Criar uma função",
      "Criar uma condição",
    ],
    answer: "Criar uma condição",
    explanation:
      "A estrutura 'if' é usada para executar um bloco de código apenas se uma condição for verdadeira.",
  },
  {
    question: "Qual símbolo é usado para comparação estrita em JavaScript?",
    options: ["==", "=", "===", "!="],
    answer: "===",
    explanation:
      "O operador '===' compara tanto o valor quanto o tipo das variáveis, sendo uma comparação estrita.",
  },
  {
    question: "O que um array armazena?",
    options: [
      "Somente números",
      "Somente textos",
      "Um conjunto de valores",
      "Somente objetos",
    ],
    answer: "Um conjunto de valores",
    explanation:
      "Arrays podem armazenar múltiplos valores de qualquer tipo, inclusive outros arrays ou objetos.",
  },
  {
    question: "Qual destes é um operador lógico?",
    options: ["+", "-", "&&", "%"],
    answer: "&&",
    explanation:
      "O operador '&&' é usado para operações lógicas 'E' (AND) em expressões booleanas.",
  },
  {
    question: "O que 'NaN' significa em JavaScript?",
    options: [
      "Número válido",
      "Número negativo",
      "Not a Number",
      "Nova variável",
    ],
    answer: "Not a Number",
    explanation:
      "'NaN' significa 'Not a Number' e indica que o valor não é um número válido.",
  },
  {
    question: "Como declarar uma variável em JavaScript?",
    options: [
      "let x = 10;",
      "variável x = 10;",
      "constante x = 10;",
      "define x = 10;",
    ],
    answer: "let x = 10;",
    explanation:
      "A forma correta de declarar uma variável em JavaScript é usando 'let', 'var' ou 'const'.",
  },
  {
    question: "Qual comando exibe uma mensagem no console do navegador?",
    options: ["print()", "console.log()", "echo()", "write()"],
    answer: "console.log()",
    explanation:
      "O comando 'console.log()' é utilizado para exibir mensagens no console do navegador.",
  },
  {
    question: "O que 'typeof' retorna em JavaScript?",
    options: [
      "O tipo de dado",
      "O tamanho do dado",
      "O valor da variável",
      "O nome da variável",
    ],
    answer: "O tipo de dado",
    explanation:
      "O operador 'typeof' retorna uma string indicando o tipo do operando.",
  },
];

export const intermediario = [
  {
    question: "O que é uma 'closure' em JavaScript?",
    options: [
      "Uma função dentro de um objeto",
      "Uma função que retorna outra função",
      "Uma função que tem acesso às variáveis fora do seu escopo",
      "Uma função anônima sem nome",
    ],
    answer: "Uma função que tem acesso às variáveis fora do seu escopo",
    explanation:
      "Uma closure ocorre quando uma função interna acessa variáveis do escopo externo, mesmo após o escopo externo ter sido finalizado.",
  },

  {
    question: "O que o método 'bind()' faz em JavaScript?",
    options: [
      "Cria uma nova função com um determinado valor para 'this'",
      "Adiciona um valor ao final de um array",
      "Remove um valor de um array",
      "Retorna o tipo de dado de um valor",
    ],
    answer: "Cria uma nova função com um determinado valor para 'this'",
    explanation:
      "O método 'bind()' retorna uma nova função com o valor de 'this' definido conforme passado como argumento.",
  },

  {
    question: "Qual é a diferença entre '==' e '===' em JavaScript?",
    options: [
      "Não há diferença, ambos são usados para comparação estrita",
      "O '==' compara apenas os valores, o '===' compara valores e tipos",
      "O '===' compara apenas os valores, o '==' compara valores e tipos",
      "O '==' realiza uma comparação de tipo estrito, e o '===' realiza uma comparação de tipo fraco",
    ],
    answer: "O '==' compara apenas os valores, o '===' compara valores e tipos",
    explanation:
      "O '==' faz comparação com conversão de tipo (comparação frouxa), enquanto '===' compara valor e tipo (comparação estrita).",
  },

  {
    question: "O que é um 'Promise' em JavaScript?",
    options: [
      "Uma função que retorna um valor diretamente",
      "Uma forma de manipular chamadas assíncronas, retornando um valor futuro",
      "Uma função que só pode ser executada uma vez",
      "Uma função que cria objetos",
    ],
    answer:
      "Uma forma de manipular chamadas assíncronas, retornando um valor futuro",
    explanation:
      "Promises representam operações assíncronas que podem ser concluídas com sucesso ou falha no futuro.",
  },

  {
    question: "O que é o 'hoisting' em JavaScript?",
    options: [
      "A capacidade do JavaScript de adicionar funções ao escopo global",
      "A elevação de variáveis e funções para o topo do seu escopo durante a execução",
      "A capacidade do JavaScript de armazenar dados em arrays",
      "A execução de código assíncrono de forma síncrona",
    ],
    answer:
      "A elevação de variáveis e funções para o topo do seu escopo durante a execução",
    explanation:
      "No hoisting, declarações de variáveis e funções são movidas para o topo do escopo antes da execução do código.",
  },

  {
    question:
      "Qual método JavaScript é usado para transformar uma string em um array?",
    options: ["split()", "join()", "toArray()", "parse()"],
    answer: "split()",
    explanation:
      "O método 'split()' divide uma string em partes, retornando um array de substrings.",
  },

  {
    question:
      "Qual dessas opções representa uma forma válida de comentar uma linha em JavaScript?",
    options: [
      "<!-- comentário -->",
      "## comentário",
      "// comentário",
      "/* comentário */",
    ],
    answer: "// comentário",
    explanation:
      "'// comentário' é usado para comentários de linha única em JavaScript.",
  },

  {
    question:
      "Qual das opções abaixo cria uma função anônima que retorna o dobro de um número?",
    options: [
      "function double(x) { return x * 2; }",
      "(x) => x * 2",
      "var double = function(x) { return x + 2; }",
      "function(x) => x * 2",
    ],
    answer: "(x) => x * 2",
    explanation:
      "A sintaxe '(x) => x * 2' define uma arrow function anônima que retorna o dobro do parâmetro x.",
  },

  {
    question:
      "Qual dessas estruturas serve para executar um código repetidamente enquanto uma condição for verdadeira?",
    options: ["if", "switch", "while", "try...catch"],
    answer: "while",
    explanation:
      "O laço 'while' executa um bloco de código enquanto a condição especificada for verdadeira.",
  },

  {
    question:
      "Qual método retorna uma nova array com os elementos que passaram em um teste (função)?",
    options: ["filter()", "map()", "forEach()", "reduce()"],
    answer: "filter()",
    explanation:
      "O método 'filter()' cria um novo array apenas com os elementos que passaram no teste implementado pela função fornecida.",
  },
];

export const avancado = [
  {
    question: "O que é o 'Event Loop' em JavaScript?",
    options: [
      "Um tipo de laço de repetição utilizado para manipulação de eventos",
      "O processo que garante a execução do código assíncrono em JavaScript",
      "Uma função para tratamento de erros em JavaScript",
      "A função que gera eventos no console",
    ],
    answer:
      "O processo que garante a execução do código assíncrono em JavaScript",
    explanation:
      "O Event Loop é responsável por gerenciar a execução de tarefas assíncronas, permitindo que o JavaScript seja não bloqueante.",
  },

  {
    question: "O que significa 'debounce' em JavaScript?",
    options: [
      "Uma técnica para evitar múltiplos disparos de um evento em intervalos curtos de tempo",
      "Uma técnica para otimizar a performance de loops",
      "Uma maneira de manipular a memória de maneira eficiente",
      "Um método para remover eventos do DOM",
    ],
    answer:
      "Uma técnica para evitar múltiplos disparos de um evento em intervalos curtos de tempo",
    explanation:
      "Debounce limita a execução de uma função, garantindo que ela só seja chamada após um certo tempo sem novas execuções.",
  },

  {
    question: "O que é 'Web Workers' em JavaScript?",
    options: [
      "Uma API que permite rodar código JavaScript em threads separadas do principal",
      "Uma biblioteca para manipulação de DOM",
      "Uma técnica para garantir a execução de código em uma única thread",
      "Uma funcionalidade que realiza o controle de erros em JavaScript",
    ],
    answer:
      "Uma API que permite rodar código JavaScript em threads separadas do principal",
    explanation:
      "Web Workers permitem a execução de scripts em background, sem bloquear a thread principal da aplicação.",
  },

  {
    question: "O que é a técnica de 'memoization' em JavaScript?",
    options: [
      "Armazenar os resultados de funções para evitar cálculos repetidos",
      "Armazenar dados em memória RAM para otimização de performance",
      "A técnica de adiar a execução de uma função até que seja necessária",
      "A técnica de gerenciar a alocação de memória",
    ],
    answer: "Armazenar os resultados de funções para evitar cálculos repetidos",
    explanation:
      "Memoization armazena os resultados de funções para que, ao receber os mesmos argumentos, o valor já calculado seja retornado.",
  },

  {
    question: "O que são 'Generators' em JavaScript?",
    options: [
      "Funções que podem ser interrompidas e retomadas de onde pararam",
      "Funções assíncronas que retornam um 'Promise'",
      "Funções que geram eventos no DOM",
      "Funções que geram múltiplos valores simultaneamente",
    ],
    answer: "Funções que podem ser interrompidas e retomadas de onde pararam",
    explanation:
      "Generators são funções especiais que podem ser pausadas e continuadas, usando a palavra-chave 'yield'.",
  },

  {
    question:
      "Em um projeto React Native, qual hook é usado para executar um efeito colateral após a rederização de um componente?",
    options: ["useEffect()", "useState()", "useRef()", "useLayoutEffect()"],
    answer: "useEffect()",
    explanation:
      "O hook 'useEffect()' é utilizado para lidar com efeitos colaterais após a renderização de componentes em React e React Native.",
  },

  {
    question:
      "O que acontece quando você tenta acessar uma variável declarada com let antes de sua declaração?",
    options: [
      "Ocorrera um erro de sintaxe",
      "Ocorrera um erro de referência",
      "Ocorrera um erro de execução",
      "Ocorrera um erro de semântica",
    ],
    answer: "Ocorrera um erro de referência",
    explanation:
      "Variáveis declaradas com 'let' não são acessíveis antes da declaração devido ao 'temporal dead zone', resultando em erro de referência.",
  },

  {
    question:
      "Qual dessas abordagens é mais eficiente para lidar com múltiplas chamadas assíncronas que dependem uma da outra em JavaScript?",
    options: ["Promises", "Callbacks", "Eventos", "Async/Await"],
    answer: "Async/Await",
    explanation:
      "Async/Await permite escrever código assíncrono de forma mais legível e sequencial, facilitando o controle do fluxo.",
  },

  {
    question:
      "Qual é a principal vantagem do uso de async/await sobre Promises com .then()?",
    options: [
      "Melhora a performace do código",
      "Evita o uso de variáveis",
      "Permite execução síncronia real",
      "Torna o código mais legível e fácil de manter",
    ],
    answer: "Torna o código mais legível e fácil de manter",
    explanation:
      "Async/await simplifica o código assíncrono, tornando-o mais parecido com código síncrono e facilitando a manutenção.",
  },

  {
    question: "Qual é o papel do método 'Promise.all()'?",
    options: [
      "Executar uma promise após outra",
      "Executar várias promises e resolver quando todas forem resolvidas",
      "Rejeitar a primeira promise recebida",
      "Criar uma promise que nunca rejeita",
    ],
    answer: "Executar várias promises e resolver quando todas forem resolvidas",
    explanation:
      "'Promise.all()' aceita um array de promises e retorna uma única promise resolvida quando todas forem resolvidas, ou rejeitada se alguma falhar.",
  },
];
