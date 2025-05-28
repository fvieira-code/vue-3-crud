<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="razaoSocialCliente">Razão Social</label>
        <input
          type="text"
          class="form-control"
          id="razaoSocialCliente"
          required
          v-model="cliente.razaoSocialCliente"
          name="razaoSocialCliente"
        />
      </div>
      <div class="form-group">
        <label for="nomeFantasiaCliente">Nome Fantasial</label>
        <input
          type="text"
          class="form-control"
          id="nomeFantasiaCliente"
          required
          v-model="cliente.nomeFantasiaCliente"
          name="nomeFantasiaCliente"
        />
      </div>
      <div class="form-group">
        <label for="cnpjCliente">CNPJ</label>
        <input
          type="text"
          class="form-control"
          id="cnpjCliente"
          required
          v-model="cliente.cnpjCliente"
          name="cnpjCliente"
        />
      </div>
      <div class="form-group">
        <label for="enderecoCliente">Endereço</label>
        <input
          type="text"
          class="form-control"
          id="enderecoCliente"
          required
          v-model="cliente.enderecoCliente"
          name="enderecoCliente"
        />
      </div>
      <button @click="salvar" class="btn btn-success">Salvar</button>
    </div>
    <div v-else>
      <h4>Cliente salvo com sucesso !</h4>
      <button class="btn btn-success" @click="newCliente">Criar</button>
    </div>
  </div>
</template>
<script>
import ClienteService from "../services/ClienteService";

export default {
  name: "cliente-add",
  data() {
    return {
      cliente: {
        id: null,
        razaoSocialCliente: "",
        nomeFantasiaCliente: "",
        cnpjCliente: "",
        enderecoCliente: "",
      },
      submitted: false,
    };
  },
  methods: {
    salvar() {
      var data = {
        razaoSocialCliente: this.cliente.razaoSocialCliente,
        nomeFantasiaCliente: this.cliente.nomeFantasiaCliente,
        cnpjCliente: this.cliente.cnpjCliente,
        enderecoCliente: this.cliente.enderecoCliente,
      };

      ClienteService.salvar(data)
        .then((response) => {
          this.cliente.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newCliente() {
      this.submitted = false;
      this.cliente = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
