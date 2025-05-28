import http from "../http-common";

class AtividadeService {
  salvar(atividade) {
    return http.post("/atividades", atividade);
  }

  atualizar(id, atividade) {
    return http.put(`/atividades/${id}`, atividade);
  }

  excluir(atividade) {
    return http.delete("/atividades", atividade);
  }

  excluirTodas() {
    return http.delete(`/atividades`);
  }

  listar() {
    return http.get("/atividades");
  }

  listarPage() {
    return http.get("/atividades/page");
  }

  listarAtividadesPage() {
    return http.get("/atividades/pages");
  }

  listarPorDescricao(descricao) {
    return http.get(`/atividades/descricao?descricao=${descricao}`);
  }

  listarPorId(id) {
    return http.get(`/atividades/${id}`);
  }
}

export default new AtividadeService();
