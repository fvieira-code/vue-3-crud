<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="descricao">Descricao</label>
        <input
          type="text"
          class="form-control"
          id="descricao"
          required
          v-model="atividade.descricaoAtividade"
          name="descricao"
        />
      </div>

      <div class="form-group">
        <label for="ticket">Ticket</label>
        <input
          class="form-control"
          id="ticket"
          required
          v-model="atividade.ticketAtividade"
          name="ticket"
        />
      </div>

      <button @click="saveAtividade" class="btn btn-success">Salvar</button>
    </div>

    <div v-else>
      <h4>Atividade salva com sucesso !</h4>
      <button class="btn btn-success" @click="newAtividade">Criar</button>
    </div>
  </div>
</template>

<script>
import AtividadeService from "../services/AtividadeService";

export default {
  name: "atividade-add",
  data() {
    return {
      atividade: {
        id: null,
        descricaoAtividade: "",
        ticketAtividade: "",
        statusAtividade: "ATIVO",
      },
      submitted: false,
    };
  },
  methods: {
    salvar() {
      var data = {
        descricaoAtividade: this.atividade.descricaoAtividade,
        ticketAtividade: this.atividade.ticketAtividade,
        statusAtividade: this.atividade.statusAtividade,
      };

      AtividadeService.create(data)
        .then((response) => {
          this.atividade.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newAtividade() {
      this.submitted = false;
      this.atividade = {};
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
