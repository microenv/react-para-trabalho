import falcor from "falcor";
import reactBasico from "../data/react-basico";
import trainingsModel from "./models/trainings";

const falcorModel = new falcor.Model({
  cache: {
    trainings: trainingsModel(["trainings"]),
  },
  my: [{ oi: 123 }],
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
  reactBasico,
  aprenderReactDoZero2: {},
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
});

(async function () {
  // const results = await falcorModel.getValue("todos[0].name");
  const results = await falcorModel.get(
    'trainings["asc"][0..100]["title", "description"]',
    'trainings["asc"][0..100]["topics"]["asc"][0..100]["title", "description"]',
    'trainings["asc"][0..100]["topics"]["asc"][0..100]["videos", "articles"][0..100]["title", "url", "description"]'
  );
  console.log("x==================================");
  console.log(JSON.stringify(results, null, 2));
  console.log("==================================");
})();

export default falcorModel;
