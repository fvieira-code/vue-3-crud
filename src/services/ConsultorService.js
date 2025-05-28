import http from "../http-common";

class ConsultorService {
  salvar(consultor) {
    return http.post("/consultores", consultor);
  }

  atualizar(id, consultor) {
    return http.put(`/consultores/${id}`, consultor);
  }

  excluir(consultor) {
    return http.delete("/consultores", consultor);
  }

  excluirTodas() {
    return http.delete(`/consultores`);
  }

  listar() {
    return http.get("/consultores");
  }

  listarPage() {
    return http.get("/consultores/page");
  }

  listarConsultoresPage() {
    return http.get("/consultores/pages");
  }

  listarPorDescricao(descricao) {
    return http.get(`/consultores/descricao?descricao=${descricao}`);
  }

  listarPorId(id) {
    return http.get(`/consultores/${id}`);
  }
}

export default new ConsultorService();
