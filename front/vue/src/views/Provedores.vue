<template>
<div>
 <v-container><p>TUS OFERTAS</p></v-container>
  <v-container class="mt-3 px-0 py-0">
      <v-row>
        <v-col v-for="ofert in oferts" :key="ofert.name">
          <ofert :ofert="ofert"/>
        </v-col>
      </v-row>
  
    </v-container>
</div>
</template>

<script>
import ofert from "../components/ofert.vue";
export default {
    components: { ofert }, 
  created () {
            this.$store.commit('SET_LAYOUT', 'Interfaz_Proveedor')
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
}
</script>

<style>
.container{
    text-align: center;
}
</style>