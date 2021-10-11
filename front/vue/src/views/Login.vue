<template>
   <v-container>
     <p id="texto-iniciar-sesion">INICIAR SECCION</p>
   <v-form>
     <v-container>
      <v-row>
      <v-col 
      cols="12"
        sm="12"
        lg="12"
        
      >

     <v-text-field class="mt-10"
            label="Correo Electronico"
          ></v-text-field>
  

      
       <v-text-field mt-20
            v-model="password"
            label="Contraseña"
          ></v-text-field>
      </v-col>
      </v-row>
  
<v-btn
  depressed
  elevation="2"
  raised
  color = "green accent-3"

> INGRESAR</v-btn>

<v-divider></v-divider>
  <v-container id="contedor-registrese">
  <p>¿No tienes cuenta?</p><router-link to="/register"> Regitrate</router-link>
  </v-container>
     </v-container>
   </v-form>
   </v-container>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "Interfaz_default");
  },
  
  methods :{

    GoRegister(){

    }
  }

};
</script>

<style>
 .container {
  max-width: 600px;
  text-align: center;
  margin-top: 20px ;

}

.container--fluid{
    border: 4px solid rgb(233, 233, 233);
    margin-top: 200px;
    border-radius: 4px ;
}

div.v-input__control{

  margin-top: 50px;
}

.v-btn{
  margin-top: 50px;
  width: 200px;


}
.v-application .mt-10{
  margin-top: 10px !important;
}

.v-btn:not(.v-btn--round).v-size--default{
  height: 50px;
}

p{
  font-size: 15px;
  display: inline;

}
.v-application p{
  margin-bottom: 0px;
  margin-top: 30px;
}

hr{
  margin-top: 40px;
}

#texto-iniciar-sesion{
  font-size: 30px;
  color: #00C853;
}

</style>
