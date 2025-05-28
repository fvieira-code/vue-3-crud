<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nomeConsultor">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nomeConsultor"
          required
          v-model="consultor.nomeConsultor"
          name="nomeConsultor"
        />
      </div>
      <div class="form-group">
        <label for="cpfConsultor">CPF</label>
        <input
          type="text"
          class="form-control"
          id="cpfConsultor"
          required
          v-model="consultor.cpfConsultor"
          name="cpfConsultor"
        />
      </div>
      <div class="form-group">
        <label for="rgConsultor">RG</label>
        <input
          type="text"
          class="form-control"
          id="rgConsultor"
          required
          v-model="consultor.rgConsultor"
          name="rgConsultor"
        />
      </div>
      <div class="form-group">
        <label for="enderecoConsultor">Endereço</label>
        <input
          type="text"
          class="form-control"
          id="enderecoConsultor"
          required
          v-model="consultor.enderecoConsultor"
          name="enderecoConsultor"
        />
      </div>
      <button @click="salvar" class="btn btn-success">Salvar</button>
    </div>
    <div v-else>
      <h4>Consultor salvo com sucesso !</h4>
      <button class="btn btn-success" @click="newConsultor">Criar</button>
    </div>
  </div>
</template>
<script>
import ConsultorService from "../services/ConsultorService";

export default {
  name: "consultor-add",
  data() {
    return {
      consultor: {
        id: null,
        nomeConsultor: "",
        cpfConsultor: "",
        rgConsultor: "",
        enderecoConsultor: "",
      },
      submitted: false,
    };
  },
  methods: {
    salvar() {
      var data = {
        nomeConsultor: this.consultor.nomeConsultor,
        cpfConsultor: this.consultor.cpfConsultor,
        rgConsultor: this.consultor.rgConsultor,
        enderecoConsultor: this.consultor.enderecoConsultor,
      };

      ConsultorService.salvar(data)
        .then((response) => {
          this.consultor.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newConsultor() {
      this.submitted = false;
      this.consultor = {};
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
