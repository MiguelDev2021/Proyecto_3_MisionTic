<template>
  <!-- La barra categorias-->
  <div>
    <div>
      <v-tabs fixed-tabs dark background-color="green lighten-3">
        <v-tab>Item One</v-tab>
        <v-tab>Item Two</v-tab>
        <v-tab>Item Three</v-tab>
      </v-tabs>
    </div>
    <v-container class="mt-3 px-0 py-0">
      <v-row>
        <v-col v-for="ofert in oferts" :key="ofert.name">
          <ofert :ofert="ofert"/>
        </v-col>
      </v-row>
      <v-btn
  depressed
  elevation="2"
></v-btn>
    </v-container>
  </div>
  <!-- Esta es la card para mostrar las ofertas -->
</template>

<script>
import ofert from "../components/ofert.vue";
export default {
  components: { ofert }, 
   created () {
            this.$store.commit('SET_LAYOUT', 'Interfaz_ventas_categorias')
        },
  data() {
    return {
      
      oferts : [
        { id: 1,imagen_producto: " " ,name: "Ventas Papa", descripcion : ""  , cantidad : 1000},
        { id: 1,imagen_producto: " " ,name: "Ventas Cebolla", descripcion : ""  , cantidad : 1000},
        { id: 1,imagen_producto: " " ,name: "Ventas Tomate", descripcion  :""  , cantidad : 1000},
        { id: 1,imagen_producto: " " ,name: "Ventas Cebolla", descripcion : ""  , cantidad : 1000},

      ],

      
    };
  },

};
</script>

<style>
</style>