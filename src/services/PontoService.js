import http from "../http-common";

class PontoService {
  salvar(ponto) {
    return http.post("/pontos", ponto);
  }

  atualizar(id, ponto) {
    return http.put(`/pontos/${id}`, ponto);
  }

  excluir(ponto) {
    return http.delete("/pontos", ponto);
  }

  excluirTodas() {
    return http.delete(`/pontos`);
  }

  listar() {
    return http.get("/pontos");
  }

  listarPage() {
    return http.get("/pontos/page");
  }

  listarConsultoresPage() {
    return http.get("/pontos/pages");
  }

  // listarPorDescricao(descricao) {
  //   return http.get(`/consultores/descricao?descricao=${descricao}`);
  // }

  listarPorId(id) {
    return http.get(`/pontos/${id}`);
  }
}

export default new PontoService();
