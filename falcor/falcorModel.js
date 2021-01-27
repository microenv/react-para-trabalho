import falcor from "falcor";

const falcorModel = new falcor.Model({
  cache: {
    todos: [
      {
        name: "get milk from corner store",
        done: false,
      },
      {
        name: "withdraw money from ATM",
        done: true,
      },
    ],
    aprenderReactDoZero: {
      articles: [
        {
          video_url: "https://www.youtube.com/embed/XQxitgyZ_S4",
          title: "React em 40 minutos",
        },
        {
          video_url: "https://www.youtube.com/embed/Ws9WVHhNq5M",
          title: "Explicando melhor os componentes",
        },
        {
          video_url: "https://www.youtube.com/embed/XQxitgyZ_S4",
          title: "React em 40 minutos",
        },
        {
          video_url: "https://www.youtube.com/embed/Ws9WVHhNq5M",
          title: "Explicando melhor os componentes",
        },
        {
          video_url: "https://www.youtube.com/embed/XQxitgyZ_S4",
          title: "React em 40 minutos",
        },
        {
          video_url: "https://www.youtube.com/embed/Ws9WVHhNq5M",
          title: "Explicando melhor os componentes",
        },
      ],
    },
  },
});

(async function () {
  // const results = await falcorModel.getValue("todos[0].name");
  const results = await falcorModel.get(
    // ["todos", { from: 0, to: 1 }, ["name", "done"]],
    // ["todos", "length"]
    [
      "aprenderReactDoZero",
      "articles",
      { from: 0, to: 2 },
      ["video_url", "title"],
    ],
    ["aprenderReactDoZero", "articles", "length"]
  );
  console.log("==================================");
  console.log(JSON.stringify(results, null, 2));
  console.log("==================================");
})();

export default falcorModel;

// const dataSource = new falcor.Model({
//   // aprenderReactDoZero: {
//   articles: {
//     0: {
//       video_url: "https://www.youtube.com/embed/XQxitgyZ_S4",
//       title: "React em 40 minutos",
//     },
//     v0nhj4: {
//       video_url: "https://www.youtube.com/embed/Ws9WVHhNq5M",
//       title: "Explicando melhor os componentes",
//     },
//     n98de: {
//       video_url: "https://www.youtube.com/embed/XQxitgyZ_S4",
//       title: "React em 40 minutos",
//     },
//     ausy44: {
//       video_url: "https://www.youtube.com/embed/Ws9WVHhNq5M",
//       title: "Explicando melhor os componentes",
//     },
//     sugtf6: {
//       video_url: "https://www.youtube.com/embed/XQxitgyZ_S4",
//       title: "React em 40 minutos",
//     },
//     f34ff: {
//       video_url: "https://www.youtube.com/embed/Ws9WVHhNq5M",
//       title: "Explicando melhor os componentes",
//     },
//   },
//   // },
// }).asDataSource();

// (async function () {
//   // const md = await falcorModel.getValue(["articles[0]", "id"]);
//   // console.log("ds == ", dataSource);
//   const articles = await dataSource
//     .get(['articles["0"]["video_url"]'])
//     .forEach((a) => console.log("aaa = ", a));
//   console.log("===============================");
//   console.log("articles = ", articles);
//   console.log("===============================");
// })();
// // const _falcorModel = new falcor.Model({ source: falcorModel });

// // export default dataSource;
// export default new falcor.Model({ source: dataSource });
