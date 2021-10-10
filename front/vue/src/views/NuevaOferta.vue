<template>
  <v-container>
    <div class="formulario-registro-oferta">
      <v-form class="formulario">
        <p>REGISTRAR NUEVA OFERTA</p>
        <v-container>

          <v-text-field
            v-model="code"
            :rules="[rules.required]"
            hint="Este campo es obligatorio"
            label="Codgio oferta"
          ></v-text-field>


          <v-text-field
            v-model="nombre_oferta"
            :rules="[rules.required]"
            hint="Este campo es obligatorio"
            label="Nombre de Oferta"
          ></v-text-field>

          <v-text-field
            v-model="fecha"
            counter="25"
            hint="Debes estar en formato day/month/year"
            label="Fecha de cosecha"
          ></v-text-field>

          <v-text-field
            v-model="cantidad"
            :rules="[rules.number]"
            counter="25"
            hint="debe ser solo numeros"
            label="cantidad de cosecha"
          ></v-text-field>

          <v-textarea
            v-model="informacion"
            name="input-7-1"
            filled
            label="Descripcion de la oferta"
            auto-grow
            value="Escribe una breve descripción de la oferta"
          ></v-textarea>
          <v-autocomplete
            v-model="Categoria"
            :items="items"
            dense
            filled
            label="Elige una Categoria"
          ></v-autocomplete>
          
          <div class="boton-oferta">
          <v-btn elevation="2" x-large color= "green" class="boton-oferta" @click="guardar()"> REGISTRAR OFERTA </v-btn>
          </div>
        </v-container>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import { insertOfert } from "../services/oferts.services" 
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "Interfaz_Proveedor");
  },

  data () {
   
    return{
    code : 0,
    nombre_oferta : "",
    cantidad : 0, 
    fecha  : "",
    informacion : "",
    Categoria : "",

    items : ["Papa", "Tomate", "Cebolla"],
    rules: {
      required: (value) => !!value || "Required.",
      number: (value) =>
        value.trim().Number() <= "NaN" || "Debe contener solo numeros",
    },
    } 
  },
   
   
  
  methods: {
    guardar(){
      const ofert = {
        code : this.code,
        nombre_oferta: this.nombre_oferta,
        cantidad:  this.cantidad,
        fecha: this.fecha,
        informacion: this.informacion,
        Categoria:  this.Categoria,

      }
    insertOfert(ofert)
    .then((response) => {
      console.log("se ha creao el producto : " + response);
    }).catch((err) => console.error(err))
    }

  }

};
</script>

<style>
div.v-input__control {
  margin-top: 50px;
}
p{
  margin-top: 50px ;
  font-size: 20px;
}
.boton-oferta{
  margin-top: 30px;
  margin-bottom: 40px ;
}
.formulario-registro-oferta {
  max-width: 700px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: 2px solid rgb(218, 217, 217);
  border-radius: 6px;
}

</style>