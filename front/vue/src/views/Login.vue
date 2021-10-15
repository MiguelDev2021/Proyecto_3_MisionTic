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
            v-model="correo"
            :rules ="rules.mail"
          ></v-text-field>
  

      
       <v-text-field mt-20
            v-model="password"
            label="Contraseña"
            :rules ="rules.password"
          ></v-text-field>
      </v-col>
      </v-row>
  
<v-btn
  depressed
  elevation="2"
  raised
  color = "green accent-3"
  @click="join()"
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


import { getUser } from "../services/users.services"
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "Interfaz_default");
  },
  data() {
    return{
      correo: "",
      password: "",
    
    rules : { 
      mail: [(val) => (val || "").length > 0 || "Es necesario un correo"],
      password: [(val) => (val || "").length >= 0 || "Este campo no debe de estar vacio"],
        
        }
    }
  },
  
  methods: {

    join(){

      const correo = this.correo;
      const password =  this.password;
      const roles = ["Soy proveedor", "Soy Agricultor"];
      console.log(correo + password)

       if( !!correo  && !!password){
      getUser(correo.trim())
      .then((response) => {
        const user = response.data;
        if(user != null ){
          if(password == user.password){
            console.log(user.nombre_usuario);
            sessionStorage.setItem("nombres_usuario",user.nombre_usuario);
            sessionStorage.setItem("apellidos_usuario",user.apellidos);
            sessionStorage.setItem("correo_usuario",user.correo);

            sessionStorage.removeItem("inicio_sesion");
            
            sessionStorage.setItem("inicio_sesion", true);


            if(user.active == roles[0]){
              sessionStorage.setItem("rol",user.active);
              this.$router.push(`/proveedor`);
              this.$router.reload(`/proveedor`);
              
              
            }else{
              sessionStorage.setItem("rol",user.active);
              this.$router.push(`/oferts`);
              this.$router.go(0);
            }
            
          }else{
            console.log("la contraseña es incorrecta");
          }
        }else{
            console.log("el correo indicado no se encuentra registrado");
        }
    })


    }
  },

  }
}

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
