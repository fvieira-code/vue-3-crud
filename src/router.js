import { createWebHistory, createRouter } from "vue-router";

const routes = [
  /*{
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
    path: "/atividade/adicionar",
    name: "atividade-add",
    component: () => import("./components/AtividadeAdd"),
  },*/
  {
    path: "/",
    alias: "/consultores",
    name: "consultores",
    component: () => import("./components/ConsultorList"),
  },
  {
    path: "/consultores/:idConsultor",
    name: "consultor-detalhe",
    component: () => import("./components/Consultor"),
  },
  {
    path: "/consultor/adicionar",
    name: "consultor-add",
    component: () => import("./components/ConsultorAdd"),
  },
  {
    path: "/",
    alias: "/clientes",
    name: "clientes",
    component: () => import("./components/ClienteList"),
  },
  {
    path: "/clientes/:idCliente",
    name: "cliente-detalhe",
    component: () => import("./components/Cliente"),
  },
  {
    path: "/cliente/adicionar",
    name: "cliente-add",
    component: () => import("./components/ClienteAdd"),
  },
  {
    path: "/",
    alias: "/pontos",
    name: "pontos",
    component: () => import("./components/PontoList"),
  },
  /*{
    path: "/pontos/:idPonto",
    name: "ponto-detalhe",
    component: () => import("./components/Ponto"),
  },
  {
    path: "/ponto/adicionar",
    name: "ponto-add",
    component: () => import("./components/PontoAdd"),
  },*/
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
