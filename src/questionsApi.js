export const questions = [
  {
    question: "Quem foi o criador do react",
    options: ["Google", "Facebook", "Instagram"],
    ask: "Facebook",
    id: "p0",
  },
  {
    question: "Qual método é utilizado para criar compononetes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    ask: "React.createElement()",
    id: "p1",
  },
  {
    question: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import("./Component")',
    ],
    ask: 'import Component from "./Component"',
    id: "p2",
  },
  {
    question: "Qual importamos um componente externo?",
    options: ["useFetch()", 'require("./Component")', 'import("./Component")'],
    ask: "useFetch()",
    id: "p3",
  },
  {
    question: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    ask: "use",
    id: "p4",
  },
];
