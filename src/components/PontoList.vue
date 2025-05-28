<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Pesquisar por c'odigo do consultor"
          v-model="idConsultor"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchNome"
          >
            Pesquisar
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de Pontos</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(ponto, index) in pontos"
          :key="index"
          @click="
            setActivePonto(ponto, index);
            active;
          "
        >
          {{ ponto.diaPonto }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllPontos">
        Excluir Todos
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPonto">
        <h4>Pontos</h4>
        <div>
          <label><strong>Data:</strong></label>
          {{ currentPonto.dataPonto }}
        </div>
        <div>
          <label><strong>Dia:</strong></label>
          {{ currentPonto.diaPonto }}
        </div>
        <div>
          <label><strong>Total horas:</strong></label>
          {{ currentPonto.totalHoraPonto }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentPonto.statusPonto }}
        </div>
        <div>
          <label><strong>Ticket:</strong></label>
          {{ currentPonto.ticketPonto }}
        </div>
        <div>
          <label><strong>Atividade:</strong></label>
          {{ currentPonto.atividadePonto }}
        </div>
        <div>
          <label><strong>Consultor:</strong></label>
          {{ currentPonto.consultor }}
        </div>
        <div>
          <label><strong>Cliente:</strong></label>
          {{ currentPonto.cliente }}
        </div>
        <router-link
          :to="'/pontos/' + currentPonto.idPonto"
          class="badge badge-warning"
          >Edita</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Escolha um consultor.</p>
      </div>
    </div>
  </div>
</template>
<script>
import PontoService from "../services/PontoService";

export default {
  name: "pontos-list",
  data() {
    return {
      pontos: [],
      currentPonto: null,
      currentIndex: -1,
      nomeConsultor: "",
    };
  },
  methods: {
    retrievePontos() {
      PontoService.listar()
        .then((response) => {
          this.pontos = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrievePontos();
      this.currentPonto = null;
      this.currentIndex = -1;
    },

    setActivePonto(ponto, index) {
      this.currentPonto = ponto;
      this.currentIndex = ponto ? index : -1;
    },

    removeAllPontos() {
      PontoService.excluirTodas()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchNome() {
      PontoService.listarPorNome(this.nomeConsultor)
        .then((response) => {
          this.pontos = response.data;
          this.setActivePonto(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievePontos();
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
