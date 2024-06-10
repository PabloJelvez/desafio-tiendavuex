<template>
  <div class="juegos">
    <h1 class="text-center">Listado juegos</h1>

    <section class="container p-5 text-center" >
      <table class="table p-5 table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nombre</th>
            <th scope="col">Stock</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(juego, index) in listaJuegos" :key="index" >
            <th scope="row">{{ juego.codigo }}</th>
            <td>{{ juego.nombre }}</td>
            <td :style="{ color: juego.stock == 0 ? 'red' : 'black' }" >{{ juego.stock }}</td>
            <td>{{ juego.precio }}</td>
            <td>
              <div>
                <button class="btn btn-success btn-sm mx-1" @click="addStock(juego.codigo)">
                  <i class="fa-solid fa-plus"></i>
                </button>
                <button class="btn btn-danger btn-sm mx-1" @click="quitarStock(juego.codigo)" :disabled="juego.stock == 0"  >
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "JuegosView",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["cargarJuegos", "addStock", "removeStock"]),
    sumarStock(id) {
      this.$store.dispatch("addStock", id);
    },
    quitarStock(id) {
      this.$store.dispatch("removeStock", id)
    }
  },
  computed: {
    ...mapState(["listaJuegos"]),
  },
  created() {
    this.cargarJuegos();
  }
};
</script>
