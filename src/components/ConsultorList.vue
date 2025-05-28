<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Pesquisar por nome"
          v-model="nomeConsultor"
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
      <h4>Lista de Consultores</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(consultor, index) in consultores"
          :key="index"
          @click="
            setActiveConsultor(consultor, index);
            active;
          "
        >
          {{ consultor.nomeConsultor }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllConsultores">
        Excluir Todos
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentConsultor">
        <h4>Consultores</h4>
        <div>
          <label><strong>Nome:</strong></label>
          {{ currentConsultor.nomeConsultor }}
        </div>
        <div>
          <label><strong>CPF:</strong></label>
          {{ currentConsultor.cpfConsultor }}
        </div>
        <div>
          <label><strong>RG:</strong></label>
          {{ currentConsultor.rgConsultor }}
        </div>
        <div>
          <label><strong>Endereço:</strong></label>
          {{ currentConsultor.enderecoConsultor }}
        </div>
        <router-link
          :to="'/consultores/' + currentConsultor.idConsultor"
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
import ConsultorService from "../services/ConsultorService";

export default {
  name: "consultores-list",
  data() {
    return {
      consultores: [],
      currentConsultor: null,
      currentIndex: -1,
      nomeConsultor: "",
    };
  },
  methods: {
    retrieveConsultores() {
      ConsultorService.listar()
        .then((response) => {
          this.consultores = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveConsultores();
      this.currentConsultor = null;
      this.currentIndex = -1;
    },

    setActiveConsultor(consultor, index) {
      this.currentConsultor = consultor;
      this.currentIndex = consultor ? index : -1;
    },

    removeAllConsultores() {
      ConsultorService.excluirTodas()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchNome() {
      ConsultorService.listarPorNome(this.nomeConsultor)
        .then((response) => {
          this.consultores = response.data;
          this.setActiveConsultor(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveConsultores();
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
