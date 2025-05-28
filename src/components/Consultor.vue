<template>
  <div v-if="currentConsultor" class="edit-form">
    <h4>Consultor</h4>
    <form>
      <div class="form-group">
        <label for="nomeConsultor">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nomeConsultor"
          v-model="currentConsultor.nomeConsultor"
        />
      </div>
      <div class="form-group">
        <label for="cpfConsultor">CPF</label>
        <input
          type="text"
          class="form-control"
          id="cpfConsultor"
          v-model="currentConsultor.cpfConsultor"
        />
      </div>
      <div class="form-group">
        <label for="rgConsultor">RG</label>
        <input
          type="text"
          class="form-control"
          id="rgConsultor"
          v-model="currentConsultor.rgConsultor"
        />
      </div>
      <div class="form-group">
        <label for="enderecoConsultor">Endereço</label>
        <input
          type="text"
          class="form-control"
          id="enderecoConsultor"
          v-model="currentConsultor.enderecoConsultor"
        />
      </div>
    </form>
    <button class="badge badge-danger mr-2" @click="deleteConsultor">
      Excluir
    </button>
    <button type="submit" class="badge badge-success" @click="atualizar()">
      Alterar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Selecione o consultor</p>
  </div>
</template>
<script>
import ConsultorService from "../services/ConsultorService";

export default {
  name: "consultor",
  data() {
    return {
      currentConsultor: null,
      message: "",
    };
  },
  methods: {
    listarPorId(id) {
      ConsultorService.listarPorId(id)
        .then((response) => {
          this.currentConsultor = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    atualizar() {
      ConsultorService.atualizar(
        this.currentConsultor.idConsultor,
        this.currentConsultor
      )
        .then((response) => {
          console.log(response.data);
          this.message = "O consultor foi atualizado com sucesso !";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    excluir() {
      ConsultorService.excluir(
        this.currentConsultor.idConsultor,
        this.currentConsultor
      )
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "consultores" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.listarPorId(this.$route.params.idConsultor);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
