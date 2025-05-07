import { createWebHistory, createRouter } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   alias: "/atividades",
  //   name: "atividades",
  //   component: () => import("./components/TutorialsList"),
  // },
  // {
  //   path: "/tutorials/:id",
  //   name: "tutorial-details",
  //   component: () => import("./components/Tutorial"),
  // },
  // {
  //   path: "/add",
  //   name: "add",
  //   component: () => import("./components/AddTutorial"),
  // },
  {
    path: "/",
    alias: "/atividades",
    name: "atividades",
    component: () => import("./components/AtividadeList"),
  },
  {
    path: "/atividades/:idAtividade",
    name: "atividade-detalhe",
    component: () => import("./components/Atividade"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AtividadeAdd"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
