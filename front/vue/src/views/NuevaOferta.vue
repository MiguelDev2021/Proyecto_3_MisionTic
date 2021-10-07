<template>
  <v-container>
    <p>REGISTRAR NUEVA OFERTA</p>
    <v-form>
      <v-container>
        <v-text-field
          v-model="title"
          :rules="[rules.required]"
          hint="Este campo es obligatorio"
          label="Nombre de Oferta"
        ></v-text-field>

        <v-text-field
          v-model="title"
          counter="25"
          hint="Debes estar en formato day/month/year"
          label="Fecha de cosecha"
        ></v-text-field>

        <v-text-field
          v-model="title"
          :rules="[rules.number]"
          counter="25"
          hint="debe ser solo numeros"
          label="cantidad de cosecha"
        ></v-text-field>


          <v-textarea
            name="input-7-1"
            filled
            label="Label"
            auto-grow
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          ></v-textarea>
        <v-autocomplete
             v-model="value"
            :items="items"
            dense
            filled
            label="Elige una Categoria"
          ></v-autocomplete>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_LAYOUT", "Interfaz_Proveedor");
  },

  data: () => ({
    items: ['Papa', 'Tomate', 'Cebolla'],  
    rules: {
      required: (value) => !!value || "Required.",
      number: (value) =>
        value.trim().Number() <= "NaN" || "Debe contener solo numeros",
    },
  }),
};
</script>

<style>
div.v-input__control {
  margin-top: 50px;
}
</style>