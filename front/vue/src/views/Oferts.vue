<template>
  <!-- La barra categorias-->
  <div>
    <div>
      <v-tabs fixed-tabs dark background-color="green lighten-3">
        <v-tab>PAPA</v-tab>
        <v-tab>TOMATE</v-tab>
        <v-tab>CEBOLLA</v-tab>
      </v-tabs>
    </div>
    <v-container class="mt-3 px-0 py-0">
      <v-row>
        <v-col v-for="ofert in oferts" :key="ofert.code">
          <ofert :ofert="ofert"/>
        </v-col>
      </v-row>
     
    </v-container>
  </div>
  <!-- Esta es la card para mostrar las ofertas -->
</template>

<script>
import ofert from "../components/ofert.vue";
import { getAllOferts } from "../services/oferts.services"
export default {
  components: { ofert }, 
   created () {
            this.$store.commit('SET_LAYOUT', 'Interfaz_ventas_categorias')
        },
  data() {
    return {
      oferts : [],
   
      
    };
  },
  mounted(){
    getAllOferts()
    .then((response) =>{
      this.oferts = response.data 

    })
    .catch((err) => console.error(err));


  }
};
</script>

<style>
</style>