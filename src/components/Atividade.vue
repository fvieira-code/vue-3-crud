<template>
  <div v-if="currentAtividade" class="edit-form">
    <h4>Atividade</h4>
    <form>
      <div class="form-group">
        <label for="descricaoAtividade">Descrição</label>
        <input
          type="text"
          class="form-control"
          id="descricaoAtividade"
          v-model="currentAtividade.descricaoAtividade"
        />
      </div>
      <div class="form-group">
        <label for="ticketAtividade">Ticket</label>
        <input
          type="text"
          class="form-control"
          id="ticketAtividade"
          v-model="currentAtividade.ticketAtividade"
        />
      </div>
      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentAtividade.statusAtividade }}
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentAtividade.statusAtividade == 'ATIVO'"
      @click="atualizarStatus('INATIVO')"
    >
      Desativar
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="atualizarStatus('ATIVO')"
    >
      Ativar
    </button>

    <button class="badge badge-danger mr-2" @click="deleteAtividade">
      Excluir
    </button>

    <button type="submit" class="badge badge-success" @click="atualizar()">
      Alterar
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Selecione a atividade</p>
  </div>
</template>

<script>
import AtividadeService from "../services/AtividadeService";

export default {
  name: "atividade",
  data() {
    return {
      currentAtividade: null,
      message: "",
    };
  },
  methods: {
    listarPorId(id) {
      AtividadeService.listarPorId(id)
        .then((response) => {
          this.currentAtividade = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    atualizarStatus(status) {
      var data = {
        idAtividade: this.currentAtividade.idAtividade,
        descricaoAtividade: this.currentAtividade.descricaoAtividade,
        ticketAtividade: this.currentAtividade.ticketAtividade,
        statusAtividade: status,
      };

      AtividadeService.atualizar(this.currentAtividade.idAtividade, data)
        .then((response) => {
          console.log(response.data);
          this.currentAtividade.statusAtividade = status;
          this.message = "O status foi atualizado com sucesso!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    atualizar() {
      AtividadeService.atualizar(
        this.currentAtividade.idAtividade,
        this.currentAtividade
      )
        .then((response) => {
          console.log(response.data);
          this.message = "A atividade foi atualizada com sucesso !";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    excluir() {
      AtividadeService.excluir(
        this.currentAtividade.idAtividade,
        this.currentAtividade
      )
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "atividades" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.listarPorId(this.$route.params.idAtividade);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
