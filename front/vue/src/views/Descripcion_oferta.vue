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
  <h1>{{nombre_oferta}}</h1>

   <h2>cultivado por :</h2> <v-chip
      class="ma-2"
      color="primary"
      label
    >
      <v-icon left>
        mdi-account-circle-outline
      </v-icon>
        {{cultivador}}
    </v-chip>

    <h3>Cantidad Disponible:</h3>
    <p> {{cantidad}} Libras </p>

    <h3>Fecha de Entrega:</h3>
    <p> {{fecha}}</p> 

    <h3> Categoria de cultivo: </h3>
     <v-chip
      class="ma-2"
      color="#64FFDA"
 
    >
      <v-icon left>
        mdi-flare
      </v-icon>
       {{categoria}}
    </v-chip>

    <v-divider></v-divider>

      <v-btn
  elevation="2"
  x-large
  color = "green accent-3"
> ¡RESERVAR YA!</v-btn>



  </v-container>
  </v-container>

 
  

</template>

<script>
  import { getOfert } from "../services/oferts.services"

export default {
  created() {
    this.$store.commit("SET_LAYOUT", "Interfaz_ventas_categorias"); 
    console.log("el codigo a investigar "  + this.$route.params.code)
    const code = this.$route.params.code ;
    if( code != undefined){
      getOfert(code)
      .then((response) => {
        const ofert = response.data;

        this.nombre_oferta = ofert.nombre_oferta;
        this.cantidad = ofert.cantidad;
        this.fecha = ofert.fecha;
        this.categoria = ofert.Categoria;

      })

    }
  },

  data() {
    return {

      nombre_oferta : "",
      cultivador : "",
      cantidad : "",
      fecha : "",
      categoria: "",




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

h1{
  text-align: left;
  font-size: 2em;
  color: black;
  font-family: "Roboto", sans-serif;

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
