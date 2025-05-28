<template>
  <JqxGrid
    :width="850"
    :source="dataAdapter"
    :columns="columns"
    :pageable="true"
  />
</template>

<script>
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
import jqx from "jqwidgets-scripts/jqwidgets/jqxcore.js";
import "jqwidgets-scripts/jqwidgets/jqxdata.js";

export default {
  name: "pontos-list",
  components: {
    JqxGrid,
  },
  data: function() {
    return {
      source: {
        localdata: [
          { id: "1", name: "Product 1", price: 25 },
          { id: "2", name: "Product 2", price: 30 },
          { id: "3", name: "Product 3", price: 45 },
          { id: "4", name: "Product 4", price: 20 },
        ],
        datafields: [
          { name: "id", type: "string" },
          { name: "name", type: "string" },
          { name: "price", type: "number" },
        ],
        datatype: "array",
      },
      columns: [
        { text: "ID", datafield: "id", width: 50 },
        { text: "Name", datafield: "name", width: 200 },
        { text: "Price", datafield: "price", cellsformat: "c2", width: 100 },
      ],
    };
  },
  beforeCreate: function() {
    this.dataAdapter = new jqx.dataAdapter(this.source);
  },
};
</script>
