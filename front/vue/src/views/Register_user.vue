<template>
   <v-container>
     <p id="texto-iniciar-sesion">REGISTRARSE</p>
   <v-form>
     <v-container>
      <v-row>
      <v-col 
      cols="12"
        sm="12"
        lg="12"
        
      >

       <v-text-field class="mt-10"
            label="Nombres"
             required
             :rules="rules.name"
          ></v-text-field> 

          <v-text-field class="mt-10"
            label="Apellidos"
             :rules="rules.last_name"
             required
          ></v-text-field>   

     <v-text-field class="mt-10"
            label="Correo Electronico"
            :rules="rules.mail"
             required
          ></v-text-field>
  

      
       <v-text-field class="mt-10"
             v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules = rules.password
            :type="show1 ? 'text' : 'password'"
            label="Digita tu Contraseña"
             name="input-10-1"
          
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-text-field class="mt-10"
               name="input-10-2"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules= rules.password_confirm
            :type="show2 ? 'text' : 'password'"
            label="Confirma tu contraseña"
            
            counter
            @click:append="show2 = !show2"
            
          ></v-text-field>

             <v-radio-group 
      v-model="row"
      row
    >
     
     <v-radio
        label="Soy Agricultor"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="Soy proveedor"
        value="radio-2"
      ></v-radio>
    </v-radio-group>
      </v-col>
      </v-row>
      
     

  
<v-btn
  depressed
  elevation="2"
  raised
  color = "green accent-3"

> Registrarse</v-btn>

<v-divider></v-divider>
  <v-container id="contedor-registrese">
 <router-link to="/login">¡TIENES UNA CUENTA!</router-link>
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
  data () {
      const defaultForm = Object.freeze({
        first: '',
        last: '',
        bio: '',
        favoriteAnimal: '',
        age: null,
        terms: false,
      })
  return {
        show1: false,
        show2: false,
        form: Object.assign({}, defaultForm),
        rules: {
         
          last_name: [val => (val || '').length > 0 || 'Este campo es obligatorio'],
          name: [val => (val || '').length > 0 || 'Este Campo es obligatorio'],
          mail: [val => (val || '').length > 0 || 'Es necesario un correo'],
          password: [val => (val || '').length >= 8 || 'Minimo 8 caracteres'],
          password_confirm: [val => (val || '').length > 8 || 'Este campo no puede estar vacio']
        },
  }

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
    border: 1px solid rgb(233, 233, 233);
    margin-top: 100px;
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
