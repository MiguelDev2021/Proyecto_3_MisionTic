<template>

  <v-container class="contenedor-all">
  <v-container id="contenedor_p">
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  </v-container>
  <v-container class="contenedor-descripcion">  
  <h1>Nombre del producto</h1>

   <h2>cultivado por :</h2> <v-chip
      class="ma-2"
      color="primary"
      label
    >
      <v-icon left>
        mdi-account-circle-outline
      </v-icon>
      John Leider Pedraza
    </v-chip>

    <h3>Cantidad Disponible:</h3>
    <p> 4000 Libras </p>

    <h3>Fecha de Entrega:</h3>
    <p> 10 de Diciembre 2020 </p> 

    <h3> Categoria de cultivo: </h3>
     <v-chip
      class="ma-2"
      color="#64FFDA"
      label
    >
      <v-icon left>
        mdi-flare
      </v-icon>
        Categoria
    </v-chip>

    <v-divider></v-divider>

      <v-btn
  elevation="2"
  x-large
  color = "green accent-3"
> ¡RESERVAR YA!</v-btn>

 

  </v-container>
    <v-container>

  </v-container>
  </v-container>

 
  

</template>

<script>
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "Interfaz_ventas_categorias");
  },

  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style>

h2{
  margin-top: 20px;

}

h3{
  margin-top: 20px;

}

div.v-window.v-item-group.theme--dark.v-carousel{
  width: 700px;
  height: 400px;



}



@media (min-width: 960px){
.container {
    display: flex;
}
}




.contenedor-descripcion{

  display: block  ;
  margin-top: 20px;

}

.v-application .ma-2{
  margin: 10px 0px 0px 0px !important;

}

hr{

  margin-top: 30px;
  margin-bottom:20PX;
}

</style>
