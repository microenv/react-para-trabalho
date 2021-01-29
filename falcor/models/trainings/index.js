import falcor from "falcor";
import reactBasico from "./react-basico";

export default function (root) {
  return {
    asc: [
      { $type: "ref", value: [...root, "by-slug", "react-basico"] },
      // { $type: "ref", value: [...root, "by-slug", "react-pleno"] },
    ],
    "by-slug": {
      "react-basico": reactBasico([...root, "by-slug", "react-basico"]),
      // "react-basico": {
      //   title: "React Pleno",
      //   description: "Curso de React para quem já sabe o básico",
      // },
    },
  };
}
