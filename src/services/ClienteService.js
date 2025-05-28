import http from "../http-common";

class ClienteService {
  salvar(cliente) {
    return http.post("/clientes", cliente);
  }

  atualizar(id, cliente) {
    return http.put(`/clientes/${id}`, cliente);
  }

  excluir(cliente) {
    return http.delete("/clientes", cliente);
  }

  excluirTodas() {
    return http.delete(`/clientes`);
  }

  listar() {
    return http.get("/clientes");
  }

  listarPage() {
    return http.get("/clientes/page");
  }

  listarClientesPage() {
    return http.get("/clientes/pages");
  }

  listarPorDescricao(descricao) {
    return http.get(`/clientes/descricao?descricao=${descricao}`);
  }

  listarPorId(id) {
    return http.get(`/clientes/${id}`);
  }
}

export default new ClienteService();
