<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Pesquisar por descrição"
          v-model="descricaoAtividade"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchDescricao"
          >
            Pesquisar
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <!-- <div class="container"> -->
      <h4>Lista de Atividades</h4>
      <!-- <table class="table table-hover"> -->
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(atividade, index) in atividades"
          :key="index"
          @click="
            setActiveAtividade(atividade, index);
            active;
          "
        >
          {{ atividade.descricaoAtividade }}
        </li>
        <!-- </table> -->
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllAtividades">
        Excluir Todas
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentAtividade">
        <h4>Atividade</h4>
        <div>
          <label><strong>Descrição:</strong></label>
          {{ currentAtividade.descricaoAtividade }}
        </div>
        <div>
          <label><strong>Ticket:</strong></label>
          {{ currentAtividade.ticketAtividade }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentAtividade.statusAtividade }}
        </div>
        <router-link
          :to="'/atividades/' + currentAtividade.idAtividade"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Escolha uma atividade</p>
      </div>
    </div>
  </div>
</template>

<script>
import AtividadeService from "../services/AtividadeService";

export default {
  name: "atividades-list",
  data() {
    return {
      atividades: [],
      currentAtividade: null,
      currentIndex: -1,
      descricao_atividade: "",
    };
  },
  methods: {
    retrieveAtividades() {
      AtividadeService.listar()
        .then((response) => {
          this.atividades = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveAtividades();
      this.currentAtividade = null;
      this.currentIndex = -1;
    },

    setActiveAtividade(atividade, index) {
      this.currentAtividade = atividade;
      this.currentIndex = atividade ? index : -1;
    },

    removeAllAtividades() {
      AtividadeService.excluirTodas()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchDescricao() {
      AtividadeService.listarPorDescricao(this.descricaoAtividade)
        .then((response) => {
          this.atividades = response.data;
          this.setActiveAtividade(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveAtividades();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
