<template>
  <v-container>
    <p id="texto-iniciar-sesion">REGISTRARSE</p>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" lg="12">
            <v-text-field
              class="mt-10"
              label="Nombres"
              required
              :rules="rules.name"
              v-model="nombre_usuario"
            ></v-text-field>

            <v-text-field
              class="mt-10"
              label="Apellidos"
              :rules="rules.last_name"
              v-model="apellidos"
              required
            ></v-text-field>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                class="mt-10"
                label="Correo Electronico"
                :rules="rules.mail"
                :error-messages="errors"
                v-model="correo"
                required
              ></v-text-field>
            </validation-provider>

            <v-text-field
              class="mt-10"
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="rules.password"
              :type="show1 ? 'text' : 'password'"
              label="Digita tu Contraseña"
              name="input-10-1"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-text-field
              class="mt-10"
              name="input-10-2"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="rules.password_confirm"
              :type="show2 ? 'text' : 'password'"
              label="Confirma tu contraseña"
              v-model="password_confirm"
              counter
              @click:append="show2 = !show2"
            ></v-text-field>

            <v-radio-group v-model="active" row>
              <v-radio name="active" label="Soy Agricultor" value="Soy Agricultor"></v-radio>
              <v-radio name="active" label="Soy proveedor" value="Soy proveedor"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <v-btn
          depressed
          elevation="2"
          raised
          color="green accent-3"
          @click="guardar()"
        >
          Registrarse</v-btn
        >

        <v-divider></v-divider>
        <v-container id="contedor-registrese">
          <router-link to="/login">¡TIENES UNA CUENTA!</router-link>
        </v-container>
      </v-container>
    </v-form>

    <Succesful :mensaje="Succesful" :snackbar="Succesfulshow"> </Succesful>
    <Error :mensaje="error" :snackbar="errorfull"> </Error>
  </v-container>
</template>

<script>
import { insertUser } from "../services/users.services";
import { email } from "vee-validate/dist/rules";
import { extend, ValidationProvider, setInteractionMode } from "vee-validate";
import Succesful from "../components/Succesful.vue";
import Error from "../components/Error.vue";

setInteractionMode("eager");

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    Error,
    Succesful,
  },
  created() {
    this.$store.commit("SET_LAYOUT", "Interfaz_default");
  },
  data() {
    const defaultForm = Object.freeze({
      code: "",
      nombre_usuario: "",
      apellidos: "",
      correo: "",
      password: "",
      confirm_password: "",
      active: null,
    });
    return {
      code: "",
      nombre_usuario: "",
      apellidos: "",
      correo: "",
      password: "",
      confirm_password: "",
      active: null,
      Succesful: "",
      Succesfulshow: "",
      error: "",
      errorfull: "",
      users: [],
      show1: false,
      show2: false,
      form: Object.assign({}, defaultForm),
      
      rules: {
        last_name: [
          (val) => (val || "").length > 0 || "Este campo es obligatorio",
        ],
        name: [(val) => (val || "").length > 0 || "Este Campo es obligatorio"],
        mail: [(val) => (val || "").length > 0 || "Es necesario un correo"],
        password: [(val) => (val || "").length >= 8 || "Minimo 8 caracteres"],
        password_confirm: [
          (val) => (val || "").length >= 8 || "Este campo no puede estar vacio",
        ],
      },
    };
  },
  methods: {
    guardar() {
    /* if (
        this.nombre_usuario==undefined||this.nombre_usuario=="" ||
        this.apellidos==undefined || this.apellidos=="" ||
        this.correo==undefined ||this.correo=="" ||
        this.password==undefined || this.password=="" ||
        this.confirm_password==undefined ||this.confirm_password=="" 
      ) {
        this.MensajeError("los campos deben estar completos");
        return;
      }*/

       const user = {
        nombre_usuario: this.nombre_usuario,
        apellidos: this.apellidos,
        correo: this.correo,
        password: this.password,
        confirm_password: this.password,
        active: this.active,
      };
     
      console.log(user);
      if (this.password.trim() != this.confirm_password.trim()) {
        insertUser(user)
          .then((response) => {
            console.log(response);

            this.MensajeAgregadoCorrectamente(
              "se ha registrado exisotosamente"
            );
          })
          .catch((err) => console.error(err));
      } else {
        this.MensajeError("las contraseñas no coinciden");
      }
    },

    MensajeError(mensaje) {
      this.error = mensaje;
      this.errorfull = true;
    },

    MensajeAgregadoCorrectamente(mensaje) {
      this.Succesful = mensaje;
      this.Succesfulshow = true;
    },
  },
};
</script>

<style>
.container {
  max-width: 600px;
  text-align: center;
  margin-top: 20px;
}

.container--fluid {
  border: 2px solid rgb(214, 213, 213);
  margin-top: 100px;
  border-radius: 4px;
}

div.v-input__control {
  margin-top: 50px;
}

.v-btn {
  margin-top: 50px;
  width: 200px;
}
.v-application .mt-10 {
  margin-top: 10px !important;
}

.v-btn:not(.v-btn--round).v-size--default {
  height: 50px;
}

p {
  font-size: 15px;
  display: inline;
}
.v-application p {
  margin-bottom: 0px;
  margin-top: 30px;
}

hr {
  margin-top: 40px;
}

#texto-iniciar-sesion {
  font-size: 30px;
  color: #00c853;
}
</style>
