<template>
  <div v-if="currentCliente" class="edit-form">
    <h4>Cliente</h4>
    <form>
      <div class="form-group">
        <label for="razaoSocialCliente">Razão Social</label>
        <input
          type="text"
          class="form-control"
          id="razaoSocialCliente"
          v-model="currentCliente.razaoSocialCliente"
        />
      </div>
      <div class="form-group">
        <label for="nomeFantasiaCliente">Nome Fantasia</label>
        <input
          type="text"
          class="form-control"
          id="nomeFantasiaCliente"
          v-model="currentCliente.nomeFantasiaCliente"
        />
      </div>
      <div class="form-group">
        <label for="cnpjCliente">CNPJ</label>
        <input
          type="text"
          class="form-control"
          id="cnpjCliente"
          v-model="currentCliente.cnpjCliente"
        />
      </div>
      <div class="form-group">
        <label for="enderecoCliente">Endereço</label>
        <input
          type="text"
          class="form-control"
          id="enderecoCliente"
          v-model="currentCliente.enderecoCliente"
        />
      </div>
    </form>
    <button class="badge badge-danger mr-2" @click="deleteCliente">
      Excluir
    </button>
    <button type="submit" class="badge badge-success" @click="atualizar()">
      Alterar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Selecione o cliente</p>
  </div>
</template>
<script>
import ClienteService from "../services/ClienteService";

export default {
  name: "cliente-detalhe",
  data() {
    return {
      currentCliente: null,
      message: "",
    };
  },
  methods: {
    listarPorId(id) {
      ClienteService.listarPorId(id)
        .then((response) => {
          this.currentCliente = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    atualizar() {
      ClienteService.atualizar(
        this.currentCliente.idCliente,
        this.currentCliente
      )
        .then((response) => {
          console.log(response.data);
          this.message = "O cliente foi atualizado com sucesso !";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    excluir() {
      ClienteService.excluir(this.currentCliente.idCliente, this.currentCliente)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "clientes" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.listarPorId(this.$route.params.idCliente);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
