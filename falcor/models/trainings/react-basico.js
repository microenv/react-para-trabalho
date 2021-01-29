import falcor from "falcor";

export default function (root) {
  return {
    slug: root[root.length - 1],
    title: "React Básico",
    description: "Curso de React Básico",
    topics: {
      asc: [
        {
          $type: "ref",
          value: [...root, "topics", "by-slug", "separacao-de-componentes"],
        },
        {
          $type: "ref",
          value: [...root, "topics", "by-slug", "separacao-de-componentes"],
        },
        {
          $type: "ref",
          value: [...root, "topics", "by-slug", "separacao-de-componentes"],
        },
      ],
      "by-slug": {
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
