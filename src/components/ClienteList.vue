<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Pesquisar por razão social"
          v-model="razaoSocialCliente"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchRazaoSocial"
          >
            Pesquisar
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de Clientes</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(cliente, index) in clientes"
          :key="index"
          @click="
            setActiveCliente(cliente, index);
            active;
          "
        >
          {{ cliente.razaoSocialCliente }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllClientes">
        Excluir Todos
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentCliente">
        <h4>Clientes</h4>
        <div>
          <label><strong>Razão Social:</strong></label>
          {{ currentCliente.razaoSocialCliente }}
        </div>
        <div>
          <label><strong>Nome Fantasia:</strong></label>
          {{ currentCliente.nomeFantasiaCliente }}
        </div>
        <div>
          <label><strong>CNPJ:</strong></label>
          {{ currentCliente.cnpjCliente }}
        </div>
        <div>
          <label><strong>Endereço:</strong></label>
          {{ currentCliente.enderecoCliente }}
        </div>
        <router-link
          :to="'/clientes/' + currentCliente.idCliente"
          class="badge badge-warning"
          >Edita</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Escolha um cliente.</p>
      </div>
    </div>
  </div>
</template>
<script>
import ClienteService from "../services/ClienteService";

export default {
  name: "clientes-list",
  data() {
    return {
      clientes: [],
      currentCliente: null,
      currentIndex: -1,
      razaoSocialCliente: "",
    };
  },
  methods: {
    retrieveClientes() {
      ClienteService.listar()
        .then((response) => {
          this.clientes = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveClientes();
      this.currentCliente = null;
      this.currentIndex = -1;
    },

    setActiveCliente(cliente, index) {
      this.currentCliente = cliente;
      this.currentIndex = cliente ? index : -1;
    },

    removeAllClientes() {
      ClienteService.excluirTodas()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchRazaoSocial() {
      ClienteService.listarPorRazaoSocial(this.razaoSocialCliente)
        .then((response) => {
          this.clientes = response.data;
          this.setActiveCliente(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveClientes();
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
