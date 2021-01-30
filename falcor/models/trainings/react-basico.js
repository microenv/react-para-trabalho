import falcor from "falcor";

export default function (root) {
  const topic = (topicSlug) => ({
    $type: "ref",
    value: [...root, "topics", "by-slug", topicSlug],
  });

  return {
    slug: root[root.length - 1],
    title: "React Básico",
    description: "Curso de React Básico",
    topics: {
      asc: [
        topic("curiosidades-aleatorias-sobre-react"),
        topic("hello-world-react"),
        topic("entendendo-sobre-componentes-react"),
        topic("react-classes-vs-hooks"),
        topic("react-props-state"),
        topic("comunicacao-componentes-react"),
      ],
      "by-slug": {
        // "": {
        //   title: "",
        //   description: "",
        //   videos: [],
        //   articles: [],
        // },
        "curiosidades-aleatorias-sobre-react": {
          title: "Curiosidades sobre React",
          description:
            "Vídeos que vão te deixar por dentro do Mundo React. Sem tema específico, apenas conteúdo interessante sobre React.",
          videos: [
            {
              url: "https://www.youtube.com/watch?v=DTy3oIU-NN4",
              title:
                "React vs Vue vs Angular - Qual framework frontend escolher para 2021?",
              description: `
                - Qual tem o melhor mercado de trabalho?
                - Qual mais fácil de aprender?
                - Qual tem a melhor comunidade?
                - Qual resolve mais problemas?
              `,
            },
            {
              url: "https://www.youtube.com/watch?v=S-trXOddXMQ",
              title:
                "Como Saber Se Você Já É Um Programador Pleno? // Vlog #147",
              description:
                "Afinal de contas quando um desenvolvedor deixa de ser Junior e se torna um Desenvolvedor Pleno?",
            },
            {
              url: "https://www.youtube.com/watch?v=2a8F5QZEZ1c",
              title:
                "Minha evolução de salário como PROGRAMADOR - Quanto eu ganho HOJE?",
              description:
                "O vídeo de hoje fala um pouco sobre quanto ganho hoje e como foi minha evolução de salário até agora, falando abertamente sobre valores e tudo mais.",
            },
            // {
            //   url: '',
            //   title: '',
            //   description: '',
            // }
            // {
            //   url: '',
            //   title: '',
            //   description: '',
            // }
          ],
          articles: [],
        },
        "hello-world-react": {
          title: "Hello World",
          description: "Aprenda a criar um projeto react e começar a programar",
          videos: [
            {
              url: "https://www.youtube.com/watch?v=LqP7ks7rAEY",
              title: "ReactJS - Criando primeiro projeto",
              description:
                "Nesse video damos os primeiros passos com ReactJS criando o seu primeiro projeto na pratica e entendendo passo a passo.",
            },
            {
              url: "https://www.youtube.com/watch?v=s9Whqnmh-a8",
              title: "Entendendo os Arquivos e Estrutura do Projeto",
              description:
                "Vídeo com o objetivo de explicar a organização dos arquivos e pastas do projeto que você criou seguindo o vídeo anterior.",
            },
          ],
          articles: [],
        },
        "entendendo-sobre-componentes-react": {
          title: "Entendendo Sobre Componentes",
          description: "",
          videos: [
            {
              url: "https://www.youtube.com/watch?v=4yL_1dGbC6U",
              title: "O que são React Hooks",
              description:
                "O React Hooks permite usar estado e outras funcionalidades em componentes sem utilizar uma classe",
            },
            {
              url: "https://www.youtube.com/watch?v=Em1beFfp_Rk",
              title: "Criando Nosso Primeiro Componente",
              description:
                "Aprenda a criar um componente bem simples de contador",
            },
          ],
          articles: [],
        },
        "react-classes-vs-hooks": {
          title: "Classes vs Hooks",
          description:
            "Entenda a diferença entre componentes de classe e componentes funcionais (que são uma função ao invés de uma classe)",
          videos: [],
          articles: [],
        },
        "react-props-state": {
          title: "Props e State",
          description: "Aprenda sobre Props e States de um componente",
          videos: [],
          articles: [],
        },
        "comunicacao-componentes-react": {
          title: "Comunicação entre Componentes",
          description:
            "Aprenda a passar dados entre os seus componentes React!",
          videos: [],
          articles: [],
        },
        "separacao-de-componentes": {
          title: "Separação de Componentes",
          description:
            "Texto descrevendo esta seção! Texto descrevendo esta seção! Texto descrevendo esta seção! Texto descrevendo esta seção! Texto descrevendo esta seção!",
          videos: [
            {
              title: "Video 1 Title",
              url: "https://www.youtube.com/embed/Ws9WVHhNq5M",
              description: "Video 1 Description",
            },
            {
              title: "Video 2 Title",
              url: "https://www.youtube.com/embed/Ws9WVHhNq5M",
              description: "Video 2 Description",
            },
            {
              title: "Video 3",
              url: "https://www.youtube.com/embed/Ws9WVHhNq5M",
              description: "",
            },
          ],
          articles: [
            {
              title: "Separação de Componentes #1",
              url: "https://www.google.com",
              description:
                "Este artigo fala sobre separação de componentes no React",
            },
            {
              title: "Separação de Componentes #2",
              url: "https://www.google.com",
              description: "Lorem Ipsum dolor sit amet...",
            },
          ],
        },
      },
    },
  };
}
